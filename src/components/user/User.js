import React from 'react';
import './User.css';

const User = ({
  userInfo: {
    image,
    name,
    username,
    joinDate,
    college,
    major,
    grade,
    city,
    calender,
    schedule,
    matchingPoll,
    privacySettings,
  },
}) => {
  return (
    <div className='user-container'>
      <img
        className='logged-in-user-image'
        src={require(`../../${image}`)}
      ></img>
    </div>
  );
};

export default User;
