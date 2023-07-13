import React, { useEffect, useState } from "react";
import GenFourPokemon from "./GenFourPokemon";

function GenerationFour() {
  const [generationFour, setGenerationFour] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    async function loadGenerationFour() {
      const response = await fetch("https://pokeapi.co/api/v2/generation/4");
      const generation = await response.json();
      setGenerationFour(generation);
=======
    useEffect(()=>{
        async function loadGenerationFour(){
            const response = await fetch("https://pokeapi.co/api/v2/generation/4")
            const generation = await response.json()
            setGenerationFour(generation)
        }
        loadGenerationFour()
    },[])

    const pokemons = generationFour

    if(pokemons.pokemon_species){
        return (
            <>
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <h4>Generation 4</h4>
                    </div>
                    <div className="d-flex flex-wrap m-5">
                        {pokemons.pokemon_species.map((pokemon) => <GenFourPokemon pokemon={pokemon} key={pokemon.name} />)}
                    </div>
                </div>
            </>
        )
    }else{
        <p>Loading...</p>
>>>>>>> 5cb1c32a1d89ba248fb38159c34c83540aa0876b
    }
    loadGenerationFour();
  }, []);

  const pokemons = generationFour;

  if (pokemons.pokemon_species) {
    return (
      <>
        <div className="d-flex flex-column align-items-center">
          <div>
            <h4>Generation 4</h4>
          </div>
          <div className="mb-5">
            {pokemons.pokemon_species.map((pokemon) => (
              <GenFourPokemon pokemon={pokemon} key={pokemon.name} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    <p>Loading...</p>;
  }
}

export default GenerationFour;
