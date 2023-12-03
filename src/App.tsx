import reactLogo from './assets/react.svg';
import './App.css';
import CountButton from './components/countButton';
import Facts from './components/facts';
import ViteLogo from './components/viteLogo';

function App() {

  return (
    <>
      <div>
        <ViteLogo />
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
