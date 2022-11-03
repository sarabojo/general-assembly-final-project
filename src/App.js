import './App.css'
import data from './data.json'
import SideBar from './components/SideBar'
import Main from './components/Main'

const App = () => {
  return (
    <div className="body">
      <h1></h1>
      <Main data={data} />
      <SideBar />
    </div>
  )
}

export default App
