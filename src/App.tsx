import './App.css';
import CountButton from './components/countButton';
import Facts from './components/facts';
import ReactLogo from './components/reactLogo';
import ViteLogo from './components/viteLogo';

function App() {

  return (
    <>
      <div>
        <ViteLogo />
        <ReactLogo />
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
