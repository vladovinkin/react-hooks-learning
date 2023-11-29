import { useAlert } from './AlertContext'

const Alert = () => {
  const alert = useAlert()

  if (!alert.visible) return null

  return (
    <div onClick={alert.toggle} className={'alert alert-danger'}>
      Это очень и очень важное сообщение
    </div>
  )
}

export default Alert
