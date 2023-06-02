import { deleteComment } from "../utils/api";

const DeleteComment = ({ comment_id, comments, setComments }) => {
  const previousComments = comments;
 
  const handleDeleteComment = (event) => {
    setComments((currentComments) => {
      return currentComments.filter((comment) => {
        return comment.comment_id != event.target.value;
      });
    });

    deleteComment(event.target.value).catch((err) => {
      setComments(previousComments);
    });
};

  return (
    <>
      <button onClick={handleDeleteComment} value={comment_id}>Delete Comment
      </button>
    </>
  );
};

export default DeleteComment;
