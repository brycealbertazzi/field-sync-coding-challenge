import React, { useReducer, ReactNode } from 'react'
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import { User } from '../types'

interface State {
  typicodeUsers: User[]
  googleMapsSelectedUser: User | null
}

interface ContextValue {
  typicodeUsers: User[]
  setTypicodeUsers: (payload: any) => void
  googleMapsSelectedUser: User | null
  setGoogleMapsSelectedUser: (payload: any) => void
}

interface Props {
  children: ReactNode
}

const AppStateProvider: React.FC<Props> = ({ children }) => {
  const initialState: State = {
    typicodeUsers: [],
    googleMapsSelectedUser: null,
  }

  const [state, dispatch] = useReducer(AppReducer, initialState)

  const setTypicodeUsers = (payload: any) => {
    dispatch({ type: 'SET_TYPICODE_USERS', payload })
  }

  const setGoogleMapsSelectedUser = (payload: any) => {
    dispatch({ type: 'SET_GOOGLE_MAPS_SELECTED_USER', payload })
  }

  const contextValue: ContextValue = {
    typicodeUsers: state.typicodeUsers,
    setTypicodeUsers,
    googleMapsSelectedUser: state.googleMapsSelectedUser,
    setGoogleMapsSelectedUser: setGoogleMapsSelectedUser,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppStateProvider