import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import * as Yup from "yup";

import Home from "./Home";
import Form from "./Form";
import formValidation from "./formValidation";

const App = () => {
  const initialFormValues = {
    name: "",
  };

  const initialFormErrors = {
    name: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

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
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
