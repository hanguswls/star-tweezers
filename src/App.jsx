import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element="" />
        <Route path="*" element="페이지를 찾을 수 없습니다." />
      </Routes>
    </>
  )
}

export default App
