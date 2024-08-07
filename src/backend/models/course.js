import mongoose from 'mongoose';

// const CourseSchema = new mongoose.Schema({
//   'course-name': { type: String, required: true },
//   'course-desc': { type: String, required: true },
//   'course-vision': { type: String, required: true },
//   'course-mission': { type: String, required: true },
//   SEM1: { type: [String], required: true },
//   SEM2: { type: [String], required: true },
//   SEM3: { type: [String], required: true },
//   SEM4: { type: [String], required: true },
//   SEM5: { type: [String], required: true },
//   SEM6: { type: [String], required: true },
//   'course-pdf': { type: String, required: true },
// });



const SemesterSchema = new mongoose.Schema({
  SEM1: { type: String, required: true },
  SEM2: { type: String, required: true }
});

const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseDesc: { type: String, required: true },
  courseVision: { type: String, required: true },
  courseMission: { type: String, required: true },
  FY: { type: [SemesterSchema], required: true },
  SY: { type: [SemesterSchema], required: true },
  TY: { type: [SemesterSchema], required: true },
  coursePdf: { type: String, required: true }
});

const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema, 'course-details');

export default Course;


// const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema, 'course-details');

// export default Course
