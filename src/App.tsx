import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountButton from './components/countButton'
import Facts from './components/facts'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CountButton />
        <Facts />
      </div>
    </>
  )
}

export default App
