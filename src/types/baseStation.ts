// Baz istasyonu veri tipleri

export interface BaseStation {
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
    communicationRange: number // km (iletişim menzili - diğer baz istasyonlarıyla bağlantı için)
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
  connections?: string[] // Bağlı olduğu baz istasyonu ID'leri (manuel olarak tanımlanmış)
}

export interface BaseStationConnection {
  from: string
  to: string
  signalStrength: number // 0-100
  latency: number // ms
}

