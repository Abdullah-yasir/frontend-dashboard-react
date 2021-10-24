import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Dashboard from "../layouts/Dashboard";
import Submenu from "../layouts/Submenu";

import Scrollable from "../components/Scrollable";
import ContentEndIndicator from "../components/ContentEndIndicator";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import Status from "../pages/dashboard/Status";
import Offers from "../pages/dashboard/Offers";
import Rewards from "../pages/dashboard/Rewards";

import EditProfile from "../pages/dashboard/settings/EditProfile";
import ChangePassword from "../pages/dashboard/settings/ChangePassword";
import DeleteAccount from "../pages/dashboard/settings/DeleteAccount";
import UpdateDataAutomated from "../pages/dashboard/settings/UpdateDataAutomated";
import UpdateDataManual from "../pages/dashboard/settings/UpdateDataManual";

const settingsRootLinks = [
  { label: 'Edit Profile', link: '/edit-profile', active: true },
  { label: 'Change Password', link: '/change-password' },
  { label: 'Update Data', link: '/update-data' },
  { label: 'Delete Account', link: '/delete-account' },
];

const updateDataLinks = [
  { label: 'Automated', link: '/automated', active: true },
  { label: 'Manual', link: '/manual' },
]



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
                  <Redirect exact from="/dashboard/settings" to="/dashboard/settings/edit-profile" />
                  <Route path="/dashboard/settings/edit-profile" component={EditProfile} />
                  <Route path="/dashboard/settings/change-password" component={ChangePassword} />
                  <Route path="/dashboard/settings/delete-account" component={DeleteAccount} />
                  <Route path="/dashboard/settings/update-data">
                    <Submenu title="Update Data" baseUrl="/dashboard/settings/update-data" links={updateDataLinks}>
                      <Switch>
                        <Redirect exact from="/dashboard/settings/update-data" to="/dashboard/settings/update-data/automated" />
                        <Route path="/dashboard/settings/update-data/automated" component={UpdateDataAutomated} />
                        <Route path="/dashboard/settings/update-data/manual" component={UpdateDataManual} />
                      </Switch>
                    </Submenu>
                  </Route>
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

