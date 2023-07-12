import React, { useEffect, useState } from "react";
import GenOnePokemon from "./GenOnePokemon";

function GenerationOne(){
    const [generationOne, setGenerationOne] = useState([])

    useEffect(()=>{
        async function loadGenerationOne(){
            const response = await fetch("https://pokeapi.co/api/v2/generation/1")
            const generation = await response.json()
            setGenerationOne(generation)
        }
        loadGenerationOne()
    },[])

    const pokemons = generationOne

    if(pokemons.pokemon_species){
        return (
            <>
                <div>
                    <h4>Generation 1</h4>
                </div>
                <div>
                    {pokemons.pokemon_species.map((pokemon) => <GenOnePokemon pokemon={pokemon} key={pokemon.name} />)}
                </div>
            </>
        )
    }else{
        <p>Loading...</p>
    }
}

export default GenerationOne