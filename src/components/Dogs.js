import Ratings from './Ratings'
const Dogs = (props) => {
  return (
    <div className="dog-info">
      <h1></h1>
      <img src={props.photo} alt={props.breed_name} />
      <h3>Dog Breed: {props.breed_name} </h3>
      <h3> Description: {props.description} </h3>
      <Ratings rating={props.saras_rating} />
    </div>
  )
}

export default Dogs
