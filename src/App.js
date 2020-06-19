import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Form from "./Form";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">pizza</Link>
      </nav>
      <div>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
      </div>
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
