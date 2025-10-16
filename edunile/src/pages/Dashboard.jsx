import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("enrolledCourses");
    if (data) {
      try {
        setEnrolledCourses(JSON.parse(data));
      } catch (error) {
        console.error("Failed to parse enrolled courses:", error);
        setEnrolledCourses([]);
      }
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-nileBlue">Dashboard</h1>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-600">You have not enrolled in any courses yet.</p>
      ) : (
        <div className="grid gap-4">
          {enrolledCourses.map((course, idx) => (
            <div
              key={idx}
              className="border rounded p-4 shadow hover:shadow-lg transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold text-nileYellow mb-2">{course.title}</h2>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
