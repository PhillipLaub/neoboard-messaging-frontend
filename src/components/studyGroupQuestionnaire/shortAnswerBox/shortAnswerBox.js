import React from 'react';

const shortAnswerBox = ({
  question,
  description,
  placeholder,
  storageKey,
  func,
  required,
  boxStyleModifier,
}) => {
  return (
    <div className={'questionnaire-box ' + boxStyleModifier}>
      <div className='questionnaire-question'>
        {question} {required && <span className='required'>*</span>}
        {description && (
          <div className='questionnaire-description'>{description}</div>
        )}
        <input
          type='text'
          placeholder={placeholder}
          className='questionnaire-input'
          name={storageKey}
          onChange={func}
        ></input>
      </div>
    </div>
  );
};

export default shortAnswerBox;
