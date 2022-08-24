/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Odlaw from '../images/Odlaw.jpg';
import Waldo from '../images/Waldo.jpg';
import Wenda from '../images/Wenda.jpg';
import Whitebeard from '../images/Whitebeard.jpg';
import Woof from '../images/Woof.jpg';

const Character = (props) => {
  const [waldo, setWaldo] = useState({img:Waldo, name:'Waldo'});
  const [wenda, setWenda] = useState({img:Wenda, name:'Wenda'});
  const [odlaw, setOdlaw] = useState({img:Odlaw, name:'Odlaw'});
  const [whitebeard, setWhitebeard] = useState({img:Whitebeard, name:'Whitebeard'});
  const [woof, setWoof] = useState({img:Woof, name:'Woof'});


  return (
    <div class="border border-black">
      {props.foundWaldo ? <img class="border-4 border-green-700"src={waldo.img} alt={waldo.name}/> : <img class="border-4 border-red-600" src={waldo.img} alt={waldo.name}/>}
      {props.foundWenda ? <img class="border-4 border-green-700" src={wenda.img} alt={wenda.name}/> : <img class="border-4 border-red-600" src={wenda.img} alt={wenda.name}/>}
      {props.foundOdlaw ? <img class="border-4 border-green-700" src={odlaw.img} alt={odlaw.name}/> : <img class="border-4 border-red-600" src={odlaw.img} alt={odlaw.name}/>}
      {props.foundWhitebeard ? <img class="border-4 border-green-700" src={whitebeard.img} alt={whitebeard.name}/> : <img class="border-4 border-red-600" src={whitebeard.img} alt={whitebeard.name}/>}
      {props.foundWoof ? <img class="border-4 border-green-700" src={woof.img} alt={woof.name}/> : <img class="border-4 border-red-600" src={woof.img} alt={woof.name}/>}
    </div>
  );
};

export default Character