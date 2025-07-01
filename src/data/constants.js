// Constantes pre-calculadas para mejorar performance
import { universities, courses, tutors, careers } from './index.js';

// Pre-calcular estadísticas que no cambian frecuentemente
export const UNIVERSITY_STATS_PRECALCULATED = {};
export const TOTAL_STATS = {
  universitiesCount: 0,
  coursesCount: 0,
  tutorsCount: 0,
  careersCount: 0,
  averageRating: 0
};

// Función para inicializar estadísticas pre-calculadas
function initializeStats() {
  let totalRating = 0;
  let totalTutors = 0;

  universities.forEach(university => {
    const universityCourses = courses.filter(course => course.universityId === university.id);
    const universityTutors = tutors.filter(tutor => tutor.universityId === university.id);
    const universityCareers = careers.filter(career => career.universityId === university.id);
    
    const universityRating = universityTutors.length > 0 
      ? universityTutors.reduce((sum, tutor) => sum + tutor.rating, 0) / universityTutors.length 
      : 0;

    UNIVERSITY_STATS_PRECALCULATED[university.id] = {
      coursesCount: universityCourses.length,
      tutorsCount: universityTutors.length,
      careersCount: universityCareers.length,
      averageRating: universityRating
    };

    totalRating += universityRating * universityTutors.length;
    totalTutors += universityTutors.length;
  });

  // Calcular estadísticas globales
  TOTAL_STATS.universitiesCount = universities.length;
  TOTAL_STATS.coursesCount = courses.length;
  TOTAL_STATS.tutorsCount = tutors.length;
  TOTAL_STATS.careersCount = careers.length;
  TOTAL_STATS.averageRating = totalTutors > 0 ? totalRating / totalTutors : 0;
}

// Inicializar al cargar el módulo
initializeStats();

// Función optimizada para obtener estadísticas
export function getUniversityStatsOptimized(universityId) {
  return UNIVERSITY_STATS_PRECALCULATED[universityId] || {
    coursesCount: 0,
    tutorsCount: 0,
    careersCount: 0,
    averageRating: 0
  };
}

// Mapas para acceso O(1)
export const UNIVERSITIES_MAP = new Map(universities.map(uni => [uni.id, uni]));
export const COURSES_MAP = new Map(courses.map(course => [course.id, course]));
export const TUTORS_MAP = new Map(tutors.map(tutor => [tutor.id, tutor]));
export const CAREERS_MAP = new Map(careers.map(career => [career.id, career]));

// Índices para consultas frecuentes
export const COURSES_BY_UNIVERSITY = {};
export const TUTORS_BY_UNIVERSITY = {};
export const TUTORS_BY_COURSE = {};
export const CAREERS_BY_UNIVERSITY = {};

universities.forEach(university => {
  COURSES_BY_UNIVERSITY[university.id] = courses.filter(course => course.universityId === university.id);
  TUTORS_BY_UNIVERSITY[university.id] = tutors.filter(tutor => tutor.universityId === university.id);
  CAREERS_BY_UNIVERSITY[university.id] = careers.filter(career => career.universityId === university.id);
});

courses.forEach(course => {
  TUTORS_BY_COURSE[course.id] = tutors.filter(tutor => tutor.coursesTaught.includes(course.id));
});
