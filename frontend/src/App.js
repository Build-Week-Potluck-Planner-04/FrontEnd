import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom"; //this is the needful for linking stuff. 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Potluck Planner
        </p>
        
      </header> */}
      {/*LINKS!*/}
      <Link to = '/login'>Log me IN!</Link>
      <Link to = '/logout'>Log me OUT!</Link>
      <Link to = '/create-event'>Create an EVENT!</Link>

      {/* <PrivateRoute exact path='/view' component={CreateEvent} />
        <Route exact path="/" component={Login} />
      <PrivateRoute exact path='/logout' component={Logout} />
        <Route path='/login' component={Login} /> */}
    </div>
  );
}

export default App;
