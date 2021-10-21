import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Home from "../pages/dashboard/Home";



export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />

        {/* dashboard routes */}
        <Route path="/dashboard/" component={Home} />
      </Switch>

    </Router>
  );
}

