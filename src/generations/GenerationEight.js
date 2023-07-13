import React, { useEffect, useState } from "react";
import GenEightPokemon from "./GenEightPokemon";

function GenerationEight(){
    const [generationEight, setGenerationEight] = useState([])

    useEffect(()=>{
        async function loadGenerationEight(){
            const response = await fetch("https://pokeapi.co/api/v2/generation/8")
            const generation = await response.json()
            setGenerationEight(generation)
        }
        loadGenerationEight()
    },[])

    const pokemons = generationEight

    if(pokemons.pokemon_species){
        return (
            <>
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <h4>Generation 8</h4>
                    </div>
                    <div className="d-flex flex-wrap m-5">
                        {pokemons.pokemon_species.map((pokemon) => <GenEightPokemon pokemon={pokemon} key={pokemon.name} />)}
                    </div>
                </div>
            </>
        )
    }else{
        <p>Loading...</p>
    }
}

export default GenerationEight