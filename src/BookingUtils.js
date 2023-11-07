
// Utility functions for Booking Form

export const findByID = (array, idToFind) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === idToFind) {
      return array[i];
    }
  }
  return test;
};

export const decreaseEventTickets = (eventData, eventTitle, ticketsToDecrease) => {
  const updatedEventsData = eventData.map((event) => {
    if (event.eventitle === eventTitle) {
      const currentTickets = parseInt(event.eventickets, 10);
      const newTickets = currentTickets - parseInt(ticketsToDecrease, 10);
      return {
        ...event,
        eventickets: newTickets.toString(),
      };
    }
    return event;
  });

  return updatedEventsData;
};


export const initialBookingValues = {
  name: '',
  email: '',
  phoneNo: '',
  noOfSeats: '',
  attendees: '',
};

export const validateBooking = (values) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Required';
  } else if (!/^[a-zA-Z ]*$/.test(values.name)) {
    errors.name = 'Enter alphabets only';
  }

  if (!values.email) {
    errors.email = 'Email Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid';
  }

  if (!values.phoneNo) {
    errors.phoneNo = 'Required';
  } else if (!/^\d{10}$/i.test(values.phoneNo)) {
    errors.phoneNo = 'Phone Number is Invalid';
  }

  if (!values.noOfSeats) {
    errors.noOfSeats = 'Please enter the number of seats.';
  }

  if (!values.attendees.trim()) {
    errors.attendees = 'Name of other Attendee';
  }

  return errors;
},