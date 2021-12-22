import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory  } from 'react-router-dom';
import CreateEventForm from './CreateEventForm';
import axios from 'axios';
import styled from 'styled-components';
import * as yup from 'yup';
import schema from './validation/schema';

const StyledApp = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #2D82B7;  
`

const StyledDiv = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
    color: black;
    `
    const StyledNav = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
    color: black;
    `

const initialFormValues = { 
  username: "",
  event_name: "",
  time: "",
  date: "",
  location: "",
  guests: "",
  food: "",
} 

const initialFormErrors = {
  username: "",
  event_name: "",
  time: "",
  date: "",
  location: "",
  guests: "",
  food: "",
}

const initialEvents= [];
const initialDisabled = true;


const CreateEvent = () => {


  const [events, setEvent] = useState(initialEvents) 
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled) 
  const history = useHistory();


  const postNewEvent = newEvent => { 
    axios.post('https://reqres.in/api/users', newEvent) 
    .then (response =>{ 
      console.log(response)
      setEvent([response.data, ...events]); 
    }).catch(error => console.error(error)) 
    .finally(() => setFormValues(initialFormValues)) 

  } 
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

  const inputChange = (name, value) => {           
      validate(name, value);            
      setFormValues({ ...formValues, [name] : value})
      }

    const formSubmit = () => {
      const newEvents = {
        username: formValues.username,
        event_name: formValues.event_name,
        time: formValues.time,
        date: formValues.date,
        location: formValues.location,
        guests: formValues.guests,
        food: formValues.food,
      }
      postNewEvent(newEvents)
      setFormValues(initialFormValues)
      history.push('/UpcomingEvents')
    }


    useEffect(() => {
      schema.isValid(formValues).then(valid =>
        setDisabled(!valid)
      )
    }, [formValues])

  return (


    <Switch>        
      {/* <Route exact path="/form">
            {events.map(confirmation => {
              return (
                <Confirmation key={confirmation.id} details={confirmation} />
              )
            })}
      </Route> */}

      <Route path='/CreateEvent'>
        <CreateEventForm
          values = {formValues} 
          change = {inputChange} 
          submit = {formSubmit} 
          disabled = {disabled} 
          errors = {formErrors} 
        /> 
      </Route> 

    {/* <StyledDiv>
      <Route path="/">
          <Home />
      </Route>
    </StyledDiv> */}

    </Switch>   


  );
};

export default CreateEvent;

