import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/utils";
import commentIcon from '/home/belinda/northcoders/frontend/fe-nc-games/Public/001-chat.png'
import votesIcon from '/home/belinda/northcoders/frontend/fe-nc-games/Public/002-like.png'

const ReviewCard = ({ review }) => {
  const postedDate = new Date(review.created_at)
  return (
    <li className="review-card">
      <Link to={`/reviews/${review.review_id}`}>
      <h3>{review.title}</h3>
      <p className="date-info">{postedDate.toUTCString()}</p>
      <p className="date-info">{formatCategoryName(review.category)}</p>
      <img className="review-thumbnail" src={review.review_img_url} alt={`${review.title} thumbnail`} />
      <p className="date-info">Designer: {review.designer}</p>
      </Link>
      <ul className="review-social-information">
      <li><p>review by {review.owner}</p></li>
        <li>
          <img src={commentIcon} alt="chat bubble icon" />
          <p>{review.comment_count}</p>
        </li>
        <li>
          <img src={votesIcon} alt="thumbs up icon" />
          <p>{review.votes}</p>
        </li>
      </ul>
    </li>
  );
};

export default ReviewCard;
