import React, {useState} from "react"
import beach from './images/beach.jpg';
import fruit from './images/fruit.jpg';
import hollywood from './images/hollywood.jpg';
import ski from './images/ski.jpg';
import space from './images/space.jpg';
import track from './images/track.jpg';
import Card from './components/Card';

function App() {
  const [images, setImages] = useState([
    {img:beach, name:"beach puzzle", id:1},
    {img:fruit, name:"fruit puzzle", id:2},
    {img:hollywood, name:"hollywood puzzle", id:3},
    {img:ski, name:"ski puzzle", id:4},
    {img:space, name:"space puzzle", id:5},
    {img:track, name:"track puzzle", id:6}
  ])

  return (
    <div>
      <div class="text-3xl font-serif h-16 flex items-center justify-center bg-red-400">Where's waldo?</div>
      <h2 class="text-center text-2xl mt-6 mb-6">Choose an image</h2> 
      <Card images={images}/>
    </div>
    );
}

export default App;
