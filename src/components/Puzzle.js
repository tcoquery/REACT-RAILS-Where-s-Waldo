/* eslint-disable no-unused-vars */
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
  const [WaldoFound, setWaldoFound] = useState(false);
  const [WendaFound, setWendaFound] = useState(false);
  const [WoofFound, setWoofFound] = useState(false);
  const [WhitebeardFound, setWhitebeardFound] = useState(false);
  const [OdlawFound, setOdlawFound] = useState(false);

  const foundWaldo = () => {
    setWaldoFound(true);
  }

  const foundWenda = () => {
    setWendaFound(true);
  }

  const foundWoof = () => {
    setWoofFound(true);
  }

  const foundWhitebeard = () => {
    setWhitebeardFound(true);
  }

  const foundOdlaw = () => {
    setOdlawFound(true);
  }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      let puzzleChars = [];
      for(let i=0; i < response.data.length; i++){
        // eslint-disable-next-line eqeqeq
        if(response.data[i].image_id == params.puzzleId) {
          puzzleChars.push(response.data[i]);
          setChars(puzzleChars);
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) ;

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
            switch(char.name) {
              case "Waldo":
                foundWaldo();
                break;
              case "Wenda":
                foundWenda();
                break;
              case "Woof":
                foundWoof();
                break;
              case "Whitebeard":
                foundWhitebeard();
                break;
              case "Odlaw":
                foundOdlaw();
                break;
              default:
                return;
            }
          }
    })
  };

  return (
    <div>
      <img onClick={getCoordinates} src={state.img} alt={state.name}/>
      <Character characters={characters} foundWaldo={WaldoFound} foundWenda={WendaFound} foundOdlaw={OdlawFound} foundWhitebeard={WhitebeardFound} foundWoof={WoofFound}/>
    </div>
  )
};

export default Puzzle;