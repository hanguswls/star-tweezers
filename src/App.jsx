import './App.css'
import { Route, Routes } from 'react-router-dom'
import logoImage from '/logo.png';
import spinnerIcon from '/spinner_icon.png';

function App() {
  return (
    <>
      <div className="mobile-wrapper">
        <header>
          <button className="button">
            로그아웃
          </button>
          <span className="logo-wrapper">
            <img src={logoImage} alt="logo-image" />
            별집게 Playground
          </span>
        </header>
        <main>
          <Routes>
            <Route path="/" element="" />
            <Route path="*" element="페이지를 찾을 수 없습니다." />
          </Routes>
        </main>
        <footer>
          <button className="button primary">
            출제하기
          </button>
          <span className="loading">
            <img src={spinnerIcon} alt="" className="spinner" />
            저장중이예요...
          </span>
        </footer>
      </div>
    </>
  )
}

export default App
