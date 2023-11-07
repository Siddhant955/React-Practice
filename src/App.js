import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.scss';
import NavBar from './components/templates/NavBar.js';
import EventListingPage from './components/pages/EventListingPage.js';
import EventBookingPage from './components/pages/EventBookingPage.js';
//import { eventsData, test } from './CONSTANTS.js';

export const EventContext = createContext();
export const SetEventContext = createContext();

export default function App() {
  const [evntData, setEvntData] = useState(null);

  async function fetchDataFromJSON() {
    try {
      const response = await fetch('data.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      //console.log('Data fetched');
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }

  useEffect(() => {
    fetchDataFromJSON()
      .then((data) => {
        setEvntData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <EventContext.Provider value={evntData}>
                <EventListingPage />
              </EventContext.Provider>
            </>
          }
        ></Route>
        <Route
          path="/eventbooking/:eventId"
          element={
            <>
              <EventContext.Provider value={evntData}>
                <SetEventContext.Provider value={setEvntData}>
                  <EventBookingPage />
                </SetEventContext.Provider>
              </EventContext.Provider>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}
