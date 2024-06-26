import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App