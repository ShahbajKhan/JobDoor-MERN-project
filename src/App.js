import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home/Home";
import Employer from "./components/Employer/Employer";
import Login from "./components/Shared/Login/Login";
import NoRoute from "./components/NoRoute/NoRoute";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import Seeker from "./components/Seeker/Seeker";
import JobSeekers from "./components/Admin/JobSeekers/JobSeekers";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin/addAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/postJob">
            <Employer />
          </PrivateRoute>
          <PrivateRoute path="/jobSeeker">
            <Seeker />
          </PrivateRoute>
          <PrivateRoute path="/admin/viewSeekers">
            <JobSeekers />
          </PrivateRoute>
          <Route path="*">
            <NoRoute />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
