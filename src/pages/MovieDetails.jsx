import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewsCard from "../components/ReviewsCard";
import MovieDetailsSkeleton from "../components/MoviesDetailsSkeleton";
import ReviewForm from "../components/ReviewForm";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieData();
  }, [slug]);

  function getMovieData() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_MOVIES_URL}/${slug}`)
      .then((resp) => {
        setMovieDetails(resp.data);
        // setTimeout(() => setMovieDetails(resp.data), 2000);  // debug for skeleton
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          navigate("*");
        }
      });
  }

  return (
    <main className="boolflix-page">
      {movieDetails ? (
        <section className="boolflix-detail">
          {/* HERO */}
          <div
            className="boolflix-detail-hero"
            style={{ backgroundImage: `url(${movieDetails.image})` }}
          >
            <div className="boolflix-detail-overlay" />
          </div>

          {/* CONTENT */}
          <div className="container boolflix-detail-content py-5">
            <div className="row g-4 align-items-start">
              {/* POSTER */}
              <div className="col-md-4">
                <img
                  src={movieDetails.image}
                  alt={movieDetails.title}
                  className="boolflix-detail-poster"
                />
              </div>

              {/* INFO */}
              <div className="col-md-8">
                <h1 className="boolflix-detail-title">{movieDetails.title}</h1>

                <p className="boolflix-detail-meta">
                  {movieDetails.release_year} • {movieDetails.genre} • 🎬{" "}
                  {movieDetails.director}
                </p>

                <p className="boolflix-detail-abstract">
                  {movieDetails.abstract}
                </p>

                <div className="boolflix-detail-vote">
                  ⭐ {movieDetails.avg_vote ?? "—"}
                </div>
              </div>
            </div>

            {/* REVIEWS */}
            <div className="boolflix-section mt-5">
              <h2 className="boolflix-section-title">Reviews</h2>

              {movieDetails.movieReviews?.length ? (
                <div className="row g-3 mt-1">
                  {movieDetails.movieReviews.map((rev) => (
                    <div className="col-md-6 col-lg-4" key={rev.id}>
                      <ReviewsCard rev={rev} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="boolflix-empty">No reviews available.</p>
              )}
            </div>
            <ReviewForm id={movieDetails.id} updateMovie={getMovieData} />
          </div>
        </section>
      ) : (
        <MovieDetailsSkeleton />
      )}
    </main>
  );
}
