<<<<<<< HEAD
import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import Login from './Login';
import Signup from './Signup';
import User from './User';
import userProfile from './UserProfile';

=======
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import User from "./User";
import userProfile from "./UserProfile";
>>>>>>> 1042a842ad0f8d27c423f53b078106ff92ed1f41

function App() {
  return (
    <>
<<<<<<< HEAD
    <header>
      <Navbar />
    </header>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/user' component={User} />
          <Route path='/userprofile' component={userProfile} />
      </Switch>
    </>
  )
=======
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
>>>>>>> 1042a842ad0f8d27c423f53b078106ff92ed1f41
}

export default App;
