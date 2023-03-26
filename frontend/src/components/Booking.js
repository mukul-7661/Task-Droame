import React, { useState } from "react";
import Axios from "axios";

function Booking(props) {
  const [booking_id, setBooking_id] = useState();
  const [location_id, setLocation_id] = useState();
  const [drone_shot_id, setDrone_shot_id] = useState();
  const [createdTime, setCreatedTime] = useState();

  const editClickhandler = () => {
    setEdit(true);
    setLocation_id(props.location_id);
    setDrone_shot_id(props.drone_shot_id);
    setCreatedTime(props.createdTime);
    setBooking_id(props.booking_id);
  };

  const deleteClickHandler = () => {
    setBooking_id(props.booking_id);
    Axios.delete(`http://localhost:8800/api/bookings/delete/${booking_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    // console.log("hello");

    Axios.put("http://localhost:8800/api/bookings/edit", {
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
    setEdit(false);
  };

  const [edit, setEdit] = useState(false);
  return (
    <div>
      {!edit && (
        <div>
          <p>{props.location_id}</p>
          <p>{props.booking_id}</p>
          <p>{props.drone_shot_id}</p>
          <p>{props.createdTime}</p>
          <button onClick={editClickhandler}>Edit Booking</button>
          <button onClick={deleteClickHandler}>Delete Booking</button>
        </div>
      )}
      {edit && (
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
              Submit
            </button>
            <button
              onClick={() => {
                setEdit(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Booking;
