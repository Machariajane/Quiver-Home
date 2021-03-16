import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Appointment from './components/pages/Appointment/Appointment';
import Covid from './components/pages/Covid/Covid';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/book-appointment' component={Appointment} />
        <Route path='/covid-test' component={Covid} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
