// SVG dosyalarını yükleyen yardımcı fonksiyon
import { svgToDataUrl } from './svgToDataUrl'

// Baz istasyonu - Sabit kule/platform kısmı (animasyon yok)
const towerSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Kule gövdesi -->
  <rect x="22" y="20" width="4" height="20" fill="#2C3E50" stroke="#1A252F" stroke-width="1.5" rx="1"/>
  
  <!-- Kule platformu -->
  <rect x="18" y="20" width="12" height="6" fill="#34495E" stroke="#1A252F" stroke-width="1.5" rx="1"/>
  
  <!-- Destek çubukları -->
  <line x1="20" y1="26" x2="22" y2="20" stroke="#1A252F" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="28" y1="26" x2="26" y2="20" stroke="#1A252F" stroke-width="1.5" stroke-linecap="round"/>
</svg>`

// Baz istasyonu - Animasyonlu mavi anten kısmı (sadece bu parıldayacak)
const antennaSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Ana anten küresi -->
  <circle cx="24" cy="14" r="6" fill="#3498DB" stroke="#2980B9" stroke-width="2"/>
  <circle cx="24" cy="14" r="4" fill="#5DADE2" stroke="#2980B9" stroke-width="1"/>
  <circle cx="24" cy="14" r="2" fill="#FFFFFF"/>
  
  <!-- Anten çubukları -->
  <line x1="24" y1="8" x2="24" y2="14" stroke="#2980B9" stroke-width="2" stroke-linecap="round"/>
  <line x1="18" y1="14" x2="24" y2="14" stroke="#2980B9" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="24" y1="14" x2="30" y2="14" stroke="#2980B9" stroke-width="1.5" stroke-linecap="round"/>
  
  <!-- Yatay antenler -->
  <line x1="16" y1="12" x2="32" y2="12" stroke="#3498DB" stroke-width="2" stroke-linecap="round"/>
  <line x1="16" y1="16" x2="32" y2="16" stroke="#3498DB" stroke-width="2" stroke-linecap="round"/>
  
  <!-- Sinyal dalgaları (arka plan) -->
  <circle cx="24" cy="14" r="8" fill="none" stroke="#3498DB" stroke-width="1" opacity="0.3" stroke-dasharray="2,2"/>
  <circle cx="24" cy="14" r="10" fill="none" stroke="#3498DB" stroke-width="1" opacity="0.2" stroke-dasharray="2,2"/>
  
  <!-- Parlama efekti -->
  <circle cx="24" cy="14" r="3" fill="#FFFFFF" opacity="0.4"/>
</svg>`


const solarPanelSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="6" width="12" height="4" fill="#FFD93D" stroke="#F4B400" stroke-width="1"/>
  <line x1="4" y1="8" x2="12" y2="8" stroke="#F4B400" stroke-width="0.5"/>
  <line x1="6" y1="6" x2="6" y2="10" stroke="#F4B400" stroke-width="0.5"/>
  <line x1="8" y1="6" x2="8" y2="10" stroke="#F4B400" stroke-width="0.5"/>
  <line x1="10" y1="6" x2="10" y2="10" stroke="#F4B400" stroke-width="0.5"/>
</svg>`

export const loadTowerIcon = () => svgToDataUrl(towerSvg) // Sabit kule/platform
export const loadAntennaIcon = () => svgToDataUrl(antennaSvg) // Animasyonlu mavi anten
export const loadSolarPanelIcon = () => svgToDataUrl(solarPanelSvg)

