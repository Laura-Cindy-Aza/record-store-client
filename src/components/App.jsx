import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import User from "./User";
import userProfile from "./UserProfile";
import notValid from "./notValid";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.authFromReducer.isAuth);
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        {isAuth && <Route path='/dashboard' component={Dashboard} />}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/user' component={User} />
        <Route path='/userprofile' component={userProfile} />
        <Route path='/notValid' component={notValid} />
        <Route path='/*' component={notValid} />
      </Switch>
    </>
  );
}

export default App;
