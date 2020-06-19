import React from "react";
const Form = (props) => {
  const {
    onInputChange,
    onCheckBoxChange,
    values,
    onSubmit,
    errors,
    disabled,
  } = props;

  return (
    <form onSubmit={onSubmit} id="submit">
      <div>
        <p>{errors.name}</p>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={onInputChange}
        value={values.name}
        id="name"
      />
      <br></br>
      <label>
        Select Pizza Size:
        <select name="size" value={values.size} onChange={onInputChange}>
          <option value="">Select</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
        </select>
      </label>
      <br></br>
      <input
        type="text"
        name="instructions"
        id="instructions"
        placeholder="Special Instructions"
        onChange={onInputChange}
        value={values.instructions}
      />
      <br></br>
      <label>
        Toppings:
        <br></br>
        <label>
          <input
            name="Pepperoni"
            id="topping1"
            type="checkbox"
            value={values.Pepperoni}
            checked={values.checked}
            onChange={onCheckBoxChange}
          />
          Pepperoni
        </label>
        <br></br>
        <label>
          <input
            name="Mushrooms"
            id="topping2"
            type="checkbox"
            value={values.Mushrooms}
            checked={values.checked}
            onChange={onCheckBoxChange}
          />
          Mushrooms
        </label>
        <br></br>
        <label>
          <input
            name="Chicken"
            id="topping3"
            type="checkbox"
            value={values.Chicken}
            checked={values.checked}
            onChange={onCheckBoxChange}
          />
          Grilled Chicken
        </label>
        <br></br>
        <label>
          <input
            name="Bacon"
            id="topping4"
            type="checkbox"
            value={values.Bacon}
            checked={values.checked}
            onChange={onCheckBoxChange}
          />
          Bacon
        </label>
      </label>
      <br></br>
      <input
        type="submit"
        disabled={disabled}
        id="submitBtn"
        value="Add to Order"
      />
    </form>
  );
};
export default Form;
