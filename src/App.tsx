import { useEffect, useState } from 'react'

let renderCount = 1

const App = () => {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')

  useEffect(() => {
    // setRenderCount((prevRenderCount) => prevRenderCount + 1)
    renderCount++
  })

  return (
    <div>
      <h1>Количество рендеров: {renderCount}</h1>
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </div>
  )
}

export default App
