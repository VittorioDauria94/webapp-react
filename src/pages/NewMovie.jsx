import { useState } from "react";
import initialMovieFormData from "../data/initialMovieFormData";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewMovie() {
  const [formData, setFormData] = useState(initialMovieFormData);

  const navigate = useNavigate();

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
      .post(import.meta.env.VITE_BACKEND_MOVIES_URL, formData)
      .then((resp) => {
        navigate("/movies");
      });
  }

  return (
    <main className="boolflix-page">
      <div className="container py-5 mt-5">
        <form className="boolflix-form mt-5" onSubmit={handleSubmit}>
          <h1 className="boolflix-section-title mb-4">Add a new movie</h1>
          <div className="mb-3">
            <label htmlFor="title" className="form-label boolflix-label">
              Title
            </label>
            <input
              type="text"
              className="form-control boolflix-input"
              id="title"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleUpdate}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="director" className="form-label boolflix-label">
              Director
            </label>
            <input
              type="text"
              className="form-control boolflix-input"
              id="director"
              name="director"
              placeholder="Director"
              value={formData.director}
              onChange={handleUpdate}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label boolflix-label">
              Genre
            </label>
            <input
              type="text"
              className="form-control boolflix-input"
              id="genre"
              name="genre"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleUpdate}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="releaseYear" className="form-label boolflix-label">
              Release Year
            </label>
            <input
              type="number"
              className="form-control boolflix-input"
              id="releaseYear"
              name="releaseYear"
              placeholder="Release year"
              min="1888"
              max={new Date().getFullYear()}
              value={formData.releaseYear}
              onChange={handleUpdate}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="abstract" className="form-label boolflix-label">
              Abstract
            </label>
            <textarea
              type="text"
              className="form-control boolflix-input"
              id="abstract"
              name="abstract"
              placeholder="Short plot..."
              rows="4"
              value={formData.abstract}
              onChange={handleUpdate}
            ></textarea>
          </div>
          <button type="submit" className="btn boolflix-btn-primary">
            Submit Movie
          </button>
        </form>
      </div>
    </main>
  );
}
