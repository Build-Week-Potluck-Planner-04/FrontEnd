import React from "react"
import styled from 'styled-components'

const FormContainer = styled.div`

display: flex;
flex-flow: column wrap;
justify-content: center;
align-content: center;
align-items: center;

div{
  width: 100%;
  text-align: center;
}


  `

const StyledDiv = styled.div`
 display: flex;
border: 2px solid black;
border-radius: 8px;
justify-content:center;
flex-wrap: wrap;
padding-top: 1rem;
max-width: 50%;
background-color: white;
background-color: rgba(43,48,58, .7);
border: 2px solid white;
align-content: center;

form div{
    width:100%;
    text-align: center;
    justify-content: center;
}

form{
    width: 30%;
    margin-top;
}


& .formInputs{
    display: flex;
    flex-direction: column;
    /* width */
}

label{
    display: flex;
    flex-direction: column;
}
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

    <FormContainer>
        <div>
            <h2>Plan Your Own Event!</h2> 
        </div>
        <StyledDiv>
        
    <form onSubmit={onSubmit} id='event-form'> 
    <div className='formInputs'> 
       

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
    </FormContainer>
    );
}

export default CreateEventForm;