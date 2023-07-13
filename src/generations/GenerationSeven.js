import React, { useEffect, useState } from "react";
import GenSevenPokemon from "./GenSevenPokemon";

function GenerationSeven() {
  const [generationSeven, setGenerationSeven] = useState([]);

  useEffect(() => {
    async function loadGenerationSeven() {
      const response = await fetch("https://pokeapi.co/api/v2/generation/7");
      const generation = await response.json();
      setGenerationSeven(generation);
    }
    loadGenerationSeven();
  }, []);

  const pokemons = generationSeven;

  if (pokemons.pokemon_species) {
    return (
      <>
        <div className="d-flex flex-column align-items-center">
          <div>
            <h4>Generation 7</h4>
          </div>
          <div className="d-flex flex-wrap m-5">
            {pokemons.pokemon_species.map((pokemon) => (
              <GenSevenPokemon pokemon={pokemon} key={pokemon.name} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    <p>Loading...</p>;
  }
}

export default GenerationSeven;
