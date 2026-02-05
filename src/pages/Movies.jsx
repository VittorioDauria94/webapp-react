import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_MOVIES_URL).then((resp) => {
      setMovies(resp.data.result);
    });
  }, []);

  return (
    <main className="boolflix-page">
      <div className="container py-5 mt-5">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <div>
            <h1 className="boolflix-page-title mb-1">Movies</h1>
            <p className="boolflix-page-sub mb-0">
              Browse the BoolFlix catalog
            </p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
