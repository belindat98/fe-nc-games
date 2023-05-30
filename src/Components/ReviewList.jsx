import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import ReviewCard from "./ReviewCard";

const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getReviews().then(reviewsFromApi => {
            setReviews(reviewsFromApi)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }
    
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