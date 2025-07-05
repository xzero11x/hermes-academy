/**
 * TUTORES - Estructura mejorada
 * 
 * Modelo de datos para tutores de la plataforma
 * Relaciones: 
 * - Un tutor pertenece a UNA universidad (universityId)
 * - Un tutor puede enseñar MUCHOS cursos (coursesTaught[])
 * - Un curso puede tener MUCHOS tutores
 */

export const tutors = [
  // ===== UTEC (universityId: 1) =====
  {
    id: 1,
    name: "María Elena González Vargas",
    photo: "/images/tutor-maria.jpg",
    universityId: 1,
    careerId: 1,
    currentSemester: 8,
    gpa: 17.2,
    bio: "Estudiante de 8vo ciclo de Ingeniería de Sistemas en UTEC. Especializada en programación y matemáticas. 3 años de experiencia en tutoría.",
    hourlyRate: 35,
    rating: 4.8,
    totalSessions: 156,
    specializations: ["Matemáticas", "Física", "Química"],
    coursesTaught: [1, 2, 3], // Cálculo de una Variable, Introducción a la Mecánica, Química General
    availability: {
      monday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
      tuesday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
      wednesday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
      thursday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
      friday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
      saturday: ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00"],
      sunday: ["15:00", "16:00", "17:00", "18:00"]
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "3 años",
    verificationStatus: "verified",
    joinDate: "2023-03-15",
    isActive: true
  },
  {
    id: 2,
    name: "Jorge Ramírez Silva",
    photo: "/images/tutor-jorge.jpg",
    universityId: 1,
    careerId: 1,
    currentSemester: 7,
    gpa: 16.9,
    bio: "Estudiante de 7mo ciclo de Ingeniería de Sistemas en UTEC. Especializado en programación avanzada y estructuras de datos.",
    hourlyRate: 32,
    rating: 4.6,
    totalSessions: 98,
    specializations: ["Programación", "Estructuras de Datos", "Algoritmos"],
    coursesTaught: [1, 3], // Introducción a la Programación, Estructuras de Datos
    availability: {
      monday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
      tuesday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
      wednesday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
      thursday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
      friday: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
      saturday: ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"],
      sunday: ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]
    },
    languages: ["Español"],
    teachingExperience: "2 años",
    verificationStatus: "verified",
    joinDate: "2023-06-01",
    isActive: true
  },
  {
    id: 3,
    name: "Sofía Paredes Luna",
    photo: "/images/tutor-sofia.jpg",
    universityId: 1,
    careerId: 1,
    currentSemester: 6,
    gpa: 17.0,
    bio: "Estudiante de 6to ciclo de Ingeniería de Sistemas en UTEC. Especializada en matemáticas y cálculo.",
    hourlyRate: 30,
    rating: 4.7,
    totalSessions: 76,
    specializations: ["Matemáticas", "Cálculo", "Física"],
    coursesTaught: [2], // Cálculo Diferencial
    availability: {
      monday: ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
      tuesday: ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
      wednesday: ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
      thursday: ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
      friday: ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
      saturday: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
      sunday: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "1.5 años",
    verificationStatus: "verified",
    joinDate: "2023-08-15",
    isActive: true
  },
  {
    id: 4,
    name: "Alberto Jiménez Morales",
    photo: "/images/tutor-alberto.jpg",
    universityId: 1,
    careerId: 1,
    currentSemester: 9,
    gpa: 17.5,
    bio: "Estudiante de 9no ciclo de Ingeniería de Sistemas en UTEC. Especializado en programación y estructuras de datos avanzadas.",
    hourlyRate: 38,
    rating: 4.9,
    totalSessions: 134,
    specializations: ["Programación Avanzada", "Estructuras de Datos", "Algoritmos"],
    coursesTaught: [1, 3], // Introducción a la Programación, Estructuras de Datos
    availability: {
      monday: ["07:00", "08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
      tuesday: ["07:00", "08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
      wednesday: ["07:00", "08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
      thursday: ["07:00", "08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
      friday: ["07:00", "08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
      saturday: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
      sunday: ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "3 años",
    verificationStatus: "verified",
    joinDate: "2022-11-01",
    isActive: true
  },

  // ===== PUCP (universityId: 3) =====
  {
    id: 11,
    name: "Pedro Sánchez López",
    photo: "/images/tutor-pedro.jpg",
    universityId: 3,
    careerId: 2,
    currentSemester: 8,
    gpa: 17.4,
    bio: "Estudiante de 8vo ciclo de Ingeniería Informática en PUCP. Especializado en programación y algoritmos.",
    hourlyRate: 45,
    rating: 4.9,
    totalSessions: 187,
    specializations: ["Programación", "Algoritmos", "Estructuras de Datos"],
    coursesTaught: [8, 9], // Fundamentos de Programación, Cálculo I
    availability: {
      monday: ["08:00", "09:00", "10:00", "11:00"],
      tuesday: ["14:00", "15:00", "16:00", "17:00"],
      wednesday: ["08:00", "09:00", "10:00", "11:00"],
      thursday: ["14:00", "15:00", "16:00", "17:00"],
      friday: ["08:00", "09:00", "10:00", "11:00"],
      saturday: ["10:00", "11:00", "12:00", "13:00"],
      sunday: ["15:00", "16:00", "17:00", "18:00"]
    },
    languages: ["Español"],
    teachingExperience: "2.5 años",
    verificationStatus: "verified",
    joinDate: "2023-02-01",
    isActive: true
  },


  // ===== PUCP (universityId: 3) =====
  {
    id: 11,
    name: "Pedro Sánchez López",
    photo: "/images/tutor-pedro.jpg",
    universityId: 3,
    careerId: 2,
    currentSemester: 8,
    gpa: 17.4,
    bio: "Estudiante de 8vo ciclo de Ingeniería Informática en PUCP. Especializado en programación y desarrollo de software.",
    hourlyRate: 37,
    rating: 4.8,
    totalSessions: 167,
    specializations: ["Programación", "Java", "Desarrollo de Software"],
    coursesTaught: [8, 9], // Fundamentos de Programación, Cálculo I
    availability: {
      monday: ["16:00", "17:00", "18:00"],
      tuesday: ["16:00", "17:00", "18:00"],
      wednesday: ["16:00", "17:00", "18:00"],
      thursday: ["16:00", "17:00", "18:00"],
      friday: ["16:00", "17:00"],
      saturday: ["10:00", "11:00", "12:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "3 años",
    verificationStatus: "verified",
    joinDate: "2022-09-01",
    isActive: true
  },
  {
    id: 12,
    name: "Carmen López Díaz",
    photo: "/images/tutor-carmen.jpg",
    universityId: 3,
    careerId: 2,
    currentSemester: 7,
    gpa: 16.9,
    bio: "Estudiante de 7mo ciclo de Ingeniería Informática en PUCP. Especializada en programación y matemáticas aplicadas.",
    hourlyRate: 35,
    rating: 4.7,
    totalSessions: 123,
    specializations: ["Programación", "Matemáticas", "Lógica"],
    coursesTaught: [8], // Fundamentos de Programación
    availability: {
      monday: ["14:00", "15:00", "16:00", "17:00"],
      tuesday: ["14:00", "15:00", "16:00", "17:00"],
      wednesday: ["14:00", "15:00", "16:00", "17:00"],
      thursday: ["14:00", "15:00", "16:00", "17:00"],
      friday: ["14:00", "15:00", "16:00", "17:00"],
      saturday: ["10:00", "11:00", "12:00", "13:00"],
      sunday: ["16:00", "17:00", "18:00", "19:00"]
    },
    languages: ["Español"],
    teachingExperience: "2.5 años",
    verificationStatus: "verified",
    joinDate: "2023-01-15",
    isActive: true
  },
  {
    id: 13,
    name: "Roberto Díaz Silva",
    photo: "/images/tutor-roberto.jpg",
    universityId: 3,
    careerId: 2,
    currentSemester: 9,
    gpa: 17.6,
    bio: "Estudiante de 9no ciclo de Ingeniería Informática en PUCP. Especializado en cálculo y matemáticas avanzadas.",
    hourlyRate: 39,
    rating: 4.9,
    totalSessions: 189,
    specializations: ["Cálculo", "Matemáticas Avanzadas", "Análisis Matemático"],
    coursesTaught: [9], // Cálculo I
    availability: {
      monday: ["18:00", "19:00", "20:00"],
      tuesday: ["18:00", "19:00", "20:00"],
      wednesday: ["18:00", "19:00", "20:00"],
      thursday: ["18:00", "19:00", "20:00"],
      friday: ["18:00", "19:00"],
      saturday: ["15:00", "16:00", "17:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "3.5 años",
    verificationStatus: "verified",
    joinDate: "2022-06-01",
    isActive: true
  },

  // ===== UNI (universityId: 4) =====
  {
    id: 14,
    name: "Elena Vásquez Morales",
    photo: "/images/tutor-elena.jpg",
    universityId: 4,
    careerId: 3,
    currentSemester: 8,
    gpa: 17.3,
    bio: "Estudiante de 8vo ciclo de Ingeniería de Sistemas en UNI. Especializada en algoritmos y programación estructurada.",
    hourlyRate: 36,
    rating: 4.8,
    totalSessions: 145,
    specializations: ["Algoritmos", "Programación", "Estructuras de Datos"],
    coursesTaught: [10, 11], // Algoritmos y Programación, Cálculo I
    availability: {
      monday: ["08:00", "09:00", "10:00", "11:00"],
      tuesday: ["14:00", "15:00", "16:00", "17:00"],
      wednesday: ["08:00", "09:00", "10:00", "11:00"],
      thursday: ["14:00", "15:00", "16:00", "17:00"],
      friday: ["08:00", "09:00", "10:00", "11:00"],
      saturday: ["10:00", "11:00", "12:00", "13:00"],
      sunday: ["16:00", "17:00", "18:00", "19:00"]
    },
    languages: ["Español"],
    teachingExperience: "2.5 años",
    verificationStatus: "verified",
    joinDate: "2023-02-15",
    isActive: true
  },
  {
    id: 15,
    name: "José Morales Castro",
    photo: "/images/tutor-jose.jpg",
    universityId: 4,
    careerId: 3,
    currentSemester: 7,
    gpa: 16.8,
    bio: "Estudiante de 7mo ciclo de Ingeniería de Sistemas en UNI. Especializado en programación y desarrollo de algoritmos.",
    hourlyRate: 34,
    rating: 4.6,
    totalSessions: 98,
    specializations: ["Programación", "Algoritmos", "Lógica de Programación"],
    coursesTaught: [10], // Algoritmos y Programación
    availability: {
      monday: ["14:00", "15:00", "16:00", "17:00"],
      tuesday: ["14:00", "15:00", "16:00", "17:00"],
      wednesday: ["14:00", "15:00", "16:00", "17:00"],
      thursday: ["14:00", "15:00", "16:00", "17:00"],
      friday: ["14:00", "15:00", "16:00", "17:00"],
      saturday: ["09:00", "10:00", "11:00", "12:00"],
      sunday: ["15:00", "16:00", "17:00", "18:00"]
    },
    languages: ["Español"],
    teachingExperience: "2 años",
    verificationStatus: "verified",
    joinDate: "2023-04-01",
    isActive: true
  },
  {
    id: 16,
    name: "Fernando Castro Ruiz",
    photo: "/images/tutor-fernando.jpg",
    universityId: 4,
    careerId: 3,
    currentSemester: 9,
    gpa: 17.1,
    bio: "Estudiante de 9no ciclo de Ingeniería de Sistemas en UNI. Especializado en cálculo y matemáticas aplicadas a la ingeniería.",
    hourlyRate: 37,
    rating: 4.7,
    totalSessions: 134,
    specializations: ["Cálculo", "Matemáticas", "Análisis Numérico"],
    coursesTaught: [11], // Cálculo I
    availability: {
      monday: ["18:00", "19:00", "20:00"],
      tuesday: ["18:00", "19:00", "20:00"],
      wednesday: ["18:00", "19:00", "20:00"],
      thursday: ["18:00", "19:00", "20:00"],
      friday: ["18:00", "19:00"],
      saturday: ["14:00", "15:00", "16:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "3 años",
    verificationStatus: "verified",
    joinDate: "2022-10-01",
    isActive: true
  },

  // ===== UL (universityId: 5) =====
  {
    id: 17,
    name: "Patricia Herrera Mendoza",
    photo: "/images/tutor-patricia.jpg",
    universityId: 5,
    careerId: 4,
    currentSemester: 8,
    gpa: 17.0,
    bio: "Estudiante de 8vo ciclo de Ingeniería Industrial en Universidad de Lima. Especializada en programación y algoritmos.",
    hourlyRate: 35,
    rating: 4.7,
    totalSessions: 112,
    specializations: ["Programación", "Java", "Algoritmos"],
    coursesTaught: [12], // Algoritmos y Programación
    availability: {
      monday: ["17:00", "18:00", "19:00"],
      tuesday: ["17:00", "18:00", "19:00"],
      wednesday: ["17:00", "18:00", "19:00"],
      thursday: ["17:00", "18:00", "19:00"],
      friday: ["17:00", "18:00"],
      saturday: ["11:00", "12:00", "13:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "2.5 años",
    verificationStatus: "verified",
    joinDate: "2023-01-01",
    isActive: true
  },
  {
    id: 18,
    name: "Manuel Torres García",
    photo: "/images/tutor-manuel.jpg",
    universityId: 5,
    careerId: 4,
    currentSemester: 7,
    gpa: 16.7,
    bio: "Estudiante de 7mo ciclo de Ingeniería Industrial en Universidad de Lima. Especializado en programación orientada a objetos.",
    hourlyRate: 33,
    rating: 4.5,
    totalSessions: 87,
    specializations: ["Programación Orientada a Objetos", "Java", "Desarrollo de Software"],
    coursesTaught: [12], // Algoritmos y Programación
    availability: {
      monday: ["14:00", "15:00", "16:00"],
      tuesday: ["14:00", "15:00", "16:00"],
      wednesday: ["14:00", "15:00", "16:00"],
      thursday: ["14:00", "15:00", "16:00"],
      friday: ["14:00", "15:00"],
      saturday: [],
      sunday: []
    },
    languages: ["Español"],
    teachingExperience: "2 años",
    verificationStatus: "verified",
    joinDate: "2023-03-01",
    isActive: true
  },
  {
    id: 19,
    name: "Gloria Pérez Salinas",
    photo: "/images/tutor-gloria.jpg",
    universityId: 5,
    careerId: 4,
    currentSemester: 9,
    gpa: 17.4,
    bio: "Estudiante de 9no ciclo de Ingeniería Industrial en Universidad de Lima. Especializada en algoritmos avanzados y programación.",
    hourlyRate: 38,
    rating: 4.8,
    totalSessions: 156,
    specializations: ["Algoritmos Avanzados", "Programación", "Estructuras de Datos"],
    coursesTaught: [12], // Algoritmos y Programación
    availability: {
      monday: ["18:00", "19:00", "20:00"],
      tuesday: ["18:00", "19:00", "20:00"],
      wednesday: ["18:00", "19:00", "20:00"],
      thursday: ["18:00", "19:00", "20:00"],
      friday: ["18:00", "19:00"],
      saturday: ["15:00", "16:00", "17:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "3 años",
    verificationStatus: "verified",
    joinDate: "2022-08-15",
    isActive: true
  },
  {
    id: 20,
    name: "Andrés Silva Vega",
    photo: "/images/tutor-andress.jpg",
    universityId: 5,
    careerId: 4,
    currentSemester: 6,
    gpa: 16.9,
    bio: "Estudiante de 6to ciclo de Ingeniería Industrial en Universidad de Lima. Especializado en fundamentos de programación.",
    hourlyRate: 31,
    rating: 4.4,
    totalSessions: 65,
    specializations: ["Fundamentos de Programación", "Java Básico", "Lógica de Programación"],
    coursesTaught: [12], // Algoritmos y Programación
    availability: {
      monday: ["15:00", "16:00", "17:00"],
      tuesday: ["15:00", "16:00", "17:00"],
      wednesday: ["15:00", "16:00", "17:00"],
      thursday: ["15:00", "16:00", "17:00"],
      friday: ["15:00", "16:00"],
      saturday: ["09:00", "10:00", "11:00"],
      sunday: []
    },
    languages: ["Español"],
    teachingExperience: "1.5 años",
    verificationStatus: "verified",
    joinDate: "2023-06-15",
    isActive: true
  },

  // ===== UCV (universityId: 7) =====


  // ===== UCV (universityId: 7) =====


  // ===== UPC (universityId: 10) =====
  {
    id: 33,
    name: "Diego Mendoza Silva",
    photo: "/images/tutor-diego.jpg",
    universityId: 10,
    careerId: 20,
    currentSemester: 7,
    gpa: 16.8,
    bio: "Estudiante de 7mo ciclo de Ingeniería de Software en UPC. Especializado en desarrollo web y metodologías ágiles.",
    hourlyRate: 32,
    rating: 4.6,
    totalSessions: 89,
    specializations: ["Desarrollo Web", "Metodologías Ágiles", "Patrones de Diseño"],
    coursesTaught: [17], // Desarrollo de Software I
    availability: {
      monday: ["08:00", "09:00", "10:00", "11:00"],
      tuesday: ["14:00", "15:00", "16:00", "17:00"],
      wednesday: ["08:00", "09:00", "10:00", "11:00"],
      thursday: ["14:00", "15:00", "16:00", "17:00"],
      friday: ["08:00", "09:00", "10:00", "11:00"],
      saturday: ["09:00", "10:00", "11:00", "12:00"],
      sunday: ["15:00", "16:00", "17:00", "18:00"]
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "2 años",
    verificationStatus: "verified",
    joinDate: "2023-03-15",
    isActive: true
  },
  {
    id: 34,
    name: "Lucía Torres Medina",
    photo: "/images/tutor-lucia.jpg",
    universityId: 10,
    careerId: 20,
    currentSemester: 8,
    gpa: 17.0,
    bio: "Estudiante de 8vo ciclo de Ingeniería de Software en UPC. Especializada en desarrollo fullstack y metodologías ágiles.",
    hourlyRate: 34,
    rating: 4.7,
    totalSessions: 78,
    specializations: ["Desarrollo Fullstack", "React", "Node.js", "Scrum"],
    coursesTaught: [17], // Desarrollo de Software I
    availability: {
      monday: ["18:00", "19:00", "20:00", "21:00"],
      tuesday: ["18:00", "19:00", "20:00", "21:00"],
      wednesday: ["18:00", "19:00", "20:00", "21:00"],
      thursday: ["18:00", "19:00", "20:00", "21:00"],
      friday: ["18:00", "19:00", "20:00"],
      saturday: ["09:00", "10:00", "11:00", "12:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "1.5 años",
    verificationStatus: "verified",
    joinDate: "2023-07-01",
    isActive: true
  },
  {
    id: 35,
    name: "Natalia Rojas Guerrero",
    photo: "/images/tutor-natalia.jpg",
    universityId: 10,
    careerId: 20,
    currentSemester: 9,
    gpa: 17.3,
    bio: "Estudiante de 9no ciclo de Ingeniería de Software en UPC. Especializada en arquitectura de software y desarrollo de aplicaciones.",
    hourlyRate: 36,
    rating: 4.8,
    totalSessions: 123,
    specializations: ["Arquitectura de Software", "Desarrollo de Aplicaciones", "Metodologías Ágiles"],
    coursesTaught: [17], // Desarrollo de Software I
    availability: {
      monday: ["17:00", "18:00", "19:00", "20:00"],
      tuesday: ["17:00", "18:00", "19:00", "20:00"],
      wednesday: ["17:00", "18:00", "19:00", "20:00"],
      thursday: ["17:00", "18:00", "19:00", "20:00"],
      friday: ["17:00", "18:00", "19:00"],
      saturday: ["10:00", "11:00", "12:00", "13:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "2.5 años",
    verificationStatus: "verified",
    joinDate: "2022-12-01",
    isActive: true
  },

  // ===== UNTRM (universityId: 11) =====
  {
    id: 36,
    name: "Carlos Mendoza Pérez",
    photo: "/images/tutor-carlos.jpg",
    universityId: 11,
    careerId: 3,
    currentSemester: 8,
    gpa: 16.8,
    bio: "Estudiante de 8vo ciclo de Ingeniería Civil en UNTRM. Especializado en matemáticas aplicadas y física.",
    hourlyRate: 25,
    rating: 4.6,
    totalSessions: 89,
    specializations: ["Matemáticas", "Física", "Cálculo"],
    coursesTaught: [20, 21, 22], // Matemática Básica, Cálculo Diferencial, Cálculo Integral
    availability: {
      monday: ["14:00", "15:00", "16:00", "17:00"],
      tuesday: ["14:00", "15:00", "16:00", "17:00"],
      wednesday: ["14:00", "15:00", "16:00", "17:00"],
      thursday: ["14:00", "15:00", "16:00", "17:00"],
      friday: ["14:00", "15:00", "16:00"],
      saturday: ["09:00", "10:00", "11:00"],
      sunday: []
    },
    languages: ["Español"],
    teachingExperience: "2 años",
    verificationStatus: "verified",
    joinDate: "2023-05-15",
    isActive: true
  },
  {
    id: 37,
    name: "Ana Lucía Vargas Torres",
    photo: "/images/tutor-ana.jpg",
    universityId: 11,
    careerId: 3,
    currentSemester: 9,
    gpa: 17.1,
    bio: "Estudiante de 9no ciclo de Ingeniería Civil en UNTRM. Especializada en matemáticas y mecánica de fluidos.",
    hourlyRate: 28,
    rating: 4.7,
    totalSessions: 112,
    specializations: ["Matemáticas Avanzadas", "Física", "Ingeniería"],
    coursesTaught: [21, 22, 23], // Cálculo Diferencial, Cálculo Integral, Física 1
    availability: {
      monday: ["16:00", "17:00", "18:00", "19:00"],
      tuesday: ["16:00", "17:00", "18:00", "19:00"],
      wednesday: ["16:00", "17:00", "18:00", "19:00"],
      thursday: ["16:00", "17:00", "18:00", "19:00"],
      friday: ["16:00", "17:00", "18:00"],
      saturday: ["10:00", "11:00", "12:00", "13:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "2.5 años",
    verificationStatus: "verified",
    joinDate: "2023-02-20",
    isActive: true
  },
  {
    id: 38,
    name: "Miguel Ángel Rojas Díaz",
    photo: "/images/tutor-miguel.jpg",
    universityId: 11,
    careerId: 3,
    currentSemester: 7,
    gpa: 16.5,
    bio: "Estudiante de 7mo ciclo de Ingeniería Civil en UNTRM. Especializado en matemáticas básicas y cálculo.",
    hourlyRate: 22,
    rating: 4.5,
    totalSessions: 67,
    specializations: ["Matemáticas Básicas", "Cálculo", "Álgebra"],
    coursesTaught: [20, 21], // Matemática Básica, Cálculo Diferencial
    availability: {
      monday: ["15:00", "16:00", "17:00"],
      tuesday: ["15:00", "16:00", "17:00"],
      wednesday: ["15:00", "16:00", "17:00"],
      thursday: ["15:00", "16:00", "17:00"],
      friday: ["15:00", "16:00", "17:00"],
      saturday: ["08:00", "09:00", "10:00"],
      sunday: []
    },
    languages: ["Español"],
    teachingExperience: "1.5 años",
    verificationStatus: "verified",
    joinDate: "2023-08-10",
    isActive: true
  },
  {
    id: 39,
    name: "Rosa Elena Campos Núñez",
    photo: "/images/tutor-rosa.jpg",
    universityId: 11,
    careerId: 3,
    currentSemester: 10,
    gpa: 17.4,
    bio: "Estudiante de 10mo ciclo de Ingeniería Civil en UNTRM. Especializada en física aplicada y mecánica.",
    hourlyRate: 30,
    rating: 4.8,
    totalSessions: 145,
    specializations: ["Física", "Mecánica", "Matemáticas Aplicadas"],
    coursesTaught: [22, 23], // Cálculo Integral, Física 1
    availability: {
      monday: ["17:00", "18:00", "19:00", "20:00"],
      tuesday: ["17:00", "18:00", "19:00", "20:00"],
      wednesday: ["17:00", "18:00", "19:00", "20:00"],
      thursday: ["17:00", "18:00", "19:00", "20:00"],
      friday: ["17:00", "18:00", "19:00"],
      saturday: ["11:00", "12:00", "13:00", "14:00"],
      sunday: []
    },
    languages: ["Español", "Inglés"],
    teachingExperience: "3 años",
    verificationStatus: "verified",
    joinDate: "2022-11-05",
    isActive: true
  }
];

// ===== FUNCIONES DE CONSULTA =====

export const getTutorById = (id) => {
  return tutors.find(tutor => tutor.id === id && tutor.isActive);
};

export const getTutorsByUniversity = (universityId) => {
  return tutors.filter(tutor => tutor.universityId === universityId && tutor.isActive);
};

export const getTutorsByCourse = (courseId) => {
  return tutors.filter(tutor =>
    tutor.coursesTaught.includes(courseId) && tutor.isActive
  );
};

export const getTutorsAvailableAt = (day, time) => {
  return tutors.filter(tutor =>
    tutor.isActive &&
    tutor.availability[day] &&
    tutor.availability[day].includes(time)
  );
};

export const getTutorsBySpecialization = (specialization) => {
  return tutors.filter(tutor =>
    tutor.specializations.includes(specialization) && tutor.isActive
  );
};

export const getActiveTutors = () => {
  return tutors.filter(tutor => tutor.isActive);
};
