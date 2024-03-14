import React, { useReducer, ReactNode } from 'react'
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import { User } from '../types'

interface State {
  typicodeUsers: User[]
}

interface ContextValue {
  typicodeUsers: User[]
  setTypicodeUsers: (payload: any) => void
}

interface Props {
  children: ReactNode
}

const AppStateProvider: React.FC<Props> = ({ children }) => {
  const initialState: State = {
    typicodeUsers: [],
  }

  const [state, dispatch] = useReducer(AppReducer, initialState)

  const setTypicodeUsers = (payload: any) => {
    dispatch({ type: 'SET_TYPICODE_USERS', payload })
  }

  const contextValue: ContextValue = {
    typicodeUsers: state.typicodeUsers,
    setTypicodeUsers,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppStateProvider