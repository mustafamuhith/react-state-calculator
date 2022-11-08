import { useState } from "react";
import "./App.css"

const Operations = {
  '+': (padOne, padTwo) => padOne + padTwo,
  '-': (padOne, padTwo) => padOne - padTwo,
  '*': (padOne, padTwo) => padOne * padTwo,
  '/': (padOne, padTwo) => padOne / padTwo
}
function App() { 
  const [padOne, setPadOne] = useState('0')
  const [padTwo, setPadTwo] = useState('0')
  const [operations, setOperations] = useState('+')
 


  const clickingPadOne = (number) => {
    const showOnPadOne = showNumber(padOne, number)
    setPadOne(showOnPadOne)
  }

  const clickingPadTwo = (number) => {
    const showOnPadTwo = showNumber(padTwo, number)
    setPadTwo(showOnPadTwo)
  }

  const showNumber = (remaining, number) => {
    if (remaining === '0') {
      if (number === 0) {
        return remaining
      }
      return number
    }
    return (remaining += number)
  }

  const calculator = () => {
    const calculate = Operations[operations]
    return calculate(Number(padOne), Number(padTwo))
  }

  const result = calculator()
 
  return (
    <div className="calculator">
        <div className="panel">
          <p>{padOne}</p>
          <div className="numbers">
            <button onClick={() => clickingPadOne('1')}>1</button>
            <button onClick={() => clickingPadOne('2')}>2</button>
            <button onClick={() => clickingPadOne('3')}>3</button>
            <button onClick={() => clickingPadOne('4')}>4</button>
            <button onClick={() => clickingPadOne('5')}>5</button>
            <button onClick={() => clickingPadOne('6')}>6</button>
            <button onClick={() => clickingPadOne('7')}>7</button>
            <button onClick={() => clickingPadOne('8')}>8</button>
            <button onClick={() => clickingPadOne('9')}>9</button>
            <button onClick={() => clickingPadOne('0')}>0</button>
            <button onClick={() => setPadOne('0')}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operations}</p>
          <div className="numbers">
            <button onClick={() => setOperations('+')}>+</button>
            <button onClick={() => setOperations('-')}>-</button>
            <button onClick={() => setOperations('*')}>*</button>
            <button onClick={() => setOperations('/')}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{padTwo}</p>
          <div className="numbers">
            <button onClick={() => clickingPadTwo('1')}>1</button>
            <button onClick={() => clickingPadTwo('2')}>2</button>
            <button onClick={() => clickingPadTwo('3')}>3</button>
            <button onClick={() => clickingPadTwo('4')}>4</button>
            <button onClick={() => clickingPadTwo('5')}>5</button>
            <button onClick={() => clickingPadTwo('6')}>6</button>
            <button onClick={() => clickingPadTwo('7')}>7</button>
            <button onClick={() => clickingPadTwo('8')}>8</button>
            <button onClick={() => clickingPadTwo('9')}>9</button>
            <button onClick={() => clickingPadTwo('0')}>0</button>
            <button onClick={() => setPadTwo('0')}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
