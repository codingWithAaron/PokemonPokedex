import React from "react";
import ListBerries from "./ListBerries";
import { useEffect, useState } from "react";

function Berries() {
  const baseUrl = "https://pokeapi.co/api/v2/berry/";
  const [berries, setBerries] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadBerries(url) {
      setLoaded(false);
      try {
        const response = await fetch(url);
        const data = await response.json();
        // the berry API is a linked list of 15-20 results so we need to
        // recursively call the API until we reach the end
        const berries = data.results;
        setBerries((prev) => [...prev, ...berries]);
        // moving through the linked list
        if (data.next) {
          await loadBerries(data.next);
        } else {
          setLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching berries:", error);
      }
    }
    loadBerries(baseUrl);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <div>
          <h1>Berries</h1>
        </div>
        <div className="d-flex flex-wrap m-5">
          {berries.map((berry) => (
            <ListBerries berry={berry} key={berry.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Berries;
