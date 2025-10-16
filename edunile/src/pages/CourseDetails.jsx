import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses.json";

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) return <div className="container mt-5">Course not found</div>;

  return (
    <div className="container mt-5">
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} className="img-fluid my-3" />
      <p>{course.fullDescription}</p>
      <Link to={`/lesson/${course.id}`} className="btn btn-primary">Start Lesson</Link>
    </div>
  );
}
