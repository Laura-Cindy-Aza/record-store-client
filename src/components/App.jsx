import React from "react";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import User from "./User";
import UserProfile from "./UserProfile";
import notValid from "./notValid";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/user' component={User} />
        <Route exact path='/' component={LandingPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/signUp' component={SignUp} />
        {/* <Route path='/user' component={User} /> */}
        <Route path='/userProfile' component={UserProfile} />
        <Route path='/notValid' component={notValid} />
        <Route path='/cart' component={Cart} />
        <Route path='/*' component={notValid} />
      </Switch>
    </>
  );
}

export default App;
