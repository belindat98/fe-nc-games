import { useParams } from "react-router-dom";
import ReviewInfo from "./ReviewInfo";
import { useEffect, useState } from "react";
import { getReviewById } from "../utils/api";
import CommentList from "./CommentList";

const IndividualReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getReviewById(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
      setIsLoading(false)
    }).catch(err => {
      setError(err)
      setIsLoading(false)
    });
  }, []);
  
  if (isLoading) {
    return <p>Loading...</p>
}
  if (error) {
    return <p>{error.response.data.msg}</p>
  }

  return (
    <>
      <ReviewInfo review={review} setReview={setReview} />
      <CommentList review_id={review.review_id}/>
    </>
  );
};

export default IndividualReview;
