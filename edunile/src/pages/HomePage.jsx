import { Link } from "react-router-dom";

export default function HomePage() {
  const featuredCourses = [
    { id: 1, title: "Web Development", desc: "Learn HTML, CSS, JS, and React with interactive lessons.", symbol: "💻" },
    { id: 2, title: "Data Science", desc: "Dive into Python, Pandas, NumPy, and Machine Learning.", symbol: "📊" },
    { id: 3, title: "Graphic Design", desc: "Master Photoshop, Illustrator, and UI/UX design basics.", symbol: "🎨" },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to EduNile</h1>
        <p className="lead">Your Egyptian E-Learning Platform</p>
        <Link to="/courses" className="btn btn-primary btn-lg mx-2">Explore Courses</Link>
        <Link to="/register" className="btn btn-warning btn-lg mx-2">Join Now</Link>
      </div>

      <div className="row g-4">
        {featuredCourses.map(course => (
          <div className="col-md-4" key={course.id}>
            <div className="card shadow-sm text-center p-3">
              {/* الرمز بدل الصورة */}
              <div style={{fontSize: "60px", marginBottom: "15px"}}>{course.symbol}</div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.desc}</p>
                <div className="mt-auto">
                  <Link to="/courses" className="btn btn-success me-2">View Course</Link>
                  <button className="btn btn-outline-primary">Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-5 text-center">
        <h2>Special Offers</h2>
        <button className="btn btn-warning m-2">50% Off Web Dev</button>
        <button className="btn btn-success m-2">Free Data Science Trial</button>
        <button className="btn btn-primary m-2">Graphic Design Bundle</button>
      </div>
    </div>
  );
}
