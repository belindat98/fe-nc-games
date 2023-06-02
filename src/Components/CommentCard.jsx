import DeleteComment from "./DeleteComment"

const CommentCard = ({comment, setComments}) => {
    const postedDate = new Date(comment.created_at)

    return <li className="comment-card" key={comment.comment_id}>
        <p className="comment-info">{comment.author} on {postedDate.toDateString()} at {postedDate.toLocaleTimeString()}</p>
        <p>{comment.body}</p>
        <DeleteComment comment_id={comment.comment_id} author={comment.author} setComments={setComments}/>
        </li>
}

export default CommentCard