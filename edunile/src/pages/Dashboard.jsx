import coursesData from "../data/courses.json";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Dashboard</h2>
      <div className="row">
        {coursesData.map(course => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card shadow-sm h-100">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <div className="mt-auto">
                  <Link to={`/lesson/${course.id}`} className="btn btn-primary me-2">Continue Learning</Link>
                  <button className="btn btn-warning">Rate Course</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
