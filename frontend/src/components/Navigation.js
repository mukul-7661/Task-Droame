import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__nav">
        <button
          className="header_button"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
      </div>
      <div className="header__nav">
        <button
          className="header_button"
          onClick={() => {
            navigate("/users");
          }}
        >
          Users
        </button>
      </div>
      <div className="header__nav">
        <button
          className="header_button"
          onClick={() => {
            navigate("/bookings");
          }}
        >
          Bookings
        </button>
      </div>
    </div>
  );
}

export default Navigation;
