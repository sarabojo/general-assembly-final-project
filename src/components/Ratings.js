const Ratings = (props) => {
  return (
    <li>
      <h1>Ratings Section</h1>
      <h5>{props.data.saras_rating}</h5>
      <h5>Is the dog friendly? {props.data.friendly}</h5>
      <h5>Does it shed a lot? {props.data.sheds}</h5>
      <h5>Is the dog easy to train? {props.data.easy_to_train}</h5>
    </li>
  )
}
