import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom"
import Home from './home/Home';

function App() {
  return (
    <>
      <div className="App-header">
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </>

  );
}

export default App;
