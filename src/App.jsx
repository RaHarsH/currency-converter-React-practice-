import Card from "./components"
import {useState} from 'react'

function App() {
  const [fromCurr, setFromCurr] = useState('USD');
  const [toCurr, setToCurr] = useState('INR');
  return (
    <>
     <h1 className="text-center font-semibold">Currency Converter</h1>
     <Card title='From' currencyType={fromCurr}/>
     <Card title='to' currencyType={toCurr}/>
    </>
  )
}

export default App
