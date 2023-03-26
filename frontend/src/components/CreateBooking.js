import React, { useState } from "react";
import Axios from "axios";

function CreateBooking() {
  const [booking_id, setBooking_id] = useState();
  const [location_id, setLocation_id] = useState();
  const [drone_shot_id, setDrone_shot_id] = useState();
  const [createdTime, setCreatedTime] = useState();

  const submithandler = async (e) => {
    e.preventDefault();
    // console.log("hello");
    Axios.post("http://localhost:8800/api/bookings/create", {
      booking_id: booking_id,
      location_id: location_id,
      drone_shot_id: drone_shot_id,
      createdTime: createdTime,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setLocation_id("");
    setBooking_id("");
    setDrone_shot_id("");
    setCreatedTime("");
  };
  return (
    <div>
      <form>
        <input
          value={booking_id}
          onChange={(event) => {
            setBooking_id(event.target.value);
          }}
        ></input>
        <input
          value={location_id}
          onChange={(event) => {
            setLocation_id(event.target.value);
          }}
        ></input>
        <input
          value={drone_shot_id}
          onChange={(event) => {
            setDrone_shot_id(event.target.value);
          }}
        ></input>
        <input
          value={createdTime}
          onChange={(event) => {
            setCreatedTime(event.target.value);
          }}
        ></input>
        <button type="submit" onClick={submithandler}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateBooking;
