import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="boolflix-page d-flex align-items-center text-center">
      <div className="container">
        <h1 className="boolflix-404">404</h1>
        <p className="boolflix-404-text">
          La pagina che stai cercando non esiste.
        </p>

        <Link to="/" className="btn btn-danger btn-sm">
          Torna alla home
        </Link>
      </div>
    </main>
  );
}