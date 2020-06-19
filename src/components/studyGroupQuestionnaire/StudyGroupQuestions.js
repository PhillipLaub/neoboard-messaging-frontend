import React, { Fragment, useState } from 'react';
import './StudyGroupQuestions.css';

import ShortAnswerBox from './shortAnswerBox/shortAnswerBox';
import RadioScaleBox from './radioScaleBox/radioScaleBox';
import DescriptionBox from './descriptionBox/descriptionBox';
import TimeInputBox from './timeInputBox/timeInputBox';

const StudyGroupQuestions = ({}) => {
  let data = {
    email: null,
    fullName: null,
    studyLocations: [],
    latestSleepTime: null,
    studyWithFriend: null,
    studyWithPatientPerson: null,
    studyWithExperiencedPerson: null,
    studyWithOrganizedPerson: null,
    studyWithSimilarPerson: null,
    studyWithPunctualPerson: null,
    mostImportantPreference: null,
    friendsInClass: [],
    excludeFromGrouping: [],
    anonymous: null,
    commuter: null,
    currentCity: null,
    cityIfNotListed: null,
  };

  const [commuter, setCommuter] = useState(null);

  const handleInputChange = (e) => {
    let answer = e.target.value;
    data[e.target.name] = answer;
    console.log(data); /* delete later */
  };

  const handleTrueFalseRadioClick = (e) => {
    setCommuter('true' === e.target.value);
  };

  const handleRadioScaleClick = (e) => {
    data[e.target.name] = parseInt(e.target.value);
    console.log(data); /* delete later */
  };

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
      <ShortAnswerBox
        question={'First & Last Name'}
        placeholder={'Name'}
        storageKey={'fullName'}
        func={handleInputChange}
        required={true}
      />

      {/* Box 3 */}
      <div className='questionnaire-box'>
        <div className='questionnaire-question'>
          Are you a commuter? <span className='required'> *</span>
          <div className='questionnaire-description'>
            If you are not sure, the best way to tell is if you could reasonably
            walk to campus or not (i.e. live on campus), or if you need a car to
            arrive to campus.
          </div>
          <div className='questionnaire-check-item'>
            <input
              type='radio'
              className='questionnaire-input'
              name='no'
              value='true'
              onClick={handleTrueFalseRadioClick}
            />
            <label for='yes'>Yes</label>
          </div>
          <div className='questionnaire-check-item'>
            <input
              type='radio'
              className='questionnaire-input'
              name='no'
              value='false'
              onClick={handleTrueFalseRadioClick}
            />
            <label for='no'>No</label>
          </div>
        </div>
      </div>
      {commuter && (
        <Fragment>
          {/* Box 4 */}
          <div className='questionnaire-box commuter-box questionnaire-left-border'>
            <div className='questionnaire-question'>
              Please provide us the city you currently reside at:
              <span className='required'> *</span>
              <select>
                <option value='NOT LISTED'>Not Listed</option>
                <option value='Azusa'>Azusa</option>
                <option value='Banning'>Banning</option>
                <option value='Beaumont'>Beaumont</option>
                <option value='Brea'>Brea</option>
                <option value='Chino'>Chino</option>
                <option value='Claremont'>Claremont</option>
                <option value='Colton'>Colton</option>
                <option value='Corona'>Corona</option>
                <option value='Covina'>Covina</option>
                <option value='Diamond Bar'>Diamond Bar</option>
                <option value='Eastvale'>Eastvale</option>
                <option value='Fontana'>Fontana</option>
                <option value='Glendora'>Glendora</option>
                <option value='Hesperia'>Hesperia</option>
                <option value='Irvine'>Irvine</option>
                <option value='Jurupa Valley'>Jurupa Valley</option>
                <option value='Lake Elsinore'>Lake Elsinore</option>
                <option value='Menifee'>Menifee</option>
                <option value='Montclair'>Montclair</option>
                <option value='Moreno Valley'>Moreno Valley</option>
                <option value='Murrieta'>Murrieta</option>
                <option value='Newport Beach'>Newport Beach</option>
                <option value='Norco'>Norco</option>
                <option value='Ontario'>Ontario</option>
                <option value='Perris'>Perris</option>
                <option value='Placentia'>Placentia</option>
                <option value='Pomona'>Pomona</option>
                <option value='Rancho Cucamonga'>Rancho Cucamonga</option>
                <option value='Redlands'>Redlands</option>
                <option value='Riverside'>Riverside</option>
                <option value='Rialto'>Rialto</option>
                <option value='Rowland Heights'>Rowland Heights</option>
                <option value='San Bernardino'>San Bernardino</option>
                <option value='San Dimas'>San Dimas</option>
                <option value='Temecula'>Temecula</option>
                <option value='Upland'>Upland</option>
                <option value='Victorville'>Victorville</option>
                <option value='Walnut'>Walnut</option>
                <option value='West Covina'>West Covina</option>
              </select>
            </div>
          </div>

          {/* Box 5 */}
          <div className='questionnaire-box commuter-box questionnaire-left-border'>
            <div className='questionnaire-question'>
              If city is not listed, please type the name of the city below
              <span className='required'> *</span>
              <input
                type='text'
                placeholder='City name'
                className='questionnaire-input'
              ></input>
            </div>
          </div>
        </Fragment>
      )}

      {/* Box 6 */}
      <div className='questionnaire-box'>
        <div className='questionnaire-question'>
          Where do you prefer to study? <span className='required'> *</span>
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

      {/* Box 7 */}

      <TimeInputBox
        question={
          'Approximately what time is the latest you normally go to sleep?'
        }
        storageKey={'latestSleepTime'}
        func={handleInputChange}
        required={true}
      />

      {/* Box 8 */}
      <DescriptionBox
        description={
          'For the questions below, score from 1 to 7 the important attributes of a study partner/group below'
        }
      />

      <RadioScaleBox
        question={'Studying with someone who I already know/friend of mine'}
        storageKey={'studyWithFriend'}
        func={handleRadioScaleClick}
        required={true}
      />
      <RadioScaleBox
        question={'Studying with someone who is patient'}
        storageKey={'studyWithPatientPerson'}
        func={handleRadioScaleClick}
        required={true}
      />
      <RadioScaleBox
        question={'Studying with someone who understands the material well'}
        storageKey={'studyWithExperiencedPerson'}
        func={handleRadioScaleClick}
        required={true}
      />
      <RadioScaleBox
        question={'Studying with someone who is organized'}
        storageKey={'studyWithOrganizedPerson'}
        func={handleRadioScaleClick}
        required={true}
      />
      <RadioScaleBox
        question={'Studying with someone whom I have common ground with'}
        storageKey={'studyWithSimilarPerson'}
        func={handleRadioScaleClick}
        required={true}
      />
      <RadioScaleBox
        question={'Studying with someone who is punctual'}
        storageKey={'studyWithPunctualPerson'}
        func={handleRadioScaleClick}
        required={true}
      />

      {/* Box 15 */}
      <ShortAnswerBox
        question={
          'If you did not put a 7 for any of the lines above, then what is most important?  "I like to study with someone who is ________."'
        }
        placeholder={'Short answer text'}
        storageKey={'mostImportantPreference'}
        func={handleInputChange}
        required={true}
      />

      {/* Box 16 */}
      <ShortAnswerBox
        question={
          'Please list friends of yours currently enrolled in the class (if any)'
        }
        description={
          'If you placed a high preference for studying with friends, we will try our best to group you guys together.  Please separate names by a comma, and we suggest typing in first and last name for people with common names'
        }
        placeholder={'Long answer text'}
        storageKey={'friendsInClass'}
        func={handleInputChange}
        required={true}
      />

      {/* Box 17 */}
      <ShortAnswerBox
        question={
          'Please list anyone you do NOT want to be grouped with (if any)'
        }
        description={
          'Whatever the history with them is we will not ask why, just so I do not group you with this person.  Please separate names by a comma, and we suggest typing in first and last name for people with common names'
        }
        placeholder={'Long answer text'}
        storageKey={'excludeFromGrouping'}
        func={handleInputChange}
        required={true}
      />
    </div>
  );
};

export default StudyGroupQuestions;
