import React, { useState } from "react";
import Axios from "axios";

function CreateUser() {
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
  };
  return (
    <div>
      <form>
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <input
          value={phone_number}
          onChange={(event) => {
            setPhone_number(event.target.value);
          }}
        ></input>
        <button type="submit" onClick={submithandler}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
