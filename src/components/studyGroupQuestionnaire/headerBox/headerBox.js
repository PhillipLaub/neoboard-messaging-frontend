import React, { Fragment } from 'react';

const headerBox = ({
  title,
  description,
  question,
  placeholder,
  storageKey,
  func,
  required,
}) => {
  return (
    <div className='questionnaire-box questionnaire-top-border'>
      <div className='questionnaire-header'>{title}</div>
      <hr className='questionnaire-break' />
      {description && (
        <Fragment>
          <div className='questionnaire-description'>{description}</div>
          <hr className='questionnaire-break' />
        </Fragment>
      )}
      <div className='questionnaire-question'>
        {question && (
          <Fragment>
            {question} {required && <span className='required'>*</span>}
            <input
              type='text'
              placeholder={placeholder}
              className='questionnaire-input'
              name={storageKey}
              onChange={func}
            ></input>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default headerBox;
