import Ratings from './Ratings'
const Dogs = (props) => {
  return (
    <div className="dog-info">
      <h1> {props.breed_name}</h1>
      <img src={props.photo} alt={props.breed_name} />
      <h3> Description: {props.description} </h3>
      <Ratings rating={props.saras_rating} />
    </div>
  )
}

export default Dogs
