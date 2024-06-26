import { useState } from "react"
import Result from "../Result"

function Form(){
  const [altura, setAltura] = useState(null)
  const [peso, setPeso] = useState(null)
  const [imc, setImc] = useState('Indefinido')

  function CalcularImc(){
    if(altura != null && peso != null){
      return setImc((peso / altura**2).toFixed(2))
    }

    event.preventDefault()
    alert('Insira as informações corretamente!')
  }

  return (
    <div>
      <h1>Cálculo de Imc</h1>

      <div>
        <label htmlFor="altura">
          Altura
          <input id='input' value={altura} onChange={(e) => setAltura(e.target.value)} type="number" placeholder="Digite a sua altura..." />
        </label>

        <label htmlFor="">
          Peso
          <input id='input' value={peso} onChange={(e) => setPeso(e.target.value)} type="number" placeholder="Digite o seu peso..." />
        </label>

        <div>
          <button onClick={CalcularImc}>Enviar</button>
        </div>
      </div>

      <Result imc={imc} />
    </div>
  )
}

export default Form
