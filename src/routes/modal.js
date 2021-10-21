import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SocialMediaModal from "../layouts/SocialMediaModal";
import DataAcquisition from "../pages/modal/DataAcquisition";
import PrivacyPolicy from "../pages/modal/PrivacyPolicy";
import SocialMediaData from "../pages/modal/SocialMediaData";
import SocialMediaInfo from "../pages/modal/SocialMediaInfo";

export default function ModalRoutes() {
  return (
    <Router basename="/add-social-media/">
      <SocialMediaModal>
        <Switch>
          <Route exact path="/media" component={SocialMediaData} />
          <Route exact path="/data" component={DataAcquisition} />
          <Route exact path="/creds" component={SocialMediaInfo} />
          <Route exact path="/privacy" component={PrivacyPolicy} />
        </Switch>
      </SocialMediaModal>

    </Router>
  );
}

