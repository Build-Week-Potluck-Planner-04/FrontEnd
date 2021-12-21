
import React from 'react';
import './App.css';
// import axios from 'axios';
// import styled from 'styled-components';
import { Route, Link, Switch} from 'react-router-dom';
import CreateEvent from './Components/CreateEvent';
import Home from './Components/Home';
import UpcomingEvents from './Components/UpcomingEvents';
import Login from './Components/Login';
import styled from 'styled-components';


const HeaderDiv = styled.div`

  display: flex;
  margin: auto;
  width: 100%;
  color: white;
  font-family: 'Roboto Mono', monospace;
  /* font-family: 'Bebas Neue', cursive; */

  h1{
    margin: 1;
    font-size: 3rem;
    text-align:center;
    text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px darkblue;
    /* align-content: center; */
  }
  
  header{
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    margin: auto;
  }

   div{
    width: 100%;
    margin: auto;
    justify-content: space-around;
    align-items: center;
  }
 
  nav{
    max-width: 100%;
    display: flex;
    justify-content: center;
  }

  & .link{
    /* margin: 1%; */
    /* margin-right: 10%; */
    font-size: 1.2rem;
    margin: 0 3%;
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px darkblue;
    
  }

  & .link:hover{
   
  }
`



const App = () => { 

return (

	<div>

<HeaderDiv>
  	<header>
      <div>
    	<h1>Potluck Planner</h1>
      </div>
      <div>
      	<nav>
        	<Link className='link' to="/" >Home</Link>
          <Link className='link' to="/CreateEvent">Create Event</Link>
          <Link className='link' to="/UpcomingEvents">Upcoming Events</Link>
          <Link className='link' to="/Login">Login</Link>
        </nav>
      </div>
    </header>
</HeaderDiv>
    
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
