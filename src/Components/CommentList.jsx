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
        commentText = <p className= "no-comments">No Comments</p>
    } else {
        commentText = <ul className="comment-list">
        {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />
        })}
    </ul>
    }

    let noOfComments;
    if (comments.length === 1) {
        noOfComments=<p>1 comment</p>
    } else if (comments.length > 1) {
        noOfComments=<p>{comments.length} comments</p>
    }
    return (<>
    <h3 className="comments-header">Comments</h3>
    <section className="comment-container">
        {noOfComments}
        {commentText}
    </section>
    </>)
}

export default CommentList