import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from "axios";
import Character from './Character';

const baseURL = "http://localhost:3000/";

const Puzzle = () => {
  const location = useLocation();
  const state = location.state;
  let params = useParams();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [characters, setChars] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      let puzzleChars = [];
      for(let i=0; i < response.data.length; i++){
        if(response.data[i].image_id == params.puzzleId) {
          puzzleChars.push(response.data[i]);
          setChars(puzzleChars);
        }
      }
    });
  });

  const getCoordinates = (e) => {
    const newX = e.pageX;
    const newY = e.pageY;
    setX(newX);
    setY(newY);
    checkInput(newX,newY);
  };

  const checkInput = (x, y) => {
    characters.forEach((char) => {
      if( (char.x + 50) > x &&
          (char.x - 50) < x &&
          (char.y + 50) > y &&
          (char.y - 50) < y 
        ) {
            console.log(`you found ${char.name}`);
          }
    })
  };

  return (
    <div>
      <img onClick={getCoordinates} src={state.img} alt={state.name}/>
      <Character/>
    </div>
  )
};

export default Puzzle;