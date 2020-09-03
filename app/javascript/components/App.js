import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Games from './Games';
import GlobalStyles from '../styles/GlobalStyles';
import api from '../services/api';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = '/' component = {MainPage} exact />
        <Route path = '/games' component = {Games} />
      </Switch>
      <GlobalStyles />
    </Router>
  )
}

export default App;