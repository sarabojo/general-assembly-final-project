import './App.css'
import data from './data.json'
import SideBar from './components/SideBar'
import Main from './components/Main'

const App = () => {
  return (
    <div>
      <h1>Sara's Final Project</h1>
      <ul className="flex-row">
        <Main className="main" />
        <SideBar className="side-bar" />
      </ul>
    </div>
  )
}

export default App
