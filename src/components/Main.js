import Dogs from './Dogs'

const Main = (props) => {
  return (
    <div className="main">
      <h1>Main Section</h1>
      {props.data.map((datum) => (
        <Dogs
          key={datum.id}
          breed_name={datum.breed_name}
          rating={datum.saras_rating}
          friendly={datum.friendly}
          sheds={datum.sheds}
          trainability={datum.easy_to_train}
        />
      ))}
    </div>
  )
}

export default Main
