import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="mobile-wrapper">
        <Routes>
          <Route path="/" element="" />
          <Route path="*" element="페이지를 찾을 수 없습니다." />
        </Routes>
      </main>
    </>
  )
}

export default App
