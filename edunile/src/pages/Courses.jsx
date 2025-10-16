import { Link } from "react-router-dom";

export default function Courses() {
  const courses = [
    { id: 1, title: "Web Development", desc: "Learn React, JS, HTML, CSS", symbol: "💻" },
    { id: 2, title: "Data Science", desc: "Python, Pandas, ML Basics", symbol: "📊" },
    { id: 3, title: "Graphic Design", desc: "Photoshop, Illustrator, UI/UX", symbol: "🎨" },
    { id: 4, title: "Marketing", desc: "Digital Marketing, SEO, Social Media", symbol: "📣" },
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">All Courses</h1>
      <div className="row g-4">
        {courses.map(course => (
          <div className="col-12 col-sm-6 col-md-3" key={course.id}>
            <div className="card h-100 shadow-sm text-center p-3">
              {/* الرمز بدل الصورة */}
              <div style={{fontSize: "60px", marginBottom: "15px"}}>{course.symbol}</div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.desc}</p>
                <div className="mt-auto">
                  <Link to={`/courses/${course.id}`} className="btn btn-primary me-2">Details</Link>
                  <button className="btn btn-outline-success">Enroll</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
