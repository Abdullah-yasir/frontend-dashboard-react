import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";


export default function Routes() {
  return (
    <Router>

      <Switch>
        <Route path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />

      </Switch>

    </Router>
  );
}

