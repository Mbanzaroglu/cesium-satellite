// Decision: Context wrapper (display options control component)
import React from 'react'
import { useSatelliteContext } from '../../context/SatelliteContext'
import './DisplayOptions.css'

const DisplayOptions: React.FC = () => {
  const { displayOptions, setDisplayOptions } = useSatelliteContext()

  const handleToggle = (key: keyof typeof displayOptions) => {
    setDisplayOptions(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const selectAll = () => {
    setDisplayOptions({
      showAlert: true,
      showGeneralInfo: true,
      showPosition: true,
      showCapabilities: true,
      showTechnicalSpecs: true
    })
  }

  const deselectAll = () => {
    setDisplayOptions({
      showAlert: false,
      showGeneralInfo: false,
      showPosition: false,
      showCapabilities: false,
      showTechnicalSpecs: false
    })
  }

  return (
    <div className="display-options">
      <div className="display-options-header">
        <h3>Display Options</h3>
        <div className="display-options-actions">
          <button className="select-all-button" onClick={selectAll}>
            Select All
          </button>
          <button className="deselect-all-button" onClick={deselectAll}>
            Deselect All
          </button>
        </div>
      </div>

      <div className="display-options-content">
        <p className="display-options-description">
          Select which information sections should be displayed in the InfoBox popup when a base station is clicked.
        </p>

        <div className="display-option-item">
          <label className="display-option-checkbox">
            <input
              type="checkbox"
              checked={displayOptions.showAlert}
              onChange={() => handleToggle('showAlert')}
            />
            <span className="display-option-label">
              <strong>AI Alert</strong>
              <span className="display-option-desc">Fault risk, status, and recommended actions</span>
            </span>
          </label>
        </div>

        <div className="display-option-item">
          <label className="display-option-checkbox">
            <input
              type="checkbox"
              checked={displayOptions.showGeneralInfo}
              onChange={() => handleToggle('showGeneralInfo')}
            />
            <span className="display-option-label">
              <strong>General Information</strong>
              <span className="display-option-desc">ID, type, operator, mission, status, launch date</span>
            </span>
          </label>
        </div>

        <div className="display-option-item">
          <label className="display-option-checkbox">
            <input
              type="checkbox"
              checked={displayOptions.showPosition}
              onChange={() => handleToggle('showPosition')}
            />
            <span className="display-option-label">
              <strong>Position</strong>
              <span className="display-option-desc">Longitude, latitude, and height</span>
            </span>
          </label>
        </div>

        <div className="display-option-item">
          <label className="display-option-checkbox">
            <input
              type="checkbox"
              checked={displayOptions.showCapabilities}
              onChange={() => handleToggle('showCapabilities')}
            />
            <span className="display-option-label">
              <strong>Capabilities</strong>
              <span className="display-option-desc">Communication range, coverage radius, data rate, frequency</span>
            </span>
          </label>
        </div>

        <div className="display-option-item">
          <label className="display-option-checkbox">
            <input
              type="checkbox"
              checked={displayOptions.showTechnicalSpecs}
              onChange={() => handleToggle('showTechnicalSpecs')}
            />
            <span className="display-option-label">
              <strong>Technical Specifications</strong>
              <span className="display-option-desc">Power consumption and mass</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default DisplayOptions

