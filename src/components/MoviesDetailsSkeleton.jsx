export default function MovieDetailsSkeleton() {
  return (
    <section className="boolflix-detail" aria-hidden="true">
      {/* HERO */}
      <div className="boolflix-detail-hero placeholder-glow">
        <div className="boolflix-detail-overlay" />
      </div>

      {/* CONTENT */}
      <div className="container boolflix-detail-content py-5">
        <div className="row g-4 align-items-start">
          {/* POSTER */}
          <div className="col-md-4">
            <div className="boolflix-detail-poster placeholder" />
          </div>

          {/* INFO */}
          <div className="col-md-8 placeholder-glow">
            <h1 className="boolflix-detail-title">
              <span className="placeholder col-6" />
            </h1>

            <p className="boolflix-detail-meta">
              <span className="placeholder col-2" /> •{" "}
              <span className="placeholder col-3" /> •{" "}
              <span className="placeholder col-4" />
            </p>

            <p className="boolflix-detail-abstract">
              <span className="placeholder col-10" />
              <span className="placeholder col-9" />
              <span className="placeholder col-7" />
            </p>

            <div className="boolflix-detail-vote">
              <span className="placeholder col-2" />
            </div>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="boolflix-section mt-5">
          <h2 className="boolflix-section-title">
            <span className="placeholder col-3" />
          </h2>

          <div className="row g-3 mt-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="boolflix-review placeholder-glow">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="placeholder col-4" />
                    <span className="placeholder col-2" />
                  </div>

                  <p>
                    <span className="placeholder col-12" />
                    <span className="placeholder col-10" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
