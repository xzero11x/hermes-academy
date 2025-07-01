// Cursos disponibles por universidad y carrera
export const courses = [
  // UTEC - Ingeniería de Sistemas
  { 
    id: 1, 
    name: "Introducción a la Programación", 
    code: "CS1001", 
    universityId: 1, 
    careerId: 1, 
    cycle: 1, 
    credits: 4, 
    area: "Programación",
    description: "Fundamentos de programación usando Python",
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
    description: "Límites, derivadas y aplicaciones",
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
    description: "Algoritmos y estructuras de datos fundamentales",
    prerequisites: [1],
    isActive: true
  },
  
  // UNMSM - Medicina
  { 
    id: 4, 
    name: "Anatomía Humana I", 
    code: "MH1001", 
    universityId: 2, 
    careerId: 5, 
    cycle: 1, 
    credits: 6, 
    area: "Ciencias Básicas",
    description: "Estudio de la estructura del cuerpo humano",
    prerequisites: [],
    isActive: true
  },
  { 
    id: 5, 
    name: "Bioquímica", 
    code: "MH1002", 
    universityId: 2, 
    careerId: 5, 
    cycle: 2, 
    credits: 5, 
    area: "Ciencias Básicas",
    description: "Procesos químicos en los seres vivos",
    prerequisites: [],
    isActive: true
  },
  
  // UNMSM - Contabilidad
  { 
    id: 6, 
    name: "Contabilidad General I", 
    code: "CO1001", 
    universityId: 2, 
    careerId: 9, 
    cycle: 1, 
    credits: 4, 
    area: "Contabilidad",
    description: "Principios fundamentales de la contabilidad",
    prerequisites: [],
    isActive: true
  },
  { 
    id: 7, 
    name: "Matemática Financiera", 
    code: "MA2001", 
    universityId: 2, 
    careerId: 9, 
    cycle: 3, 
    credits: 3, 
    area: "Matemáticas",
    description: "Cálculos financieros y valor del dinero en el tiempo",
    prerequisites: [],
    isActive: true
  },
  
  // PUCP - Ingeniería Informática
  { 
    id: 8, 
    name: "Programación 1", 
    code: "INF239", 
    universityId: 3, 
    careerId: 10, 
    cycle: 1, 
    credits: 4, 
    area: "Programación",
    description: "Introducción a la programación en Java",
    prerequisites: [],
    isActive: true
  },
  { 
    id: 9, 
    name: "Cálculo en una Variable", 
    code: "MAT1640", 
    universityId: 3, 
    careerId: 10, 
    cycle: 1, 
    credits: 4, 
    area: "Matemáticas",
    description: "Cálculo diferencial e integral",
    prerequisites: [],
    isActive: true
  },
  { 
    id: 10, 
    name: "Algoritmos y Estructuras de Datos", 
    code: "INF245", 
    universityId: 3, 
    careerId: 10, 
    cycle: 3, 
    credits: 4, 
    area: "Programación",
    description: "Diseño y análisis de algoritmos",
    prerequisites: [8],
    isActive: true
  },
  
  // UNI - Ingeniería de Sistemas
  { 
    id: 11, 
    name: "Algoritmica I", 
    code: "CC112", 
    universityId: 4, 
    careerId: 14, 
    cycle: 1, 
    credits: 4, 
    area: "Programación",
    description: "Fundamentos de algoritmos y programación en C++",
    prerequisites: [],
    isActive: true
  },
  { 
    id: 12, 
    name: "Cálculo I", 
    code: "MB110", 
    universityId: 4, 
    careerId: 14, 
    cycle: 1, 
    credits: 4, 
    area: "Matemáticas",
    description: "Funciones, límites y derivadas",
    prerequisites: [],
    isActive: true
  },
  
  // Universidad de Lima - Administración
  { 
    id: 13, 
    name: "Introducción a los Negocios", 
    code: "AD101", 
    universityId: 5, 
    careerId: 17, 
    cycle: 1, 
    credits: 3, 
    area: "Administración",
    description: "Conceptos básicos del mundo empresarial",
    prerequisites: [],
    isActive: true
  },
  { 
    id: 14, 
    name: "Marketing Fundamentos", 
    code: "MK201", 
    universityId: 5, 
    careerId: 17, 
    cycle: 3, 
    credits: 4, 
    area: "Marketing",
    description: "Principios y estrategias de marketing",
    prerequisites: [13],
    isActive: true
  },
  
  // UPC - Ingeniería de Software
  { 
    id: 15, 
    name: "Fundamentos de Programación", 
    code: "SI106", 
    universityId: 10, 
    careerId: 20, 
    cycle: 1, 
    credits: 4, 
    area: "Programación",
    description: "Programación orientada a objetos con Java",
    prerequisites: [],
    isActive: true
  },
  { 
    id: 16, 
    name: "Matemática Discreta", 
    code: "MA262", 
    universityId: 10, 
    careerId: 20, 
    cycle: 2, 
    credits: 4, 
    area: "Matemáticas",
    description: "Lógica, conjuntos y grafos aplicados a la computación",
    prerequisites: [],
    isActive: true
  }
];
