import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://mockapi.io/edunile/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to fetch courses", err));
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>
      <div className="course-list">
        {courses.length ? (
          courses.map((course) => <CourseCard key={course.id} course={course} />)
        ) : (
          <p>Loading courses...</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
