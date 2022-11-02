import Ratings from './Ratings'
const Dogs = (props) => {
  return (
    <div>
      <h1>Dogs Component</h1>
      <li>
        <img src={props.data.photo} alt={props.data.breed_name} />
      </li>
    </div>
  )
}

export default Dogs
