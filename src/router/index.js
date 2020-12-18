import {MainLayout} from '../components/layouts/MainLayout';
import {Game, Converter, Utctime, Home, AddList, Users} from '../containers/views';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';


const MainRouter = () => {

  return(
    <Router>
      <MainLayout >
        <Switch>
          <Route
            exact
            component={Home}
            path="/home"
          />

          <Route
            exact
            path="/users"
            component={Users}
          />

          <Route
            exact
            path="/addlist"
            component={AddList}
          />

          <Route
            exact
            path="/game"
            component={Game}
          />

          <Route
            exact
            path="/converter"
            component={Converter}
          />

          <Route
            exact
            path="/utctime"
            component={Utctime}
          />

          <Route exact path="/" component={Home} />

        </Switch>
      </MainLayout>
    </Router>
  )
};

export default MainRouter;