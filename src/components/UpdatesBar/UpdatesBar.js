import React from 'react';
import './UpdatesBar.css';

const UpdatesBar = ({ subject, newMessages }) => {
    return (
        <div className='update-bar'>
            <div className='updates-container'>
                <div className='subject'>{subject}</div>
                <div className='new-messages'>{newMessages} New Messages</div>
            </div>
        </div>
    );
};

export default UpdatesBar;
