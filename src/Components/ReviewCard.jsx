const ReviewCard = ({ review }) => {
  return (
    <li className="review-card">
      <h3>{review.title}</h3>
      <img className="review-thumbnail" src={review.review_img_url} />
      <ul className="review-social-information">
      <li><p>by: {review.owner}</p></li>
        <li>
          <img src="src/Assets/001-chat.png" />
          <p>{review.comment_count}</p>
        </li>
        <li>
          <img src="src/Assets/002-like.png" />
          <p>{review.votes}</p>
        </li>
      </ul>
    </li>
  );
};

export default ReviewCard;
