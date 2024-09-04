import Card from "./components"
import {useState} from 'react'

function App() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  return (
    <>
     <h1 className="text-center font-semibold">Currency Converter</h1>
     <Card title='From' currencyType={from}/>
     <Card title='to' currencyType={to}/>
    </>
  )
}

export default App
