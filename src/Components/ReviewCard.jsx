import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const postedDate = new Date(review.created_at)
  let catArr = review.category.split("-").join(" ")
  let readableCat = catArr[0].toUpperCase() + catArr.slice(1)
  return (
    <li className="review-card">
      <Link to={`/reviews/${review.review_id}`}>
      <h3>{review.title}</h3>
      <p className="date-info">{postedDate.toUTCString()}</p>
      <p className="date-info">{readableCat}</p>
      <img className="review-thumbnail" src={review.review_img_url} alt={`${review.title} thumbnail`} />
      <p className="date-info">Designer: {review.designer}</p>
      </Link>
      <ul className="review-social-information">
      <li><p>review by {review.owner}</p></li>
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
