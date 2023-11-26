import { useEffect, useRef, useState } from 'react'

const App = () => {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current++
  })

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </div>
  )
}

export default App
