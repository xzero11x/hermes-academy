# HERMES ACADEMY - PLATAFORMA DE TUTORÍAS UNIVERSITARIAS

## 🎓 DESCRIPCIÓN DE LA APLICACIÓN

**Hermes Academy** es una plataforma de tutorías universitarias que conecta estudiantes con tutores especializados en sus materias universitarias específicas. Su objetivo es reforzar los conocimientos universitarios de manera personalizada, adaptándose a los cursos que dictan las universidades peruanas.

---

## 🏛️ CONCEPTO CLAVE: CLASIFICACIÓN POR UNIVERSIDADES

### ❓ **¿Por qué clasificar por universidades?**

Los cursos universitarios **varían significativamente** entre universidades en:
- **Nombres de curso:** Mismo contenido, diferentes nombres
- **Metodología:** Diferentes enfoques de enseñanza  
- **Contenido:** Variaciones en temario y profundidad
- **Evaluación:** Diferentes sistemas de calificación

### 📚 **Ejemplo Real:**

| Universidad | Nombre del Curso | Enfoque | Metodología |
|-------------|------------------|---------|-------------|
| **UNI** | Cálculo I | Teórico-riguroso | Demostraciones matemáticas |
| **UTEC** | Cálculo Diferencial | Aplicado-práctico | Casos de ingeniería |
| **UPC** | Cálculo I | Competencias | Proyectos integrados |

**Resultado:** Aunque los tres abordan derivadas e integrales, un estudiante de UNI necesita un tutor que entienda el **enfoque riguroso** de su universidad, no el enfoque aplicado de UTEC.

---

## 👨‍🏫 SISTEMA DE TUTORES CALIFICADOS

### ✅ **Requisitos para ser Tutor:**
1. **Haber aprobado el curso** en la misma universidad
2. **Buen rendimiento académico** (validado con boleta de notas)
3. **Conocimiento específico** de la metodología de esa universidad

### 📋 **Proceso de Validación:**
1. Estudiante sube **boleta de notas** del curso
2. Sistema valida **universidad + curso + nota**
3. Si cumple requisitos → **Puede ofrecer tutorías**
4. Tutor queda **habilitado** para ese curso específico

### 💡 **Ejemplo:**
- María aprobó "Cálculo I" en UTEC con nota 18/20
- Puede ser tutora de "Cálculo I" **solo para estudiantes de UTEC**
- NO puede tutorear "Cálculo I" de UNI (diferente metodología)

---

## 🎯 FLUJO COMPLETO DE LA PLATAFORMA

### 1️⃣ **BÚSQUEDA DEL ESTUDIANTE**
```
Estudiante entra → Selecciona su Universidad → Ve cursos disponibles
```
- **Ejemplo:** Estudiante de UTEC ve solo cursos de UTEC
- **Filtrado automático:** Solo tutores validados para esa universidad

### 2️⃣ **SELECCIÓN DE CURSO**
```
Estudiante busca curso → Ve lista de tutores calificados → Revisa perfiles
```
- **Información mostrada:** Rating, precio/hora, horarios disponibles
- **Tutores disponibles:** Solo los validados para ese curso+universidad

### 3️⃣ **SELECCIÓN DE TUTOR**
```
Estudiante ve perfil → Revisa horarios → Ve precio/hora → Solicita tutoría
```
- **Horarios:** Bloques de 1 hora disponibles
- **Precio:** Lo que el tutor está dispuesto a cobrar
- **Solicitud:** Estudiante envía propuesta de precio

### 4️⃣ **NEGOCIACIÓN TIPO "INDRIVE"**
```
Estudiante propone precio → Tutor puede: Aceptar | Rechazar | Contraoferta
```
- **Oferta inicial:** Estudiante propone lo que quiere pagar
- **Contraoferta:** Tutor puede proponer otro precio
- **Negociación:** Van y vuelven hasta llegar a acuerdo
- **Confirmación:** Ambos aceptan → Tutoría programada

### 5️⃣ **PROGRAMACIÓN DE CLASE**
```
Acuerdo confirmado → Sistema programa la clase → Notifica a ambos
```
- **Calendario:** Se bloquea el horario acordado
- **Notificaciones:** Recordatorios antes de la clase
- **Acceso:** Link de videollamada generado

### 6️⃣ **SESIÓN DE TUTORÍA**
```
Hora de clase → Sistema notifica → Ambos se conectan → Videollamada
```
- **Plataforma:** Videollamada integrada en la app
- **Duración:** Tiempo acordado (generalmente 1 hora)
- **Materiales:** Posibilidad de compartir pantalla/archivos

---

## 🖥️ CARACTERÍSTICAS TÉCNICAS (SIMULACIÓN)

### 📱 **Tipo de Proyecto:**
- **Frontend puro:** Solo simulación visual
- **Sin backend:** Datos mock para demostración
- **Responsive:** Funciona en móvil y desktop
- **Interactivo:** Simula todo el flujo de usuario

### 🎨 **Tecnologías:**
- **Framework:** Astro (generación estática)
- **Estilos:** CSS simple y moderno
- **Iconos:** FontAwesome 6.7.2
- **Tipografía:** Inter (Google Fonts)

### 📊 **Datos de Simulación:**
- **Universidades:** 10 universidades peruanas principales
- **Cursos:** ~50 cursos por universidad
- **Tutores:** ~100 tutores con perfiles realistas
- **Interacciones:** Sistema completo de notificaciones

---

## 🗂️ ESTRUCTURA DE NAVEGACIÓN

### 🏠 **Página Principal (`/`)**
- Hero con descripción de la plataforma
- Estadísticas (estudiantes, tutores, sesiones)
- Call-to-action: "Buscar Tutor" / "Ser Tutor"

### 🏛️ **Universidades (`/universities`)**
- Grid de universidades con logos
- Información básica de cada universidad
- Acceso directo a cursos de la universidad

### 📚 **Cursos (`/courses`)**
- Lista de cursos filtrada por universidad
- Información de tutores disponibles por curso
- Filtros por área de estudio

### 📖 **Detalle de Curso (`/course/[id]`)**
- Información detallada del curso
- Lista de tutores calificados
- Comparación de precios y horarios

### 👨‍🏫 **Perfil de Tutor (`/tutor/[courseId]/[tutorId]`)**
- Perfil completo del tutor
- Calificaciones y experiencia
- Calendario de disponibilidad
- Solicitud de tutoría

### 🔔 **Notificaciones (`/notifications`)**
- Solicitudes pendientes de respuesta
- Sistema de ofertas y contraofertas
- Confirmaciones de tutorías
- Recordatorios de clases

### 👤 **Dashboard (`/dashboard`)**
- Panel del usuario (estudiante o tutor)
- Historial de tutorías
- Calendario personal
- Configuración de perfil

### 📋 **Registro de Tutor (`/become-tutor`)**
- Formulario de aplicación
- Subida de boleta de notas
- Selección de cursos a enseñar
- Configuración de precios

---

## 🎯 OBJETIVOS DE LA SIMULACIÓN

### ✅ **Demostrar Concepto:**
- Validación por universidad específica
- Sistema de negociación de precios
- Flujo completo estudiante-tutor

### ✅ **Mostrar UI/UX:**
- Interfaz intuitiva y moderna
- Experiencia de usuario fluida
- Responsive design

### ✅ **Simular Funcionalidades:**
- Búsqueda y filtrado
- Negociación tipo marketplace
- Sistema de notificaciones
- Programación de clases

---

## 🚀 INSTALACIÓN Y USO

### 📦 **Requisitos:**
- Node.js 18+
- npm o yarn

### ⚡ **Comandos:**
```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### 🌐 **URLs Principales:**
- **Inicio:** http://localhost:4321/
- **Universidades:** http://localhost:4321/universities
- **Cursos:** http://localhost:4321/courses
- **Dashboard:** http://localhost:4321/dashboard
- **Notificaciones:** http://localhost:4321/notifications

---

## 📱 EXPERIENCIA DE USUARIO SIMULADA

### 👨‍🎓 **Como Estudiante:**
1. Entro a la app y veo universidades disponibles
2. Selecciono mi universidad (ej: UTEC)
3. Busco mi curso problemático (ej: "Cálculo Diferencial")
4. Veo tutores disponibles con sus precios
5. Selecciono un tutor y propongo mi precio
6. Negocio hasta llegar a un acuerdo
7. Confirmo la clase y espero la notificación
8. Me conecto a la videollamada a la hora acordada

### 👨‍🏫 **Como Tutor:**
1. Me registro subiendo mi boleta de notas
2. El sistema valida mis calificaciones
3. Configuro los cursos que puedo enseñar
4. Establezco mis precios y horarios
5. Recibo solicitudes de estudiantes
6. Negocio precios según mi criterio
7. Confirmo clases y preparo material
8. Doy las tutorías por videollamada

---

## 🏆 DIFERENCIADORES CLAVE

### 🎯 **Especialización Universitaria:**
- No es tutoría genérica, es específica por universidad
- Tutores que realmente conocen la metodología
- Contenido adaptado al nivel y enfoque de cada institución

### 💰 **Modelo de Negociación:**
- Precios flexibles tipo "InDriver"
- Estudiantes proponen lo que pueden pagar
- Tutores deciden si aceptan o contraofrecen

### 🔗 **Ecosistema Integrado:**
- Desde búsqueda hasta videollamada en una sola app
- Sistema de notificaciones completo
- Seguimiento de progreso académico

---

*Plataforma desarrollada para conectar estudiantes universitarios peruanos con tutores especializados en sus materias específicas.*