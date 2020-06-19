import React from "react";

const User = (props) => {
  const { details } = props;
  return (
    <div>
      <div>{details.name}</div>
      <div>{details.size1}</div>
      <div>{details.size2}</div>
      <div>{details.size3}</div>
      <div>{details.size4}</div>
      <div>{details.instructions}</div>
      <div>{details.topping1}</div>
      <div>{details.topping2}</div>
      <div>{details.topping3}</div>
      <div>{details.topping4}</div>
    </div>
  );
};

export default User;
