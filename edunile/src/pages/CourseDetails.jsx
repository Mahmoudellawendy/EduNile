import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses.json";

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) return <div className="container mt-5">Course not found</div>;

  const courseSymbol = course.symbol || "📘";

  return (
    <div className="container mt-5 text-center">
      <h2>{course.title}</h2>
      <div style={{ fontSize: "100px", margin: "20px 0" }}>{courseSymbol}</div>
      <p>{course.fullDescription}</p>
      <Link to={`/lesson/${course.id}`} className="btn btn-primary">Start Lesson</Link>
    </div>
  );
}
