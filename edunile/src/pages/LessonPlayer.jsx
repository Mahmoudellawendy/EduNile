import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses.json";

export default function LessonPlayer() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) return <div className="container mt-5">Lesson not found</div>;

  return (
    <div className="container mt-5">
      <h2>{course.title} - Lesson Player</h2>
      <div className="ratio ratio-16x9 my-3">
        <iframe src={course.video} title={course.title} allowFullScreen></iframe>
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/courses" className="btn btn-secondary">Back to Courses</Link>
        <Link to={`/dashboard`} className="btn btn-primary">Go to Dashboard</Link>
      </div>
    </div>
  );
}
