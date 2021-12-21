import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { Route, Link, Router, Switch, useHistory } from 'react-router-dom';

const App = () => {


return(
<>
  	<header>
    	<h1>Potluck Planner</h1>
      	<nav>
        	<Link>Home</Link>
          <Link>Create Event</Link>
          <Link>Upcoming Events</Link>
          <Link>Login</Link>
        </nav>
    </header>
  


<Route path='/CreateEvent'>
<Events/> 
</Route> 


<Route path="/">
  <Home />
</Route>

</>

	)
}

export default App;
