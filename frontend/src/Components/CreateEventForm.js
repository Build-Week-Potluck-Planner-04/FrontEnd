import React from "react"
import styled from 'styled-components'

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


const CreateEventForm = (props) => {
    const {
         submit, change, values, disabled, errors
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value } = evt.target
        // const valueToUse = type === 'checkbox' ? checked : value;
        change(name, value) //valueToUse
      }

    return(
        <StyledDiv>
    <form onSubmit={onSubmit} id='event-form'> 
    <div> 
       <h2>Plan Your Own Event!</h2> 

            <h3>Event Information</h3> 

            <label> 
              Host&nbsp;  
               <input 
                   value = {values.username} 
                   onChange = {onChange} 
                   name = 'username' 
                   type = 'text'
                   id = 'username-input' 
              />
              </label><br/>
               <label> 
              Event Name&nbsp;  
               <input 
                   value = {values.event_name} 
                   onChange = {onChange} 
                   name = 'event_name' 
                   type = 'text'
                   id = 'name-input' 
              />                                      
           </label><br/> 
           <label> 
              Date &nbsp;  
               <input 
                   id = 'special-text'
                   value = {values.date} 
                   onChange = {onChange} 
                   name = 'date' 
                   type = 'text' 
               />                                    
           </label> <br/> 
             <label> 
              Time &nbsp;  
               <input 
                   id = 'time-text'
                   value = {values.time} 
                   onChange = {onChange} 
                   name = 'time' 
                   type = 'text' 
               />                                    
           </label> <br/> 
             <label> 
              Location &nbsp;  
               <input 
                   id = 'location-text'
                   value = {values.location} 
                   onChange = {onChange} 
                   name = 'location' 
                   type = 'text' 
               />                                    
           </label> <br/> 
             <label> 
              Guests &nbsp;  
               <input 
                   id = 'guest-text'
                   value = {values.guests} 
                   onChange = {onChange} 
                   name = 'guests' 
                   type = 'text' 
               />                                    
           </label> <br/> 
             <label> 
              Food Items &nbsp;  
               <input 
                   id = 'food-text'
                   value = {values.food} 
                   onChange = {onChange} 
                   name = 'food' 
                   type = 'text' 
               />                                    
           </label> <br/> 


       <div> 

           <button id = 'event-button' disabled={disabled}>Confirm Event</button> 
           <p>{errors.username}</p> 
                <p>{errors.event_name}</p>
                <p>{errors.time}</p> 
                <p>{errors.date}</p> 
                <p>{errors.location}</p>  
                <p>{errors.guests}</p>  
                <p>{errors.food}</p>  


           </div> 
    </div> 
    </form> 
    </StyledDiv>
    );
}

export default CreateEventForm;