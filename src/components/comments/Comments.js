import React, { Fragment } from 'react';
import CommentItem from './CommentItem';
import UpdatesBar from '../UpdatesBar/UpdatesBar';
import './Comments.css';

const Comments = ({ comments, subject, newMessages }) => {
    return (
        <Fragment>
            <UpdatesBar subject={subject} newMessages={newMessages} />
            <div className='comments'>
                {comments.map((commentItem) => (
                    /*         {commentItem.timestamp ? } */
                    <CommentItem
                        username={commentItem.username}
                        image={commentItem.image}
                        comment={commentItem.comment}
                        timestamp={commentItem.timestamp}
                        key={commentItem.id}
                    />
                ))}
            </div>
        </Fragment>
    );
};

export default Comments;
