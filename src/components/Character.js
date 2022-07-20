/* eslint-disable no-unused-vars */
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

const Character = (props) => {
  const [waldo, setWaldo] = useState({img:Waldo, imgFound:WaldoFound, name:'Waldo'});
  const [wenda, setWenda] = useState({img:Wenda, imgFound:WendaFound, name:'Wenda'});
  const [odlaw, setOdlaw] = useState({img:Odlaw, imgFound:OdlawFound, name:'Odlaw'});
  const [whitebeard, setWhitebeard] = useState({img:Whitebeard, imgFound:WhitebeardFound, name:'Whitebeard'});
  const [woof, setWoof] = useState({img:Woof, imgFound:WoofFound, name:'Woof'});


  return (
    <div>
    {props.foundWaldo ? <img src={waldo.imgFound} alt={waldo.name}/> : <img src={waldo.img} alt={waldo.name}/>}
    {props.foundWenda ? <img src={wenda.imgFound} alt={wenda.name}/> : <img src={wenda.img} alt={wenda.name}/>}
    {props.foundOdlaw ? <img src={odlaw.imgFound} alt={odlaw.name}/> : <img src={odlaw.img} alt={odlaw.name}/>}
    {props.foundWhitebeard ? <img src={whitebeard.imgFound} alt={whitebeard.name}/> : <img src={whitebeard.img} alt={whitebeard.name}/>}
    {props.foundWoof ? <img src={woof.imgFound} alt={woof.name}/> : <img src={woof.img} alt={woof.name}/>}
    </div>
  );
};

export default Character