import { SatelliteProvider } from './context/SatelliteContext'
import { satellites } from './data/satellites'
import CesiumViewer from './components/CesiumViewer/CesiumViewer'
import DisplayOptions from './components/DisplayOptions/DisplayOptions'
import './App.css'

function App() {
  return (
    <SatelliteProvider initialSatellites={satellites}>
      <div className="app">
        <div className="app-header">
          <h1>Telecom Infrastructure Command Center</h1>
        </div>
        <div className="app-content">
          <div className="app-sidebar">
            <DisplayOptions />
          </div>
          <div className="app-map">
            <CesiumViewer />
          </div>
        </div>
      </div>
    </SatelliteProvider>
  )
}

export default App

