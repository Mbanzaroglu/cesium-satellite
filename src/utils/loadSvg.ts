// SVG dosyalarını yükleyen yardımcı fonksiyon
import { svgToDataUrl } from './svgToDataUrl'

const satelliteSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill="#4A90E2" stroke="#2C5F8D" stroke-width="1.5"/>
  <circle cx="12" cy="10" r="2" fill="#FFFFFF"/>
  <rect x="10" y="8" width="4" height="4" rx="1" fill="#2C5F8D" opacity="0.3"/>
</svg>`

const antennaSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 2L12 6L16 8L12 10L10 14L8 10L4 8L8 6L10 2Z" fill="#FF6B6B" stroke="#CC5555" stroke-width="1"/>
  <line x1="10" y1="14" x2="10" y2="18" stroke="#CC5555" stroke-width="2" stroke-linecap="round"/>
  <circle cx="10" cy="8" r="1.5" fill="#FFFFFF"/>
</svg>`

const solarPanelSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="6" width="12" height="4" fill="#FFD93D" stroke="#F4B400" stroke-width="1"/>
  <line x1="4" y1="8" x2="12" y2="8" stroke="#F4B400" stroke-width="0.5"/>
  <line x1="6" y1="6" x2="6" y2="10" stroke="#F4B400" stroke-width="0.5"/>
  <line x1="8" y1="6" x2="8" y2="10" stroke="#F4B400" stroke-width="0.5"/>
  <line x1="10" y1="6" x2="10" y2="10" stroke="#F4B400" stroke-width="0.5"/>
</svg>`

export const loadSatelliteIcon = () => svgToDataUrl(satelliteSvg)
export const loadAntennaIcon = () => svgToDataUrl(antennaSvg)
export const loadSolarPanelIcon = () => svgToDataUrl(solarPanelSvg)

