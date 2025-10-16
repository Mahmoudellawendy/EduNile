// src/components/CourseCard.jsx
import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
}
