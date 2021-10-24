import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Screen from "../layouts/Screen";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Status from "../pages/dashboard/Status";

import Offers from "../pages/dashboard/Offers";
import Rewards from "../pages/dashboard/Rewards";
import Settings from "../pages/dashboard/Settings";
import ContentEndIndicator from "../components/ContentEndIndicator";
import Scrollable from "../components/Scrollable";
import Dashboard from "../layouts/Dashboard";
import NestedRoute from "../components/NestedRoute";




export default function Routes() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />


        <Route path="/dashboard/">
          <Dashboard>
            <Route path="/dashboard/page">
              <Scrollable>
                <Route path="/dashboard/page/content">
                  <ContentEndIndicator>
                    <Switch>
                      <Route path="/dashboard/page/content/offers" component={Offers} />
                      <Route path="/dashboard/page/content/rewards" component={Rewards} />
                      <Route path="/dashboard/page/content/status" component={Status} />
                    </Switch>
                  </ContentEndIndicator>
                </Route>
              </Scrollable>
            </Route>
            <Route path="/dashboard/settings" component={Settings} />
          </Dashboard>
        </Route>



      </Switch>
    </Router>
  );
}

// create seperate app for login and register
// after successful login and confirmation from server redirect to actual app

