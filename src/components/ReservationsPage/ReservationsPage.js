import React from 'react';
import Form from '../Form/Form';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useReducer } from "react";
import { fetchAPI } from "../../reservationSystem";

function ReservationsPage() {

  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <Header />
            <Nav />
            <div className="text">
                <h2>Experience the perfect balance of tradition and luxury.</h2>
                <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                <p>Book a table with us to share in this experience.</p>
            </div>
            <div className="form">
                <h1>Create your Table Reservation</h1>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <Form availableTimes={availableTimes} updateTimes={dispatch} />
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default ReservationsPage