import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import Games from './Games';
import GlobalStyles from '../styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = '/' component = {MainPage} exact />
        <Route path = '/games' component = {Games} />
        <Route path = '/login' component = {LoginPage} />
      </Switch>
      <GlobalStyles />
    </Router>
  )
}

export default App;