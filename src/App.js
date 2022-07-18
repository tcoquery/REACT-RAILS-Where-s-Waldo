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
      <h1>Where's Waldo ?</h1>
      <h2>Choose an image</h2> 
      <Card images={images}/>
    </div>
  );
}

export default App;
