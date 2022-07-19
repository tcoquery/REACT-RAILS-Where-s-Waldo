import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import Odlaw from "../images/Odlaw.jpg";
import Waldo from "../images/Waldo.jpg";
import Wenda from "../images/Wenda.jpg";
import Whitebeard from "../images/Whitebeard.jpg";
import Woof from "../images/Woof.jpg";

const Puzzle = (props) => {
  const location = useLocation();
  const state = location.state;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [characters, setCharacters] = useState([
    {img:Waldo, id:1, name:"Waldo"},
    {img:Wenda, id:2, name:"Wenda"},
    {img:Odlaw, id:3, name:"Odlaw"},
    {img:Whitebeard, id:4, name:"Whitebeard"},
    {img:Woof, id:5, name:"Woof"}
  ]);

  const getCoordinates = (e) => {
    setX(e.pageX);
    setY(e.pageY);
  };

  return (
    <div>
      
        {characters.map((character) => {
          return <div key={character.id}>
          <img src={character.img} alt={character.name}/>
          </div>
        })}
      
      <img onClick={getCoordinates} src={state.img} alt={state.name}/>
    </div>
  )
};

export default Puzzle;
