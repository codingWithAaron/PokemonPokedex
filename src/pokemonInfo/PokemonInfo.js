import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PokemonInfo.css";

function PokemonInfo() {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const pokemonName = useParams();
  const name = pokemonName.pokemonName;

  useEffect(() => {
    async function loadPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const information = await response.json();
      setPokemonInfo(information);
    }
    loadPokemon();
  }, []);

  const pokemon = pokemonInfo;

  if (pokemon && pokemon.species) {
    return (
      <>
        <div className="p-5">
          <div className="border border-dark d-flex flex-column m-5 p-5">
            <div className="d-flex flex-row justify-content-evenly mb-4">
              <div className="d-flex align-items-center w-25 justify-content-center">
                <img
                  className="w-100"
                  src={`${pokemon.sprites.front_default}`}
                  alt={`${pokemon.name} sprite`}
                />
              </div>
              <div>
                <h5>Name: {pokemon.name}</h5>
                <p>Type: {pokemon.types[0].type.name}</p>
                <div className="border-top border-end border-start">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Stats</th>
                        <th scope="col">Base Value</th>
                      </tr>
                    </thead>
                    <tbody className="tbody">
                      {pokemon.stats.map((stat, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{stat.stat.name}</td>
                            <td>{stat.base_stat}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="justify-content-center">
              <div className="scrollTable border">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Move Name</th>
                      <th scope="col">Level Learned At</th>
                      <th scope="col">Learned Method</th>
                    </tr>
                  </thead>
                  <tbody className="tbody">
                    {pokemon.moves.map((move, index) => {
                      return (
                        <tr key={index}>
                          <td>{move.move.name}</td>
                          <td>
                            {move.version_group_details[0].level_learned_at}
                          </td>
                          <td>
                            {
                              move.version_group_details[0].move_learn_method
                                .name
                            }
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default PokemonInfo;
