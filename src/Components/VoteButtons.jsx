import { useState } from "react"
import { voteForReview } from "../utils/api"

const VoteButtons = ({setReview, review}) => {
    const [err, setErr] = useState(null)

    const handleVote = (vote) => {
        setErr(null)
        setReview(currentReview => {
            return {...currentReview, votes: currentReview.votes + vote}
        })
        voteForReview(vote, review.review_id)
            .catch(() => {
            setReview(currentReview => {
                return {...currentReview, votes: currentReview.votes - vote}
            })
            setErr('something went wrong, please try again')
        })
    }

    return (<>
    <li className="vote-buttons">
    <p className={`${review.votes > 0 ? "positive" : "negative"}`}>{review.votes}</p>
    <button onClick={() => handleVote(1)}>Upvote</button>
    <button onClick={() => handleVote(-1)}>Downvote</button>
    {err ? <p>{err}</p> : null}
    </li>
    </>)
}

export default VoteButtons