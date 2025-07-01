// Validador de consistencia de datos
import { universities } from './universities.js';
import { careers } from './careers.js';
import { courses } from './courses.js';
import { tutors } from './tutors.js';

// Función para validar referencias entre entidades
export function validateDataConsistency() {
  const errors = [];
  
  // Validar que todos los universityId en courses existan en universities
  courses.forEach(course => {
    const university = universities.find(uni => uni.id === course.universityId);
    if (!university) {
      errors.push(`Course ${course.id} references non-existent university ${course.universityId}`);
    }
  });
  
  // Validar que todos los careerId en courses existan en careers
  courses.forEach(course => {
    const career = careers.find(car => car.id === course.careerId);
    if (!career) {
      errors.push(`Course ${course.id} references non-existent career ${course.careerId}`);
    }
  });
  
  // Validar que todos los coursesTaught en tutors existan en courses
  tutors.forEach(tutor => {
    tutor.coursesTaught.forEach(courseId => {
      const course = courses.find(c => c.id === courseId);
      if (!course) {
        errors.push(`Tutor ${tutor.id} teaches non-existent course ${courseId}`);
      }
    });
  });
  
  // Validar que todos los universityId en tutors existan en universities
  tutors.forEach(tutor => {
    const university = universities.find(uni => uni.id === tutor.universityId);
    if (!university) {
      errors.push(`Tutor ${tutor.id} references non-existent university ${tutor.universityId}`);
    }
  });
  
  // Validar que todos los careerId en tutors existan en careers
  tutors.forEach(tutor => {
    const career = careers.find(car => car.id === tutor.careerId);
    if (!career) {
      errors.push(`Tutor ${tutor.id} references non-existent career ${tutor.careerId}`);
    }
  });
  
  // Validar que todos los universityId en careers existan en universities
  careers.forEach(career => {
    const university = universities.find(uni => uni.id === career.universityId);
    if (!university) {
      errors.push(`Career ${career.id} references non-existent university ${career.universityId}`);
    }
  });
  
  return errors;
}

// Función para validar tipos de datos
export function validateDataTypes() {
  const errors = [];
  
  // Validar universities
  universities.forEach(uni => {
    if (typeof uni.id !== 'number') errors.push(`University ${uni.id} has invalid id type`);
    if (typeof uni.name !== 'string') errors.push(`University ${uni.id} has invalid name type`);
    if (typeof uni.logo !== 'string') errors.push(`University ${uni.id} has invalid logo type`);
  });
  
  // Validar courses
  courses.forEach(course => {
    if (typeof course.id !== 'number') errors.push(`Course ${course.id} has invalid id type`);
    if (typeof course.cycle !== 'number') errors.push(`Course ${course.id} has invalid cycle type`);
    if (typeof course.credits !== 'number') errors.push(`Course ${course.id} has invalid credits type`);
    if (!Array.isArray(course.prerequisites)) errors.push(`Course ${course.id} has invalid prerequisites type`);
  });
  
  // Validar tutors
  tutors.forEach(tutor => {
    if (typeof tutor.id !== 'number') errors.push(`Tutor ${tutor.id} has invalid id type`);
    if (typeof tutor.rating !== 'number') errors.push(`Tutor ${tutor.id} has invalid rating type`);
    if (typeof tutor.hourlyRate !== 'number') errors.push(`Tutor ${tutor.id} has invalid hourlyRate type`);
    if (!Array.isArray(tutor.coursesTaught)) errors.push(`Tutor ${tutor.id} has invalid coursesTaught type`);
  });
  
  return errors;
}

// Ejecutar validaciones al importar
if (typeof window === 'undefined') { // Solo en servidor
  const refErrors = validateDataConsistency();
  const typeErrors = validateDataTypes();
  
  if (refErrors.length > 0 || typeErrors.length > 0) {
    console.warn('🚨 Data consistency issues found:');
    [...refErrors, ...typeErrors].forEach(error => console.warn(`  - ${error}`));
  } else {
    console.log('✅ Data consistency validation passed');
  }
}
