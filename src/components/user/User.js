import React from 'react';

const User = ({ userInfo }) => {
  return <div className='user-container'>{userInfo.name}</div>;
};

export default User;
