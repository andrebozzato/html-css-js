import { useState } from 'react'
import { NumericFormat } from 'react-number-format'

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const number = (value) => Number(value.replace(/[^0-9]/g, ''))

export default function Home() {
  const [numero, setNumero] = useState(0)
  const [moeda, setMoeda] = useState(0)

  function handleChange(event) {
    const numero = number(event.target.value) / 100
    console.log(numero)

    setNumero(numero)
  }

  return (
    <div className="row">
      <label htmlFor="numeros">
        Numeros
        <input
          type="text"
          id="numeros"
          name="numeros"
          value={currency.format(numero)}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="numeros">
        Numeros
        <NumericFormat
          thousandSeparator=","
          decimalScale={2}
          value={moeda}
          onChange={(e) => setMoeda(e.target.value)}
        />
      </label>
    </div>
  )
}
