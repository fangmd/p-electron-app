import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { MinePage } from './pages/Mine'
import { ErrorPage } from './pages/Error'
import { VideoRecorderPage } from './pages/VideoRecorder'
import { RecoilRoot } from 'recoil'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <HashRouter>
        <div className="flex gap-2 p-4">
          <a href="#/main_window">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Home</button>
          </a>
          <a href="#/main_window/mine">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Mine</button>
          </a>
          <a href="#/main_window/video-recorder">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Video Recorder</button>
          </a>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/main_window" element={<HomePage />}></Route>
          <Route path="/main_window/mine" element={<MinePage />}></Route>
          <Route path="/main_window/video-recorder" element={<VideoRecorderPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </HashRouter>
    </RecoilRoot>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
