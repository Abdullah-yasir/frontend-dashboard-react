import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Status from "../pages/dashboard/Status";

import Offers from "../pages/dashboard/Offers";
import Rewards from "../pages/dashboard/Rewards";
import EditProfile from "../pages/dashboard/settings/EditProfile";
import ContentEndIndicator from "../components/ContentEndIndicator";
import Scrollable from "../components/Scrollable";
import Dashboard from "../layouts/Dashboard";
import Submenu from "../layouts/Submenu";
import ChangePassword from "../pages/dashboard/settings/ChangePassword";
import UpdateData from "../pages/dashboard/settings/UpdateData";
import DeleteAccount from "../pages/dashboard/settings/DeleteAccount";

const settingsRootLinks = [
  { label: 'Edit Profile', link: '/edit-profile', active: true },
  { label: 'Change Password', link: '/change-password' },
  { label: 'Update Data', link: '/update-data' },
  { label: 'Delete Account', link: '/delete-account' },
];



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
            <Route path="/dashboard/settings" >
              <Submenu baseUrl="/dashboard/settings" links={settingsRootLinks}>
                <Switch>
                  <Route path="/dashboard/settings/edit-profile" component={EditProfile} />
                  <Route path="/dashboard/settings/change-password" component={ChangePassword} />
                  <Route path="/dashboard/settings/delete-account" component={DeleteAccount} />
                  <Route path="/dashboard/settings/update-data" component={UpdateData} />
                </Switch>
              </Submenu>
            </Route>
          </Dashboard>
        </Route>
      </Switch>
    </Router>
  );
}

// create seperate app for login and register
// after successful login and confirmation from server redirect to actual app

