import React from 'react';

const dropdownInputBox = ({
  question,
  defaultOption,
  arrayOfOptions,
  storageKey,
  func,
  boxStyleModifiers,
  required,
}) => {
  return (
    <div className={'questionnaire-box ' + boxStyleModifiers}>
      <div className='questionnaire-question'>
        {question} {required && <span className='required'>*</span>}
        <select name={storageKey} onChange={func}>
          {defaultOption && (
            <option value={defaultOption}>{defaultOption}</option>
          )}
          {arrayOfOptions.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default dropdownInputBox;
