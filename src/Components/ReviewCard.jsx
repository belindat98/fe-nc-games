const ReviewCard = ({review}) => {
    return (<li className="review-card">
        <h3>{review.title}</h3>
        <img className="review-thumbnail" src={review.review_img_url} />
        <p>reviewed by: {review.owner}</p>
        </li>)
}

export default ReviewCard