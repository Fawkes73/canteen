import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Order from "./pages/Order";



function App() {
  return (

    <Switch>
      <Route exact path="/">
        <Home />

      </Route>

      <Route exact path="/order">
        <Order />
      </Route>
      <Route>
        404 page not found
      </Route>
    </Switch>


  );
}

export default App;
