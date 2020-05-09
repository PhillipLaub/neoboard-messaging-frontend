import React from 'react';
import './SpecialCircumstances.css';

const SpecialCircumstances = () => {
  return (
    <div className='questionnaire-container'>
      <div className='questionnaire-title'>Special Circumstances</div>
      <div className='checkbox-container'>
        <div className='answer-container answer-container-left'>
          <input type='checkbox' className='checkbox-input' />
          <div className='checkbox-text'>I am a member of the armed forces</div>
        </div>

        <div className='answer-container answer-container-left'>
          <input type='checkbox' className='checkbox-input' />
          <div className='checkbox-text'>
            I work nightshifts on some/all nights
          </div>
        </div>

        <div className='answer-container answer-container-left'>
          <input type='checkbox' className='checkbox-input' />
          <div className='checkbox-text'>I am a parent</div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCircumstances;
