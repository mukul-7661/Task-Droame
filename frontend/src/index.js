import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";
import EditUser from "./components/EditUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/editUser"
        element={
          <div>
            <EditUser />
          </div>
        }
      ></Route>
      <Route
        path="/createUser"
        element={
          <div>
            <CreateUser />
          </div>
        }
      ></Route>
      <Route
        path="/users"
        element={
          <div>
            <Users />
          </div>
        }
      ></Route>
      <Route
        path="/"
        element={
          <div>
            <App />
          </div>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
);
