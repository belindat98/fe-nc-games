import { useState } from "react";
import { deleteComment } from "../utils/api";

const DeleteComment = ({ comment_id, setComments }) => {
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState(null)
const handleDeleteComment = (event) => {
    setDeleting(true)
    
    
    deleteComment(event.target.value).then(()=> {
      setDeleting(false)
      setComments((currentComments) => {
        return currentComments.filter((comment) => {
          return comment.comment_id != event.target.value;
        });
      });
    }).catch((err) => {
      setDeleting(false)
      setError("there was an issue, please try again")
    });
};
  if (deleting) {
    return <p>deleting...</p>
  }

  return (
    <section className="delete-button">
      <button onClick={handleDeleteComment} value={comment_id}>Delete Comment
      </button>
      {error ? <p className="error-message">{error}</p> : null}
    </section>
  );
};

export default DeleteComment;
