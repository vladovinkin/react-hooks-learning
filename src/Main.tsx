import { useAlert } from './alert/AlertContext'

const Main = () => {
  const { show } = useAlert()
  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button onClick={show} className="btn btn-success">
        Показать alert
      </button>
    </>
  )
}

export default Main
