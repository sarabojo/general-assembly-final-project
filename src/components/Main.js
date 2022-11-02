import Dogs from './Dogs'

const Main = (props) => {
  return (
    <div className="main">
      <h1>Main Section</h1>
      <ul>
        {props.data.map((datum) => (
          <Dogs
            key={datum.id}
            rating={datum.saras_rating}
            friendly={datum.friendly}
            sheds={datum.sheds}
            trainability={datum.easy_to_train}
          />
        ))}
      </ul>
    </div>
  )
}

export default Main
