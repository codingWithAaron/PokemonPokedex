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
        const berries = data.results;
        setBerries((prev) => [...prev, ...berries]);

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

  // <div>
  //   <h1>Berries</h1>
  //   {berries.map((berry) => (
  //     <ListBerries berry={berry} key={berry.name} />
  //   ))}
  // </div>

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
