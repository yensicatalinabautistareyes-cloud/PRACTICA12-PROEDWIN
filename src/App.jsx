import { useState } from 'react'
import './App.css'
import Conometro from './Componentes/Cronometro'
import CatalogoProductos from './Componentes/CatalogoProductos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Conometro />
      <Conometro />
      <CatalogoProductos />
    </>
  )
}

export default App
