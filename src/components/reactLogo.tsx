import 'react'
import reactLogo from '../assets/react.svg'
import appSettings from '../utils/appSettings'

function ReactLogo() {
    const REACT_URL = appSettings.reactUrl

    return (
        <a href={REACT_URL} target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    )
}

export default ReactLogo