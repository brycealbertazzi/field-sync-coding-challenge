import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { Navbar } from './Navbar'
import { Home } from './pages/Home'
import { Fetch } from './pages/Fetch'
import { Save } from './pages/Save'
import AppStateProvider from './context/AppState'

function App() {
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
