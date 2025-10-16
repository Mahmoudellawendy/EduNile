import React from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

const CourseList = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <div className="flex flex-wrap gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
