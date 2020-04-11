import React, { Fragment, useState } from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';

// For the messaging layout
import Messaging from './components/pages/Messaging';
import userComments from './data/comments';

// For the logged in user layout
import User from './components/user/User';
import loggedInUserInfo from './data/userInfo.json';

function App() {
  // For the messaging layout
  const [comments, setComments] = useState(userComments); // right now this is just dummy data for the comments to fill up biology channel
  const [channel, setChannel] = useState('Calculus 3');
  const [newMessages, setNewMessages] = useState(7);

  // For the logged in user layout
  const [userInfo, setUserInfo] = useState(loggedInUserInfo);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navbar />
          <User userInfo={userInfo} />
        </>
      </ThemeProvider>
    </div>
  );
}

{
  /*           <Messaging
            comments={comments}
            subject={channel}
            newMessages={newMessages}
          /> */
}

export default App;

/* rafce */
