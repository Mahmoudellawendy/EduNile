import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded-md shadow-md p-4 w-full md:w-[300px]">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-xl font-bold mt-2">{course.title}</h3>
      <p className="text-gray-600">{course.description}</p>
      <p className="text-sm text-gray-500 mt-1">Instructor: {course.instructor}</p>
      <p className="mt-2 font-semibold">{course.price}</p>
      <Link to={`/courses/${course.id}`} className="block mt-3 text-blue-600 hover:underline">
        View Details →
      </Link>
    </div>
  );
};

export default CourseCard;
