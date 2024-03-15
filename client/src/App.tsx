import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { Navbar } from './Navbar'
import { Home } from './pages/Home'
import { Fetch } from './pages/Fetch'
import { Save } from './pages/Save'
import AppStateProvider from './context/AppState'
import axios from 'axios'

function App() {

  useEffect(() => {
    // Initialize the users database if it doesn't exist, as a backup in case Docker Compose fails to initialize the database
    axios.get('/api/init-users-db')
  }, [])

  return (
    <AppStateProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/save" element={<Save />} />
          </Routes>
        </div>
      </Router>
    </AppStateProvider>
  )
}

export default App
