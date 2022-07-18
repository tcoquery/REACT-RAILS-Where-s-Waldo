import { useLocation } from 'react-router-dom'
import { useState } from 'react';

const Puzzle = (props) => {
  const location = useLocation();
  const state = location.state;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getCoordinates = (e) => {
    setX(e.pageX);
    setY(e.pageY);
  };

  return (
    <div>
      <img onClick={getCoordinates} src={state.img} alt={state.name}/>
    </div>
  )
};

export default Puzzle;

