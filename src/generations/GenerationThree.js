import React, { useEffect, useState } from "react";
import GenThreePokemon from "./GenThreePokemon";

function GenerationThree(){
    const [generationThree, setGenerationThree] = useState([])

    useEffect(()=>{
        async function loadGenerationThree(){
            const response = await fetch("https://pokeapi.co/api/v2/generation/3")
            const generation = await response.json()
            setGenerationThree(generation)
        }
        loadGenerationThree()
    },[])

    const pokemons = generationThree

    if(pokemons.pokemon_species){
        return (
            <>
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <h4>Generation 3</h4>
                    </div>
                    <div className="d-flex flex-wrap m-5">
                        {pokemons.pokemon_species.map((pokemon) => <GenThreePokemon pokemon={pokemon} key={pokemon.name} />)}
                    </div>
                </div>
            </>
        )
    }else{
        <p>Loading...</p>
    }
}

export default GenerationThree