// Decision: Context wrapper (satellite list display component)
import React from 'react'
import { useSatelliteContext } from '../../context/SatelliteContext'
import './SatelliteList.css'

const SatelliteList: React.FC = () => {
  const { filteredSatellites, selectedSatellite, setSelectedSatellite } = useSatelliteContext()

  const typeLabels = {
    communication: 'İletişim',
    observation: 'Gözlem',
    navigation: 'Navigasyon',
    scientific: 'Bilimsel'
  }

  const statusLabels = {
    active: 'Aktif',
    standby: 'Beklemede',
    maintenance: 'Bakımda'
  }

  const statusColors = {
    active: '#4CAF50',
    standby: '#FF9800',
    maintenance: '#F44336'
  }

  if (filteredSatellites.length === 0) {
    return (
      <div className="satellite-list empty">
        <p>Filtreleme kriterlerinize uygun baz istasyonu bulunamadı.</p>
      </div>
    )
  }

  return (
    <div className="satellite-list">
      <div className="satellite-list-header">
        <h3>Baz İstasyonları ({filteredSatellites.length})</h3>
      </div>
      <div className="satellite-list-content">
        {filteredSatellites.map(satellite => {
          const isSelected = selectedSatellite?.id === satellite.id

          return (
            <div
              key={satellite.id}
              className={`satellite-list-item ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedSatellite(satellite)}
            >
              <div className="satellite-item-header">
                <span className="satellite-name">{satellite.name}</span>
                <span
                  className="satellite-status-badge"
                  style={{ backgroundColor: statusColors[satellite.status] }}
                >
                  {statusLabels[satellite.status]}
                </span>
              </div>
              <div className="satellite-item-info">
                <span className="satellite-id">{satellite.id}</span>
                <span className="satellite-type">{typeLabels[satellite.type]}</span>
              </div>
              <div className="satellite-item-details">
                <span>{(satellite.position.height / 1000).toFixed(0)} km</span>
                <span>•</span>
                <span>{satellite.metadata.operator}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SatelliteList

