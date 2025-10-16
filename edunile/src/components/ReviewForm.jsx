import { useState } from "react";

export default function ReviewForm() {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!review) return;
    setReviews([...reviews, review]);
    setReview("");
  }

  return (
    <div>
      <h4>Reviews</h4>
      <form onSubmit={handleSubmit}>
        <textarea className="form-control mb-2" value={review} onChange={e=>setReview(e.target.value)} placeholder="Write a review..."></textarea>
        <button className="btn btn-primary">Submit Review</button>
      </form>
      <ul className="list-group mt-3">
        {reviews.map((r,i) => <li key={i} className="list-group-item">{r}</li>)}
      </ul>
    </div>
  );
}
