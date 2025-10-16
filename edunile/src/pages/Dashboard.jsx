import coursesData from "../data/courses.json";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Your Dashboard</h2>
      <div className="row g-4">
        {coursesData.map(course => (
          <div className="col-12 col-sm-6 col-md-4" key={course.id}>
            <div className="card shadow-sm h-100 text-center p-3">
              {/* الرمز بدل الصورة */}
              <div style={{fontSize: "60px", marginBottom: "15px"}}>{course.symbol || "📘"}</div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.desc || ""}</p>
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
