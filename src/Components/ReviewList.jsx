import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import ReviewCard from "./ReviewCard";
import { useSearchParams } from "react-router-dom";

const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterCat = searchParams.get('category');

    useEffect(() => {        
        getReviews(filterCat).then(reviewsFromApi => {
            setReviews(reviewsFromApi)
            setIsLoading(false)
        })
    }, [filterCat]);

    if (isLoading) {
        return <p>Loading...</p>
    }
    
    let title;
    if (!filterCat) {
        title = <h2>All reviews</h2>
    } else {
        title = <h2>{filterCat[0].toUpperCase() + filterCat.slice(1)} reviews</h2>
    }

    return (
    <>
        {title}
        <ul className="review-list">
        {reviews.map(review => {
            return <ReviewCard key={review.title} review={review} />
        })}
        </ul>
    </>
    )
}

export default ReviewList