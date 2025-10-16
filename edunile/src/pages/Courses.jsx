import { Link } from "react-router-dom";

export default function Courses() {
  const courses = [
    { id: 1, title: "Web Development", desc: "Learn React, JS, HTML, CSS", img: "https://via.placeholder.com/300x150" },
    { id: 2, title: "Data Science", desc: "Python, Pandas, ML Basics", img: "https://via.placeholder.com/300x150" },
    { id: 3, title: "Graphic Design", desc: "Photoshop, Illustrator, UI/UX", img: "https://via.placeholder.com/300x150" },
    { id: 4, title: "Marketing", desc: "Digital Marketing, SEO, Social Media", img: "https://via.placeholder.com/300x150" },
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4">All Courses</h1>
      <div className="row g-4">
        {courses.map(course => (
          <div className="col-md-3" key={course.id}>
            <div className="card h-100 shadow-sm">
              <img src={course.img} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.desc}</p>
                <Link to={`/courses/${course.id}`} className="btn btn-primary me-2">Details</Link>
                <button className="btn btn-outline-success">Enroll</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
