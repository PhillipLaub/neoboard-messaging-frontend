import React, { Fragment, useState } from 'react';
import './StudyGroupQuestions.css';

const StudyGroupQuestions = ({}) => {
  let data = {};
  let commuter = null;

  return (
    <div className='study-group-questionnaire-container'>
      {/* Box 1 */}
      <div className='questionnaire-box questionnaire-top-border'>
        <div className='questionnaire-header'>Study Group Questionnaire</div>
        <hr className='questionnaire-break' />
        <div className='questionnaire-description'>
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
      <div className='questionnaire-box'>
        <div className='questionnaire-question'>
          First & Last Name <span className='required'>*</span>
          <input
            type='text'
            placeholder='Name'
            className='questionnaire-input'
          ></input>
        </div>
      </div>

      {/* Box 3 */}
      <div className='questionnaire-box'>
        <div className='questionnaire-question'>
          Are you a commuter? <span className='required'>*</span>
          <div className='questionnaire-description'>
            If you are not sure, the best way to tell is if you could reasonably
            walk to campus or not (i.e. live on campus), or if you need a car to
            arrive to campus.
          </div>
          <div className='questionnaire-check-item'>
            <input
              type='radio'
              className='questionnaire-input'
              name='answer'
              value='yes'
            />
            <label for='yes'>Yes</label>
          </div>
          <div className='questionnaire-check-item'>
            <input
              type='radio'
              className='questionnaire-input'
              name='answer'
              value='no'
            />
            <label for='no'>No</label>
          </div>
        </div>
      </div>

      {/* Box 4 */}
      <div className='questionnaire-box'>
        <div className='questionnaire-question'>
          Where do you prefer to study? <span className='required'>*</span>
          <div className='questionnaire-check-item'>
            <input
              type='checkbox'
              className='questionnaire-input'
              name='answer'
              value='Library on Campus'
            />
            <label for='Library on Campus'>Library on Campus</label>
          </div>
          <div className='questionnaire-check-item'>
            <input
              type='checkbox'
              className='questionnaire-input'
              name='answer'
              value='Department Rooms on Campus'
            />
            <label for='Department Rooms on Campus'>
              Department Rooms on Campus
            </label>
          </div>
          <div className='questionnaire-check-item'>
            <input
              type='checkbox'
              className='questionnaire-input'
              name='answer'
              value='Coffee Shop'
            />
            <label for='Coffee Shop'>Coffee Shop</label>
          </div>
          <div className='questionnaire-check-item'>
            <input
              type='checkbox'
              className='questionnaire-input'
              name='answer'
              value='Home'
            />
            <label for='Home'>Home</label>
          </div>
        </div>
      </div>

      {commuter && (
        <Fragment>
          {/* Box 5 */}
          <div className='questionnaire-box commuter-box questionnaire-top-border'>
            <div className='questionnaire-question'>
              Please provide us the city you currently reside at:
              <span className='required'>*</span>
              <select>
                <option selected value='NOT LISTED'></option>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>
              </select>
            </div>
          </div>

          {/* Box 6 */}
          <div className='questionnaire-box commuter-box'>
            <div className='questionnaire-question'>
              If city is not listed, please type the name of the city below
              <span className='required'>*</span>
              <input
                type='text'
                placeholder='Short answer text'
                className='questionnaire-input'
              ></input>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default StudyGroupQuestions;
