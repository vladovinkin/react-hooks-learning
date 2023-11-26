import { useEffect, useRef, useState } from 'react'

const App = () => {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current!.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current!.focus()

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Фокус
      </button>
    </div>
  )
}

export default App
