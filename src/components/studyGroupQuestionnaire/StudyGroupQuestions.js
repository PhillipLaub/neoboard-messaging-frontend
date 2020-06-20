import React, { Fragment, useState } from 'react';
import './StudyGroupQuestions.css';

import ShortAnswerBox from './shortAnswerBox/shortAnswerBox';
import RadioScaleBox from './radioScaleBox/radioScaleBox';
import DescriptionBox from './descriptionBox/descriptionBox';
import TimeInputBox from './timeInputBox/timeInputBox';
import DropdownInputBox from './dropdownInputBox/dropdownInputBox';
import TrueFalseBox from './trueFalseBox/trueFalseBox';
import CheckboxBox from './checkboxBox/checkboxBox';
import HeaderBox from './headerBox/headerBox';
import SubmitButton from './questionnaireSubmit/questionnaireSubmit';

const StudyGroupQuestions = () => {
  const [data, setData] = useState({
    email: undefined,
    fullName: undefined,
    studyLocations: undefined,
    latestSleepTime: undefined,
    studyWithFriend: undefined,
    studyWithPatientPerson: undefined,
    studyWithExperiencedPerson: undefined,
    studyWithOrganizedPerson: undefined,
    studyWithSimilarPerson: undefined,
    studyWithPunctualPerson: undefined,
    mostImportantPreference: undefined,
    friendsInClass: undefined,
    excludeFromGrouping: undefined,
    anonymous: undefined,
    commuter: undefined,
    currentCity: 'NOT LISTED',
    cityIfNotListed: undefined,
  });
  console.log(data);

  const [commuter, setCommuter] = useState(null);

  const [error, setError] = useState(false);

  const toggleError = () => {
    setError(true);
    setTimeout(function () {
      setError(false);
    }, 4000);
  };

  const handleInputChange = (e) => {
    let answer = e.target.value;
    data[e.target.name] = answer;
    console.log(data); /* delete later */
  };

  const handleTrueFalseRadioClick = (e) => {
    data[e.target.name] = 'true' === e.target.value;
    console.log(data); /* delete later */
  };

  const handleCommuterClick = (e) => {
    handleTrueFalseRadioClick(e);
    setCommuter('true' === e.target.value);
    console.log(data); /* delete later */
  };

  const handleRadioScaleClick = (e) => {
    data[e.target.name] = parseInt(e.target.value);
    console.log(data); /* delete later */
  };

  const handleCheckboxClick = (e) => {
    data[e.target.name] = [];
    if (!data[e.target.name].includes(e.target.value)) {
      data[e.target.name].push(e.target.value);
      console.log(data); /* delete later */
    } else {
      let filteredArray = data[e.target.name].filter(
        (element) => element !== e.target.value
      );
      data[e.target.name] = filteredArray;
      console.log(data); /* delete later */
    }
  };

  const questionnaireSubmit = () => {
    // If user is NOT a commuter, nullify their city information (because it doesn't matter)
    if (data.commuter === false) {
      data.currentCity = null;
      data.cityIfNotListed = null;
    } else {
      if (!(data.currentCity === 'NOT LISTED')) {
        data.cityIfNotListed = null;
      }
    }
    let entries = Object.entries(data);
    console.log(entries); /* delete later */
    entries.map((entry) => {
      if (entry[1] === undefined) {
        window.scrollTo(0, 0);
        toggleError();
        console.log(`${entry[0]} is not filled out!`);
      }
    });
  };

  return (
    <div className='study-group-questionnaire-container'>
      {error && (
        <div className='questionnaire-alert required'>
          Please check to see if you have filled out all required fields.
        </div>
      )}

      {/* Box 1 */}
      <HeaderBox
        title={'Study Group Questionnaire'}
        description={
          'This questionnaire is for your online course.  Please fill out this questionnaire to provide us some information on how you decide who to study with, all information collected will remain anonymous and will only be used to organize everyone into groups.'
        }
        question={'Email address'}
        placeholder={'Valid email address'}
        storageKey={'email'}
        func={handleInputChange}
        required={true}
      />

      {/* Box 2 */}
      <ShortAnswerBox
        question={'First & Last Name'}
        placeholder={'Name'}
        storageKey={'fullName'}
        func={handleInputChange}
        required={true}
      />

      {/* Box 3 */}
      <TrueFalseBox
        question={'Are you a commuter?'}
        description={
          'If you are not sure, the best way to tell is if you could reasonably walk to campus or not (i.e. live on campus), or if you need a car to arrive to campus'
        }
        trueLabel={'Yes'}
        falseLabel={'No'}
        storageKey={'commuter'}
        func={handleCommuterClick}
        required={true}
      />

      {commuter && (
        <Fragment>
          {/* Box 4 */}
          <DropdownInputBox
            question={'Please provide us the city you currently reside at:'}
            defaultOption={'NOT LISTED'}
            arrayOfOptions={[
              'Azusa',
              'Banning',
              'Beaumont',
              'Brea',
              'Chino',
              'Claremont',
              'Colton',
              'Corona',
              'Covina',
              'Diamond Bar',
              'Eastvale',
              'Fontana',
              'Glendora',
              'Hesperia',
              'Irvine',
              'Jurupa Valley',
              'Lake Elsinore',
              'Menifee',
              'Montclair',
              'Moreno Valley',
              'Murrieta',
              'Newport Beach',
              'Norco',
              'Ontario',
              'Perris',
              'Placentia',
              'Pomona',
              'Rancho Cucamonga',
              'Redlands',
              'Riverside',
              'Rialto',
              'Rowland Heights',
              'San Bernardino',
              'San Dimas',
              'Temecula',
              'Upland',
              'Victorville',
              'Walnut',
              'West Covina',
            ]}
            storageKey={'currentCity'}
            func={handleInputChange}
            boxStyleModifiers={'commuter-box questionnaire-left-border'}
            required={true}
          />

          {/* Box 5 */}
          <ShortAnswerBox
            question={
              'If city is not listed, please type the name of the city below'
            }
            placeholder={'City name'}
            storageKey={'cityIfNotListed'}
            func={handleInputChange}
            required={true}
            boxStyleModifier={'commuter-box questionnaire-left-border'}
          />
        </Fragment>
      )}

      {/* Box 6 */}
      <CheckboxBox
        question={'Where do you prefer to study with a group?'}
        arrayOfOptions={[
          'Library on Campus',
          'Department Rooms on Campus',
          'Coffee Shop',
          'Home',
        ]}
        storageKey={'studyLocations'}
        func={handleCheckboxClick}
        required={true}
      />

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
      {/* Box 18 */}
      <TrueFalseBox
        question={'I would like to remain anonymous for this poll'}
        trueLabel={'Yes'}
        falseLabel={'No'}
        storageKey={'anonymous'}
        func={handleTrueFalseRadioClick}
        required={true}
      />

      <SubmitButton text={'Submit'} func={questionnaireSubmit} />
    </div>
  );
};

export default StudyGroupQuestions;
