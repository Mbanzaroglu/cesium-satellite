import { SatelliteProvider } from './context/SatelliteContext'
import { satellites } from './data/satellites'
import CesiumViewer from './components/CesiumViewer/CesiumViewer'
import SatelliteDetail from './components/SatelliteDetail/SatelliteDetail'
import SatelliteFilters from './components/SatelliteFilters/SatelliteFilters'
import SatelliteList from './components/SatelliteList/SatelliteList'
import './App.css'

function App() {
  return (
    <SatelliteProvider initialSatellites={satellites}>
      <div className="app">
        <div className="app-header">
          <h1>Baz İstasyonu Görüntüleme Arayüzü</h1>
        </div>
        <div className="app-content">
          <div className="app-sidebar">
            <SatelliteFilters />
            <SatelliteList />
            <SatelliteDetail />
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

