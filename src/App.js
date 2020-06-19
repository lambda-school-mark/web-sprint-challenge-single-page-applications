import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

import Home from "./Home";
import Form from "./Form";
import formValidation from "./formValidation";
import User from "./User";

const App = () => {
  const initialFormValues = {
    name: "",
    size: "",
    instructions: "",
    Pepperoni: false,
    Mushrooms: false,
    Chicken: false,
    Bacon: false,
  };

  const initialFormErrors = {
    name: "",
    size: "",
    instructions: "",
    Pepperoni: "",
    Mushrooms: "",
    Chicken: "",
    Bacon: "",
  };

  const initialDisabled = true;

  const [pizzas, setPizzas] = useState([]);

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

    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      instructions: formValues.instructions,
      Pepperoni: formValues.Pepperoni,
      Mushrooms: formValues.Mushrooms,
      Chicken: formValues.Chicken,
      Bacon: formValues.Bacon,
    };
    postNewPizzas(newPizza);
    setFormValues(initialFormValues);
  };

  const postNewPizzas = (newPizza) => {
    axios
      .post("https://reqres.in/api/users", newPizza)
      .then((res) => {
        setPizzas([res.data, ...pizzas]);
        console.log(res.data);
        console.log(pizzas);
      })
      .catch((err) => {
        console.log("Post error:", err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
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
            disabled={disabled}
            onSubmit={onSubmit}
            onCheckBoxChange={onCheckBoxChange}
          />
          <div>
            {pizzas.map((pizza) => {
              return <User key={pizza.id} details={pizza} />;
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
