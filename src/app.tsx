import { createRoot } from "react-dom/client"

const App: React.FC = () => {
  return <div>hello</div>
}

createRoot(document.getElementById("root")!).render(<App />)
