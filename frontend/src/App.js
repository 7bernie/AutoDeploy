import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </Router>
);

export default App;
