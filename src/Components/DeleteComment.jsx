import { useContext, useState } from "react"
import { CurrentUserContext } from "../Contexts/CurrentUser"
import { deleteComment } from "../utils/api"

const DeleteComment = ({comment_id, author, setComments}) => {
    const {currentUser} = useContext(CurrentUserContext)
    const [error, setError] = useState(null)
    const handleDeleteComment = (event) => {
        let deletedComment;
        setComments(currentComments => {
            const commentIndex = currentComments.findIndex(comment => comment.comment_id == event.target.value)
            const newCommentList=[...currentComments]
            deletedComment = newCommentList.splice(commentIndex, 1)
            return newCommentList
        })

        deleteComment(event.target.value).catch(err => {
            setError("there was an issue, please try again" )
            setComments(currentComments => {

            })
        })
    }

    if (currentUser === author) {
        return <><button onClick={handleDeleteComment} value={comment_id}>Delete comment</button>
        {error ? <p>{error}</p> : <></>} </>
    }
}

export default DeleteComment
