// Re-exportación de datos modulares (compatibilidad hacia atrás)
// NOTA: Este archivo se mantiene por compatibilidad, usa las importaciones directas cuando sea posible

export { 
  universities, 
  careers, 
  courses, 
  tutors, 
  studentData, 
  notifications,
  getUniversityById,
  getCoursesByUniversity,
  getTutorsByUniversity,
  getTutorsByCourse,
  getCourseById,
  getTutorById,
  getCareerById,
  getCareersByUniversity,
  getUniversityStats
} from './index.js';
