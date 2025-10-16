import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  return (
    <div>
      <h2 className="mb-4">All Courses</h2>
      <div className="d-flex flex-wrap gap-3">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
