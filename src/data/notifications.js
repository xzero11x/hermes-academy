// Notificaciones del sistema
export const notifications = [
  {
    id: 1,
    type: "counteroffer_received",
    title: "Contraoferta Recibida",
    message: "Carlos Mendoza ha enviado una contraoferta para tu solicitud de tutoría en Matemática Financiera",
    data: {
      tutorId: 2,
      tutorName: "Carlos Alberto Mendoza Rivera",
      courseId: 7,
      courseName: "Matemática Financiera",
      originalPrice: 25,
      counterPrice: 30,
      proposedSchedule: "Martes 15:00-16:00",
      tutorMessage: "Tu precio está un poco bajo para el nivel que solicitas. ¿Podrías considerar S/30 por hora? Incluye material adicional y seguimiento personalizado.",
      requestId: 101
    },
    timestamp: "2025-06-28T14:20:00Z",
    isRead: false,
    priority: "high"
  },
  {
    id: 2,
    type: "session_confirmed",
    title: "Sesión Confirmada",
    message: "Tu sesión de Contabilidad General I ha sido confirmada para mañana",
    data: {
      sessionId: 1,
      courseId: 6,
      courseName: "Contabilidad General I",
      tutorName: "Carlos Alberto Mendoza Rivera",
      date: "2025-06-29",
      time: "14:00"
    },
    timestamp: "2025-06-28T10:15:00Z",
    isRead: true,
    priority: "medium"
  },
  {
    id: 3,
    type: "new_message",
    title: "Nuevo Mensaje",
    message: "Carlos Mendoza te ha enviado material de estudio",
    data: {
      tutorId: 2,
      tutorName: "Carlos Alberto Mendoza Rivera",
      messagePreview: "Hola Ana, te envío unos ejercicios adicionales para que practiques antes de nuestra próxima sesión..."
    },
    timestamp: "2025-06-27T16:45:00Z",
    isRead: false,
    priority: "low"
  }
];
