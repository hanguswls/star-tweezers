import './App.css'
import { Route, Routes } from 'react-router-dom'
import useCurrentPath from './hooks/useCurrentPath';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const { currentPath } = useCurrentPath();

  return (
    <>
      <div className="mobile-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element="" />
            <Route path="*" element="페이지를 찾을 수 없습니다." />
          </Routes>
        </main>
        {
          currentPath === 'post' ? (
            <Footer />
          ) : null
        }
      </div>
    </>
  )
}

export default App
