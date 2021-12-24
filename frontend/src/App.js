
import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom"; //this is the needful for linking stuff. 
import Login from './components/login';
import Logout from './components/logout';
import PrivateRoute from './components/privateRoute';
import CreateEvent from './components/createEvent';
import Home from './components/home'
import UpcomingEvents from './components/upcomingEvents'

import styled from 'styled-components'

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  text-shadow: 1px 1px 1px black, 0 0 100px black, 0 0 5px black;

header{
  display: flex;
  width: 100%;
  flex-flow: column wrap;
  justify-content: center;
}

div{
  width: 100%;
  text-align: center;
}

h1{
  font-size: 3rem;
  width: 100%;
  font-family: 'Codystar', cursive;

text-shadow: 1px 1px 3px black, 0 0 25px #750D37, 0 0 5px #0f46bd;
}

//1D84B5

  & .navLink{
    margin: 1%;
    text-decoration: none; 
    color: white;
    font-size: 1.4rem;
  }

  & .navLink:hover{
    border-bottom: 2px dotted red;
    text-shadow: 0px 0px 7px black, 0 0 25px darkblue, 0 0 10px red;
  }

`

const AppDiv = styled.div`
  /* max-width: 100%;
  max-height: 100%; */
`

const App = () => { 
return (

	<AppDiv>

  <HeaderDiv>
  	<header>
      <div>
        <h1>Potluck Planner</h1>
      </div>
    	<div>
      	<nav>
        	<Link className='navLink' to="/">Home</Link>
          <Link className='navLink' to="/createEvent">Create Event</Link>
          <Link className='navLink' to="/upcomingEvents">Upcoming Events</Link>
          <Link className='navLink' to = '/login'>Login</Link>
          <Link className='navLink' to = '/logout'>Logout</Link>
        </nav>
      </div>  
    </header>
   </HeaderDiv>

    <Switch>
  
       <PrivateRoute exact path='/logout' component={Logout} />
        
       <Route path='/login' component={Login} />
        
        <Route path="/createEvent"
          component={CreateEvent} />

        <Route path="/upcomingEvents"
        compnent={UpcomingEvents} />
  
        <Route path="/"
        component={Home} />

    </Switch>
  </AppDiv>
	)

}

export default App;
