import { useState } from "react"


const Formulario = () => {

    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)

    
    const calculo = () => {
        const imc = numero1/(numero2)**2
        return imc.toFixed(2)
    }
    
    const funcaoSet = () => {
        if (numero1 > 0 && numero2 > 0) {
            return (
                <p>{calculo()} kg/m²</p>
            )
        } else {
            return (
                <p>Resultado após digitar os dois campos</p>
            )
        }
    }


    return (
        <form>
            <div>
                <label>Digite seu peso:</label>
                <input onChange={({target}) => setNumero1(parseFloat(target.value))}  type="number" placeholder="kg" required/>
            </div>
            <div>
                <label>Digite sua altura:</label>
                <input onChange={({target}) => setNumero2(parseFloat(target.value))} type="number" placeholder="metros" required/>
            </div>
            <>
                {funcaoSet()}
            </>
        </form>
    )
}

export default Formulario