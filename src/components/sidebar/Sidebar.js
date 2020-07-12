import React from 'react';
import './Sidebar.css';

import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import Subject from './menu-subjects/Subject';

function Sidebar() {
  return (
    <Menu>
      <div className='menu-list'>
        <Subject subject={'Biology 110'} icon={<i class='fas fa-leaf'></i>} />
        <Subject
          subject={'Calculus AB'}
          icon={<i class='fas fa-calculator'></i>}
        />
        <Subject
          subject={'British Literature'}
          icon={<i class='fas fa-book'></i>}
        />
        <Subject
          subject={'Campus'}
          icon={<i class='fas fa-graduation-cap'></i>}
        />
      </div>
    </Menu>
  );
}

export default Sidebar;
