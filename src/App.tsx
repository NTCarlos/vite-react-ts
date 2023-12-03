import CountButton from './components/countButton'
import Facts from './components/facts'
import ReactLogo from './components/reactLogo'
import ViteLogo from './components/viteLogo'

function App() {
  const headerTitle = 'Vite + React'

  return (
    <div className='text-center ml-5 mr-5'>
      <div className='flex items-center justify-center mt-5 mb-5'>
        <ViteLogo />
        <ReactLogo />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-5 mb-5">{headerTitle}</h1>
      <div className='flex items-center justify-center flex-col'>
        <CountButton />
        <Facts />
      </div>
    </div>
  )
}

export default App
