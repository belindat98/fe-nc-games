import { useEffect, useState } from "react"
import { getCommentsByReviewId } from "../utils/api"
import CommentCard from "./CommentCard"

const CommentList = ({review_id}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCommentsByReviewId(review_id).then(commentsFromApi => {
            setComments(commentsFromApi)
            setIsLoading(false)
        })
    }, [])
    if (isLoading) {
        return <p>Loading...</p>
    }

    let commentText;
    if (comments.length===0) {
        commentText = <p className="comment-container no-comments">No Comments</p>
    } else {
        commentText = <ul className="comment-container">
        {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />
        })}
    </ul>
    }
    return (<>
    <h3 className="comments-header">Comments</h3>
    {commentText}
    </>)
}

export default CommentList