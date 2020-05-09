import React from 'react';
import './Locations.css';

const Locations = () => {
  return (
    <div className='questionnaire-container location-answers'>
      <div className='questionnaire-title'>Location for Stufy Groups</div>
      <div className='location-banner'>
        <img
          className='user-location-map'
          src={require('../../../../data/images/map.png')}
          alt='Map'
        />
      </div>
      <div className='answer-container'>
        <input type='checkbox' className='checkbox-input' />
        <div className='checkbox-text'>Use my location for study groups</div>
      </div>
      <div className='answer-container'>
        <input type='checkbox' className='checkbox-input' />
        <div className='checkbox-text'>Increase blur on my location</div>
      </div>
      <div className='questionnaire-title title-two'>
        Study Session Location Preferences
      </div>
      <div className='answer-container-left'>
        <input type='checkbox' className='checkbox-input' />
        <div className='checkbox-text'>Use my location for study groups</div>
      </div>
      <div className='answer-container-left'>
        <input type='checkbox' className='checkbox-input' />
        <div className='checkbox-text'>Increase blur on my location</div>
      </div>{' '}
      <div className='answer-container-left'>
        <input type='checkbox' className='checkbox-input' />
        <div className='checkbox-text'>Use my location for study groups</div>
      </div>
      <div className='answer-container-left'>
        <input type='checkbox' className='checkbox-input' />
        <div className='checkbox-text'>Increase blur on my location</div>
      </div>
      <div className='notice-text'>
        * Required for conducting in-person study sessions, residence location
        is not shared with anyone
      </div>
    </div>
  );
};

export default Locations;
