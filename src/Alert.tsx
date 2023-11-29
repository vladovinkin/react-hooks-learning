import { useContext } from 'react'
import { AlertContext } from './App'

const Alert = () => {
  const alert = useContext(AlertContext)

  if (!alert) return null

  return (
    <div className={'alert alert-danger'}>
      Это очень и очень важное сообщение
    </div>
  )
}

export default Alert
