import React from 'react';

const EventDetail = (props) => {
  return (
    <div className="event-detail">
      <span>{props.eventdate}</span>
      <p>
        Tickets Available:{' '}
        <span
          style={
            props.eventickets !== '0'
              ? { color: '#fc732f' }
              : { color: '#757575' }
          }
        >
          {props.eventickets !== '0' ? props.eventickets : 'N/A'}
        </span>
      </p>
    </div>
  );
};

export default EventDetail;
