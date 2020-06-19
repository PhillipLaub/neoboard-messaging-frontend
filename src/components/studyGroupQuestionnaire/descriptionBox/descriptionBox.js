import React from 'react';

const descriptionBox = ({ description }) => {
  return (
    <div className='questionnaire-box description-box'>
      <div className='questionnaire-question italic'>{description}</div>
    </div>
  );
};

export default descriptionBox;
