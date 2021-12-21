import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom"; //this is the needful for linking stuff. 
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import CreateEvent from './components/CreateEvent';

function App() {
  return (
    <div className="App">
     
      {/*LINKS!*/}
      <Link to = '/login'>Log me IN!</Link>
      <Link to = '/logout'>Log me OUT!</Link>
      <Link to = '/create-event'>Create an EVENT!</Link>

      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/create-event' component={CreateEvent} />

        {/* <Route exact path="/" component={Home} /> */}
      <PrivateRoute exact path='/logout' component={Logout} />
       
    </div>
  );
}

export default App;
