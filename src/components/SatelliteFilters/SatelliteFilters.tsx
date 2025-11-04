// Decision: Context wrapper (filtering UI component)
import React from 'react'
import { useSatelliteContext } from '../../context/SatelliteContext'
import './SatelliteFilters.css'

const SatelliteFilters: React.FC = () => {
  const { filters, setFilters, satellites } = useSatelliteContext()

  // Benzersiz tip ve durum listelerini al
  const uniqueTypes = Array.from(new Set(satellites.map(s => s.type)))
  const uniqueStatuses = Array.from(new Set(satellites.map(s => s.status)))

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

  const handleTypeToggle = (type: string) => {
    const newTypes = filters.type.includes(type)
      ? filters.type.filter(t => t !== type)
      : [...filters.type, type]
    setFilters({ ...filters, type: newTypes })
  }

  const handleStatusToggle = (status: string) => {
    const newStatuses = filters.status.includes(status)
      ? filters.status.filter(s => s !== status)
      : [...filters.status, status]
    setFilters({ ...filters, status: newStatuses })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchQuery: e.target.value })
  }

  const clearFilters = () => {
    // Tüm tipleri seç, durum ve arama filtrelerini temizle
    setFilters({ type: uniqueTypes as any, status: [], searchQuery: '' })
  }

  return (
    <div className="satellite-filters">
      <div className="filters-header">
        <h3>Filtreler</h3>
        <button className="clear-button" onClick={clearFilters}>
          Temizle
        </button>
      </div>

      <div className="filter-section">
        <label className="filter-label">Ara</label>
        <input
          type="text"
          className="search-input"
          placeholder="Baz istasyonu adı, ID, operatör veya görev ara..."
          value={filters.searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="filter-section">
        <label className="filter-label">Tip</label>
        <div className="filter-options">
          {uniqueTypes.map(type => (
            <label key={type} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={() => handleTypeToggle(type)}
              />
              <span>{typeLabels[type as keyof typeof typeLabels]}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Durum</label>
        <div className="filter-options">
          {uniqueStatuses.map(status => (
            <label key={status} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.status.includes(status)}
                onChange={() => handleStatusToggle(status)}
              />
              <span>{statusLabels[status as keyof typeof statusLabels]}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SatelliteFilters

