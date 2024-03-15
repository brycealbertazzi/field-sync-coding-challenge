import { createContext, useContext } from 'react'
import { User } from '../types' // Import your custom types

// Define the shape of your context value
interface AppContextValue {
  typicodeUsers: User[]
  setTypicodeUsers: (payload: any) => void
  googleMapsSelectedUser: User | null
  setGoogleMapsSelectedUser: (payload: any) => void
}

// Create the context with an initial value
const AppContext = createContext<AppContextValue>({
  typicodeUsers: [],
  setTypicodeUsers: () => {}, 
  googleMapsSelectedUser: null,
  setGoogleMapsSelectedUser: () => {}
})

// Custom hook to access the context
export const useAppContext = () => useContext(AppContext)

export default AppContext