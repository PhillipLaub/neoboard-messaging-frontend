import React from 'react';

const Comment = ({ username, image, comment, id }) => {
  return (
    <div className='comment'>
      <div className='image'>{image}</div>
      <div className='username'>{username}</div>
      <div className='comment'>{comment}</div>
    </div>
  );
};

export default Comment;
