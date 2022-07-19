import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://localhost:3000/";

export default function Test() {
  const [characters, setChars] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setChars(response.data);
    });
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return <div key={character.id}>
          {character.name}
        </div>
      })}
    </div>
  );
}