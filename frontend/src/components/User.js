import React, { useState } from "react";
import Axios from "axios";
import "./User.css";

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

    Axios.put("https://droame-task-api.onrender.com/api/users/edit", {
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
    <div className="items__box">
      {!edit && (
        <div>
          <table>
            <tr>
              <td>Email</td>
              <td>{props.email}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>{props.username}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>{props.password}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{props.phone_number}</td>
            </tr>
          </table>

          <button className="items__button" onClick={editClickhandler}>
            Edit user
          </button>
        </div>
      )}
      {edit && (
        <div>
          <form>
            <table>
              <tr>
                {/* <td>Enter Email</td>
                <td>
                  <input
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  ></input>
                </td> */}
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

export default User;
