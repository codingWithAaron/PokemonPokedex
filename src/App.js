import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Generations from "./generations/Generations";
import Navbar from "./navbar/Navbar";
import PokemonInfo from "./pokemonInfo/PokemonInfo";

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
          <Route path="/pokemon-info/:pokemonName" exact={true}>
            <PokemonInfo />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
