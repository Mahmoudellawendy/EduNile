import React from "react";

const LessonPlayer = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lesson Player</h2>
      <p>This is where the course video will be played.</p>

      {/* Mock video */}
      <div className="w-full aspect-video bg-gray-300 flex items-center justify-center">
        <span>Video Player Placeholder</span>
      </div>
    </div>
  );
};

export default LessonPlayer;
