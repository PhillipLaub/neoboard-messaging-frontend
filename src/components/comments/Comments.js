import React from 'react';
import CommentItem from './CommentItem';

const Comments = ({ comments }) => {
    return (
        <div className='comments'>
            {comments.map(commentItem => (
                <CommentItem
                    username={commentItem.username}
                    image={commentItem.image}
                    comment={commentItem.comment}
                    key={commentItem.id}
                />
            ))}
        </div>
    );
};

export default Comments;
