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
}

export interface SatelliteConnection {
  from: string
  to: string
  signalStrength: number // 0-100
  latency: number // ms
}

