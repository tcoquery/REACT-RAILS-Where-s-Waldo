import { useEffect, useState } from "react";
import axios from "axios";

const Scores = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/players").then((response) => {
      let getPlayers = [];
      for(let i=0; i < response.data.length; i++){
        // eslint-disable-next-line eqeqeq
        if(response.data[i].image_id == props.puzzleID) {
          getPlayers.push(response.data[i]);
          setPlayers(getPlayers);
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) ;

  return (
    <div>
      {players.map((player) => {
        return <ul key={player.id}>
          <li>{player.name} - {player.time}</li>
        </ul>
      })}
    </div>
  )
};

export default Scores;