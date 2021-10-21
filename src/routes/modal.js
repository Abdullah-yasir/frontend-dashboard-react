import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from "../pages/auth/Login";

export default function Routes() {
  return (
    <Router basename="/add-social-media/">
      <Switch>
        <Route exact path="/" component={Login} />

      </Switch>
    </Router>
  );
}

