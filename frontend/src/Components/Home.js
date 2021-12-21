import React from 'react';
import { Link, Route, } from 'react-router-dom';
import CreateEvent from './components/CreateEvent';
import styled from 'styled-components';

const StyledH2 = styled.h2`
font-size: 2rem;
`

const StyledButton = styled.button`
color: black;
margin: 16px;
padding: 16px 8px 12px 16px;
font-size: 1rem;
border-radius: 15px;
`

export default function Home() {

  return (
    <div>
      <StyledH2>New Event Creator!</StyledH2>  
        <StyledButton > 
            <Link id="create-event" to="/CreateEvent">
                Create New Event Here
            </Link> 
        </StyledButton>                       
        <Route exact path="/CreateEvent" >
            <CreateEvent/>
        </Route>              
    </div>     
  )
}