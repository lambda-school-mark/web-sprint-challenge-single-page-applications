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
        <select>
          <option>Select</option>
          <option type="text" name="Small" id="size1" value={values.size}>
            Small
          </option>
          <option type="text" name="Medium" id="size2" value={values.size}>
            Medium
          </option>
          <option type="text" name="Large" id="size3" value={values.size}>
            Large
          </option>
          <option type="text" name="xLarge" id="size4" value={values.size}>
            X-Large
          </option>
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
            value={values.topping1}
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
            value={values.topping2}
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
            value={values.topping3}
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
            value={values.topping4}
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
