import React, { useState } from "react";
import Button from "./Button";

const Card = ({ title, description, children }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rs: {children}</p>
      <button title="click" bgcolor="orange" color="white">
        Buy
      </button>
    </div>
  );
};

export default Card;
