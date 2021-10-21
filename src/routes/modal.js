import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function ModalRoutes() {
  return (
    <Router basename="/add-social-media/">
      <Switch>
        <Route exact path="/media" component={(Login => 'some content')} />
        <Route exact path="/data" component={(Login => 'some content 2')} />
        <Route exact path="/creds" component={(Login => 'some content 3')} />
        <Route exact path="/privacy" component={(Login => 'some content 4')} />

      </Switch>
    </Router>
  );
}

