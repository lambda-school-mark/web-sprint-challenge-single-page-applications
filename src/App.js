import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import * as Yup from "yup";

import Home from "./Home";
import Form from "./Form";
import formValidation from "./formValidation";
import User from "./User";

const App = () => {
  const initialFormValues = {
    name: "",
    size: { Small: "", Medium: "", Large: "", xLarge: "" },
    instructions: "",
    toppings: { Pepperoni: "", Mushrooms: "", Chicken: "", Bacon: "" },
  };

  const initialFormErrors = {
    name: "",
    size: { Small: "", Medium: "", Large: "", xLarge: "" },
    instructions: "",
    toppings: { Pepperoni: "", Mushrooms: "", Chicken: "", Bacon: "" },
  };

  const initialDisabled = true;

  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    Yup.reach(formValidation, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    Yup.reach(formValidation, name)
      .validate(checked)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  useEffect(() => {
    formValidation.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(onSubmit);

    const newUser = {
      name: formValues.name,
      size: formValues.size,
      instructions: formValues.instructions,
      topping: formValues.topping,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <nav>
        <Link to="/" style={{ marginRight: "5px" }}>
          Home
        </Link>
        <Link to="/pizza">Order</Link>
      </nav>
      <div>
        <h1>Lambda Eats</h1>
      </div>
      <Switch>
        <Route path="/pizza">
          <Form
            onInputChange={onInputChange}
            values={formValues}
            errors={formErrors}
            disabled={disabled}
            onSubmit={onSubmit}
            onCheckBoxChange={onCheckBoxChange}
          />
          <div>
            {users.map((user) => {
              return <User key={user.id} details={user} />;
            })}
          </div>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
