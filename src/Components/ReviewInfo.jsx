import VoteButtons from "./VoteButtons";

const ReviewInfo = ({ review, setReview }) => {
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
          <li>
          <p>
            By {review.owner} on {postedDate.toUTCString()}
          </p></li>
        <VoteButtons setReview={setReview} review={review}/>
        </ul>
        </section>
      </article>
    </>
  );
};

export default ReviewInfo;
