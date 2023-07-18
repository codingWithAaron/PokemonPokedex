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
          <div
            className="rounded-4 border border-3 border-dark d-flex flex-column m-5 p-5"
            id="backgroundImage"
          >
            <div className="d-flex flex-row justify-content-evenly mb-4">
              <div
                className="rounded-4 d-flex align-items-center w-25 justify-content-center mt-5 mb-5"
                id="pokemonImage"
              >
                <img
                  className="w-100"
                  src={`${pokemon.sprites.front_default}`}
                  alt={`${pokemon.name} sprite`}
                />
              </div>
              <div>
                <h2
                  className="border border-danger rounded-4 p-1 d-flex justify-content-center"
                  id="nameTag"
                >
                  {pokemon.name} #{pokemon.id}
                </h2>
                <h5
                  className="border border-light-subtle rounded-4 p-1 d-flex justify-content-center"
                  id="typeNormalTag"
                >
                  Type: {pokemon.types[0].type.name}
                </h5>
                <div
                  className=" mb-5 p-2 border-top border-end border-start rounded-4"
                  id="tableColor"
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" id="tableColor">
                          #
                        </th>
                        <th scope="col" id="tableColor">
                          Stats
                        </th>
                        <th scope="col" id="tableColor">
                          Base Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="tbody">
                      {pokemon.stats.map((stat, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row" id="tableColor">
                              {index + 1}
                            </th>
                            <td id="tableColor">{stat.stat.name}</td>
                            <td id="tableColor">{stat.base_stat}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="justify-content-center p-2 rounded-4"
              id="tableColor"
            >
              <div className="scrollTable">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" id="tableColor">
                        Move Name
                      </th>
                      <th scope="col" id="tableColor">
                        Level Learned At
                      </th>
                      <th scope="col" id="tableColor">
                        Learned Method
                      </th>
                    </tr>
                  </thead>
                  <tbody className="tbody">
                    {pokemon.moves.map((move, index) => {
                      return (
                        <tr key={index}>
                          <td id="tableColor">{move.move.name}</td>
                          <td id="tableColor">
                            {move.version_group_details[0].level_learned_at}
                          </td>
                          <td id="tableColor">
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
