// Script temporal para analizar la distribución de tutores
const { universities } = require('./src/data/improved/universities.js');
const { courses } = require('./src/data/improved/courses.js');
const { tutors } = require('./src/data/improved/tutors.js');

console.log('=== TUTOR DISTRIBUTION ANALYSIS ===\n');

// Extract course IDs from tutors
const allCourseIds = new Set();
tutors.forEach(tutor => {
  tutor.coursesTaught.forEach(course => {
    allCourseIds.add(course.courseId);
  });
});

console.log('Tutors per Course:');
courses.forEach(course => {
  const courseTutors = tutors.filter(tutor =>
    tutor.coursesTaught.some(taught => taught.courseId === course.id)
  );
  const status = courseTutors.length >= 3 ? '✓' : '✗';
  console.log(`  ${status} Course ${course.id} (${course.name}): ${courseTutors.length} tutors`);
});

console.log('\nCourses and Tutors per University:');
universities.forEach(uni => {
  const uniCourses = courses.filter(course => course.universityId === uni.id);
  const uniTutors = tutors.filter(tutor => tutor.academicInfo.universityId === uni.id);
  const courseStatus = uniCourses.length >= 1 ? '✓' : '✗';
  const tutorStatus = uniTutors.length >= 1 ? '✓' : '✗';
  console.log(`  ${courseStatus}${tutorStatus} ${uni.shortName}: ${uniCourses.length} courses, ${uniTutors.length} tutors`);
});

console.log('\n=== SUMMARY ===');
const coursesNeedingTutors = courses.filter(course => {
  const courseTutors = tutors.filter(tutor =>
    tutor.coursesTaught.some(taught => taught.courseId === course.id)
  );
  return courseTutors.length < 3;
});

console.log(`Courses needing more tutors: ${coursesNeedingTutors.length}`);
coursesNeedingTutors.forEach(course => {
  const currentTutors = tutors.filter(tutor =>
    tutor.coursesTaught.some(taught => taught.courseId === course.id)
  ).length;
  console.log(`  - Course ${course.id} (${course.name}): needs ${3 - currentTutors} more tutors`);
});
