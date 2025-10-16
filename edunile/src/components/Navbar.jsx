import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-1 rounded-md transition ${
        isActive ? "bg-yellow-400 text-black" : "text-white hover:bg-yellow-300/20"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">EduNile</h1>
          <span className="text-sm text-blue-100/80">Egyptian E-Learning</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/courses">Courses</NavItem>
          <NavItem to="/dashboard">Dashboard</NavItem>
        </div>

        <div className="flex items-center gap-3">
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register">Register</NavItem>

          {/* mobile menu button (simple) */}
          <div className="md:hidden text-white">☰</div>
        </div>
      </div>
    </nav>
  );
}
