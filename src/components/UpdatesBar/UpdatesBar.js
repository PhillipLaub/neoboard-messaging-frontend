import React from 'react';
import './UpdatesBar.css';

const UpdateBar = ({ subject }) => {
    return (
        <div className='update-bar'>
            <div>{subject}</div>
            <div>Time</div>
        </div>
    );
};

export default UpdateBar;
