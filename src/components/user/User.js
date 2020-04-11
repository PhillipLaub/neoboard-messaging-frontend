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
        <div className='reactions-container'>
          <div className='reactions-left'></div>
        </div>
        <img
          className='logged-in-user-image'
          src={require(`../../${image}`)}
        ></img>
        <div className='reactions-container'>
          <div className='reactions-right'></div>
        </div>
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
        <div className='school-info-item-group blue'>Major: {major}</div>

        <div className='school-info-item-group'>Grade: {grade}</div>

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
        <div className='school-info-item-group blue schedule-group'>
          <div className='group-item'>Schedule of Classes </div>
          <div className='group-item edit-button'>Edit</div>
          <div className='schedule-info-item-group'>
            {schedule.map((item) => (
              <div className='schedule-item'>
                {item.class}: {item.days} {item.time}
              </div>
            ))}
          </div>
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

      <div className='return-footer'>
        <div className='return-button'>Return</div>
      </div>
    </div>
  );
};

export default User;
