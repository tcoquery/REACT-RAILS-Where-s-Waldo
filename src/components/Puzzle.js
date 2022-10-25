/* eslint-disable no-unused-vars */
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useTimer } from 'use-timer';
import axios from "axios";
import Character from './Character';
import NewPlayer from './NewPlayer';
import Scores from './Scores';

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
  const [found, setFound] = useState(0);
  const { time, start, pause } = useTimer();

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

  useEffect(() => {
    start();
  }, [start])

  useEffect(() => {
    if (found === 5)
      pause();
  }, [found]);

  const getCoordinates = (e) => {
    const newX = e.clientX;
    const newY = e.clientY;
    setX(newX);
    setY(newY);
    checkInput(newX,newY);
  };

  const checkInput = (x, y) => {
    characters.forEach((char) => {
      if( (char.x + 75) > x &&
          (char.x - 75) < x &&
          (char.y + 75) > y &&
          (char.y - 75) < y 
        ) {
            switch(char.name) {
              case "Waldo":
                if(!WaldoFound) {
                  setWaldoFound(true);
                  setFound(found+1);
                } 
                break;
              case "Wenda":
                if(!WendaFound) {
                  setWendaFound(true);
                  setFound(found+1);
                } 
                break;
              case "Woof":
                if(!WoofFound) {
                  setWoofFound(true);
                  setFound(found+1);
                } 
                break;
              case "Whitebeard":
                if(!WhitebeardFound) {
                  setWhitebeardFound(true);
                  setFound(found+1);
                } 
                break;
              case "Odlaw":
                if(!OdlawFound) {
                  setOdlawFound(true);
                  setFound(found+1);
                } 
                break;
              default:
                return;
            }
          }
    })
  };

  let newPlayer;
  let scores;

  if(found === 5) {
    newPlayer = <NewPlayer time={time} puzzleID={params.puzzleId}/>
    scores = <Scores puzzleID={params.puzzleId}/>
    const modal = document.getElementById("modal");
    modal.style.display = "block";
  }

  return (
    <div>
      <div class="text-3xl font-serif h-16 flex items-center justify-center bg-red-400">Where's waldo?</div>
      <div id="modal" aria-hidden="true" class="hidden fixed left-0 top-0 w-full h-full z-[1] overflow-auto bg-black/50">
        <div class="border container w-96 mx-auto mt-32 bg-white">        
          <div>{newPlayer}</div>
          <div>{scores}</div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex flex-col items-center">
          <p class="text-2xl font-bold">Timer: {time}</p>
          <Character characters={characters} foundWaldo={WaldoFound} foundWenda={WendaFound} foundOdlaw={OdlawFound} foundWhitebeard={WhitebeardFound} foundWoof={WoofFound}/>
        </div>
          <img class="h-3/4 w-3/4" onClick={getCoordinates} src={state.img} alt={state.name}/>     
      </div>
      
    </div>
  )
};

export default Puzzle;