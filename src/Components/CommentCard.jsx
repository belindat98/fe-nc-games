import DeleteComment from "./DeleteComment"
import { useContext } from "react";
import { CurrentUserContext } from "../Contexts/CurrentUser";

const CommentCard = ({comment, comments, setComments}) => {
    const postedDate = new Date(comment.created_at)
    const { currentUser } = useContext(CurrentUserContext);

    return <li className="comment-card" key={comment.comment_id}>
        <section className = "main-comment-body">
        <p className="comment-info">{comment.author} on {postedDate.toDateString()} at {postedDate.toLocaleTimeString()}</p>
        <p>{comment.body}</p>
        </section>
        {currentUser === comment.author ? <DeleteComment comment_id={comment.comment_id} setComments={setComments} /> : ""}
        </li>
}

export default CommentCard