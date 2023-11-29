import Main from './Main'
import Alert from './alert/Alert'
import { AlertProvider } from './alert/AlertContext'

const App = () => {
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  )
}

export default App
