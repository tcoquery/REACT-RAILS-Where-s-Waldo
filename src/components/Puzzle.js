import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from "axios";
import Character from './Character';

const baseURL = "http://localhost:3000/";

const Puzzle = () => {
  const location = useLocation();
  const state = location.state;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [characters, setChars] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setChars(response.data);
    });
  }, []);

  const checkInput = () => {

  };

  const getCoordinates = (e) => {
    setX(e.pageX);
    setY(e.pageY);
    checkInput();
  };

  return (
    <div>
      <img onClick={getCoordinates} src={state.img} alt={state.name}/>
      <Character/>
    </div>
  )
};

export default Puzzle;
