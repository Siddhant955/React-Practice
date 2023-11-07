import React from 'react';

const EventsHead = (props) => {
  return (
    <div className="events-head-container">
      <h4 className="events-head">
        {'EVENTS '}
        <span className="event-count">({props.eventCount})</span>
      </h4>
    </div>
  );
};

export default EventsHead;
