import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`https://mockapi.io/edunile/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.error("Failed to fetch course details", err));
  }, [courseId]);

  if (!course) return <p>Loading course details...</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button>Enroll Now</button>
      {/* هنا ممكن تضيف زر التسجيل والدخول على الدروس */}
    </div>
  );
};

export default CourseDetails;
