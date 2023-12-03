import 'react'
import viteLogo from '/vite.svg'
import appSettings from '../utils/appSettings'

function ViteLogo() {
    const VITE_URL = appSettings.reactUrl
    
    return (
        <a href={VITE_URL} target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
    )
}

export default ViteLogo