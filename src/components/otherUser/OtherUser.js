import React from 'react';
import './OtherUser.css';

const OtherUser = ({
  otherUserInfo: {
    image,
    name,
    username,
    joinDate,
    college,
    major,
    grade,
    city,
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
            <i class='fas fa-long-arrow-alt-up green'></i> 8
          </div>
          <div className='reaction'>
            <i class='fas fa-thumbs-up yellow'></i> 59{' '}
            <i class='fas fa-long-arrow-alt-up green'></i> 26
          </div>
        </div>

        <img
          className='user-page-image user-flex'
          src={require(`../../${image}`)}
        ></img>

        <div className='reactions-container reactions-right user-flex'>
          <div className='reaction'>
            <i class='fas fa-lightbulb yellow'></i> 24{' '}
            <i class='fas fa-long-arrow-alt-up green'></i> 2
          </div>
          <div className='reaction'>
            <i class='fas fa-brain pink'></i> 11{' '}
            <i class='fas fa-long-arrow-alt-up green'></i> 3
          </div>
          <div className='reaction'>
            <i class='far fa-clock'></i> 8
          </div>
          <div className='reaction'>
            <i class='far fa-lightbulb yellow'></i> 8
          </div>
        </div>
      </div>
      {/*  */}

      <div className='basic-info'>
        <div className='name center'>{name}</div>
        <div className='basic-info-item top-margin-buffer'>@{username}</div>
        <div className='basic-info-item top-margin-buffer'>
          Acing Exams since {joinDate}
        </div>
        <div className='basic-info-item top-margin-buffer'>{college}</div>
        <div className='basic-info-item top-margin-buffer'>{grade}</div>
        <div className='basic-info-item top-margin-buffer'>{major}</div>
        <div className='basic-info-item top-margin-buffer'>{city}</div>
      </div>

      {/*  */}

      {/*  */}

      <div className='return-footer'>
        <div className='return-button'>Return</div>
      </div>
    </div>
  );
};

export default OtherUser;
