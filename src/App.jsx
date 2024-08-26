import { useState } from "react"

import Formulario from "./components/Formulario"


function App() {

  const [vamosCalcular, setVamosCalcular] = useState(false)

  return (
      <>
          <p>Para saber seu ICM aperte o botão</p>
          <button onClick={()=> setVamosCalcular(!vamosCalcular)} type="button">Cálculo do ICM</button>
          {vamosCalcular && (
            <Formulario/>
          )}
      </>

    )
    
}

export default App
