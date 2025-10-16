function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">EduNile</h1>
      <ul className="flex gap-6">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
