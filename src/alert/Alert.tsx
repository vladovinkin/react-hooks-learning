import { useAlert } from './AlertContext'

const Alert = () => {
  const { visible, hide } = useAlert()

  if (!visible) return null

  return (
    <div onClick={hide} className={'alert alert-danger'}>
      Это очень и очень важное сообщение
    </div>
  )
}

export default Alert
