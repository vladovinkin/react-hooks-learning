import { useState } from 'react'

const App = () => {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black',
  }

  return (
    <>
      <h1 style={styles}>Количество элементов: </h1>
      <button
        className="btn btn-success me-3"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить
      </button>
    </>
  )
}

export default App
