import React, { useState } from "react";
import Axios from "axios";
import "./CreateUser.css";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone_number, setPhone_number] = useState();

  const submithandler = async (e) => {
    e.preventDefault();
    // console.log("hello");
    Axios.post("http://localhost:8800/api/users/create", {
      username: username,
      email: email,
      password: password,
      phone_number: phone_number,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setUsername("");
    setPassword("");
    setPhone_number("");
    navigate("/users");
  };
  return (
    <div className="createUser__box">
      <form>
        <table>
          <tr>
            <td>Enter Email</td>
            <td>
              <input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Enter Username</td>
            <td>
              <input
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Enter Password</td>
            <td>
              <input
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Enter Phone No.</td>
            <td>
              <input
                value={phone_number}
                onChange={(event) => {
                  setPhone_number(event.target.value);
                }}
              ></input>
            </td>
          </tr>
        </table>
        <div className="add__button__container">
          <button className="add__button" type="submit" onClick={submithandler}>
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
