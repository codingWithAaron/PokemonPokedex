import React, { useEffect, useState } from "react";
import moment from "moment";
import "./PokemonOfTheDay.css"

function PokemonOfTheDay() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const cachedPokemon = localStorage.getItem("pokemonOfTheDay");
    const cachedDate = localStorage.getItem("pokemonOfTheDayDate");

    const currentDate = moment().format("YYYY-MM-DD");

    if (cachedPokemon && cachedDate === currentDate) {
      setPokemon(JSON.parse(cachedPokemon));
    } else {
      fetchRandomPokemon();
    }
  }, []);

  async function fetchRandomPokemon() {
    try {
      const date = moment().format("YYYY-MM-DD");
      const randomPokemonId = Math.floor(Math.random() * 1000) + 1;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPokemon(data);

      localStorage.setItem("pokemonOfTheDay", JSON.stringify(data));
      localStorage.setItem("pokemonOfTheDayDate", date);
    } catch (error) {
      console.error("Error fecthing random Pokemon:", error);
    }
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        {pokemon ? (
            <div id="pokemonOfDay">
            <div className="p-5">
              <h2 className="text-center mb-3">Pokemon of the Day</h2>
              <div
                className="rounded-4 border border-3 border-dark d-flex flex-column p-5"
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
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default PokemonOfTheDay;
