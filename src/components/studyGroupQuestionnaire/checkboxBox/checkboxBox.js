import React from 'react';

const checkboxBox = ({
  question,
  description,
  arrayOfOptions,
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
        {arrayOfOptions.map((option, index) => {
          return (
            <div className='questionnaire-check-item'>
              <input
                type='checkbox'
                className='questionnaire-input'
                name={storageKey}
                value={option}
                onClick={func}
                key={index}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default checkboxBox;
