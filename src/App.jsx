import { useState } from "react"

import Formulario from "./components/Formulario"




function App() {

  const [vamosCalcular, setVamosCalcular] = useState(false)

  return (
    <div className="container">
      <div className="header">
        <p>Para saber seu ICM aperte o botão</p>
        <button onClick={()=> setVamosCalcular(!vamosCalcular)} type="button">Cálculo do ICM</button>
      </div>
      {vamosCalcular && (
        <Formulario/>
      )}
    </div>

  )
    
}

export default App
