import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to EduNile</h1>
        <p className="lead">Your Egyptian E-Learning Platform</p>
        <Link to="/courses" className="btn btn-primary btn-lg mx-2">Explore Courses</Link>
        <Link to="/register" className="btn btn-warning btn-lg mx-2">Join Now</Link>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src="https://via.placeholder.com/300x150" className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">Learn HTML, CSS, JS, and React with interactive lessons.</p>
              <Link to="/courses" className="btn btn-success me-2">View Course</Link>
              <button className="btn btn-outline-primary">Wishlist</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src="https://via.placeholder.com/300x150" className="card-img-top" alt="Course 2" />
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">Dive into Python, Pandas, NumPy, and Machine Learning.</p>
              <Link to="/courses" className="btn btn-info me-2">View Course</Link>
              <button className="btn btn-outline-warning">Wishlist</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src="https://via.placeholder.com/300x150" className="card-img-top" alt="Course 3" />
            <div className="card-body">
              <h5 className="card-title">Graphic Design</h5>
              <p className="card-text">Master Photoshop, Illustrator, and UI/UX design basics.</p>
              <Link to="/courses" className="btn btn-danger me-2">View Course</Link>
              <button className="btn btn-outline-success">Wishlist</button>
            </div>
          </div>
        </div>
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
