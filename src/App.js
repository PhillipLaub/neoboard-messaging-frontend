import React, { useState } from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Comments from './components/comments/Comments';
import UpdatesBar from './components/UpdatesBar/UpdatesBar';

import userComments from './data/comments';

function App() {
  const [comments, setComments] = useState(userComments); // right now this is just dummy data for the comments to fill up biology channel
  const [channel, setChannel] = useState('Calculus 3');
  const [newMessages, setNewMessages] = useState(7);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div className='utility-bar'>
            <Navbar />
            <UpdatesBar subject={channel} newMessages={newMessages} />
          </div>

          <Comments comments={comments} />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;

/* rafce */
