import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/pages/Search';
import Profile from './components/pages/Profile';
import Estimator from './components/pages/Estimator';
import Login from "./components/forminput/Login"
// import NavProfile from './components/NavProfile/NavProfile';
import SignUp from './components/pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/estimator' component={Estimator} />
          <Route path='/profile' component={Profile} />
          {/* <Route path='/profile'component={NavProfile}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
