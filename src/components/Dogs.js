import Ratings from './Ratings'
const Dogs = (props) => {
  return (
    <div>
      <h1>Dogs Component</h1>
      <li>
        <img src={props.data.photo} alt={props.data.breed_name} />
        <h3>Dog Breed: {props.data.breed_name} </h3>
        <h5>Breed Description: {props.data.description}</h5>
        <Ratings rating={props.data.saras_rating} />
      </li>
    </div>
  )
}

export default Dogs
