import React, { Fragment } from 'react';
import './StudyGroupQuestions.css';

const StudyGroupQuestions = ({ comments, subject, newMessages }) => {
  return (
    <div className='study-group-questionnaire-container'>
      {/* Box 1 */}
      <div className='questionnaire-box questionnaire-top-border'>
        <div className='questionnaire-header'>Study Group Questionnaire</div>
        <hr className='questionnaire-break' />
        <div className='questionnnaire-description'>
          This questionnaire is for your online course. Please fill out this
          questionnaire to provide us some information on how you decide who to
          study with, all information collected will remain anonymous and will
          only be used to organize everyone into groups.
        </div>
        <hr className='questionnaire-break' />
        <div className='questionnaire-question'>
          Email address <span className='required'>*</span>
          <input
            type='text'
            placeholder='Valid email address'
            className='questionnaire-input'
          ></input>
        </div>
      </div>

      {/* Box 2 */}
      <div className='questionnaire-box'></div>
    </div>
  );
};

export default StudyGroupQuestions;
