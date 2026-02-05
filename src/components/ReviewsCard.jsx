export default function ReviewsCard({rev}) {
  return (
    <div className="boolflix-review">
      <div className="boolflix-review-top">
        <span className="boolflix-review-name">{rev.name}</span>
        <span className="boolflix-review-badge">⭐ {rev.vote}</span>
      </div>

      <p className="boolflix-review-text">{rev.text}</p>
      <div className="boolflix-review-date">{rev.created_at}</div>
    </div>
  );
}
