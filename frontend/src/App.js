
import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"; //this is the needful for linking stuff. 
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import CreateEvent from './components/CreateEvent';

const App = () => { 
return (

	<div>

  	<header>
    	<h1>Potluck Planner</h1>
      	<nav>
        	<Link to="/">Home</Link>
          <Link to="/CreateEvent">Create Event</Link>
          <Link to="/UpcomingEvents">Upcoming Events</Link>
          <Link to = '/login'>Log me IN!</Link>
          <Link to = '/logout'>Log me OUT!</Link>
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
