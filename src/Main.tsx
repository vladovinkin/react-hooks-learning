type mainProps = {
  toggle: () => void
}

const Main = (props: mainProps) => {
  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button onClick={props.toggle} className="btn btn-success">
        Показать alert
      </button>
    </>
  )
}

export default Main
