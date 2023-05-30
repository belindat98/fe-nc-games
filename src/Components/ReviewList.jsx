import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import ReviewCard from "./ReviewCard";

const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        getReviews().then(reviewsFromApi => {
            setReviews(reviewsFromApi)
        })
    }, []);

    return (
    <>
        <h2>Reviews</h2>
        <ul className="review-list">
        {reviews.map(review => {
            return <ReviewCard key={review.title} review={review} />
        })}
        </ul>
    </>
    )
}

export default ReviewList