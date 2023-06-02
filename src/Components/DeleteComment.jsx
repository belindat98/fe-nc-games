import { useContext } from "react"
import { CurrentUserContext } from "../Contexts/CurrentUser"
import { deleteComment } from "../utils/api"

const DeleteComment = ({comment_id, author, setComments}) => {
    const {currentUser} = useContext(CurrentUserContext)
    const [error, setError] = setState("")
    const handleDeleteComment = (event) => {
        let deletedComment = {}
        setComments(currentComments => {
            const commentIndex = currentComments.findIndex(comment => comment.comment_id == event.target.value)
            const newCommentList=[...currentComments]
            deletedComment = newCommentList.splice(commentIndex, 1)
            return newCommentList
        })
        deleteComment(event.target.value).catch(err => {
            setError("there was an issue, please try again" )
            setComments(currentComments => {
                let theComments = [...currentComments]
                theComments.push(deletedComment)
                return theComments.sort((comment1, comment2) => {
                    if (comment1.created_at < comment2.created_at) {
                        return -1
                    } if (comment2.created_at > comment2.created_at) {
                        return 1
                    } else {
                        return 0
                    }
                })
            })
        })
    }

    if (currentUser === author) {
        return <button onClick={handleDeleteComment} value={comment_id}>Delete comment</button>
    }
}

export default DeleteComment
