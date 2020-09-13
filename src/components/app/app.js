import React from "react";
import PageHeader from '../page-header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  СheckoutPage,
  Error404Page
} from '../pages'


const App = () => {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route path='/' exact component={СheckoutPage} />
        <Route component={Error404Page} />
      </Switch>
    </Router>
  );
};

export default App;
