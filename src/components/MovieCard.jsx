import { Link } from "react-router-dom";

export default function MovieCard({movie}) {
  return (
    <div className="boolflix-card">
      <div className="boolflix-poster">
        <img src={movie.image} alt={movie.title} />
        <div className="boolflix-gradient" />

        <span className="boolflix-badge">⭐ {movie.avg_vote}</span>
      </div>

      <div className="boolflix-card-body">
        <h5 className="boolflix-card-title" title={movie.title}>
          {movie.title}
        </h5>

        <p className="boolflix-meta">
          {movie.release_year} • {movie.genre}
        </p>

        <p className="boolflix-abstract">{movie.abstract}</p>

        <div className="d-flex gap-2 mt-auto">
          <Link className="btn btn-danger btn-sm" to={`/movies/${movie.id}`}>
            Dettagli
          </Link>
          <button className="btn btn-outline-light btn-sm" type="button">
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
