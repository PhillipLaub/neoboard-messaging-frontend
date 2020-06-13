import React from 'react';
import './CommentItem.css';

const Comment = ({ username, image, comment, timestamp, id }) => {
  return (
    <div className='comment'>
      <div className='user-messaging-container'>
        <img className='image' src={require(`../../${image}`)}></img>
        <div className='username'>{username}</div>
        <div className='timestamp'>{timestamp}</div>
      </div>
      <div className='message'>{comment}</div>
    </div>
  );
};

export default Comment;
