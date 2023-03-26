import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import User from "./User";

const Users = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState();

  const getData = async () => {
    const response = await Axios.get("http://localhost:8800/api/users/getAll");

    const usersData = response.data;
    console.log(usersData.length);

    setUsers(
      usersData.map((i) => {
        return (
          <User
            email={i.email}
            password={i.password}
            phone_number={i.phone_number}
            username={i.username}
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
      {users}
      <button
        onClick={() => {
          navigate("/createUser");
        }}
      >
        Add User
      </button>
    </div>
  );
};

export default Users;