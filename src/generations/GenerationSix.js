import React, { useEffect, useState } from "react";
import GenSixPokemon from "./GenSixPokemon";

function GenerationSix() {
  const [generationSix, setGenerationSix] = useState([]);

  useEffect(() => {
    async function loadGenerationSix() {
      const response = await fetch("https://pokeapi.co/api/v2/generation/6");
      const generation = await response.json();
      setGenerationSix(generation);
    }
    loadGenerationSix();
  }, []);

  const pokemons = generationSix;

  if (pokemons.pokemon_species) {
    return (
      <>
        <div className="d-flex flex-column align-items-center">
          <div>
            <h4>Generation 6</h4>
          </div>
          <div className="d-flex flex-wrap m-5">
            {pokemons.pokemon_species.map((pokemon) => (
              <GenSixPokemon pokemon={pokemon} key={pokemon.name} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    <p>Loading...</p>;
  }
}

export default GenerationSix;
