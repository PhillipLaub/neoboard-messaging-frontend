import React from 'react';

const Subject = ({ subject, icon }) => {
  return (
    <div className='menu-item'>
      <div className='subject-icon'>{icon}</div>
      <div className='subject-name'>{subject}</div>
    </div>
  );
};

export default Subject;
