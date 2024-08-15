import mongoose from 'mongoose';




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
