import React, { Fragment } from 'react';
import Comments from '../comments/Comments';
import MessageBar from '../message/MessageBar';

const Messaging = ({ comments, subject, newMessages }) => {
  return (
    <Fragment>
      <Comments
        comments={comments}
        subject={subject}
        newMessages={newMessages}
      />
      <MessageBar />
    </Fragment>
  );
};

export default Messaging;
