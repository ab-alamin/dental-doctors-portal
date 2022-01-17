import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
            </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route exat path="/">
            <Home />
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
