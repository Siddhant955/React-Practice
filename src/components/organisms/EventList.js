import React, { useState, useContext } from 'react';
import EventCard from '../molecules/EventCard.js';
import { TermContext } from '../pages/EventListingPage.js';

const EventList = (props) => {
  let searchTerm = useContext(TermContext);

  const filteredEvents =
    props.events == null
      ? []
      : props.events.filter((val) => {
          if (searchTerm === '') {
            return true;
          } else if (
            val.eventitle.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return true;
          }
          return false;
        });

  return (
    <div className="event-list">
      {filteredEvents.length === 0 ? (
        <p style={{ margin: '0.7rem' }}>
          <strong>No Event Found!.</strong>
        </p>
      ) : (
        filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))
      )}
    </div>
  );
};

export default EventList;
