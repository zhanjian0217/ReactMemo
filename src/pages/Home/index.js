import Edit from "./components/Edit"
import List from "./components/List"
import './index.css'

const app = {
  color: 'blue'
}


const Home = () => {
  return <div className="app">
    <Edit />
    <List />
  </div>
}

export default Home