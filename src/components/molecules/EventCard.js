import React from 'react';
import EventImg from '../atoms/EventImg.js';
import EventName from '../atoms/EventName.js';
import EventDetail from '../atoms/EventDetail.js';
import EventBooking from '../atoms/EventBooking.js';
import { Link } from 'react-router-dom';

const EventCard = (props) => {
  return (
    <div className="event-card">
      <EventImg source={props.event.eventimage} />

      <div className="event-details">
        <EventName eventitle={props.event.eventitle} />
        <EventDetail
          eventdate={props.event.eventdate}
          eventickets={props.event.eventickets}
        />
      </div>
      <Link
        to={
          props.event.eventickets === '0'
            ? ''
            : `/eventbooking/${props.event.id}`
        }
      >
        <img
          style={
            props.event.eventickets === '0' ? { filter: 'grayscale(100%)' } : {}
          }
          className="booking-image"
          src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/book.png"
          alt="BookingImage"
        />
      </Link>
      <Link
        to={
          props.event.eventickets === '0'
            ? ''
            : `/eventbooking/${props.event.id}`
        }
      >
        <EventBooking eventickets={props.event.eventickets} />
      </Link>
    </div>
  );
};

export default EventCard;
