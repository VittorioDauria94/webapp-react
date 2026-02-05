import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="boolflix-home">
      <section className="boolflix-hero">
        <div className="boolflix-hero-overlay" />

        <div className="container boolflix-hero-content">
          <h1 className="boolflix-title">Welcome to BoolFlix</h1>
          <p className="boolflix-subtitle">
             Discover movies, reviews, and community ratings.
          </p>

          <div className="boolflix-actions">
            <Link className="btn btn-danger btn-lg" to="/movies">🎬 Browse Movies</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
