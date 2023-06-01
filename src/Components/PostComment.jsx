import { useContext, useState } from "react"
import { postComment } from "../utils/api"
import { CurrentUserContext } from "../Contexts/CurrentUser"
import { useParams } from "react-router-dom"

const PostComment = ({setComments}) => {
    const [commentInput, setCommentInput] = useState("")
    const [error, setError] = useState(null)
    const {currentUser} = useContext(CurrentUserContext)
    const params = useParams();
    const reviewId = params.review_id

    const handleInput = (event) => {
        setCommentInput(event.target.value)
    }
    
    const handlePostComment = (event) => {
        event.preventDefault()
        if (!currentUser) {
            setError("must be logged in")
        } else {
        setError("")
        setComments(currentComments => {
            return [{
                body: commentInput,
                author: currentUser,
                votes: 0,
                created_at: Date.now(),
                comment_id: Date.now()
            }, ...currentComments]
        })
        postComment(commentInput, currentUser, reviewId).catch(err => {
            setError("there was an issue, please try again")
            setComments(currentComments => {
                let theComments = [...currentComments]
                theComments.shift()
                return theComments
            })
        })
        setCommentInput("")
    }
    }


    return (<section className="post-comment">
    <h3>Post a new comment</h3>
    <form className="comment-form" onSubmit={handlePostComment}>
        <input placeholder="comment..." type="text" value={commentInput} onChange={handleInput} className="comment-input"/>
        <button type="submit" className="comment-button">Comment</button>
    </form>
        {error ? <p>{error}</p> : ""}
        </section>)
}

export default PostComment