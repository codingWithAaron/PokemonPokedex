import React, { useEffect, useState } from "react";
import GenNinePokemon from "./GenNinePokemon";

function GenerationNine() {
  const [generationNine, setGenerationNine] = useState([]);

  useEffect(() => {
    async function loadGenerationNine() {
      const response = await fetch("https://pokeapi.co/api/v2/generation/9");
      const generation = await response.json();
      setGenerationNine(generation);
    }
    loadGenerationNine();
  }, []);

  const pokemons = generationNine;

  if (pokemons.pokemon_species) {
    return (
      <>
        <div className="d-flex flex-column align-items-center">
          <div>
            <h4>Generation 9</h4>
          </div>
          <div className="d-flex flex-wrap m-5">
            {pokemons.pokemon_species.map((pokemon) => (
              <GenNinePokemon pokemon={pokemon} key={pokemon.name} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    <p>Loading...</p>;
  }
}

export default GenerationNine;
