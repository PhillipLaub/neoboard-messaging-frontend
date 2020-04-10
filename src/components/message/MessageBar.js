import React from 'react';
import './MessageBar.css';

const MessageBar = () => {
  return (
    <div className='message-bar'>
      <form action=''>
        <input type='text' className='input-message' name='message' />
        <div className='buttons'>
          <i class='fas fa-camera'></i>
          <i class='fas fa-paperclip'></i>
          <i class='far fa-paper-plane'></i>
        </div>
      </form>
    </div>
  );
};

export default MessageBar;
