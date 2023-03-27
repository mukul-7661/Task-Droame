import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";
import CreateBooking from "./components/CreateBooking";
import Bookings from "./components/Bookings";
import Navigation from "./components/Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/createBooking"
        element={
          <div>
            <Navigation />
            <CreateBooking />
          </div>
        }
      ></Route>
      <Route
        path="/bookings"
        element={
          <div>
            <Navigation />
            <Bookings />
          </div>
        }
      ></Route>
      <Route
        path="/createUser"
        element={
          <div>
            <Navigation />
            <CreateUser />
          </div>
        }
      ></Route>
      <Route
        path="/users"
        element={
          <div>
            <Navigation />
            <Users />
          </div>
        }
      ></Route>
      <Route
        path="/"
        element={
          <div>
            <Navigation />
            <App />
          </div>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
);
