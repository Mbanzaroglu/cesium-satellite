// Decision: Context wrapper (tilt mode toggle component)
import React, { useState, useEffect } from 'react'
import './TiltModeToggle.css'

const TiltModeToggle: React.FC = () => {
  const [tiltEnabled, setTiltEnabled] = useState(false)

  useEffect(() => {
    // İlk yüklemede tilt durumunu kontrol et (biraz gecikmeyle)
    const checkInitialState = () => {
      if (typeof window !== 'undefined' && (window as any).getTiltMode) {
        const initialState = (window as any).getTiltMode()
        setTiltEnabled(initialState)
      }
    }
    
    // Viewer hazır olana kadar bekle
    const timer = setTimeout(checkInitialState, 500)
    
    // Tilt modu değişikliklerini dinle
    const handleTiltModeChange = (event: CustomEvent) => {
      setTiltEnabled(event.detail.enabled)
    }

    window.addEventListener('tiltModeChanged', handleTiltModeChange as EventListener)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('tiltModeChanged', handleTiltModeChange as EventListener)
    }
  }, [])

  const handleToggle = () => {
    console.log('🔘 Tilt butonu tıklandı!')
    if (typeof window !== 'undefined' && (window as any).toggleTiltMode) {
      console.log('✅ toggleTiltMode fonksiyonu bulundu, çağrılıyor...')
      try {
        ;(window as any).toggleTiltMode()
      } catch (error) {
        console.error('❌ Tilt toggle hatası:', error)
      }
    } else {
      console.error('❌ toggleTiltMode fonksiyonu bulunamadı!')
    }
  }

  return (
    <div className="tilt-mode-toggle">
      <button 
        className={`tilt-toggle-button ${tiltEnabled ? 'enabled' : 'disabled'}`}
        onClick={handleToggle}
        title={tiltEnabled ? 'Tilt modu AÇIK - Dünyaya dik açıdan bakabilirsiniz' : 'Tilt modu KAPALI - Dünyaya paralel bakış'}
      >
        <span className="tilt-icon">📐</span>
        <span className="tilt-label">
          {tiltEnabled ? 'Tilt Açık' : 'Tilt Kapalı'}
        </span>
      </button>
    </div>
  )
}

export default TiltModeToggle

