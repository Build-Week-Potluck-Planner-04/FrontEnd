import axios from 'axios';
import React from 'react';

class Login extends React.Component { //using a class comp because state is a bit more 'complicated' than could be done with hooks
   //DATA section: the state object ! 

    // state = {
    //     credentials:{
    //         username: '',
    //         password: '',
    //         role: '',
    //         error: 'PLEASE TRY AGAIN! USERNAME AND PASSWORD MUST MATCH THE REGISTER :-) '
    //     }
    // };

    //LOGIC section: handle change, submit of info here !

    // handleChange = event => {
    //     this.setState({
    //       credentials: {
    //         ...this.state.credentials,
    //         [event.target.name]: event.target.value
    //       }
    //     });
    //   };

    //  handleLogin=(event)=>{
    //     event.preventDefault();

    //     axios.post('endpoint',this.state.credentials)
    //     .then(res=> {
    //         const { token, username } = res.data; //BE SURE TO CHECK HOW ENDPOINT IS ACTUALLY BUILT, FUTURE CLAIRE
    //         localStorage.setItem("token", token);
    //         localStorage.setItem("username", username);
    //         this.props.history.push('/event');
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
    // }

    // //RETURN section: render to browser!
    // render(){
    //     return (
    //         <div className='login-form'>
    //            <h2>Please LOG IN !</h2> 
    //            <form onSubmit={this.handleLogin}>
    //       <input
    //         id='username'
    //         type="text"
    //         name="username"
    //         value={this.state.credentials.username}
    //         onChange={this.handleChange}
    //       />
    //       <input
    //         id='password'
    //         type="password"
    //         name="password"
    //         value={this.state.credentials.password}
    //         onChange={this.handleChange}
    //       />
    //       <button id='submit'>Log in</button>
    //     </form>
    //     {!token ? <h3>{this.state.credentials.error}</h3> : <h3>Login success!</h3>}
    //         </div>
    //     )
    // }

}

export default Login;