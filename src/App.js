import React from "react";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is Home Page
      </Route>

      <Route exact path="/order">
        This is Order Page
      </Route>
      <Route>
        404 page not found
      </Route>
    </Switch>
  );
}

export default App;
