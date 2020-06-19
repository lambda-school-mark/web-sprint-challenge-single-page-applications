import React from "react";

import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const routeToShop = () => {
    if (true) {
      history.push("/pizza");
    } else {
      history.push("/");
    }
  };
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="pizza"
      />
      <button onClick={routeToShop}>Order Now!</button>
    </div>
  );
}
