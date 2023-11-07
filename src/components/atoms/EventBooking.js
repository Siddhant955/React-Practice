import React from 'react';

const EventBooking = (props) => {
  return (
    <button
      className={
        props.eventickets !== '0' ? 'event-booking' : 'event-booking dull'
      }
    >
      {props.eventickets !== '0' ? 'Book Event' : 'SOLD OUT'}
    </button>
  );
};

export default EventBooking;
