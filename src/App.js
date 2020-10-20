import React, { Fragment, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Sidebar from "./components/sidebar/Sidebar";

import Burger from "./components/burger/Burger";
import { slide as Menu } from "react-burger-menu";
import Subject from "./components/sidebar/menu-subjects/Subject";

// For the messaging layout
import Messaging from "./components/pages/Messaging";
import userComments from "./data/comments";

// For the logged in user layout
import User from "./components/user/User";
import loggedInUserInfo from "./data/userInfo.json";

// For another user layout
import OtherUser from "./components/otherUser/OtherUser";
import otherUserInformation from "./data/otherUserInfo.json";

// For private user layout
import PrivateUser from "./components/privateUser/PrivateUser";
import privateUserInformation from "./data/privateUserInfo.json";

// For study group questionnaire layout
import StudyGroupQuestionnaire from "./components/pages/StudyGroupQuestionnaire";

function App() {
  // For the messaging layout
  const [comments, setComments] = useState(userComments); // right now this is just dummy data for the comments to fill up biology channel
  const [channel, setChannel] = useState("Calculus 3");
  const [newMessages, setNewMessages] = useState(7);

  // For the logged in user layout
  const [userInfo, setUserInfo] = useState(loggedInUserInfo);

  // For another user layout
  const [otherUserInfo, setOtherUserInfo] = useState(otherUserInformation);
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div id="app" className="App">
        <div id="outer-container">
          {/* <Navbar /> */}
          <div className="navbar">
            {/* <Burger /> */}
            <button className="burger-button">
              {/* <Sidebar /> */}
              <Menu>
                <div className="menu-list">
                  <Subject
                    subject={"Biology 110"}
                    icon={<i class="fas fa-leaf"></i>}
                  />
                  <Subject
                    subject={"Calculus AB"}
                    icon={<i class="fas fa-calculator"></i>}
                  />
                  <Subject
                    subject={"British Literature"}
                    icon={<i class="fas fa-book"></i>}
                  />
                  <Subject
                    subject={"Campus"}
                    icon={<i class="fas fa-graduation-cap"></i>}
                  />
                  {/* Dark Mode Slider Start */}
                  <div>
                    {" "}
                    <div className="toggle-container">
                      <span style={{ color: darkMode ? "#bcd4d9" : "#172e3f" }} className="darkmode">
                        Dark Mode
                      </span>
                      <span className="toggle">
                        <input
                          checked={darkMode}
                          onChange={() => setDarkMode((prevMode) => !prevMode)}
                          id="checkbox"
                          className="checkbox"
                          type="checkbox"
                        />
                        <label htmlFor="checkbox"></label>
                      </span>
                      {/* <span style={{ color: darkMode ? "#bcd4d9" : "#172e3f" }}>
                        ☾
                      </span> */}
                    </div>
                  </div>
                  
                  {/* Dark Mode Slider End */}
                </div>
              </Menu>
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <Switch>
            <Route
              exact
              path="/messaging"
              render={(props) => (
                <Fragment>
                  <Messaging
                    {...props}
                    comments={comments}
                    subject={channel}
                    newMessages={newMessages}
                  />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/user"
              render={(props) => (
                <Fragment>
                  <User {...props} userInfo={loggedInUserInfo} />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/otherUser"
              render={(props) => (
                <Fragment>
                  <OtherUser {...props} otherUserInfo={otherUserInformation} />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/privateUser"
              render={(props) => (
                <Fragment>
                  <PrivateUser
                    {...props}
                    privateUserInfo={privateUserInformation}
                  />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/questionnaire"
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
      </div>
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
