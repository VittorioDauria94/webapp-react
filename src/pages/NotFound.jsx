import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="boolflix-page d-flex align-items-center text-center">
      <div className="container">
        <h1 className="boolflix-404">404</h1>
        <p className="boolflix-404-text">
          The page you are looking for does not exist.
        </p>

        <Link to="/" className="btn btn-danger btn-sm">
          Back to home
        </Link>
      </div>
    </main>
  );
}