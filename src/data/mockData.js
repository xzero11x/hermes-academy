// Re-exportación de datos modulares (compatibilidad hacia atrás)
// NOTA: Este archivo se mantiene por compatibilidad, usa las importaciones directas cuando sea posible

export {
  careers,
  courses, getCareerById,
  getCareersByUniversity, getCourseById, getCoursesByUniversity, getTutorById, getTutorsByCourse, getTutorsByUniversity, getUniversityById, getUniversityStats, notifications, tutors, universities
} from './index.js';

