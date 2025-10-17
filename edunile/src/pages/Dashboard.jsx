import { FaBookOpen, FaUserCircle, FaTrophy, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Dashboard() {
  const { currentUser, logout } = useContext(UserContext);

  if (!currentUser) {
    return (
      <div className="text-center mt-5">
        <h2>Please log in to access your dashboard.</h2>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <FaUserCircle size={80} color="#2563EB" />
        <h2 className="mt-3">Welcome, {currentUser.name || "Student"} 👋</h2>
        <p className="text-muted">Manage your learning progress below</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm text-center p-4">
            <FaBookOpen size={40} color="#0D6EFD" className="mb-3" />
            <h5>My Courses</h5>
            <p>You are enrolled in 3 courses</p>
            <button className="btn btn-primary w-100">View Courses</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center p-4">
            <FaTrophy size={40} color="#FFD700" className="mb-3" />
            <h5>Achievements</h5>
            <p>You’ve completed 5 lessons 🎯</p>
            <button className="btn btn-warning w-100 text-dark">View Achievements</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center p-4">
            <FaSignOutAlt size={40} color="#DC3545" className="mb-3" />
            <h5>Account</h5>
            <p>Manage your profile or log out</p>
            <button className="btn btn-danger w-100" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
