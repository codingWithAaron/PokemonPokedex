import React, { useEffect, useState } from "react";
import GenTwoPokemon from "./GenTwoPokemon";

function GenerationTwo(){
    const [generationTwo, setGenerationTwo] = useState([])

    useEffect(()=>{
        async function loadGenerationTwo(){
            const response = await fetch("https://pokeapi.co/api/v2/generation/2")
            const generation = await response.json()
            setGenerationTwo(generation)
        }
        loadGenerationTwo()
    },[])

    const pokemons = generationTwo

    if(pokemons.pokemon_species){
        return (
            <>
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <h4>Generation 2</h4>
                    </div>
                    <div className="mb-5">
                        {pokemons.pokemon_species.map((pokemon) => <GenTwoPokemon pokemon={pokemon} key={pokemon.name} />)}
                    </div>
                </div>
            </>
        )
    }else{
        <p>Loading...</p>
    }
}

export default GenerationTwo