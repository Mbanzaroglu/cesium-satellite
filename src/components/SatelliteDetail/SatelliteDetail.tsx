// Decision: Context wrapper (satellite detail display component)
import React from 'react'
import { useSatelliteContext } from '../../context/SatelliteContext'
import './SatelliteDetail.css'

const SatelliteDetail: React.FC = () => {
  const { selectedSatellite, setSelectedSatellite } = useSatelliteContext()

  if (!selectedSatellite) {
    return (
      <div className="satellite-detail empty">
        <p>Bir baz istasyonu seçiniz</p>
      </div>
    )
  }

  const statusColors = {
    active: '#4CAF50',
    standby: '#FF9800',
    maintenance: '#F44336'
  }

  const typeLabels = {
    communication: 'İletişim',
    observation: 'Gözlem',
    navigation: 'Navigasyon',
    scientific: 'Bilimsel'
  }

  // Alert durumu için renkler ve etiketler
  const alertStatusColors = {
    critical: '#F44336',
    warning: '#FF9800',
    normal: '#4CAF50',
    good: '#2196F3'
  }

  const alertStatusLabels = {
    critical: 'Critical',
    warning: 'Warning',
    normal: 'Normal',
    good: 'Good'
  }

  // Alert bilgisi yoksa varsayılan değerler
  const alertInfo = selectedSatellite.alert || {
    faultRisk: 0,
    alertStatus: 'good' as const,
    recommendedAction: 'Herhangi bir aksiyon gerekmiyor'
  }

  return (
    <div className="satellite-detail">
      <div className="satellite-detail-header">
        <div className="header-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
            <circle cx="10" cy="10" r="4" fill="currentColor"/>
          </svg>
        </div>
        <h2>{selectedSatellite.name}</h2>
        <button className="close-button" onClick={() => setSelectedSatellite(null)}>×</button>
      </div>

      <div className="satellite-detail-content" style={{ flex: 1, overflowY: 'auto' }}>
        {/* AI Uyarı Bilgileri - Pop-up tarzı */}
        <div className="alert-section">
          <div className="alert-header">
            <span className="alert-icon">⚠️</span>
            <span className="alert-title">AI Uyarısı</span>
          </div>
          <div className="alert-info">
            <div className="alert-row">
              <span className="alert-label">Site:</span>
              <span className="alert-value">{selectedSatellite.name}</span>
            </div>
            <div className="alert-row">
              <span className="alert-label">Arıza Riski:</span>
              <span className="alert-value alert-risk">{alertInfo.faultRisk}%</span>
            </div>
            <div className="alert-row">
              <span className="alert-label">Durum:</span>
              <span 
                className="alert-value alert-status"
                style={{ color: alertStatusColors[alertInfo.alertStatus] }}
              >
                {alertStatusLabels[alertInfo.alertStatus]}
              </span>
            </div>
            <div className="alert-row">
              <span className="alert-label">Önerilen Aksiyon:</span>
              <span className="alert-value alert-action">{alertInfo.recommendedAction}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Genel Bilgiler</h3>
          <div className="detail-row">
            <span className="label">ID:</span>
            <span className="value">{selectedSatellite.id}</span>
          </div>
          <div className="detail-row">
            <span className="label">Tip:</span>
            <span className="value">{typeLabels[selectedSatellite.type]}</span>
          </div>
          <div className="detail-row">
            <span className="label">Operatör:</span>
            <span className="value">{selectedSatellite.metadata.operator}</span>
          </div>
          <div className="detail-row">
            <span className="label">Görev:</span>
            <span className="value">{selectedSatellite.metadata.mission}</span>
          </div>
          <div className="detail-row">
            <span className="label">Durum:</span>
            <span 
              className="value"
              style={{ color: statusColors[selectedSatellite.status] }}
            >
              {selectedSatellite.status === 'active' ? 'Aktif' : 
               selectedSatellite.status === 'standby' ? 'Beklemede' : 'Bakımda'}
            </span>
          </div>
          <div className="detail-row">
            <span className="label">Fırlatma Tarihi:</span>
            <span className="value">{selectedSatellite.metadata.launchDate}</span>
          </div>
        </div>

        <div className="detail-section">
          <h3>Pozisyon</h3>
          <div className="detail-row">
            <span className="label">Boylam:</span>
            <span className="value">{selectedSatellite.position.longitude.toFixed(4)}°</span>
          </div>
          <div className="detail-row">
            <span className="label">Enlem:</span>
            <span className="value">{selectedSatellite.position.latitude.toFixed(4)}°</span>
          </div>
          <div className="detail-row">
            <span className="label">Yükseklik:</span>
            <span className="value">{selectedSatellite.position.height} m</span>
          </div>
        </div>

        <div className="detail-section">
          <h3>Yörünge</h3>
          <div className="detail-row">
            <span className="label">İrtifa:</span>
            <span className="value">{selectedSatellite.orbit.altitude} km</span>
          </div>
          <div className="detail-row">
            <span className="label">Eğim:</span>
            <span className="value">{selectedSatellite.orbit.inclination}°</span>
          </div>
          <div className="detail-row">
            <span className="label">Periyot:</span>
            <span className="value">{selectedSatellite.orbit.period} dakika</span>
          </div>
        </div>

        <div className="detail-section">
          <h3>Yetenekler</h3>
          <div className="detail-row">
            <span className="label">İletişim Menzili:</span>
            <span className="value">{selectedSatellite.capabilities.communicationRange} km</span>
          </div>
          <div className="detail-row">
            <span className="label">Kapsama Yarıçapı:</span>
            <span className="value">{selectedSatellite.capabilities.coverageRadius} km</span>
          </div>
          <div className="detail-row">
            <span className="label">Veri Hızı:</span>
            <span className="value">{selectedSatellite.capabilities.dataRate} Mbps</span>
          </div>
          <div className="detail-row">
            <span className="label">Frekans:</span>
            <span className="value">{selectedSatellite.capabilities.frequency} GHz</span>
          </div>
        </div>

        <div className="detail-section">
          <h3>Teknik Özellikler</h3>
          <div className="detail-row">
            <span className="label">Güç:</span>
            <span className="value">{selectedSatellite.metadata.power} W</span>
          </div>
          <div className="detail-row">
            <span className="label">Kütle:</span>
            <span className="value">{selectedSatellite.metadata.mass} kg</span>
          </div>
        </div>

        {selectedSatellite.connections && selectedSatellite.connections.length > 0 && (
          <div className="detail-section">
            <h3>Bağlantılar</h3>
            <div className="connections-list">
              {selectedSatellite.connections.map(connId => (
                <span key={connId} className="connection-badge">{connId}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SatelliteDetail

