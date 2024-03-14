import { createContext, useContext } from 'react';
import { User } from '../types'; // Import your custom types

// Define the shape of your context value
interface AppContextValue {
  typicodeUsers: User[];
  setTypicodeUsers: (payload: any) => void;
  // Add other context values as needed
}

// Create the context with an initial value
const AppContext = createContext<AppContextValue>({
  typicodeUsers: [],
  setTypicodeUsers: () => {}, // Default implementation, to be overridden
  // Add other default values as needed
});

// Custom hook to access the context
export const useAppContext = () => useContext(AppContext);

export default AppContext;