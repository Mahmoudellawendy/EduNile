import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{course.title}</h2>
      <p className="text-sm text-gray-600">By {course.instructor}</p>
      <p className="text-yellow-600 font-medium mt-2">⭐ {course.rating}</p>
      <div className="mt-3 flex gap-2">
        <Link to={`/courses/${course.id}`} className="px-3 py-2 bg-blue-600 text-white rounded-md">Details</Link>
        <button className="px-3 py-2 border rounded-md">Save</button>
      </div>
    </div>
  );
}
