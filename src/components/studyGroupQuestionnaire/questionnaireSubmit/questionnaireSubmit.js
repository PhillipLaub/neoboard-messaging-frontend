import React from 'react';

const questionnaireSubmit = ({ text, func }) => {
  return (
    <div className='questionnaire-submit'>
      <span onClick={func} className='submit-text unselectable'>
        {text}
      </span>
    </div>
  );
};

export default questionnaireSubmit;
