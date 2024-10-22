import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './Components/Imageslider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageSlider/>
    </>
  )
}

export default App
