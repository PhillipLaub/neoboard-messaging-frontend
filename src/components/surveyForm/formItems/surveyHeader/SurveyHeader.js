import React from 'react';
import './SurveyHeader.css';

const SurveyHeader = ({ name }) => {
  return (
    <div className='title-name'>{/* {name} */}, tell us about yourself!</div>
  );
};

export default SurveyHeader;
