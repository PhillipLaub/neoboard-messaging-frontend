import React from 'react';
import './User.css';

const User = ({
  userInfo: {
    image,
    firstName,
    lastName,
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
      {/* This section is hard coded for now... */}
      <div className='top-section-container'>
        <div className='reactions-container reactions-left user-flex'>
          <div className='reaction'>
            <i class='fas fa-circle silver'></i> 1
          </div>
          <div className='reaction'>
            <i class='fas fa-circle gold'></i> 3
          </div>
          <div className='reaction'>
            <i class='fas fa-check green'></i> 14{' '}
            <i class='fas fa-long-arrow-alt-up green'></i> 1
          </div>
          <div className='reaction'>
            <i class='fas fa-thumbs-up yellow'></i> 59
          </div>
        </div>

        <img
          className='logged-in-user-image user-flex'
          src={require(`../../${image}`)}
        ></img>

        <div className='reactions-container reactions-right user-flex'>
          <div className='reaction'>
            <i class='fas fa-brain pink'></i> 13
          </div>
          <div className='reaction'>
            <i class='far fa-clock'></i> 8
          </div>
        </div>
      </div>

      <div className='basic-info'>
        <div className='name'>
          {/* Currently online status indicator is green as if online, however, for the future, this will have to be coded to only do so if they are actually online */}
          {firstName} {lastName} <i class='fas fa-circle green'></i>
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
