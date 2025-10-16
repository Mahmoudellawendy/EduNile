import courses from "../data/courses.json";
import CourseCard from "../components/CourseCard";

export default function CourseList() {
  return (
    <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
