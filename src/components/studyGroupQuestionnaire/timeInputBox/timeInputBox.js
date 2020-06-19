import React from 'react';

const timeInputBox = ({ question, storageKey, func, required }) => {
  return (
    <div className='questionnaire-box'>
      <div className='questionnaire-question'>
        {question} {required && <span className='required'>*</span>}
        <input
          type='time'
          name={storageKey}
          className='questionnaire-input display-block'
          onChange={func}
        ></input>
      </div>
    </div>
  );
};

export default timeInputBox;
