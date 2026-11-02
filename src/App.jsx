import { useState } from 'react'
import './App.css'
import Conometro from './Componentes/Cronometro'
import CatalogoProductos from './Componentes/CatalogoProductos'
import CardProductos from './Componentes/CardsProductos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Conometro />
      <Conometro />
      <CatalogoProductos />
      <CardProductos />
      
    </>
  )
}

export default App
