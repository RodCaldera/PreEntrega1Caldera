import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CartWidget from './componentes/CartWidget/CartWidget'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div> <NavBar /> </div>
      <div>  <ItemListContainer greeting='Hola, usuario'/></div>
    </div>
  )
}

export default App
