import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  if(!course) return <p>Course not found</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} className="img-fluid mb-3" />
      <p>{course.description}</p>
      <h4>Lessons</h4>
      <ul className="list-group mb-3">
        {course.lessons.map(lesson => (
          <li key={lesson.id} className="list-group-item">
            <Link to={`/lesson/${course.id}-${lesson.id}`}>{lesson.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/courses" className="btn btn-secondary">Back to Courses</Link>
    </div>
  );
}
