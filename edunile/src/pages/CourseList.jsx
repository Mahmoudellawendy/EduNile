import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  const courseSymbol = course.symbol || "📘";

  return (
    <div className="card shadow-sm h-100 text-center p-3">
      <div style={{ fontSize: "60px", marginBottom: "15px" }}>{courseSymbol}</div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.desc}</p>
        <div className="mt-auto">
          <Link to={`/courses/${course.id}`} className="btn btn-primary me-2">View Details</Link>
          <button className="btn btn-secondary">Wishlist</button>
        </div>
      </div>
    </div>
  );
}
