const ReviewInfo = ({ review }) => {
  const postedDate = new Date(review.created_at);

  return (
    <>
      <article className = "individual-review">
        <img
          src={review.review_img_url}
          alt={`${review.title} image`}
          className = "review-photo"
        />
        <section className = "review-info">
          <h2>{review.title}</h2>
          <ul className="game-info">
            <li>{review.designer}</li>
            <li>{review.category}</li>
          </ul>
          <p>{review.review_body}</p>
          <ul className="extra-info">
            <li>{review.owner}</li>
            <li>{postedDate.toUTCString()}</li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default ReviewInfo;
