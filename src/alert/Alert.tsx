import { useAlert } from './AlertContext'

const Alert = () => {
  const { visible, toggle } = useAlert()

  if (!visible) return null

  return (
    <div onClick={toggle} className={'alert alert-danger'}>
      Это очень и очень важное сообщение
    </div>
  )
}

export default Alert
