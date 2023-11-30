import { createContext, ReactNode, useContext, useState } from 'react'

type alertProviderProps = {
  children: ReactNode[] | ReactNode
}

interface AlertContextProps {
  visible: boolean
  toggle: () => void
}

const AlertContext = createContext({} as AlertContextProps)

export const useAlert = () => {
  return useContext(AlertContext)
}

export const AlertProvider = (props: alertProviderProps) => {
  const [alert, setAlert] = useState(false)

  const toggle = () => {
    setAlert((prev) => !prev)
  }

  return (
    <AlertContext.Provider
      value={{
        visible: alert,
        toggle,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}
