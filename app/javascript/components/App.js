import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Games from './Games';
import GlobalStyles from '../styles/GlobalStyles';

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