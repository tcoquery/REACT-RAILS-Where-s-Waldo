import { useLocation } from 'react-router-dom'

const Puzzle = (props) => {
  const location = useLocation();
  const state = location.state;

  const getCoordinates = (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
  };

  return (
    <div>
      <img onClick={getCoordinates} src={state.img} alt={state.name}/>
    </div>
  )
};

export default Puzzle;

