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
    name: "Introducción a la Programación",
    code: "CS1001",
    universityId: 1,
    careerId: 1,
    cycle: 1,
    credits: 4,
    area: "Programación",
    description: "Fundamentos de programación usando Python. Introducción a algoritmos, estructuras de control y paradigmas de programación.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 2,
    name: "Cálculo Diferencial",
    code: "MA1001",
    universityId: 1,
    careerId: 1,
    cycle: 1,
    credits: 4,
    area: "Matemáticas",
    description: "Límites, derivadas y aplicaciones en ingeniería. Enfoque práctico orientado a problemas de ingeniería.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 3,
    name: "Estructuras de Datos",
    code: "CS2001",
    universityId: 1,
    careerId: 1,
    cycle: 3,
    credits: 4,
    area: "Programación",
    description: "Algoritmos y estructuras de datos fundamentales. Implementación práctica en Python.",
    prerequisites: [1],
    isActive: true
  },

  // ===== UNMSM (universityId: 2) =====
  {
    id: 4,
    name: "Anatomía Humana I",
    code: "MED101",
    universityId: 2,
    careerId: 5,
    cycle: 1,
    credits: 5,
    area: "Medicina",
    description: "Estudio de la estructura del cuerpo humano. Sistema músculo-esquelético y nervioso.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 5,
    name: "Fisiología Humana I",
    code: "MED201",
    universityId: 2,
    careerId: 5,
    cycle: 2,
    credits: 4,
    area: "Medicina",
    description: "Funcionamiento de los sistemas corporales. Homeostasis y regulación fisiológica.",
    prerequisites: [4],
    isActive: true
  },
  {
    id: 6,
    name: "Contabilidad General I",
    code: "CON101",
    universityId: 2,
    careerId: 9,
    cycle: 1,
    credits: 4,
    area: "Contabilidad",
    description: "Principios fundamentales de contabilidad. Estados financieros básicos.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 7,
    name: "Matemática Financiera",
    code: "FIN101",
    universityId: 2,
    careerId: 9,
    cycle: 2,
    credits: 3,
    area: "Finanzas",
    description: "Interés simple y compuesto. Anualidades y amortización.",
    prerequisites: [],
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
    name: "Algoritmos y Programación",
    code: "CS101",
    universityId: 4,
    careerId: 3,
    cycle: 2,
    credits: 4,
    area: "Programación",
    description: "Diseño y análisis de algoritmos. Programación estructurada.",
    prerequisites: [],
    isActive: true
  },
  {
    id: 11,
    name: "Cálculo I",
    code: "MA101",
    universityId: 4,
    careerId: 3,
    cycle: 1,
    credits: 4,
    area: "Matemáticas",
    description: "Funciones, límites y derivadas.",
    prerequisites: [],
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

  // ===== UPCH (universityId: 6) =====
  {
    id: 13,
    name: "Bioquímica Médica",
    code: "MED201",
    universityId: 6,
    careerId: 6,
    cycle: 3,
    credits: 5,
    area: "Ciencias Básicas",
    description: "Estudio de los procesos bioquímicos en el organismo humano y su aplicación clínica.",
    prerequisites: [4],
    isActive: true
  },

  // ===== UCV (universityId: 7) =====
  {
    id: 14,
    name: "Psicología General",
    code: "PSI101",
    universityId: 7,
    careerId: 7,
    cycle: 1,
    credits: 3,
    area: "Psicología Básica",
    description: "Introducción a los conceptos fundamentales de la psicología como ciencia del comportamiento humano.",
    prerequisites: [],
    isActive: true
  },

  // ===== UDEP (universityId: 8) =====
  {
    id: 15,
    name: "Introducción al Derecho",
    code: "DER101",
    universityId: 8,
    careerId: 8,
    cycle: 1,
    credits: 4,
    area: "Derecho Básico",
    description: "Conceptos fundamentales del derecho, fuentes del derecho y introducción al sistema jurídico peruano.",
    prerequisites: [],
    isActive: true
  },

  // ===== UP (universityId: 9) =====
  {
    id: 16,
    name: "Microeconomía I",
    code: "ECO201",
    universityId: 9,
    careerId: 9,
    cycle: 2,
    credits: 4,
    area: "Economía",
    description: "Análisis del comportamiento de agentes económicos individuales: consumidores y empresas.",
    prerequisites: [7],
    isActive: true
  },

  // ===== UPC (universityId: 10) =====
  {
    id: 17,
    name: "Desarrollo de Software I",
    code: "SI184",
    universityId: 10,
    careerId: 5,
    cycle: 3,
    credits: 4,
    area: "Desarrollo",
    description: "Fundamentos del desarrollo de software, metodologías ágiles y patrones de diseño.",
    prerequisites: [8],
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
