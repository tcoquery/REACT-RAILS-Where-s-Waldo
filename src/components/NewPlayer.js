import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const NewPlayer = (props) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState(props.time);

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("https://waldo-backend-api.herokuapp.com/player", { player: {name: name, time: time, image_id: props.puzzleID}});
    window.location.href = "https://tcoquery.github.io/REACT-Where-s-Waldo"
  };

  return (
    <div class="p-10">
      <form onSubmit={onSubmit}>
        <div class="mb-4">
        <label class="block mb-2 text-l font-medium text-gray-900 dark:text-gray-300" htmlFor='name'>Enter name</label>
        <input 
          onChange={onChange}
          type='text'
          value={name}
          name='name'
          id='name'
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        </div>
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" type='submit'>Submit</button>
      </form>
    </div>
  )

};

export default NewPlayer;