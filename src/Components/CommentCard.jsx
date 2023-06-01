const CommentCard = ({comment}) => {
    const postedDate = new Date(comment.created_at)
    return <li className="comment-card" key={comment.comment_id}>
        <p className="comment-info">{comment.author} on {postedDate.toDateString()} at {postedDate.toLocaleTimeString()}</p>
        <p>{comment.body}</p>
        </li>
}

export default CommentCard