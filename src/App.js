import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navs from "./components/Navs";

import Home from "./pages/Home";
import Order from "./pages/Order";


function App() {
  return (

    <div>
      <Navs />
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
    </div>
  );
}

export default App;
