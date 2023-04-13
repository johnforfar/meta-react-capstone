import React, { useState } from "react";

function Form() {
    const [date, setDate] = useState("");
    const [resTime, setResTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [resTimes, setResTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]);
    const isDisabled = date === "";
    let currentDate = new Date().toJSON().slice(0, 10);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, currentDate);
        alert("You Completed Your Reservation")
    }

    return (
        <div className="ReservationForm">
            <h1>Make Your Reservation</h1>
            <form onSubmit={handleSubmit}>
                <label for="res-date">Choose date</label>
                <input type="date" id="res-date" min={currentDate} required="required" value={date} on onChange={(e) => setDate(e.target.value)} aria-label="Choose Date" />
                <label for="res-time">Choose time</label>
                <select id="res-time" required="required" value={resTime} onChange={(e) => setResTime(e.target.value)} aria-label="Choose Reservation Time">
                    {resTimes.map((resTimes) => {
                        return <option>{resTimes}</option>
                    })}
                </select>
                <label for="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" required="required" value={guests} onChange={(e) => setGuests(e.target.value)} aria-label="Number of Guests"/>
                <label for="occasion">Occasion</label>
                <select id="occasion" required="required" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" disabled={isDisabled} />
            </form>
        </div>
    )
}
export default Form