import React from 'react';
import { Link, Route, useHistory} from 'react-router-dom';
import CreateEvent from './createEvent';
import styled from 'styled-components';

const FormContainer = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-content: center;
align-items: center;
font-family: 'Quicksand', sans-serif;
margin-top: 5%;

div{
  width: 30%;
  text-align: center;
}
`

const StyledH2 = styled.h2`
font-size: 2rem;
font-family: 'Quicksand', sans-serif;
text-shadow: 1px 1px 2px black, 0 0 25px darkblue, 0 0 5px black;s
`
const StyledDiv = styled.div`
display: flex;
border: 2px solid black;
border-radius: 8px;
justify-content: space-between;
align-items: center;
align-content: center;
flex-flow: column wrap;
padding: 1rem;
width: 25%;
background-color: white;
margin: 5%;
background-color: rgba(43,48,58, .7);
border: 2px solid white;
font-family: 'Quicksand', sans-serif;


`
const StyledButton = styled.button`
margin: 16px;
padding: 16px 8px 12px 16px;
font-size: 1rem;
border-radius: 15px;
background-color: #750D37;
background-image: url('');
border: 2px solid black;
border-radius: 8px;
color: #0f46bd;
height: 5rem;
font-family: 'Quicksand', sans-serif;
`


export default function Home() {

    const history = useHistory();

const routeToCreateEvent = () => {
    history.push('/CreateEvent');
  }

  return (
    <FormContainer>
    <StyledDiv>
      <StyledH2>Plan Your Next Potluck!</StyledH2> 

        <StyledButton onClick={routeToCreateEvent} > 
                Create New Event Here!
        </StyledButton>     
{/*                           
        <Route exact path="/CreateEvent" >
            <CreateEvent/>
        </Route>               */}
    </StyledDiv>
    </FormContainer>     
  )
} 
