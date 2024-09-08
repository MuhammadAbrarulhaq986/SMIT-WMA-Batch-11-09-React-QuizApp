import React, { useEffect } from "react";

const User = ({ username, func }) => {
  const age = 20;

  useEffect(() => {
    console.log("Component mount");
    return () => {
      console.log("Component unmount");
    };
  }, []); // dependency array
  return (
    <>
      <h1>Welcome {username}</h1>
      <button onClick={() => func(age)}>Click</button>
    </>
  );
};
export default User;
