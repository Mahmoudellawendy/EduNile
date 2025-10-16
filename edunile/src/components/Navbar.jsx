import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("enrolledCourses");
    navigate("/login");
  };

  return (
    <nav className="bg-nileBlue text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-nileYellow">
          EduNile
        </Link>

        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-nileYellow transition">Home</Link>
          <Link to="/about" className="hover:text-nileYellow transition">About</Link>
          <Link to="/courses" className="hover:text-nileYellow transition">Courses</Link>
          <Link to="/dashboard" className="hover:text-nileYellow transition">Dashboard</Link>
          <Link to="/contact" className="hover:text-nileYellow transition">Contact</Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-red-500 transition cursor-pointer bg-transparent border-none"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-nileYellow transition">Login</Link>
              <Link to="/register" className="hover:text-nileYellow transition">Register</Link>
            </>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-nileLight text-white space-y-2 px-4 pb-4">
          <Link to="/" className="block hover:text-nileYellow transition">Home</Link>
          <Link to="/about" className="block hover:text-nileYellow transition">About</Link>
          <Link to="/courses" className="block hover:text-nileYellow transition">Courses</Link>
          <Link to="/dashboard" className="block hover:text-nileYellow transition">Dashboard</Link>
          <Link to="/contact" className="block hover:text-nileYellow transition">Contact</Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-red-500 transition cursor-pointer bg-transparent border-none"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="block hover:text-nileYellow transition">Login</Link>
              <Link to="/register" className="block hover:text-nileYellow transition">Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
