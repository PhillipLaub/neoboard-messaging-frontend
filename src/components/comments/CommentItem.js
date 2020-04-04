import React from 'react';
import './CommentItem.css';

const Comment = ({ username, image, comment, id }) => {
  return (
    <div className='comment'>
      <div>
        <img className='image' src={require(`../../${image}`)}></img>
        <div className='username'>{username}</div>
      </div>

      <div className='message'>{comment}</div>
    </div>
  );
};

export default Comment;
