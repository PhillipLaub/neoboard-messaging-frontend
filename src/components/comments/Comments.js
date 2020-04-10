import React from 'react';
import CommentItem from './CommentItem';
import './Comments.css';

const Comments = ({ comments }) => {
  return (
    <div className='comments'>
      {comments.map((commentItem) => (
        /*         {commentItem.timestamp ? } */
        <CommentItem
          username={commentItem.username}
          image={commentItem.image}
          comment={commentItem.comment}
          timestamp={commentItem.timestamp}
          key={commentItem.id}
        />
      ))}
    </div>
  );
};

export default Comments;
