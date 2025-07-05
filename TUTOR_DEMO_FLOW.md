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
  studentOfferedPrice: [precio propuesto],
  sessionDate: [fecha seleccionada],
  sessionTime: [hora seleccionada],
  duration: 60,
  status: 'pending',
  message: [mensaje del estudiante],
  createdAt: [timestamp],
  lastUpdated: [timestamp]
}
```

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
  tutorCounterPrice: [nuevo precio propuesto],
  tutorMessage: [mensaje del tutor],
  lastUpdated: [nuevo timestamp]
}
```

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
2. **Precio final**: Se establece el precio de la contraoferta
3. **Tutoría programada**: Se crea automáticamente en `scheduledTutorings`

### 5. Confirmación y Programación

#### Tutoría programada creada:
```javascript
{
  id: 'TUT_' + timestamp,
  tutorId: 2,
  tutorName: "Jorge Ramírez Silva",
  courseId: 1,
  courseName: "Cálculo de una Variable",
  courseCode: "MA1001",
  date: [fecha acordada],
  time: [hora acordada],
  duration: 60,
  price: [precio final acordado],
  status: 'confirmed',
  sessionType: 'online',
  meetingLink: 'https://hermes-academy.com/room/[id_unico]',
  confirmedAt: [timestamp]
}
```

## Flujo de Interfaz de Usuario

### Para el Estudiante

#### 1. Búsqueda y Selección
- **Página Universidades** → Seleccionar "UTEC"
- **Página Cursos** → Filtrar y seleccionar "Cálculo de una Variable"
- **Lista de Tutores** → Ver perfil de "Jorge Ramírez Silva"
- **Página del Tutor** → Revisar información, horarios y tarifa

#### 2. Solicitud de Tutoría
- **Selección de horarios**: Click en bloques de tiempo disponibles
- **Configuración de precio**: Ajustar tarifa propuesta
- **Mensaje personalizado**: Añadir mensaje opcional
- **Confirmación**: Botón "Enviar solicitud"
- **Modal de éxito**: Confirmación visual del envío

#### 3. Seguimiento
- **Dashboard estudiante**: Sección "Solicitudes Pendientes"
- **Página Notificaciones**: Estado de solicitudes y respuestas
- **Respuesta a contraoferta**: Botones de aceptar/rechazar

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
  - Precio ofrecido por el estudiante
  - Fecha y hora solicitadas
  - Mensaje del estudiante

#### 3. Respuestas Disponibles
- **Botón "Aceptar"**: Acepta la oferta inmediatamente
- **Botón "Rechazar"**: Abre modal para motivo de rechazo
- **Botón "Contraoferta"**: Abre formulario para nuevo precio

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
2. **Estudiante** encuentra a Jorge Ramírez Silva y envía solicitud
3. **Tutor** recibe notificación y hace contraoferta
4. **Estudiante** acepta contraoferta
5. **Sistema** programa tutoría automáticamente
6. **Ambos usuarios** ven la tutoría confirmada en sus dashboards

### Flujo de Rechazo
1. **Estudiante** envía solicitud
2. **Tutor** revisa y rechaza por incompatibilidad de horarios
3. **Estudiante** recibe notificación de rechazo
4. **Estudiante** puede intentar con otros horarios o tutores

### Flujo de Negociación
1. **Estudiante** ofrece S/. 25/hora
2. **Tutor** contraoferta S/. 30/hora
3. **Estudiante** contraoferta S/. 28/hora
4. **Tutor** acepta S/. 28/hora
5. **Tutoría confirmada** a precio negociado

Esta funcionalidad crea un sistema completo de negociación y gestión de tutorías que simula un entorno real de contratación de servicios educativos.
