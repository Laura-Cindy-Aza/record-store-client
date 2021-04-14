import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import User from "./User";
import UserProfile from "./UserProfile";
import notValid from './notValid'
import { useSelector } from "react-redux";
import Homepage from './Homepage'
import RecordInfo from './RecordInfo'
import Order from './Order'


function App() {
  const isAuth = useSelector((state) => state.authFromReducer.isAuth);
  return (
    <>


      <Switch>
        <Route exact path='/' component={LandingPage} />
        {isAuth && <Route path='/dashboard' component={Dashboard} />}
        <Route path='/login' component={Login} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/user' component={User} />
        <Route path='/UserProfile' component={UserProfile} />
        <Route path='/notValid' component={notValid} />
        <Route path='/Homepage' component={Homepage} />
        <Route path='/RecordInfo' component={RecordInfo} />
        <Route path='/Order' component={Order} />
      </Switch>
    </>
  );
}

export default App;
