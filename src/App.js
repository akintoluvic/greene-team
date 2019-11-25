import React from "react";
// import AuthExample from './testPAge';
import Home from "./pages/Home";
import AllFeed from "./pages/AllFeed";

import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import "./App.css";

function App() {
  const [state, setState] = React.useState({
    isAuthenticated: false,
  })
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
            {/* <Home />
          </Route> */}
          <Route component={AllFeed} />
          <Route exact path="/feed" component={AllFeed} />
        </Switch>

        {/* { isUserAuthenticated() ? props.children : <Redirect to={routes.login} /> } */}
      </div>
    </Router>
  );
}

export default App;


function ProtectedRoute() {
  // this.setState({ isAuthenticated: true})
  return (
    <Route component={AllFeed}/>
  )
}

