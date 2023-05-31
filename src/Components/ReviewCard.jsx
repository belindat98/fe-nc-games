import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <li className="review-card">
      <Link to={`/reviews/${review.review_id}`}>
      <h3>{review.title}</h3>
      <img className="review-thumbnail" src={review.review_img_url} alt={`${review.title} thumbnail`} />
      </Link>
      <ul className="review-social-information">
      <li><p>by: {review.owner}</p></li>
        <li>
          <img src="src/Assets/001-chat.png" alt="chat bubble icon" />
          <p>{review.comment_count}</p>
        </li>
        <li>
          <img src="src/Assets/002-like.png" alt="thumbs up icon" />
          <p>{review.votes}</p>
        </li>
      </ul>
    </li>
  );
};

export default ReviewCard;
