import React, { createContext, ReactNode, useContext, useReducer } from 'react'

type alertProviderProps = {
  children: ReactNode[] | ReactNode
}

interface AlertContextProps {
  visible: boolean
  show: () => void
  hide: () => void
}

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const AlertContext = createContext({} as AlertContextProps)

export const useAlert = () => {
  return useContext(AlertContext)
}

const reducer = (state: { visible: boolean }, action: { type: string }) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        visible: true,
      }
    case HIDE_ALERT:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

export const AlertProvider = (props: alertProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
  })

  const show = () => dispatch({ type: SHOW_ALERT })
  const hide = () => dispatch({ type: HIDE_ALERT })
  const { visible } = state

  return (
    <AlertContext.Provider
      value={{
        visible,
        show,
        hide,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}
