import {Link} from "react-router-dom";

const Card = (props) => {
  return (

    <div>
    {props.images.map((image) => {
      return <div key={image.id}>
      <Link to={`/${image.id}`} state={image}><img src={image.img} alt={image.name} height="300px" width="300px"/></Link>
      </div>
    })}
    
    </div>
  )
  
};

export default Card;