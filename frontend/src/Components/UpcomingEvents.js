import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UpcomingEvent from './upcomingEvent';


const StyledDiv = styled.div`
margin: 0% 30%;
font-family: 'Quicksand', sans-serif;

h1{
  margin-top: 7%;
  font-family: 'Quicksand', sans-serif;
  text-shadow: 1px 1px 2px black, 0 0 15px black, 0 0 5px black;
}
`

const Appp = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res.data.results);
        setEvents(res.data.results);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <StyledDiv className="App">
      <h1 className="Header">Upcoming Events</h1>
        {
       events.map((person, index ) => (
        <UpcomingEvent key ={index} person = {person}/> ))
        }

    </StyledDiv>
  );
}

export default Appp;