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

button:hover{
  border: 2px dotted red;
  text-shadow: 0px 0px 7px black, 0 0 25px darkblue, 0 0 10px red;
}

div{
  width: 30%;
  text-align: center;
}
`

const StyledH2 = styled.h2`
font-size: 2rem;
font-family: 'Quicksand', sans-serif;
text-shadow: 1px 1px 1px black, 0 0 25px darkblue, 0 0 10px red;
`
const StyledDiv = styled.div`
/* display: flex;
border: 2px solid black;
border-radius: 8px;
justify-content: space-between;
align-items: center;
align-content: center;
flex-flow: column wrap;
padding: 1rem;
width: 25%; */

/* margin: 5%;
background-color: rgba(43,48,58, .7);

font-family: 'Quicksand', sans-serif; */


`
const StyledButton = styled.button`
display: flex;
/* margin: 16px; */
padding: 30% 3%;
font-size: 1rem;
border-radius: 50%;
color: white;
height: 5rem;
font-family: 'Quicksand', sans-serif;
border: 2px solid white;
font-size: 3rem;
background-color: rgba(43,48,58, .7);
font-family: 'Codystar', cursive;
/* text-align: center; */
align-items: center;
content-align: center;
margin-top: 30%;
text-shadow: 1px 1px 1px black, 0 0 25px #750D37, 0 0 5px black ; //#0f46bd

`


export default function Home() {

    const history = useHistory();

const routeToCreateEvent = () => {
    history.push('/CreateEvent');
  }

  return (
    <FormContainer>
    <StyledDiv>
      {/* <StyledH2>Plan Your Next Potluck!</StyledH2>  */}

        <StyledButton onClick={routeToCreateEvent} > 
                Get Planning
        </StyledButton>     
{/*                           
        <Route exact path="/CreateEvent" >
            <CreateEvent/>
        </Route>               */}
    </StyledDiv>
    </FormContainer>     
  )
} 
