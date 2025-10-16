import CourseCard from "../components/CourseCard";

const sampleCourses = [
  { id: 1, title: "Mathematics for High School", instructor: "Dr. Ahmed", rating: 4.7 },
  { id: 2, title: "Egyptian History", instructor: "Prof. Mona", rating: 4.9 },
  { id: 3, title: "Programming Basics", instructor: "Eng. Youssef", rating: 4.8 },
];

export default function CoursesPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold text-blue-700 mb-4">All Courses</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sampleCourses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}
