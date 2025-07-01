// Funciones auxiliares ultra-optimizadas usando índices pre-calculados
import { 
  UNIVERSITIES_MAP, 
  COURSES_MAP, 
  TUTORS_MAP, 
  CAREERS_MAP,
  COURSES_BY_UNIVERSITY,
  TUTORS_BY_UNIVERSITY,
  TUTORS_BY_COURSE,
  CAREERS_BY_UNIVERSITY,
  getUniversityStatsOptimized
} from './constants.js';

// Funciones optimizadas con acceso O(1)
export function getUniversityByIdFast(id) {
  return UNIVERSITIES_MAP.get(id);
}

export function getCourseByIdFast(id) {
  return COURSES_MAP.get(id);
}

export function getTutorByIdFast(id) {
  return TUTORS_MAP.get(id);
}

export function getCareerByIdFast(id) {
  return CAREERS_MAP.get(id);
}

// Funciones optimizadas con índices pre-calculados
export function getCoursesByUniversityFast(universityId) {
  return COURSES_BY_UNIVERSITY[universityId] || [];
}

export function getTutorsByUniversityFast(universityId) {
  return TUTORS_BY_UNIVERSITY[universityId] || [];
}

export function getTutorsByCourseFast(courseId) {
  return TUTORS_BY_COURSE[courseId] || [];
}

export function getCareersByUniversityFast(universityId) {
  return CAREERS_BY_UNIVERSITY[universityId] || [];
}

export function getUniversityStatsFast(universityId) {
  return getUniversityStatsOptimized(universityId);
}
