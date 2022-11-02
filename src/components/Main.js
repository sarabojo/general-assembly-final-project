import Dogs from './Dogs'

const Main = (props) => {
  return (
    <div>
      <h1>Main Section</h1>
      <ul>
        {props.dogs.map((data) => (
          <Dogs
            key={data.id}
            rating={data.saras_rating}
            friendly={data.friendly}
            sheds={data.sheds}
            trainability={data.easy_to_train}
          />
        ))}
      </ul>
    </div>
  )
}

export default Main
