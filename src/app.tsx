import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { MinePage } from './pages/Mine'
import { ErrorPage } from './pages/Error'
import { RecoilRoot } from 'recoil'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <HashRouter>
        <a href="#/main_window">
          <button>to /</button>
        </a>
        <a href="#/main_window/mine">
          <button>to min1e</button>
        </a>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/main_window" element={<HomePage />}></Route>
          <Route path="/main_window/mine" element={<MinePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </HashRouter>
    </RecoilRoot>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
