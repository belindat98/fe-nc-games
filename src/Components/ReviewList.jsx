import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import ReviewCard from "./ReviewCard";
import { useSearchParams } from "react-router-dom";
import Filters from "./Filters";

const ReviewList = ({categories}) => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterCat = searchParams.get('category');
    const sortBy = searchParams.get('sort_by');
    const orderBy = searchParams.get('order');

    useEffect(() => {        
        getReviews(filterCat, sortBy, orderBy).then(reviewsFromApi => {
            setReviews(reviewsFromApi)
            setIsLoading(false)
        })
    }, [filterCat, sortBy, orderBy]);

    if (isLoading) {
        return <p>Loading...</p>
    }
    
    let title;
    if (!filterCat) {
        title = <h2>All reviews</h2>
    } else {
        let catArr = filterCat.split("-").join(" ")
        let readableCat = catArr[0].toUpperCase() + catArr.slice(1)
        title = <h2>{readableCat} reviews</h2>
    }

    return (
    <>
        {title}
        <Filters categories={categories} setSearchParams={setSearchParams}/>
        <ul className="review-list">
        {reviews.map(review => {
            return <ReviewCard key={review.title} review={review} />
        })}
        </ul>
    </>
    )
}

export default ReviewList