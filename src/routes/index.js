import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Status from "../pages/dashboard/Status";

import Screen from "../layouts/Screen";
import Offers from "../pages/dashboard/Offers";
import Rewards from "../pages/dashboard/Rewards";
import Settings from "../pages/dashboard/Settings";

export default function Routes() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />

        <Screen>
          <Route exact path="/dashboard/offers" component={Offers} />
          <Route exact path="/dashboard/rewards" component={Rewards} />
          <Route exact path="/dashboard/status" component={Status} />
          <Route exact path="/dashboard/settings" component={Settings} />
        </Screen>
      </Switch>
    </Router>
  );
}

// create seperate app for login and register
// after successful login and confirmation from server redirect to actual app

