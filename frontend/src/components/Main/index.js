import React from 'react';
import { Router, Route } from 'react-router';
import PageNotFound from '../PageNotFound';
import AddTask from '../AddTask';
import ListTask from '../ListTask';
import EditTask from '../EditTask';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={AddTask} />
    <Route path="/list" component={ListTask} />
    <Route path="/edit/:id" component={EditTask} />
    <Route path="*" component={PageNotFound} />
  </Router>
);

export default Routes;
