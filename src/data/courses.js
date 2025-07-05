/**
 * CURSOS - Estructura mejorada
 * 
 * Modelo de datos para cursos específicos por universidad
 * Relación: Una universidad puede tener muchos cursos, un curso pertenece a una universidad
 */

export const courses = [
  // ===== UTEC (universityId: 1) =====
  {
    id: 1,
    name: "Cálculo de una Variable",
    code: "MA1001",
    universityId: 1,
    careerId: 1,
    cycle: 1,
    credits: 4,
    area: "Matemáticas",
    description: "Límites, derivadas e integrales de funciones de una variable. Aplicaciones en ingeniería.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 2,
    name: "Introducción a la Mecánica",
    code: "FI1001",
    universityId: 1,
    careerId: 1,
    cycle: 2,
    credits: 4,
    area: "Física",
    description: "Principios fundamentales de la mecánica clásica. Cinemática, dinámica y estática.",
    prerequisites: [1],
    isActive: true
  },
  {
    id: 3,
    name: "Química General",
    code: "QU1001",
    universityId: 1,
    careerId: 1,
    cycle: 1,
    credits: 4,
    area: "Química",
    description: "Principios básicos de química: estructura atómica, enlaces químicos y reacciones.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 18,
    name: "Ecuaciones Diferenciales",
    code: "MA2001",
    universityId: 1,
    careerId: 1,
    cycle: 3,
    credits: 4,
    area: "Matemáticas",
    description: "Ecuaciones diferenciales ordinarias y parciales. Métodos de resolución y aplicaciones.",
    prerequisites: [1],
    isActive: true
  },

  // ===== PUCP (universityId: 3) =====
  {
    id: 8,
    name: "Fundamentos de Programación",
    code: "INF100",
    universityId: 3,
    careerId: 2,
    cycle: 1,
    credits: 4,
    area: "Programación",
    description: "Introducción a la programación con enfoque en resolución de problemas.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 9,
    name: "Cálculo I",
    code: "MAT100",
    universityId: 3,
    careerId: 2,
    cycle: 1,
    credits: 4,
    area: "Matemáticas",
    description: "Límites, derivadas e integrales básicas.",
    prerequisites: [],
    isActive: true
  },

  // ===== UNI (universityId: 4) =====
  {
    id: 10,
    name: "Cálculo 1",
    code: "MA101",
    universityId: 4,
    careerId: 3,
    cycle: 1,
    credits: 4,
    area: "Matemáticas",
    description: "Funciones, límites, derivadas e integrales de funciones de una variable.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 11,
    name: "Física 1",
    code: "FI101",
    universityId: 4,
    careerId: 3,
    cycle: 2,
    credits: 4,
    area: "Física",
    description: "Mecánica clásica: cinemática, dinámica, trabajo y energía.",
    prerequisites: [10],
    isActive: true
  },
  {
    id: 19,
    name: "Ecuaciones Diferenciales de una Variable",
    code: "MA201",
    universityId: 4,
    careerId: 3,
    cycle: 3,
    credits: 4,
    area: "Matemáticas",
    description: "Ecuaciones diferenciales ordinarias de primera y segunda orden. Métodos analíticos y numéricos.",
    prerequisites: [10],
    isActive: true
  },

  // ===== UL (universityId: 5) =====
  {
    id: 12,
    name: "Algoritmos y Programación",
    code: "ING101",
    universityId: 5,
    careerId: 4,
    cycle: 2,
    credits: 4,
    area: "Programación",
    description: "Programación orientada a objetos con Java.",
    prerequisites: [],
    isActive: true
  },

  // ===== UPC (universityId: 10) =====
  {
    id: 17,
    name: "Desarrollo de Software I",
    code: "SI184",
    universityId: 10,
    careerId: 20,
    cycle: 3,
    credits: 4,
    area: "Desarrollo",
    description: "Fundamentos del desarrollo de software, metodologías ágiles y patrones de diseño.",
    prerequisites: [8],
    isActive: true
  },

  // ===== UNTRM (universityId: 11) =====
  {
    id: 20,
    name: "Matemática Básica",
    code: "MA001",
    universityId: 11,
    careerId: 3,
    cycle: 1,
    credits: 4,
    area: "Matemáticas",
    description: "Fundamentos matemáticos: álgebra, geometría analítica y trigonometría.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 21,
    name: "Cálculo Diferencial",
    code: "MA101",
    universityId: 11,
    careerId: 3,
    cycle: 2,
    credits: 4,
    area: "Matemáticas",
    description: "Límites, continuidad y derivadas de funciones de una variable.",
    prerequisites: [20],
    isActive: true
  },
  {
    id: 22,
    name: "Cálculo Integral",
    code: "MA102",
    universityId: 11,
    careerId: 3,
    cycle: 3,
    credits: 4,
    area: "Matemáticas",
    description: "Integrales definidas e indefinidas. Aplicaciones de la integral.",
    prerequisites: [21],
    isActive: true
  },
  {
    id: 23,
    name: "Física 1",
    code: "FI101",
    universityId: 11,
    careerId: 3,
    cycle: 3,
    credits: 4,
    area: "Física",
    description: "Mecánica de partículas y sistemas. Principios de conservación.",
    prerequisites: [21],
    isActive: true
  }
];

// ===== FUNCIONES DE CONSULTA =====

export const getCourseById = (id) => {
  return courses.find(course => course.id === id && course.isActive);
};

export const getCoursesByUniversity = (universityId) => {
  return courses.filter(course => course.universityId === universityId && course.isActive);
};

export const getCoursesByCareer = (careerId) => {
  return courses.filter(course => course.careerId === careerId && course.isActive);
};

export const searchCourses = (query) => {
  const searchTerm = query.toLowerCase();
  return courses.filter(course =>
    course.isActive && (
      course.name.toLowerCase().includes(searchTerm) ||
      course.code.toLowerCase().includes(searchTerm) ||
      course.area.toLowerCase().includes(searchTerm)
    )
  );
};

export const getActiveCourses = () => {
  return courses.filter(course => course.isActive);
};
