import { useContext } from "react"
import { CurrentUserContext } from "../Contexts/CurrentUser"
import { deleteComment } from "../utils/api"

const DeleteComment = ({comment_id, author}) => {

    const handleDeleteComment = (event) => {
        
        deleteComment(event.target.value)
    }
    const {currentUser} = useContext(CurrentUserContext)

    if (currentUser === author) {
        return <button onClick={handleDeleteComment} value={comment_id}>Delete comment</button>
    }
}

export default DeleteComment
