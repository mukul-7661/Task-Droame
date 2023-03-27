import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Booking from "./Booking";

const Bookings = () => {
  const navigate = useNavigate();

  const [bookings, setbookings] = useState();

  const getData = async () => {
    const response = await Axios.get(
      "http://localhost:8800/api/bookings/getAll"
    );

    const bookingsData = response.data;
    console.log(bookingsData.length);

    setbookings(
      bookingsData.map((i) => {
        return (
          <Booking
            booking_id={i.booking_id}
            location_id={i.location_id}
            drone_shot_id={i.drone_shot_id}
            createdTime={i.createdTime}
          />
        );
      })
    );
  };

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      <div className="add__button__container">
        <button
          className="add__button"
          onClick={() => {
            navigate("/createBooking");
          }}
        >
          Add Booking
        </button>
      </div>
      <div className="items__container">{bookings}</div>
    </div>
  );
};

export default Bookings;
