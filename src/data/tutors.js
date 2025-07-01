// Tutores disponibles en la plataforma
export const tutors = [
  {
    id: 1,
    name: "María Elena González Vargas",
    photo: "/images/tutor-maria.jpg",
    universityId: 1, // UTEC
    careerId: 1, // Ingeniería de Sistemas
    currentSemester: 8,
    gpa: 17.2,
    bio: "Estudiante de 8vo ciclo de Ingeniería de Sistemas en UTEC. Especializada en programación y matemáticas. 3 años de experiencia en tutoría.",
    hourlyRate: 35,
    rating: 4.8,
    totalSessions: 156,
    specializations: ["Programación", "Matemáticas", "Algoritmos"],
    coursesTaught: [1, 2, 3], // Introducción a la Programación, Cálculo Diferencial, Estructuras de Datos
    availability: {
      monday: ["09:00", "10:00", "14:00", "15:00"],
      tuesday: [],
      wednesday: ["10:00", "11:00", "16:00", "17:00"],
      thursday: [],
      friday: ["09:00", "10:00", "11:00", "14:00"],
      saturday: ["10:00", "11:00", "12:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "3 años",
    achievements: ["Top 5% de su promoción", "Ganadora del Hackathon UTEC 2024"],
    verificationStatus: "verified",
    joinDate: "2023-03-15",
    isActive: true
  },
  {
    id: 2,
    name: "Carlos Alberto Mendoza Rivera",
    photo: "/images/tutor-carlos.jpg",
    universityId: 2, // UNMSM
    careerId: 9, // Contabilidad
    currentSemester: 9,
    gpa: 16.8,
    bio: "Estudiante de 9no ciclo de Contabilidad en San Marcos. Experiencia en contabilidad empresarial y finanzas. Enfoque práctico y didáctico.",
    hourlyRate: 30,
    rating: 4.9,
    totalSessions: 203,
    specializations: ["Contabilidad", "Finanzas", "Matemática Financiera"],
    coursesTaught: [6, 7], // Contabilidad General I, Matemática Financiera
    availability: {
      monday: [],
      tuesday: ["14:00", "15:00", "16:00", "17:00"],
      wednesday: [],
      thursday: ["09:00", "10:00", "11:00", "14:00"],
      friday: [],
      saturday: ["10:00", "11:00", "12:00", "14:00"],
      sunday: ["15:00", "16:00", "17:00"]
    },
    languages: ["Español"],
    teachingExperience: "2 años",
    achievements: ["Beca Permanencia", "Representante estudiantil"],
    verificationStatus: "verified",
    joinDate: "2023-07-30",
    isActive: true
  },
  {
    id: 3,
    name: "Ana Sofía Herrera Morales",
    photo: "/images/tutor-ana.jpg",
    universityId: 3, // PUCP
    careerId: 10, // Ingeniería Informática
    currentSemester: 7,
    gpa: 17.8,
    bio: "Estudiante de 7mo ciclo de Ingeniería Informática en la PUCP. Especializada en algoritmos y programación avanzada. Metodología personalizada.",
    hourlyRate: 40,
    rating: 4.7,
    totalSessions: 89,
    specializations: ["Algoritmos", "Programación", "Java"],
    coursesTaught: [8, 9, 10], // Programación 1, Cálculo en una Variable, Algoritmos y Estructuras de Datos
    availability: {
      monday: ["11:00", "12:00", "15:00", "16:00"],
      tuesday: ["09:00", "10:00"],
      wednesday: ["09:00", "10:00", "14:00", "15:00"],
      thursday: ["11:00", "12:00"],
      friday: ["13:00", "14:00", "15:00", "16:00"],
      saturday: [],
      sunday: []
    },
    languages: ["Español", "Inglés", "Francés"],
    teachingExperience: "2 años",
    achievements: ["Summa Cum Laude", "Beca Presidente de la República"],
    verificationStatus: "verified",
    joinDate: "2024-01-10",
    isActive: true
  },
  {
    id: 4,
    name: "Diego Andrés Vásquez Torres",
    photo: "/images/tutor-diego.jpg",
    universityId: 4, // UNI
    careerId: 14, // Ingeniería de Sistemas
    currentSemester: 9,
    gpa: 17.5,
    bio: "Estudiante de último año de Ingeniería de Sistemas en la UNI. Experiencia en programación competitiva y desarrollo de software.",
    hourlyRate: 32,
    rating: 4.6,
    totalSessions: 134,
    specializations: ["Programación", "Algoritmos", "Matemáticas"],
    coursesTaught: [11, 12], // Algorítmica I, Cálculo I
    availability: {
      monday: [],
      tuesday: ["10:00", "11:00", "12:00", "16:00"],
      wednesday: ["15:00", "16:00"],
      thursday: ["15:00", "16:00", "17:00", "18:00"],
      friday: [],
      saturday: ["09:00", "10:00", "11:00", "12:00"],
      sunday: ["14:00", "15:00", "16:00"]
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "2 años",
    achievements: ["ACM-ICPC Regional Finalist", "Primer puesto en Olimpiada Nacional de Informática"],
    verificationStatus: "verified",
    joinDate: "2023-06-05",
    isActive: true
  },
  {
    id: 5,
    name: "Lucía Isabel Fernández Morales",
    photo: "/images/tutor-lucia.jpg",
    universityId: 5, // Universidad de Lima
    careerId: 17, // Administración
    currentSemester: 8,
    gpa: 16.9,
    bio: "Estudiante de 8vo ciclo de Administración en la Universidad de Lima. Especializada en marketing y gestión empresarial.",
    hourlyRate: 28,
    rating: 4.5,
    totalSessions: 67,
    specializations: ["Administración", "Marketing", "Negocios"],
    coursesTaught: [13, 14], // Introducción a los Negocios, Marketing Fundamentos
    availability: {
      monday: ["14:00", "15:00", "16:00"],
      tuesday: ["10:00", "11:00", "12:00"],
      wednesday: ["14:00", "15:00"],
      thursday: ["10:00", "11:00", "16:00", "17:00"],
      friday: ["09:00", "10:00", "11:00"],
      saturday: [],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "1 año",
    achievements: ["Dean's List", "Representante estudiantil"],
    verificationStatus: "verified",
    joinDate: "2024-02-28",
    isActive: true
  },
  {
    id: 6,
    name: "Roberto Carlos Silva Mendez",
    photo: "/images/tutor-roberto.jpg",
    universityId: 10, // UPC
    careerId: 20, // Ingeniería de Software
    currentSemester: 7,
    gpa: 17.8,
    bio: "Estudiante de 7mo ciclo de Ingeniería de Software en UPC. Desarrollador full-stack con experiencia en proyectos reales.",
    hourlyRate: 38,
    rating: 4.8,
    totalSessions: 112,
    specializations: ["Programación", "Desarrollo Web", "Matemáticas"],
    coursesTaught: [15, 16], // Fundamentos de Programación, Matemática Discreta
    availability: {
      monday: ["08:00", "09:00", "10:00"],
      tuesday: ["14:00", "15:00", "16:00"],
      wednesday: ["08:00", "09:00", "14:00", "15:00"],
      thursday: ["10:00", "11:00", "16:00"],
      friday: ["08:00", "09:00", "10:00", "11:00"],
      saturday: ["10:00", "11:00", "12:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "2 años",
    achievements: ["Startup Weekend Winner", "Google Developer Student Club Lead"],
    verificationStatus: "verified",
    joinDate: "2023-09-12",
    isActive: true
  }
];
