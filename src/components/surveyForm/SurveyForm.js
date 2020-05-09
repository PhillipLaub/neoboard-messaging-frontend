import React from 'react';
import './SurveyForm.css';

import SurveyHeader from './formItems/surveyHeader/SurveyHeader';
import CurfewTime from './formItems/curfewTime/CurfewTime';
import ImportCalendar from './formItems/importCalendar/ImportCalendar';
import SpecialCircumstances from './formItems/specialCircumstances/SpecialCircumstances';
import Preferences from './formItems/preferences/Preferences';
import Locations from './formItems/locations/Locations';

const SurveyForm = ({ userInfo: { firstName } }) => {
  return (
    <div className='survey-container'>
      <SurveyHeader name={firstName} />
      <form className='survey-form' action=''>
        <CurfewTime />
        <ImportCalendar />
        <SpecialCircumstances />
        <Preferences />
        <Locations />
      </form>
    </div>
  );
};

export default SurveyForm;
