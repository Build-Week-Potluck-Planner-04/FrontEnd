
import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom"; //this is the needful for linking stuff. 
import Login from './Components/Login';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';
import CreateEvent from './Components/CreateEvent';
import Home from './Components/Home'
import UpcomingEvents from './Components/UpcomingEvents'

const App = () => { 
return (

	<div>

  	<header>
    	<h1>Potluck Planner</h1>
      	<nav>
        	<Link to="/">Home</Link>
          <Link to="/CreateEvent">Create Event</Link>
          <Link to="/UpcomingEvents">Upcoming Events</Link>
          <Link to = '/login'>Login</Link>
          <Link to = '/logout'>Logout</Link>
        </nav>
    </header>

    <Switch>
  
       <PrivateRoute exact path='/logout' component={Logout} />
        
       <Route path='/login' component={Login} />
        
        <Route path="/CreateEvent">
          <CreateEvent />
        </Route>

        <Route path="/UpcomingEvents">
          <UpcomingEvents />
        </Route>
  
        <Route path="/">
          <Home />
        </Route>

    </Switch>
  </div>
	)

}

export default App;
