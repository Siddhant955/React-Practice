import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SetEventContext, EventContext } from '../../App.js';
import { test } from '../../CONSTANTS.js';
import { useFormik } from 'formik';
import {
  initialBookingValues,
  decreaseEventTickets,
  validateBooking,
  findByID,
} from '../../BookingUtils.js';

const EventBookingPage = () => {
  const [event, setEvent] = useState(test);
  const params = useParams();

  const eventsData = useContext(EventContext);
  const updateEventData = useContext(SetEventContext);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialBookingValues,
    onSubmit: (values) => {
      updateEventData(
        decreaseEventTickets(eventsData, event.eventitle, values.noOfSeats)
      );
      alert(`Ticket Booked!!
      Name: ${values.name}
      Email: ${values.email}
      Phone Number: ${values.phoneNo}
      Numbe Of Seats: ${values.noOfSeats}
      Name of Attendees: ${values.attendees}`);
      console.log(`Ticket Booked!!
      Name: ${values.name}
      Email: ${values.email}
      Phone Number: ${values.phoneNo}
      Numbe Of Seats: ${values.noOfSeats}
      Name of Attendees: ${values.attendees}`);
      navigate('/');
    },
    validate: validateBooking,
  });

  useEffect(() => {
    setEvent(findByID(eventsData, params.eventId));
  }, []);

  return (
    <div className="eventbooking-wrapper">
      <div className="container">
        <div className="bookticket">
          <div className="backtolist-mask">
            <Link to={'/'}>
              <span className="backtolist">Back</span>
            </Link>
          </div>
          <h2>{event.eventitle}</h2>
          <p>
            Number of available seats: <span>{event.eventickets}</span>
          </p>
          <div className="bookticket__form">
            <div className="bookticket__eventimage">
              <img src={event.eventimage} alt="" className="image" />
            </div>
            <div className="bookticket__event">
              <form className="contactform" onSubmit={formik.handleSubmit}>
                <div className="bookticket__label">
                  <label htmlFor="name" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    className="commoninputfield"
                    name="name"
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Enter Full Name"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <span className="errormessage">{formik.errors.name}</span>
                  )}
                </div>

                <div className="bookticket__label">
                  <label htmlFor="email" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="commoninputfield"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Enter Your Email"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <span className="errormessage">{formik.errors.email}</span>
                  )}
                </div>

                <div className="bookticket__label">
                  <label htmlFor="phoneno" htmlFor="phoneno">
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="commoninputfield"
                    name="phoneNo"
                    id="phoneNo"
                    value={formik.values.phoneNo}
                    onChange={formik.handleChange}
                    placeholder="Enter Your Phone Number"
                  />
                  {formik.errors.phoneNo && formik.touched.phoneNo && (
                    <span className="errormessage">
                      {formik.errors.phoneNo}
                    </span>
                  )}
                </div>

                <div className="bookticket__label">
                  <label htmlFor="noOfSeats" htmlFor="noOfSeats">
                    Number of Seats{' '}
                  </label>
                  <select
                    className="commoninputfield"
                    name="noOfSeats"
                    id="noOfSeats"
                    value={formik.values.noOfSeats}
                    onChange={formik.handleChange}
                  >
                    <option value="">Select No of Seats</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  {formik.errors.noOfSeats && formik.touched.noOfSeats && (
                    <span className="errormessage">
                      {formik.errors.noOfSeats}
                    </span>
                  )}
                </div>

                <div className="bookticket__label">
                  <label htmlFor="attendees" htmlFor="attendees">
                    Name of Attendees
                  </label>
                  <input
                    type="text"
                    className="commoninputfield"
                    name="attendees"
                    id="attendees"
                    value={formik.values.attendees}
                    onChange={formik.handleChange}
                    placeholder="Seperated By Comma"
                  />
                  {formik.errors.attendees && formik.touched.attendees && (
                    <span className="errormessage">
                      {formik.errors.attendees}
                    </span>
                  )}
                </div>

                <div className="bookticket__booked">
                  <button
                    type="submit"
                    className="button bookticketbtn"
                    value="submit"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="button bookticketbtn"
                    onClick={() => navigate('/')}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBookingPage;
