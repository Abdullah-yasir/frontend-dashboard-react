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
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>

      <Screen>
        <Switch>
          <Route path="/dashboard/offers" component={Home} />
        </Switch>
      </Screen>
    </Router>
  );
}

