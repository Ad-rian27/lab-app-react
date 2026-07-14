import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavigationBar from './components/NavigationBar'
import AddEntry from './components/AddEntry'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewEntry from './components/ViewEntry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
<Route path='/' element={<AddEntry/>} />
<Route path='/add' element={<AddEntry/>} />
<Route path='/view' element={<ViewEntry/>} />

  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
