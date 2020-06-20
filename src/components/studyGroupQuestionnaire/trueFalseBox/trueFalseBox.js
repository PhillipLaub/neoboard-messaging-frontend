import React from 'react';

const trueFalseBox = ({
  question,
  description,
  trueLabel,
  falseLabel,
  storageKey,
  func,
  required,
}) => {
  return (
    <div className='questionnaire-box'>
      <div className='questionnaire-question'>
        {question} {required && <span className='required'>*</span>}
        {description && (
          <div className='questionnaire-description'>{description}</div>
        )}
        <div className='questionnaire-check-item'>
          <input
            type='radio'
            className='questionnaire-input'
            name={storageKey}
            value='true'
            onClick={func}
          />
          <label htmlFor={trueLabel.toLowerCase()}>{trueLabel}</label>
        </div>
        <div className='questionnaire-check-item'>
          <input
            type='radio'
            className='questionnaire-input'
            name={storageKey}
            value='false'
            onClick={func}
          />
          <label htmlFor={falseLabel.toLowerCase()}>{falseLabel}</label>
        </div>
      </div>
    </div>
  );
};

export default trueFalseBox;
