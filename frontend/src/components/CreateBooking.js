import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBooking() {
  const navigate = useNavigate();

  const [booking_id, setBooking_id] = useState();
  const [location_id, setLocation_id] = useState();
  const [drone_shot_id, setDrone_shot_id] = useState();
  const [createdTime, setCreatedTime] = useState();

  const submithandler = async (e) => {
    e.preventDefault();
    // console.log("hello");
    Axios.post("https://droame-task-api.onrender.com/api/bookings/create", {
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
    navigate("/bookings");
  };
  return (
    <div className="createUser__box">
      <form>
        <table>
          <tr>
            <td>Enter BookingId</td>
            <td>
              <input
                value={booking_id}
                onChange={(event) => {
                  setBooking_id(event.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Enter LocationId</td>
            <td>
              <input
                value={location_id}
                onChange={(event) => {
                  setLocation_id(event.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Enter DroneShotId</td>
            <td>
              <input
                value={drone_shot_id}
                onChange={(event) => {
                  setDrone_shot_id(event.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Enter Created Time</td>
            <td>
              <input
                value={createdTime}
                onChange={(event) => {
                  setCreatedTime(event.target.value);
                }}
              ></input>
            </td>
          </tr>
        </table>
        <div className="add__button__container">
          <button className="add__button" type="submit" onClick={submithandler}>
            Add Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBooking;
