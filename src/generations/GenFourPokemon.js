import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function GenFourPokemon({ pokemon }) {
  const [sprite, setSprite] = useState();

<<<<<<< HEAD
  useEffect(() => {
    async function loadSprite() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const generation = await response.json();
      setSprite(generation);
    }
    loadSprite();
  }, []);

  return (
    <>
      <div>
        <Link to="#">{pokemon.name}</Link>
        {sprite ? (
          <img
            src={`${sprite.sprites.front_default}`}
            alt={`${pokemon.name} sprite`}
          />
        ) : (
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="ditto"
          />
        )}
      </div>
    </>
  );
=======
    return (
        <>
            <div className="border p-2 me-2 mb-2">
                <Link to="#">{pokemon.name}</Link>
                {sprite ? <img src={`${sprite.sprites.front_default}`} alt={`${pokemon.name} sprite`} /> : <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="ditto" /> }
            </div>
        </>
    )
>>>>>>> 5cb1c32a1d89ba248fb38159c34c83540aa0876b
}

export default GenFourPokemon;
