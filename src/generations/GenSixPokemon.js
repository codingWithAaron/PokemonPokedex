import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function GenSixPokemon({pokemon}){
    const [sprite, setSprite] = useState();
    
    useEffect(()=>{
        async function loadSprite(){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const generation = await response.json()
            setSprite(generation)
        }
        loadSprite()
    },[])

    return (
        <>
            <div className="border p-2 me-2 mb-20">
                <Link to="#">{pokemon.name}</Link>
                {sprite ? <img src={`${sprite.sprites.front_default}`} alt={`${pokemon.name} sprite`} /> : <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="ditto" /> }
            </div>
        </>
    )
}

export default GenSixPokemon