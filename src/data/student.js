// Datos del estudiante actual (simulado)
export const studentData = {
  id: 1,
  name: "Ana María Pérez Gonzales",
  email: "ana.perez@unmsm.edu.pe",
  photo: "/images/student-ana.jpg",
  universityId: 2, // UNMSM
  careerId: 9, // Contabilidad
  currentSemester: 4,
  gpa: 15.8,
  joinDate: "2024-01-15",
  totalTutorials: 12,
  upcomingTutorials: [
    {
      id: 1,
      courseId: 6,
      courseName: "Contabilidad General I",
      tutorId: 2,
      tutorName: "Carlos Alberto Mendoza Rivera",
      date: "2025-06-29",
      time: "14:00",
      duration: 90,
      status: "confirmed",
      meetingLink: "https://meet.google.com/abc-def-ghi",
      notes: "Revisar ejercicios de asientos contables"
    },
    {
      id: 2,
      courseId: 7,
      courseName: "Matemática Financiera",
      tutorId: 2,
      tutorName: "Carlos Alberto Mendoza Rivera",
      date: "2025-07-01",
      time: "15:00",
      duration: 60,
      status: "pending",
      meetingLink: null,
      notes: "Preparación para examen parcial"
    }
  ],
  completedTutorials: [
    {
      id: 3,
      courseId: 6,
      courseName: "Contabilidad General I",
      tutorId: 2,
      tutorName: "Carlos Alberto Mendoza Rivera",
      date: "2025-06-25",
      time: "14:00",
      duration: 90,
      rating: 5,
      feedback: "Excelente explicación, muy claro y paciente"
    }
  ],
  favoriteSubjects: ["Contabilidad", "Matemáticas"],
  learningGoals: ["Mejorar en análisis financiero", "Dominar los fundamentos contables"],
  recommendations: [
    {
      courseId: 7,
      courseName: "Matemática Financiera",
      tutorId: 2,
      tutorName: "Carlos Alberto Mendoza Rivera",
      reason: "Complementa tus estudios de contabilidad"
    },
    {
      courseId: 6,
      courseName: "Contabilidad General I",
      tutorId: 2,
      tutorName: "Carlos Alberto Mendoza Rivera", 
      reason: "Reforzar fundamentos contables"
    }
  ]
};
