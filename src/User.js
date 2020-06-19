import React from "react";

const User = (props) => {
  const { details } = props;
  return (
    <div>
      <div>{details.name}</div>
      <div>{details.size}</div>
      <div>{details.instructions}</div>
      <div>Pepperoni: {details.Pepperoni.toString()}</div>
      <div>Mushrooms: {details.Mushrooms.toString()}</div>
      <div>Chicken: {details.Chicken.toString()}</div>
      <div>Bacon {details.Bacon.toString()}</div>
    </div>
  );
};

export default User;
