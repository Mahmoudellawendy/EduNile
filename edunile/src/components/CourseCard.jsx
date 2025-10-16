import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <img src={course.image} className="card-img-top" alt={course.title} />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <Link to={`/course/${course.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
}
