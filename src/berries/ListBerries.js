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
        const data = await response.json();
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

  return (
    <div>
      <h5>{berry.name} </h5>
      <img src={item.sprites.default} alt={item.name} />
      <p>Size: {berryInfo.size}</p>
      <p>Smoothness: {berryInfo.smoothness}</p>
      <p>Firmness: {berryInfo.firmness.name}</p>
    </div>
  );
}

export default ListBerries;
