import { useState } from 'react';
import Odlaw from '../images/Odlaw.jpg';
import Waldo from '../images/Waldo.jpg';
import Wenda from '../images/Wenda.jpg';
import Whitebeard from '../images/Whitebeard.jpg';
import Woof from '../images/Woof.jpg';
import OdlawFound from '../images/Odlaw-found.jpg';
import WaldoFound from '../images/Waldo-found.jpg';
import WendaFound from '../images/Wenda-found.jpg';
import WhitebeardFound from '../images/Whitebeard-found.jpg';
import WoofFound from '../images/Woof-found.jpg';  

const Character = () => {
  const [characters, setCharacters] = useState([
    {img:Waldo, imgFound:WaldoFound, id:1, name:'Waldo'},
    {img:Wenda, imgFound:WendaFound, id:2, name:'Wenda'},
    {img:Odlaw, imgFound:OdlawFound, id:3, name:'Odlaw'},
    {img:Whitebeard, imgFound:WhitebeardFound, id:4, name:'Whitebeard'},
    {img:Woof, imgFound:WoofFound, id:5, name:'Woof'}
  ]);

  return (
    <div>
    {characters.map((character) => {
      return <div key={character.id}>
      <img src={character.img} alt={character.name}/>
      </div>
    })}
    </div>
  );
};

export default Character;