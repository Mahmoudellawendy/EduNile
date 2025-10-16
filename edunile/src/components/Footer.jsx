export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-5 mt-10">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">EduNile</span> — All Rights Reserved.
      </p>
    </footer>
  );
}
