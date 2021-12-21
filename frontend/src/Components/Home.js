import React from 'react';
import { Link, Route, useHistory} from 'react-router-dom';
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

    const history = useHistory();

const routeToCreateEvent = () => {
    history.push('/CreateEvent');
  }
  
  return (
    <div>
      <StyledH2>New Event Creator!</StyledH2> 
 
        <StyledButton onClick={routeToCreateEvent} > 
                Create New Event Here!
        </StyledButton>     
{/*                           
        <Route exact path="/CreateEvent" >
            <CreateEvent/>
        </Route>               */}
    </div>     
  )
} 
