import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="card shadow-sm h-100">
      <img src={course.image} className="card-img-top" alt={course.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <div className="mt-auto">
          <Link to={`/courses/${course.id}`} className="btn btn-primary me-2">View Details</Link>
          <button className="btn btn-secondary">Wishlist</button>
        </div>
      </div>
    </div>
  );
}
