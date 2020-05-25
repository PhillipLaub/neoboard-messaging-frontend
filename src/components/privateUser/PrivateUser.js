import React from 'react';
import './PrivateUser.css';

const User = ({
  privateUserInfo: { image, firstName, lastName, joinDate, college },
}) => {
  return (
    <div className='user-container'>
      {/* This section is hard coded for now... */}
      <div className='top-section-container'>
        <img
          className='user-page-image user-flex'
          src={require(`../../${image}`)}
        ></img>
      </div>

      <div className='basic-info'>
        <div className='name'>
          {firstName} {lastName} <i class='fas fa-circle yellow no-shadow'></i>
        </div>
        <div className='basic-info-item top-margin-buffer'>
          Overachieving since {joinDate}
        </div>
        <div className='basic-info-item'>{college}</div>
      </div>

      <div className='private-info'>
        <div className='private-icon'>
          <i className='fas fa-user-secret'></i>
        </div>
        <div className='private-message'>
          {firstName} has requested that their profile remain private
        </div>
      </div>

      <div className='return-footer'>
        <div className='return-button'>Return</div>
      </div>
    </div>
  );
};

export default User;
