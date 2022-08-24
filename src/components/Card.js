import {Link} from "react-router-dom";

const Card = (props) => {
  return (

    <div class="container mx-auto grid grid-cols-3 grid-rows-2 gap-6">
    {props.images.map((image) => {
      return <div key={image.id}>
        <Link to={`/${image.id}`} state={image}><img class="border-2 border-black h-80 w-auto" src={image.img} alt={image.name}/></Link>
      </div>
    })}
    
    </div>
  )
  
};

export default Card;