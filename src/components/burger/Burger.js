// Burger.js
import React from 'react';
import './Burger.css';

import Sidebar from '../sidebar/Sidebar';

const Burger = () => {
    return (
        <button className='burger-button'>
            <Sidebar />
            <i class='fas fa-bars'></i>
        </button>
    );
};

export default Burger;
