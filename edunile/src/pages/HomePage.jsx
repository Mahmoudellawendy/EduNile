import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center">
      <h1>Welcome to EduNile</h1>
      <p>Discover online courses and enhance your skills!</p>
      <Link to="/courses" className="btn btn-primary m-2">Explore Courses</Link>
      <Link to="/register" className="btn btn-success m-2">Join Now</Link>
    </div>
  );
}
