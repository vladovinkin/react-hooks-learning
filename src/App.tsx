import { useEffect, useState } from 'react'

const App = () => {
  const [renderCount, setRenderCount] = useState(1)

  useEffect(() => {
    setRenderCount((prevRenderCount) => prevRenderCount + 1)
  })

  return (
    <div>
      <h1>Количество рендеров: {renderCount}</h1>
    </div>
  )
}

export default App
