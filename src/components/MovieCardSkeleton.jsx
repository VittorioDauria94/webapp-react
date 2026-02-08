export default function MovieCardSkeleton() {
  return (
    <div className="boolflix-card" aria-hidden="true">
      <div className="boolflix-poster d-flex align-items-center justify-content-center placeholder-glow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="currentColor"
          className="text-secondary"
          viewBox="0 0 16 16"
        >
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
        </svg>
        <div className="boolflix-gradient" />
        <span className="boolflix-badge placeholder col-2"></span>
      </div>

      <div className="boolflix-card-body placeholder-glow">
        <h5 className="boolflix-card-title">
          <span className="placeholder col-6"></span>
        </h5>

        <p className="boolflix-meta">
          <span className="placeholder col-3"></span>{" "}
          <span className="placeholder col-4"></span>
        </p>

        <p className="boolflix-abstract">
          <span className="placeholder col-10"></span>
          <span className="placeholder col-9"></span>
          <span className="placeholder col-7"></span>
        </p>

        <div className="d-flex gap-2 mt-auto placeholder-glow">
          <button className="btn btn-danger btn-sm disabled placeholder col-4"></button>
          <button className="btn btn-outline-light btn-sm disabled placeholder col-5"></button>
        </div>
      </div>
    </div>
  );
}
