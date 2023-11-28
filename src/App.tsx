import { useEffect, useMemo, useState } from 'react'

const complexCompute = (num: number) => {
  let i = 0
  while (i < 3000000000) i++
  return num * 2
}

const App = () => {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(
    () => ({
      color: colored ? 'darkred' : 'black',
    }),
    [colored],
  )

  useEffect(() => {
    console.log('styles changed')
  }, [styles])

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button
        className={'btn btn-success me-3'}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className={'btn btn-danger me-3'}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Убрать
      </button>
      <button
        className={'btn btn-warning'}
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить
      </button>
    </div>
  )
}

export default App
