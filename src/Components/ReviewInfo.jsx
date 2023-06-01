const ReviewInfo = ({review}) => {
    const postedDate = new Date(review.created_at)

    return (
    <>
    <article className="individual-review">
    <img src={review.review_img_url} alt={`${review.title} image`} className="review-photo" />
    <section className="review-info">
    <h3>{review.title}</h3>
    <section className="game-info">
    <p>{review.designer}</p>
    <p>{review.category}</p>
    </section>
    <p>{review.review_body}</p>
    <section className="additional-info">

        <p>{review.owner}</p>
        <p>{postedDate.toUTCString()}</p>

    </section>
    </section>
    </article>
    </>)
}

export default ReviewInfo