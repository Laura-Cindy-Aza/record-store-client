import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import User from "./User";
import userProfile from "./UserProfile";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/user' component={User} />
        <Route path='/userprofile' component={userProfile} />
      </Switch>
    </>
  );
}

export default App;
