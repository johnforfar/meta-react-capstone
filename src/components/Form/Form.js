import { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function ReservationForm(props) {

const [reservationData, setReservationData] = useState({
  fName: "",
  lName: "",
  email: "",
  tel: "",
  people: 1,
  date: "",
  occasion: "",
  preferences: "",
  comments: "",
  finalTime: props.availableTimes.map((times) => (
    <option key={times}>{times}</option>
  )),
});

  function handleDateChange(e) {
    const newDate = e.target.value;
    setReservationData({
      ...reservationData,
      date: newDate,
      finalTime: props.availableTimes.map((times) => (
        <option key={times}>{times}</option>
      )),
    });
    const date = new Date(newDate);
    props.updateTimes(date);
  }

  return (
    <form className="reservation-form">
      <div>
        <label htmlFor="fName">First Name</label> <br></br>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={reservationData.fName}
          onChange={(e) => setReservationData({ ...reservationData, fName: e.target.value })}
          ></input>
      </div>

      <div>
        <label htmlFor="lName">Last Name</label> <br></br>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={reservationData.lName}
          onChange={(e) => setReservationData({ ...reservationData, lName: e.target.value })}
        ></input>
      </div>

      <div>
        <label htmlFor="email">Email</label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={reservationData.email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setReservationData({ ...reservationData, email: e.target.value })}
        ></input>
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number</label> <br></br>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={reservationData.tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setReservationData({ ...reservationData, tel: e.target.value })}
        ></input>
      </div>

      <div>
        <label htmlFor="people">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={reservationData.people}
          required
          min={1}
          max={100}
          onChange={(e) => setReservationData({ ...reservationData, people: e.target.value })}
        ></input>
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={reservationData.date}
          onChange={handleDateChange}
        ></input>
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {reservationData.finalTime}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={reservationData.occasion}
          onChange={(e) => setReservationData({ ...reservationData, occasion: e.target.value })}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={reservationData.preferences}
          onChange={(e) => setReservationData({ ...reservationData, preferences: e.target.value })}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={reservationData.comments}
          onChange={(e) => setReservationData({ ...reservationData, comments: e.target.value })}
        ></textarea>
      </div>

      <div>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <Link className="action-button" to="/confirmation">
          Book Table
        </Link>
      </div>
    </form>
  );
}
export default ReservationForm;