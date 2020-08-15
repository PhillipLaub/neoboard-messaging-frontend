import React, { useState } from 'react';
import './CurfewTime.css';

const CurfewTime = () => {
  const [time, setTime] = useState({
    hour: '9',
    minute: '00',
    meridiem: 'PM',
  });

  const timeInput = (e) => {
    console.log(e.target.value);
    let tempTime = time;
    /*     tempTime.hour = value; */

    /*     setTime(tempTime); */
  };

  return (
    <div className='questionnaire-container'>
      <div className='questionnaire-title'>Curfew Time</div>
      <div className='curfew-time-container'>
        <div className='half-container half-container-left'>
          <div className='clock'>
            <input
              value='8'
              class='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='9'
              class='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='10'
              class='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='11'
              class='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='12'
              class='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='1'
              class='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='2'
              class='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='3'
              class='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='4'
              class='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <div class='center'>
              <div class='time-item minute-item'>:45</div>
              <div class='time-item minute-item'>:00</div>
              <div class='time-item minute-item'>:15</div>
              <div class='time-item minute-item'>:30</div>
            </div>
          </div>
        </div>
        <div className='half-container half-container-right'>
          <div className='time-input'>
            {time.hour}:{time.minute} {time.meridiem}
          </div>
        </div>
      </div>
      <div className='checkbox-container'>
        <input type='checkbox' className='checkbox-input' />
        <div className='checkbox-text'>
          I have an erratic sleep schedule due to work
        </div>
      </div>
    </div>
  );
};

export default CurfewTime;
