// Uydu veri tipleri

export interface Satellite {
  id: string
  name: string
  type: 'communication' | 'observation' | 'navigation' | 'scientific'
  position: {
    longitude: number
    latitude: number
    height: number // metre cinsinden
  }
  orbit: {
    altitude: number // km
    inclination: number // derece
    period: number // dakika
  }
  status: 'active' | 'standby' | 'maintenance'
  capabilities: {
    communicationRange: number // km
    coverageRadius: number // km (etki alanı yarıçapı)
    dataRate: number // Mbps
    frequency: string // GHz
  }
  metadata: {
    operator: string
    launchDate: string
    mission: string
    power: number // Watt
    mass: number // kg
  }
  connections?: string[] // Bağlı olduğu uydu ID'leri
  // AI Uyarı ve Durum Bilgileri
  alert?: {
    faultRisk: number // Arıza riski yüzdesi (0-100)
    alertStatus: 'critical' | 'warning' | 'normal' | 'good' // Durum
    recommendedAction: string // Önerilen aksiyon
  }
}

export interface SatelliteConnection {
  from: string
  to: string
  signalStrength: number // 0-100
  latency: number // ms
}

