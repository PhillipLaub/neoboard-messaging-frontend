import React from 'react';
import './UpdatesBar.css';

const UpdateBar = ({ subject, newMessages }) => {
  return (
    <div className='update-bar'>
      <div className='subject'>{subject}</div>
      <div className='new-messages'>{newMessages} New Messages</div>
    </div>
  );
};

export default UpdateBar;
