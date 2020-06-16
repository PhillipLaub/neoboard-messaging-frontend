import React, { Fragment } from 'react';
import './StudyGroupQuestions.css';

const StudyGroupQuestions = ({ comments, subject, newMessages }) => {
  return (
    <div className='study-group-questionnaire-container'>
      <div className='question-box'>
        <div className='questionnaire-header'>Study Group Questionnaire</div>
        <hr />
        <div className='questionnnaire-description'>
          This questionnaire is for your online course. Please fill out this
          questionnaire to provide us some information on how you decide who to
          study with, all information collected will remain anonymous and will
          only be used to organize everyone into groups.
        </div>
        <hr />
        <div className='questionnnaire-question'>
          Email address <span className='required'>*</span>
        </div>
      </div>
    </div>
  );
};

export default StudyGroupQuestions;
