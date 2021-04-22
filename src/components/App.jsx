import React from "react";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import User from "./User";
import notValid from "./notValid";
import PrivateRoute from "./PrivateRoute";
import Cart from "./Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signUp' component={SignUp} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/user' component={User} />
        <PrivateRoute exact path='/cart' component={Cart} />
        <Route path='/*' component={notValid} />
      </Switch>
    </>
  );
}

export default App;
