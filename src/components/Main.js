import Dogs from './Dogs'

const Main = (props) => {
  return (
    <div className="main">
      <h1></h1>
      {props.data.map((datum) => (
        <Dogs
          key={datum.id}
          photo={datum.photo}
          breed_name={datum.breed_name}
          friendly={datum.friendly}
          sheds={datum.sheds}
          trainability={datum.easy_to_train}
          description={datum.description}
          rating={datum.saras_rating}
        />
      ))}
    </div>
  )
}

export default Main
