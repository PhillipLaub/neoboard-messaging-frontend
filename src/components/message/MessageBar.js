import React from 'react';
import './MessageBar.css';

const MessageBar = () => {
  return (
    <div className='message-bar'>
      <form action='POST'>
        <input type='text' className='input-message' name='message' />
        <div className='buttons'>
          <i class='fas fa-camera message-bar-button'></i>
          <i class='fas fa-paperclip message-bar-button'></i>
          <i class='far fa-paper-plane message-bar-button'></i>
        </div>
      </form>
    </div>
  );
};

export default MessageBar;
