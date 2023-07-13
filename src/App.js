import React from "react";
import {Switch, Route} from "react-router-dom"
import Home from './home/Home';
import Generations from './generations/Generations';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <>
      <div className="App-header">
        <Navbar />
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
