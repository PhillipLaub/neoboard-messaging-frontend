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
            <input value='8' class='time-item' onClick={timeInput} />
            <div class='time-item'>9</div>
            <div class='time-item'>10</div>
            <div class='time-item'>11</div>
            <div class='time-item'>12</div>
            <div class='time-item'>1</div>
            <div class='time-item'>2</div>
            <div class='time-item'>3</div>
            <div class='time-item'>4</div>
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
