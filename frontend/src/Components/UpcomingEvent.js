// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
// import Details from './components/Details';

const StyledDiv = styled.div`
display: flex;
border: 2px solid black;
border-radius: 8px;
justify-content: space-between;
flex-wrap: wrap;
padding: 1rem;
width; 100%;
`
const StyledDiv2 = styled.div`
display: flex;
border-radius: 8px;
justify-content: center;
flex-wrap: wrap;
width: 100%;
background-image: url('');
color: black;
border: 2px solid black;
margin-top: 2%;
`
const StyledH2 = styled.h2`
display:flex;
width: 50%;
text-align: left;
align-content: center;
Font-family: fantasy;
letter-spacing: .5rem;
color: black;
`

const StyledButton = styled.button`
background-image: url('');
border: 2px solid black;
border-radius: 8px;
color: black;
height: 5rem;
font-family: fantasy;
background-size: cover;
`
const StyledPara = styled.p`
font-weight: bold;
`

const UpcomingEvent = (props) => {
    // const [showText, setShowText] = useState(false);


//   const onClick = () => {
//       if (showText === false) {
//         return setShowText(true);
//     } else if (showText === true) {
//         return setShowText(false)
//     }
// }
  const Text = () => 
    // <StyledDiv2>
    //     <StyledPara>
    //     Host Name: {props.person.name}<br/>
    //     Date: {props.person.birth_year}<br/>
    //     Time: {props.person.gender}<br/>
    //     Location: {props.person.height}<br/>
    //     Attending: <br/>
    //     Food List: <br/>
    //     </StyledPara>
    //   </StyledDiv2>;


    console.log(props)
    return (
        <StyledDiv className='friend'>
            <StyledH2>Event Here:{props.person.name}</StyledH2>
            <StyledDiv2>
        <StyledPara>
        Host Name: {props.person.name}<br/>
        Date: {props.person.birth_year}<br/>
        Time: {props.person.gender}<br/>
        Location: {props.person.height}<br/>
        <form>   
            <label> 
                    Attending: 
                    <input 
                        name = 'attending' 
                        type = 'checkbox' 
                    />
                </label>
                <label> 
                    Food List 
                    <input 
                        checked = {props.person.food} 
                        // onChange = {onChange} 
                        name = 'foods' 
                        type = 'checkbox' 
                    />
                </label>
        </form>
        </StyledPara>
      </StyledDiv2>;

            {/* <StyledButton onClick={onClick}>Event Info</StyledButton> */}
            <>
            {/* {showText ? <Text /> : null} */}
            </>
        </StyledDiv>
  )
}


export default UpcomingEvent;