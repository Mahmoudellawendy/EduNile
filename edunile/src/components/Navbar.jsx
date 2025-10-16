import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold">
          EduNile
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-yellow-400 transition">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-yellow-400 transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition font-semibold">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-yellow-400 text-blue-700 px-4 py-2 rounded hover:bg-yellow-300 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
