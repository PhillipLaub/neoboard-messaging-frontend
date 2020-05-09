import React from 'react';
import './CurfewTime.css';

const CurfewTime = () => {
  return (
    <div className='questionnaire-container'>
      <div className='questionnaire-title'>Curfew Time</div>
      <div className='half-container half-container-left'>
        <div className='clock'>
          <div class='time-item'>8</div>
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
        <div className='time-input'></div>
      </div>
    </div>
  );
};

export default CurfewTime;
