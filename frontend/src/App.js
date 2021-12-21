
import React from 'react';
import './App.css';

// import axios from 'axios';
// import styled from 'styled-components';
import { Route, Link, Switch} from 'react-router-dom';
import CreateEvent from './Components/CreateEvent';
import Home from './Components/Home';
import UpcomingEvents from './Components/UpcomingEvents';
import Login from './Components/Login';


const App = () => { 
return (

	<div>

  	<header>
    	<h1>Potluck Planner</h1>
      	<nav>
        	<Link to="/">Home</Link>
          <Link to="/CreateEvent">Create Event</Link>
          <Link to="/UpcomingEvents">Upcoming Events</Link>
          <Link to="/Login">Login</Link>
        </nav>
    </header>

    <Switch>
        <Route path="/CreateEvent">
          <CreateEvent />
        </Route>

        <Route path="/UpcomingEvents">
          <UpcomingEvents />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/">
          <Home />
        </Route>

    </Switch>
  </div>
	)
}

export default App;
