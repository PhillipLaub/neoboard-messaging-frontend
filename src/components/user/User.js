import React from 'react';
import './User.css';

const User = ({
  userInfo: {
    image,
    name,
    username,
    joinDate,
    college,
    major,
    grade,
    city,
    calender,
    schedule,
    matchingPoll,
    privacySettings,
  },
}) => {
  return (
    <div className='user-container'>
      <div className='image-container'>
        <div className='reactions-1'></div>
        <img
          className='logged-in-user-image'
          src={require(`../../${image}`)}
        ></img>
        <div className='reactions-2'></div>
      </div>

      <div className='basic-info'>
        <div className='name center'>
          {name} <i class='fas fa-circle green'></i>
        </div>
        <div className='basic-info-item'>@{username}</div>
        <div className='basic-info-item'>Acing Exams since {joinDate}</div>
        <div className='basic-info-item'>{college}</div>
      </div>

      {/*  */}

      <div className='school-info'>
        <div className='school-info-item blue'>Major: {major}</div>

        <div className='school-info-item'>Grade: {grade}</div>

        <div className='school-info-item-group blue'>
          <div className='group-item'>City: {city}</div>
          <div className='group-item edit-button'>Edit</div>
        </div>

        <div className='school-info-item-group'>
          <div className='group-item'>
            Calendar:{' '}
            {calender.map((item, index) => (
              <span>{item}</span>
            ))}
          </div>
          <div className='group-item edit-button'>Edit</div>
        </div>
        <div className='school-info-item-group blue'>
          <div className='group-item'>Schedule of Classes </div>
          <div className='group-item edit-button'>Edit</div>
        </div>

        <div className='school-info-item-group'>
          <div className='group-item'>
            Matching Poll: {matchingPoll}% Complete
          </div>
          <div className='group-item edit-button'>Continue</div>
        </div>

        <div className='school-info-item-group blue'>
          <div className='group-item'>Privacy Settings</div>
          <div className='group-item edit-button'>Edit</div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default User;
