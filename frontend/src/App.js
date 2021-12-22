
import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom"; //this is the needful for linking stuff. 
import Login from './Components/Login';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';
import CreateEvent from './Components/CreateEvent';
import Home from './Components/Home'
import UpcomingEvents from './Components/UpcomingEvents'

import styled from 'styled-components'

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  text-shadow: 1px 1px 2px black, 0 0 100px black, 0 0 5px darkblue;

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
  /* font-family: 'Cantarell', sans-serif; */
  font-family: 'Codystar', cursive;
   /* font-family: 'Courgette', cursive; */
   /* font-family: 'Lato', sans-serif; */
  /* font-family: 'Yellowtail', cursive; */
/* font-family: 'Codystar', cursive;
font-family: 'Courgette', cursive;
font-family: 'Lato', sans-serif;
font-family: 'Yellowtail', cursive; */
text-shadow: 1px 1px 2px black, 0 0 25px #750D37, 0 0 5px #0f46bd;
}

//1D84B5

  & .navLink{
    margin: 1%;
    text-decoration: none; 
    color: white;
    font-size: 1.4rem;
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
          <Link className='navLink' to="/CreateEvent">Create Event</Link>
          <Link className='navLink' to="/UpcomingEvents">Upcoming Events</Link>
          <Link className='navLink' to = '/login'>Login</Link>
          <Link className='navLink' to = '/logout'>Logout</Link>
        </nav>
      </div>  
    </header>
   </HeaderDiv>

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
  </AppDiv>
	)

}

export default App;
