import './App.css'
import { Route, Routes } from 'react-router-dom'
import useCurrentPath from './hooks/useCurrentPath';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './routes/Main';
import Login from './routes/Login/Login';
import OauthCallback from './routes/OauthCallback/OauthCallback';
import Record from './routes/Record/Record';
import Summary from './routes/Summary/Summary';

function App() {
  const { currentPath } = useCurrentPath();

  return (
    <>
      <div className="mobile-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/oauth" element={<OauthCallback />} />
            <Route path="/record" element={<Record />} />
            <Route path="/post" element={<Summary />} />
            <Route path="*" element="페이지를 찾을 수 없습니다." />
          </Routes>
        </main>
        {
          currentPath === 'post' || currentPath === 'summary' ? (
            <Footer />
          ) : null
        }
      </div>
    </>
  )
}

export default App
