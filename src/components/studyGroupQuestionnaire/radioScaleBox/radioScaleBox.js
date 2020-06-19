import React from 'react';

const radioScaleBox = ({ question, storageKey, func, required }) => {
  return (
    <div className='questionnaire-box'>
      <div className='questionnaire-question display-block'>
        {question} {required && <span className='required'>*</span>}
      </div>
      <div className='questionnaire-horizontal-check-container'>
        <div className='input-importance'>Not Important</div>
        <div className='questionnaire-horizontal-check-item'>
          <label for='1'>1</label>
          <br />
          <input
            type='radio'
            className='questionnaire-horizontal-input'
            name={storageKey}
            value='1'
            onClick={func}
          />
        </div>
        <div className='questionnaire-horizontal-check-item'>
          <label for='2'>2</label>
          <br />
          <input
            type='radio'
            className='questionnaire-horizontal-input'
            name={storageKey}
            value='2'
            onClick={func}
          />
        </div>
        <div className='questionnaire-horizontal-check-item'>
          <label for='3'>3</label>
          <br />
          <input
            type='radio'
            className='questionnaire-horizontal-input'
            name={storageKey}
            value='3'
            onClick={func}
          />
        </div>
        <div className='questionnaire-horizontal-check-item'>
          <label for='4'>4</label>
          <br />
          <input
            type='radio'
            className='questionnaire-horizontal-input'
            name={storageKey}
            value='4'
            onClick={func}
          />
        </div>
        <div className='questionnaire-horizontal-check-item'>
          <label for='5'>5</label>
          <br />
          <input
            type='radio'
            className='questionnaire-horizontal-input'
            name={storageKey}
            value='5'
            onClick={func}
          />
        </div>
        <div className='questionnaire-horizontal-check-item'>
          <label for='6'>6</label>
          <br />
          <input
            type='radio'
            className='questionnaire-horizontal-input'
            name={storageKey}
            value='6'
            onClick={func}
          />
        </div>
        <div className='questionnaire-horizontal-check-item'>
          <label for='7'>7</label>
          <br />
          <input
            type='radio'
            className='questionnaire-horizontal-input'
            name={storageKey}
            value='7'
            onClick={func}
          />
        </div>
        <div className='input-importance'>Very Important</div>
      </div>
    </div>
  );
};

export default radioScaleBox;
