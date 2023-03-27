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

  const deleteClickHandler = async () => {
    setBooking_id(props.booking_id);
    // console.log(boo)
    Axios.delete(
      `https://droame-task-api.onrender.com/api/bookings/delete/${props.booking_id}`
    )
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

    Axios.put("https://droame-task-api.onrender.com/api/bookings/edit", {
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
    <div className="items__box">
      {!edit && (
        <div>
          <table>
            <tr>
              <td>Booking Id</td>
              <td>{props.booking_id}</td>
            </tr>
            <tr>
              <td>Location Id</td>
              <td>{props.location_id}</td>
            </tr>
            <tr>
              <td>DroneShot Id</td>
              <td>{props.drone_shot_id}</td>
            </tr>
            <tr>
              <td>Created time</td>
              <td>{props.createdTime}</td>
            </tr>
          </table>

          <button className="items__button" onClick={editClickhandler}>
            Edit Booking
          </button>
          <button className="items__button" onClick={deleteClickHandler}>
            Delete Booking
          </button>
        </div>
      )}
      {edit && (
        <div>
          <form>
            <table>
              <tr>
                {/* <td>Enter BookingId</td>
                <td>
                  <input
                    value={booking_id}
                    onChange={(event) => {
                      setBooking_id(event.target.value);
                    }}
                  ></input>
                </td> */}
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
            <button
              className="items__button"
              type="submit"
              onClick={submithandler}
            >
              Submit
            </button>
            <button
              className="items__button"
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
