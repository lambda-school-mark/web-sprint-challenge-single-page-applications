import React from "react";
const Form = (props) => {
  const { onInputChange, onCheckBoxChange, values, onSubmit, errors } = props;

  return (
    <form>
      <div>
        <p>{errors.name}</p>
      </div>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={onInputChange}
        value={values.name}
      />
    </form>
  );
};
export default Form;
