import { useAlert } from './alert/AlertContext'

const Main = () => {
  const alert = useAlert()
  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button onClick={alert.toggle} className="btn btn-success">
        Показать alert
      </button>
    </>
  )
}

export default Main
