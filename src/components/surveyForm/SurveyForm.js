import React from 'react';
import './SurveyForm.css';

import SurveyHeader from './formItems/surveyHeader/SurveyHeader';

const SurveyForm = ({ userInfo: { firstName } }) => {
  return (
    <div className='survey-container'>
      <SurveyHeader name={firstName} />
    </div>
  );
};

export default SurveyForm;
