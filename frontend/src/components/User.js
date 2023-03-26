import React, { useState } from "react";
import Axios from "axios";

function User(props) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone_number, setPhone_number] = useState();

  const editClickhandler = () => {
    setEdit(true);
    setEmail(props.email);
    setPassword(props.password);
    setPhone_number(props.phone_number);
    setUsername(props.username);
  };

  const submithandler = async (e) => {
    e.preventDefault();
    // console.log("hello");

    Axios.put("http://localhost:8800/api/users/edit", {
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
    setEdit(false);
  };

  const [edit, setEdit] = useState(false);
  return (
    <div>
      {!edit && (
        <div>
          <p>{props.email}</p>
          <p>{props.username}</p>
          <p>{props.password}</p>
          <p>{props.phone_number}</p>
          <button onClick={editClickhandler}>Edit user</button>
        </div>
      )}
      {edit && (
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

export default User;
