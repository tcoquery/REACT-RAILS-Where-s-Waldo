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
          getPlayers.sort((a, b) => {
            return a.time - b.time;
        });
          setPlayers(getPlayers);
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) ;

  return (
    <div class="mx-6 mb-6">
      <p class="text-center font-bold mb-3">Highscores: </p>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Time
                </th>
            </tr>
        </thead>
        <tbody>
      {players.map((player) => {
        return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={player.id}>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {player.name}
                </th>
                <td class="py-4 px-6">
                {player.time}
                </td>
              </tr>
      })}
        </tbody>
      </table>
    </div>
  )
};

export default Scores;