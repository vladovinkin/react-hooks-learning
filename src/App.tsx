import { useState } from 'react'

const computeInitialCounter = () => {
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
}

const App = () => {
  const [counter, setCounter] = useState(() => computeInitialCounter())
  const [state, setState] = useState({
    name: 'Default Name',
    date: Date.now(),
  })

  const increaseCounterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const decreaseCounterHandler = () => {
    setCounter((prevCounter) => prevCounter - 1)
  }

  const updateTitle = () => {
    setState((prevState) => ({ ...prevState, name: 'new name' }))
  }

  return (
    <div>
      <h1>Счётчик: {counter}</h1>
      <button className="btn btn-success" onClick={increaseCounterHandler}>
        Добавить
      </button>
      <button className="btn btn-danger" onClick={decreaseCounterHandler}>
        Убрать
      </button>
      <button className="btn btn-warning" onClick={updateTitle}>
        Изменить название
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default App
