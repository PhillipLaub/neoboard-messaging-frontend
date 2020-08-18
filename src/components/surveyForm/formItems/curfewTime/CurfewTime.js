import React, { useState } from 'react';
import './CurfewTime.css';

const CurfewTime = () => {
  const [time, setTime] = useState({
    hour: '9',
    minute: ':00',
    meridiem: 'PM',
  });

  const timeInput = (e) => {
    console.log(e.target.value);
    let prevState = time;
    if (e.target.value.charAt(0) !== ':') {
      prevState.hour = e.target.value;
      if (e.target.value <= 4) {
        prevState.meridiem = 'AM';
      }
    } else {
      prevState.minute = e.target.value;
    }
    setTime(prevState);
  };

  return (
    <div className='questionnaire-container'>
      <div className='questionnaire-title'>Curfew Time</div>
      <div className='curfew-time-container'>
        <div className='half-container half-container-left'>
          <div className='clock'>
            <input
              value='8'
              className='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='9'
              className='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='10'
              className='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='11'
              className='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='12'
              className='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='1'
              className='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='2'
              className='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='3'
              className='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <input
              value='4'
              className='time-item unselectable'
              readonly='readonly'
              onClick={timeInput}
            />
            <div class='center'>
              <input
                value=':45'
                className='time-item minute-item unselectable'
                readonly='readonly'
                onClick={timeInput}
              />
              <input
                value=':00'
                className='time-item minute-item unselectable'
                readonly='readonly'
                onClick={timeInput}
              />
              <input
                value=':15'
                className='time-item minute-item unselectable'
                readonly='readonly'
                onClick={timeInput}
              />
              <input
                value=':30'
                className='time-item minute-item unselectable'
                readonly='readonly'
                onClick={timeInput}
              />
            </div>
          </div>
        </div>
        <div className='half-container half-container-right'>
          <div className='time-input'>
            {time.hour}
            {time.minute} {time.meridiem}
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
