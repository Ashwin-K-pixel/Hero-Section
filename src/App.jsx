import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import LeftSection from '../components/LeftSection'
import RightSection from '../components/RightSection'

function App() {
  return (
    <div className="App">
          <Navbar />
          <div id='bottom-section'> 
            <LeftSection />
            <RightSection />
          </div>
          
    </div>
  )
}

export default App
