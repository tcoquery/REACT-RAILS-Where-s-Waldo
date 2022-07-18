import beach from './images/beach.jpg';
import fruit from './images/fruit.jpg';
import hollywood from './images/hollywood.jpg';
import ski from './images/ski.jpg';
import space from './images/space.jpg';
import track from './images/track.jpg';
import uniqid from "uniqid";
import Card from './components/Card';



function App() {
  const [images, setImages] = ([
    {img:beach, name:"beach puzzle", id:uniqid()},
    {img:fruit, name:"fruit puzzle", id:uniqid()},
    {img:hollywood, name:"hollywood puzzle", id:uniqid()},
    {img:ski, name:"ski puzzle", id:uniqid()},
    {img:space, name:"space puzzle", id:uniqid()},
    {img:track, name:"track puzzle", id:uniqid()}
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
