import React, { Fragment, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';

// For the messaging layout
import Messaging from './components/pages/Messaging';
import userComments from './data/comments';

// For the logged in user layout
import User from './components/user/User';
import loggedInUserInfo from './data/userInfo.json';

// For another user layout
import OtherUser from './components/otherUser/OtherUser';
import otherUserInformation from './data/otherUserInfo.json';

// For private user layout
import PrivateUser from './components/privateUser/PrivateUser';
import privateUserInformation from './data/privateUserInfo.json';

// For survey form layout
import SurveyForm from './components/surveyForm/SurveyForm';

// For study group questionnaire layout
import StudyGroupQuestionnaire from './components/pages/StudyGroupQuestionnaire';

function App() {
  // For the messaging layout
  const [comments, setComments] = useState(userComments); // right now this is just dummy data for the comments to fill up biology channel
  const [channel, setChannel] = useState('Calculus 3');
  const [newMessages, setNewMessages] = useState(7);

  // For the logged in user layout
  const [userInfo, setUserInfo] = useState(loggedInUserInfo);

  // For another user layout
  const [otherUserInfo, setOtherUserInfo] = useState(otherUserInformation);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/user'
            render={(props) => (
              <Fragment>
                <Navbar />
                <User {...props} userInfo={loggedInUserInfo} />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/otherUser'
            render={(props) => (
              <Fragment>
                <Navbar />
                <OtherUser {...props} otherUserInfo={otherUserInformation} />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/privateUser'
            render={(props) => (
              <Fragment>
                <Navbar />
                <PrivateUser
                  {...props}
                  privateUserInfo={privateUserInformation}
                />
              </Fragment>
            )}
          />
          <Route exact path='/survey' component={SurveyForm} />
          <Route
            exact
            path='/questionnaire'
            render={(props) => (
              <Fragment>
                <StudyGroupQuestionnaire
                  {...props}
                  userInfo={loggedInUserInfo}
                />
              </Fragment>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

/* <SurveyForm userInfo={userInfo} /> */

/* <User userInfo={userInfo} /> */

/* <OtherUser otherUserInfo={otherUserInfo} /> */

/* <PrivateUser privateUserInfo={privateUserInfo} /> */

/*
          <Messaging
            comments={comments}
            subject={channel}
            newMessages={newMessages}
          /> 
*/

export default App;

/* rafce */
