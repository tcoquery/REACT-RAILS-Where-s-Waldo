const Card = (props) => {
  return (
    <div>
    {props.images.map((image) => {
      return <div key={image.id}>
      <img src={image.img} alt={image.name}/>
      </div>
    })}
    </div>
  )
};

export default Card;