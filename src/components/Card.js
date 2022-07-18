const Card = (props) => {
  return (
    <div>
    {props.images.map((image) => {
      return <div key={image.id}>
      <img src={image.img} alt={image.name} height="300px" width="300px"/>
      </div>
    })}
    </div>
  )
};

export default Card;