import {MainLayout} from '../components/layouts/MainLayout';
import {Game, Game1, Game2, Home, AddList, Users} from '../containers/views';
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
            path="/game1"
            component={Game1}
          />

          <Route
            exact
            path="/game2"
            component={Game2}
          />

          <Route exact path="/" component={Home} />

        </Switch>
      </MainLayout>
    </Router>
  )
};

export default MainRouter;