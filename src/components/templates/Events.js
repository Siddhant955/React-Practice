import React, { useContext } from 'react';
import EventsHead from '../atoms/EventsHead.js';
import EventList from '../organisms/EventList.js';
import { EventContext } from '../../App.js';

const Events = () => {
  const eventsData = useContext(EventContext);
  return (
    <div className="events">
      <EventsHead eventCount={eventsData == null ? 0 : eventsData.length} />
      <EventList events={eventsData} />
    </div>
  );
};

export default Events;
