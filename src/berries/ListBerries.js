import React from "react";
import { useEffect, useState } from "react";

function ListBerries({ berry }) {
  const [berryInfo, setBerryInfo] = useState([]);
  const [item, setItem] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadBerryInfo() {
      setLoaded(false);
      try {
        const response = await fetch(berry.url);
        // this loads the berry info but since berries are technically
        // items, a seperate call is needed to access the item sprite
        const data = await response.json();
        // this calls the item from the API in order to display the sprite,
        // there is distinct sprite address so we do have access to the entire item
        // for potential further use, contest, location, generation, etc
        const itemResponse = await fetch(data.item.url);
        const itemData = await itemResponse.json();
        setBerryInfo(data);
        setItem(itemData);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching berry info:", error);
      }
    }
    loadBerryInfo();
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="border p-2 me-2 mb-2">
      <h5>{berry.name} </h5>
      <img src={item.sprites.default} alt={item.name} />
      <p>Size: {berryInfo.size}</p>
      <p>Smoothness: {berryInfo.smoothness}</p>
      <p>Firmness: {berryInfo.firmness.name}</p>
      <p>Flavors: </p>

      <ul>
        {berryInfo.flavors.map((flavor) => (
          <li key={flavor.flavor.name}>{flavor.flavor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListBerries;
