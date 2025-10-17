import { Link } from "react-router-dom";
import { FaBook, FaUser, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { currentUser, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">EduNile</Link>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center" to="/courses">
            <FaBook className="me-1" /> Courses
          </Link>
        </li>
        {currentUser && (
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" to="/dashboard">
              <FaUser className="me-1" /> Dashboard
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center" to="/contact">
            <FaEnvelope className="me-1" /> Contact
          </Link>
        </li>
      </ul>

      <div className="d-flex ms-3">
        {!currentUser ? (
          <>
            <Link className="btn btn-light me-2" to="/login">Login</Link>
            <Link className="btn btn-warning text-dark fw-bold" to="/register">Register</Link>
          </>
        ) : (
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
}
