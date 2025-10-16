import { useParams } from "react-router-dom";
import courses from "../data/courses";

export default function LessonPlayer() {
  const { id } = useParams(); // "courseId-lessonId"
  const [courseId, lessonId] = id.split("-").map(Number);
  const course = courses.find(c => c.id === courseId);
  if(!course) return <p>Course not found</p>;

  const lesson = course.lessons.find(l => l.id === lessonId);
  if(!lesson) return <p>Lesson not found</p>;

  return (
    <div>
      <h2>{lesson.title}</h2>
      <video width="100%" height="400" controls>
        <source src={lesson.video} type="video/mp4" />
      </video>
      <p className="mt-3">{course.description}</p>
    </div>
  );
}
