import { useState } from "react";
import axios from "axios";

const NewPlayer = (props) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState(props.time);

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = (e) => {
     axios.post("http://localhost:3000/player", { player: {name: name, time: time, image_id: props.puzzleID}})
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Enter name</label>
        <input 
          onChange={onChange}
          type='text'
          value={name}
          name='name'
          id='name'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )

};

export default NewPlayer;