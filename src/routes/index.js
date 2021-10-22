import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Home from "../pages/dashboard/Home";

import Screen from "../layouts/Screen";

export default function Routes() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />


        <Screen>
          <Route exact path="/dashboard/offers" component={Home} />
          <Route exact path="/dashboard/rewards" component={() => 'rewards'} />
          <Route exact path="/dashboard/status" component={() => 'status'} />
          <Route exact path="/dashboard/settings" component={() => 'settings'} />
        </Screen>
      </Switch>
    </Router>
  );
}

