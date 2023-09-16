import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1", 
      name: "John Doe", 
      image: 
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress", 
      places: 3
    }
  ];

  return (
    <UsersList items={USERS} />
  );
};

export default Users;
