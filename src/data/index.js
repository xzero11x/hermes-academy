// Funciones auxiliares para acceso a datos optimizadas con cache
import { dataCache } from './cache.js';
import { careers } from './careers.js';
import { courses } from './courses.js';
import { notifications } from './notifications.js';
import { tutors } from './tutors.js';
import { universities } from './universities.js';

// Importar validador de consistencia de datos
import './validator.js';

// Re-exportar todos los datos
export { careers, courses, notifications, tutors, universities };

// Funciones auxiliares optimizadas con cache
export function getUniversityById(id) {
  const cacheKey = `university_${id}`;
  let university = dataCache.get(cacheKey);

  if (!university) {
    university = universities.find(uni => uni.id === id);
    if (university) {
      dataCache.set(cacheKey, university);
    }
  }

  return university;
}

export function getCoursesByUniversity(universityId) {
  const cacheKey = `courses_by_university_${universityId}`;
  let universityCourses = dataCache.get(cacheKey);

  if (!universityCourses) {
    universityCourses = courses.filter(course => course.universityId === universityId);
    dataCache.set(cacheKey, universityCourses);
  }

  return universityCourses;
}

export function getTutorsByUniversity(universityId) {
  const cacheKey = `tutors_by_university_${universityId}`;
  let universityTutors = dataCache.get(cacheKey);

  if (!universityTutors) {
    universityTutors = tutors.filter(tutor => tutor.universityId === universityId);
    dataCache.set(cacheKey, universityTutors);
  }

  return universityTutors;
}

export function getTutorsByCourse(courseId) {
  const cacheKey = `tutors_by_course_${courseId}`;
  let courseTutors = dataCache.get(cacheKey);

  if (!courseTutors) {
    courseTutors = tutors.filter(tutor => tutor.coursesTaught.includes(courseId));
    dataCache.set(cacheKey, courseTutors);
  }

  return courseTutors;
}

export function getCourseById(id) {
  const cacheKey = `course_${id}`;
  let course = dataCache.get(cacheKey);

  if (!course) {
    course = courses.find(course => course.id === id);
    if (course) {
      dataCache.set(cacheKey, course);
    }
  }

  return course;
}

export function getTutorById(id) {
  const cacheKey = `tutor_${id}`;
  let tutor = dataCache.get(cacheKey);

  if (!tutor) {
    tutor = tutors.find(tutor => tutor.id === id);
    if (tutor) {
      dataCache.set(cacheKey, tutor);
    }
  }

  return tutor;
}

export function getCareerById(id) {
  const cacheKey = `career_${id}`;
  let career = dataCache.get(cacheKey);

  if (!career) {
    career = careers.find(career => career.id === id);
    if (career) {
      dataCache.set(cacheKey, career);
    }
  }

  return career;
}

export function getCareersByUniversity(universityId) {
  const cacheKey = `careers_by_university_${universityId}`;
  let universityCareers = dataCache.get(cacheKey);

  if (!universityCareers) {
    universityCareers = careers.filter(career => career.universityId === universityId);
    dataCache.set(cacheKey, universityCareers);
  }

  return universityCareers;
}

export function getUniversityStats(universityId) {
  const cacheKey = `university_stats_${universityId}`;
  let stats = dataCache.get(cacheKey);

  if (!stats) {
    const universityCourses = getCoursesByUniversity(universityId);
    const universityTutors = getTutorsByUniversity(universityId);
    const universityCareers = getCareersByUniversity(universityId);

    stats = {
      coursesCount: universityCourses.length,
      tutorsCount: universityTutors.length,
      careersCount: universityCareers.length,
      averageRating: universityTutors.length > 0
        ? universityTutors.reduce((sum, tutor) => sum + tutor.rating, 0) / universityTutors.length
        : 0
    };

    dataCache.set(cacheKey, stats);
  }

  return stats;
}
