import React, { useEffect, useState } from "react";
import GenFivePokemon from "./GenFivePokemon";

function GenerationFive(){
    const [generationFive, setGenerationFive] = useState([])

    useEffect(()=>{
        async function loadGenerationFive(){
            const response = await fetch("https://pokeapi.co/api/v2/generation/5")
            const generation = await response.json()
            setGenerationFive(generation)
        }
        loadGenerationFive()
    },[])

    const pokemons = generationFive

    if(pokemons.pokemon_species){
        return (
            <>
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <h4>Generation 5</h4>
                    </div>
                    <div className="mb-5">
                        {pokemons.pokemon_species.map((pokemon) => <GenFivePokemon pokemon={pokemon} key={pokemon.name} />)}
                    </div>
                </div>
            </>
        )
    }else{
        <p>Loading...</p>
    }
}

export default GenerationFive