import { useState } from "react";
import initialReviewFormData from "../data/initialReviewFormData";
import axios from "axios";

export default function ReviewForm({ id, updateMovie }) {
  const [formData, setFormData] = useState(initialReviewFormData);

  function handleUpdate(e) {
    const value = e.target.value;
    const key = e.target.name;

    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_MOVIES_URL}/${id}/reviews`,
        formData,
      )
      .then((resp) => {
        updateMovie();
        setFormData(initialReviewFormData);
      });
  }

  return (
    <form className="boolflix-review-form mt-5" onSubmit={handleSubmit}>
      <h2 className="boolflix-section-title mb-4">Add your review</h2>

      <div className="mb-3">
        <label htmlFor="name" className="form-label boolflix-label">
          Name
        </label>
        <input
          type="text"
          className="form-control boolflix-input"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleUpdate}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="vote" className="form-label boolflix-label">
          Vote
        </label>
        <input
          type="number"
          min="1"
          max="5"
          className="form-control boolflix-input"
          id="vote"
          name="vote"
          placeholder="1 - 5"
          value={formData.vote}
          onChange={handleUpdate}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="text" className="form-label boolflix-label">
          Add a comment
        </label>
        <textarea
          className="form-control boolflix-input"
          name="text"
          id="text"
          rows="4"
          placeholder="Write your thoughts..."
          value={formData.text}
          onChange={handleUpdate}
        ></textarea>
      </div>

      <button type="submit" className="btn boolflix-btn-primary">
        Submit Review
      </button>
    </form>
  );
}
