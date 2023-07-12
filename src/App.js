import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom"
import Home from './home/Home';
import Generations from './generations/Generations';

function App() {
  return (
    <>
      <div className="App-header">
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/generations" exact={true}>
            <Generations />
          </Route>
        </Switch>
      </div>
    </>

  );
}

export default App;
