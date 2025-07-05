# Flujo de Simulación del Sistema de Tutorías

## Resumen
El sistema de tutorías permite a estudiantes solicitar sesiones de tutoría a tutores específicos, gestionar contraofestas, y manejar el flujo completo de negociación hasta la confirmación de sesiones mediante localStorage.

## Datos del Tutor Demo

### Jorge Ramírez Silva (ID: 2)
- **Universidad**: UTEC (universityId: 1)
- **Carrera**: Ingeniería de Sistemas (careerId: 1)
- **Cursos que enseña**: 
  - Cálculo de una Variable (courseId: 1)
  - Química General (courseId: 3)
- **Tarifa**: S/. 32/hora
- **Estado**: Tutor verificado
- **Disponibilidad**: Lunes a viernes 8:00-19:00, fines de semana limitados

## Flujo Técnico del Sistema

### 1. Envío de Solicitud (Estudiante → Tutor)

#### Proceso Técnico:
1. **Navegación**: Estudiante va a UTEC → Cursos → "Cálculo de una Variable" → Selecciona "Jorge Ramírez Silva"
2. **Selección de horarios**: Estudiante elige horarios disponibles del tutor
3. **Configuración de precio**: Estudiante propone una tarifa por hora
4. **Envío**: Al hacer clic en "Enviar solicitud"

#### Datos que se almacenan:
```javascript
{
  id: 'REQ_' + timestamp,
  studentId: [ID del estudiante],
  tutorId: 2, // Jorge Ramírez Silva
  courseId: 1, // Cálculo de una Variable
  courseName: "Cálculo de una Variable",
  studentOfferedPrice: [precio propuesto por hora],
  message: [mensaje del estudiante],
  status: 'pending',
  createdAt: [timestamp],
  lastUpdated: [timestamp],
  // NUEVO: Array de todas las sesiones solicitadas en UNA sola solicitud
  scheduledSessions: [
    {
      day: "Lunes",
      time: "08:00",
      endTime: "09:00", 
      duration: 60
    },
    {
      day: "Martes", 
      time: "14:00",
      endTime: "15:00",
      duration: 60
    }
    // ... más sesiones si seleccionó múltiples horarios
  ],
  // Fallback para compatibilidad (primer horario seleccionado)
  sessionDay: "Lunes", // scheduledSessions[0].day
  sessionTime: "08:00", // scheduledSessions[0].time
  duration: 60 // scheduledSessions[0].duration
}
```

**IMPORTANTE**: Una solicitud agrupa TODOS los horarios seleccionados por el estudiante. Si selecciona 4 horas diferentes, es UNA solicitud con 4 sesiones programadas. El tutor acepta, rechaza o contraoferta TODO el paquete completo.

#### Notificación generada para el tutor:
```javascript
{
  id: 'NOT_' + timestamp,
  userId: 2, // Jorge Ramírez Silva
  type: 'tutoring_request',
  title: 'Nueva solicitud de tutoría',
  message: '[Nombre del estudiante] quiere clases de Cálculo de una Variable por S/. [precio]/hora',
  data: { /* detalles de la solicitud */ },
  isRead: false,
  createdAt: [timestamp]
}
```

### 2. Gestión de Solicitudes (Tutor)

#### Acceso al Dashboard del Tutor:
1. **Login**: Ingresar con credenciales del tutor Jorge Ramírez Silva
2. **Dashboard**: El panel del tutor muestra "Solicitudes Entrantes"
3. **Visualización**: Lista de solicitudes pendientes con detalles completos

#### Opciones disponibles para el tutor:
- **Aceptar**: Acepta la oferta del estudiante tal como está
- **Rechazar**: Rechaza la solicitud con motivo opcional
- **Contraoferta**: Propone un precio diferente con mensaje personalizado

### 3. Flujo de Contraoferta

#### Proceso de Contraoferta (Tutor → Estudiante):
1. **Tutor**: Hace clic en "Contraoferta" en la solicitud
2. **Formulario**: Ingresa nuevo precio y mensaje opcional
3. **Envío**: La solicitud cambia a estado `counter_offer`

#### Actualización de datos:
```javascript
{
  // ... datos originales ...
  status: 'counter_offer',
  tutorCounterPrice: [nuevo precio propuesto por hora],
  tutorMessage: [mensaje del tutor],
  lastUpdated: [nuevo timestamp]
  // scheduledSessions permanece igual - contraoferta aplica a TODAS las sesiones
}
```

**NOTA**: La contraoferta aplica al precio por hora para TODAS las sesiones de la solicitud. Si el estudiante seleccionó 4 horas a S/25 cada una, y el tutor contraoferta S/30, el precio total sería S/120 (4 × S/30).

#### Notificación para el estudiante:
```javascript
{
  type: 'counter_offer',
  title: 'Contraoferta recibida',
  message: 'Jorge Ramírez Silva propone S/. [precio]/hora (Tu oferta: S/. [precio_original]/hora)',
  data: { /* detalles de la contraoferta */ }
}
```

### 4. Respuesta a Contraoferta (Estudiante)

#### Opciones del estudiante:
- **Aceptar contraoferta**: Confirma el nuevo precio
- **Rechazar contraoferta**: Rechaza la contraoferta
- **Nueva contraoferta**: Propone un precio intermedio (opcional)

#### Al aceptar contraoferta:
1. **Estado**: Solicitud cambia a `accepted`
2. **Precio final**: Se establece el precio de la contraoferta POR HORA
3. **Próximas tutorías**: Se crean automáticamente MÚLTIPLES tutorías basadas en `scheduledSessions`

#### Tutorías programadas creadas (una por cada sesión):
```javascript
// Se crea UNA tutoría por cada elemento en scheduledSessions
scheduledSessions.forEach(session => {
  const tutoria = {
    id: 'TUT_' + timestamp + '_' + index,
    tutorId: 2,
    tutorName: "Jorge Ramírez Silva", 
    courseId: 1,
    courseName: "Cálculo de una Variable",
    courseCode: "MA1001",
    date: session.day, // "Lunes", "Martes", etc.
    time: session.time, // "08:00", "14:00", etc. 
    duration: session.duration, // 60
    price: [precio final acordado por hora],
    status: 'confirmed',
    sessionType: 'online',
    meetingLink: 'https://hermes-academy.com/room/[id_unico]',
    confirmedAt: [timestamp],
    originalRequestId: [id de la solicitud original]
  }
});
```

**PROCESO**: 
- Solicitud con 4 sesiones → Al confirmarse → 4 tutorías individuales programadas
- Cada tutoría mantiene referencia a la solicitud original
- El estudiante ve "4 próximas tutorías" en su dashboard

## Flujo de Interfaz de Usuario

### Para el Estudiante

#### 1. Búsqueda y Selección
- **Página Universidades** → Seleccionar "UTEC"
- **Página Cursos** → Filtrar y seleccionar "Cálculo de una Variable"
- **Lista de Tutores** → Ver perfil de "Jorge Ramírez Silva"
- **Página del Tutor** → Revisar información, horarios y tarifa

#### 2. Solicitud de Tutoría
- **Selección de horarios**: Click en MÚLTIPLES bloques de tiempo disponibles (ej: 4 horas diferentes)
- **Configuración de precio**: Ajustar tarifa propuesta POR HORA (se aplicará a todas las sesiones)
- **Mensaje personalizado**: Añadir mensaje opcional
- **Confirmación**: Botón "Enviar solicitud" (envía UNA solicitud con todas las sesiones)
- **Modal de éxito**: Confirmación visual del envío

#### 3. Seguimiento
- **Dashboard estudiante**: Sección "Solicitudes Pendientes"
  - Muestra: "X sesión(es) programada(s)" donde X = número de horarios seleccionados
  - Precio: "S/ Y/hora" donde Y = precio ofrecido por hora
  - Lista de horarios: Cada día y hora seleccionada
- **Página Notificaciones**: Estado de solicitudes y respuestas
- **Respuesta a contraoferta**: Botones de aceptar/rechazar TODA la solicitud completa

### Para el Tutor (Jorge Ramírez Silva)

#### 1. Acceso al Panel
- **Login**: Email/contraseña del tutor demo
- **Dashboard**: Panel dividido (estudiante + tutor)
- **Panel del tutor**: "Solicitudes Entrantes" con contador

#### 2. Gestión de Solicitudes
- **Lista de solicitudes**: Cards con detalles del estudiante
- **Información mostrada**:
  - Nombre del estudiante
  - Curso: "Cálculo de una Variable"
  - Precio ofrecido por el estudiante POR HORA
  - TODAS las fechas y horas solicitadas (ej: "4 sesión(es) programada(s)")
  - Lista detallada: "Lunes 08:00", "Martes 14:00", etc.
  - Mensaje del estudiante
  - Precio total estimado (sesiones × precio por hora)

#### 3. Respuestas Disponibles
- **Botón "Aceptar"**: Acepta TODA la solicitud (todas las sesiones al precio ofrecido)
- **Botón "Rechazar"**: Rechaza TODA la solicitud completa
- **Botón "Contraoferta"**: Propone nuevo precio POR HORA (aplica a todas las sesiones)

#### 4. Contraoferta
- **Modal de contraoferta**:
  - Campo precio por hora
  - Área de mensaje personalizado
  - Botón "Enviar contraoferta"
- **Confirmación**: Alert de envío exitoso

### Estados Visuales

#### Indicadores de Estado
- **🟡 Pendiente**: Solicitud esperando respuesta del tutor
- **🔄 Contraoferta**: Negociación en proceso
- **✅ Aceptada**: Tutoría confirmada
- **❌ Rechazada**: Solicitud rechazada

#### Notificaciones
- **Badge numérico**: Contador de notificaciones no leídas
- **Colores diferenciados**:
  - Azul: Nueva solicitud
  - Naranja: Contraoferta
  - Verde: Confirmación
  - Rojo: Rechazo

## Persistencia de Datos

### LocalStorage Keys
- `hermesTutoringRequests`: Array de todas las solicitudes
- `hermesNotifications`: Array de todas las notificaciones
- `hermesUsers`: Datos de usuarios registrados

### Sincronización
- **Tiempo real**: Cambios reflejados inmediatamente en ambos dashboards
- **Estados consistentes**: Solicitudes sincronizadas entre estudiante y tutor
- **Historial completo**: Todas las interacciones quedan registradas

## Casos de Uso Esperados

### Flujo Exitoso Completo
1. **Estudiante** busca tutor para Cálculo de una Variable en UTEC
2. **Estudiante** encuentra a Jorge Ramírez Silva y selecciona 4 horarios diferentes (ej: Lun 8-9, Mar 14-15, Jue 10-11, Sáb 16-17)
3. **Estudiante** ofrece S/25 por hora y envía UNA solicitud con las 4 sesiones (total estimado: S/100)
4. **Tutor** recibe notificación de solicitud con 4 sesiones programadas
5. **Tutor** hace contraoferta de S/30 por hora (nuevo total: S/120)
6. **Estudiante** acepta contraoferta
7. **Sistema** crea automáticamente 4 tutorías individuales confirmadas
8. **Ambos usuarios** ven las 4 tutorías programadas en "Próximas tutorías"

### Flujo de Negociación Múltiple
1. **Estudiante** solicita 3 sesiones a S/20/hora (total: S/60)
2. **Tutor** contraoferta S/28/hora (total: S/84)  
3. **Estudiante** contraoferta S/25/hora (total: S/75)
4. **Tutor** acepta S/25/hora
5. **Sistema confirma** las 3 tutorías a S/25 cada una

Esta funcionalidad crea un sistema completo de negociación y gestión de tutorías que simula un entorno real de contratación de servicios educativos.

## Estado Actual del Sistema (Enero 2025)

### ✅ Funcionalidades Implementadas
- **Envío de solicitudes**: Estudiante puede seleccionar múltiples horarios y enviar UNA solicitud
- **Visualización en dashboards**: Tanto estudiante como tutor ven solicitudes pendientes
- **Datos correctos**: Nombres de cursos, tutores y estudiantes se muestran correctamente
- **Estructura de datos**: scheduledSessions array dentro de cada solicitud
- **Persistencia**: LocalStorage con claves `hermesTutoringRequests`

### ⚠️ Estado Actual de Bugs/Issues
- **RESUELTO**: Problema de `undefined` en precios y horarios (corregido mapeo de propiedades)
- **RESUELTO**: Nombres de cursos mostrando IDs en lugar de nombres (corregido getCourseName)
- **FUNCIONAL**: Solicitudes se crean y visualizan correctamente en ambos dashboards

### 🔄 Próximas Funcionalidades a Implementar
1. **Gestión de respuestas del tutor**:
   - Botones "Aceptar", "Rechazar", "Contraoferta" funcionales
   - Modales para contraoferta con validaciones
   - Actualización de estados de solicitudes

2. **Conversión a tutorías programadas**:
   - Al confirmar solicitud → crear múltiples tutorías en `scheduledTutorings`
   - Una tutoría por cada elemento en `scheduledSessions`
   - Mantener referencia a solicitud original

3. **Sistema de notificaciones**:
   - Notificaciones en tiempo real para cambios de estado
   - Badges numéricos para notificaciones no leídas
   - Historial completo de interacciones

4. **Mejoras de UX**:
   - Validaciones de formularios
   - Estados de carga
   - Confirmaciones visuales
   - Manejo de errores

### 🗒️ Notas Técnicas Importantes
- **Una solicitud = múltiples sesiones**: No crear solicitudes separadas por horario
- **Precio por hora**: La contraoferta aplica el mismo precio a todas las sesiones
- **scheduledSessions**: Array que contiene todos los horarios seleccionados
- **Fallback properties**: sessionDay, sessionTime mantienen compatibilidad con dashboard actual
- **LocalStorage keys**: `hermesTutoringRequests` (NO `tutoringRequests`)
