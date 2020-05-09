import React from 'react';
import './ImportCalendar.css';

const ImportCalendar = () => {
  return (
    <div className='questionnaire-container'>
      <div className='questionnaire-title'>Import Your Calendar</div>
      <div className='checkbox-container'>
        <div className='answer-container'>
          <input type='checkbox' className='checkbox-input' />
          <div className='checkbox-text'>Google Calendar</div>
        </div>

        <div className='answer-container'>
          <input type='checkbox' className='checkbox-input' />
          <div className='checkbox-text'>Apple Calendar</div>
        </div>

        <div className='answer-container'>
          <input type='checkbox' className='checkbox-input' />
          <div className='checkbox-text'>
            Microsoft Outlook (future version)
          </div>
        </div>

        <div className='answer-container'>
          <input type='checkbox' className='checkbox-input' />
          <div className='checkbox-text'>My Study Life (future version)</div>
        </div>
      </div>
      <div className='notice-text'>
        * One active calendar required to be grouped into study sessions
      </div>
    </div>
  );
};

export default ImportCalendar;
