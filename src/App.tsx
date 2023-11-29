import Main from './Main'
import Alert from './Alert'
import { createContext, useState } from 'react'

export const AlertContext = createContext(false)

const App = () => {
  const [alert, setAlert] = useState(false)

  const toggleAlert = () => {
    setAlert((prev) => !prev)
  }

  return (
    <AlertContext.Provider value={alert}>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlertContext.Provider>
  )
}

export default App
