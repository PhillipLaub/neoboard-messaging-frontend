import React from 'react';
import './SurveyForm.css';

import SurveyHeader from './formItems/surveyHeader/SurveyHeader';

const SurveyForm = ({ userInfo }) => {
  return <div className='survey-container'>{userInfo.firstName}</div>;
  /*   <SurveyHeader name={userInfo.firstName} />; */
};

export default SurveyForm;
