import React from "react";
import { useParams } from "react-router-dom";

const LessonPlayer = () => {
  const { lessonId } = useParams();

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <div>
      <h2>Lesson Video</h2>
      <iframe
        width="800"
        height="450"
        src={videoUrl}
        title="Lesson Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LessonPlayer;
