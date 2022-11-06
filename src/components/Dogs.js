import Ratings from './Ratings'
const Dogs = (props) => {
  return (
    <div className="dog-info">
      <h1> {props.breed_name}</h1>
      <img src={props.photo} alt={props.breed_name} />
      <h3> Breed Description: {props.description} </h3>

      {/* {props.data.map((datum) => (
        <Ratings key={datum.id} rating={datum.saras_rating} />
      ))} */}

      <Ratings rating={props.saras_rating} />
    </div>
  )
}

export default Dogs
