import { Link } from "react-router-dom";
import { FaHome, FaBook, FaUser, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { currentUser, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2563EB" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          EduNile
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/">
                <FaHome className="me-1" /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/courses">
                <FaBook className="me-1" /> Courses
              </Link>
            </li>

            {/* Dashboard يظهر فقط لو المستخدم داخل */}
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

          <div className="d-flex">
            {!currentUser ? (
              <>
                <Link className="btn btn-light me-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-warning text-dark fw-bold" to="/register">
                  Register
                </Link>
              </>
            ) : (
              <button className="btn btn-danger" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
