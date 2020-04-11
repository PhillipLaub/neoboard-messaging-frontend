import React from 'react';
import './PrivateUser.css';

const User = ({
  userInfo: { image, firstName, lastName, joinDate, college },
}) => {
  return (
    <div className='user-container'>
      {/* This section is hard coded for now... */}
      <div className='top-section-container'>
        <img
          className='logged-in-user-image user-flex'
          src={require(`../../${image}`)}
        ></img>
      </div>

      <div className='basic-info'>
        <div className='name center'>
          {firstName} {lastName}
        </div>
        <div className='basic-info-item'>Overachieving since {joinDate}</div>
        <div className='basic-info-item'>{college}</div>
      </div>

      <div className='return-footer'>
        <div className='return-button'>Return</div>
      </div>
    </div>
  );
};

export default User;
