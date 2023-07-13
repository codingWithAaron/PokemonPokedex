import React, { useEffect, useState } from "react";
import GenOnePokemon from "./GenOnePokemon";

function GenerationOne() {
  const [generationOne, setGenerationOne] = useState([]);

  useEffect(() => {
    async function loadGenerationOne() {
      const response = await fetch("https://pokeapi.co/api/v2/generation/1");
      const generation = await response.json();
      setGenerationOne(generation);
    }
    loadGenerationOne();
  }, []);

  const pokemons = generationOne;

  if (pokemons.pokemon_species) {
    return (
      <>
        <div className="d-flex flex-column align-items-center">
          <div>
            <h4>Generation 1</h4>
          </div>
          <div className="mb-5">
            {pokemons.pokemon_species.map((pokemon) => (
              <GenOnePokemon pokemon={pokemon} key={pokemon.name} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    <p>Loading...</p>;
  }
}

export default GenerationOne;
