import { Satellite } from '../types/satellite'

// Decision: Centralized management (static data source)
// 15 örnek baz istasyonu datası - İstanbul ve çevresi

export const satellites: Satellite[] = [
  {
    id: 'BS-001',
    name: 'Beşiktaş Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.0089,
      latitude: 41.0422,
      height: 45
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 35,
      coverageRadius: 12,
      dataRate: 500,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2020-03-15',
      mission: 'Urban Communication',
      power: 5000,
      mass: 250
    },
    connections: ['BS-002', 'BS-003', 'BS-005']
  },
  {
    id: 'BS-002',
    name: 'Kadıköy Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.0270,
      latitude: 40.9848,
      height: 60
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 40,
      coverageRadius: 18,
      dataRate: 600,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2019-11-20',
      mission: 'Urban Communication',
      power: 6000,
      mass: 280
    },
    connections: ['BS-001', 'BS-004', 'BS-006']
  },
  {
    id: 'BS-003',
    name: 'Şişli Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9877,
      latitude: 41.0602,
      height: 80
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 45,
      coverageRadius: 20,
      dataRate: 700,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2021-05-10',
      mission: 'Urban Communication',
      power: 7000,
      mass: 320
    },
    connections: ['BS-001', 'BS-007']
  },
  {
    id: 'BS-004',
    name: 'Üsküdar Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 29.0195,
      latitude: 41.0214,
      height: 55
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 30,
      coverageRadius: 15,
      dataRate: 450,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2018-08-22',
      mission: 'Traffic Monitoring',
      power: 4500,
      mass: 220
    },
    connections: ['BS-002', 'BS-005', 'BS-008']
  },
  {
    id: 'BS-005',
    name: 'Beyoğlu Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9784,
      latitude: 41.0367,
      height: 70
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 50,
      coverageRadius: 22,
      dataRate: 800,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2022-01-12',
      mission: 'Urban Communication',
      power: 8000,
      mass: 350
    },
    connections: ['BS-001', 'BS-004', 'BS-009']
  },
  {
    id: 'BS-006',
    name: 'Bakırköy Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.8711,
      latitude: 40.9833,
      height: 50
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 38,
      coverageRadius: 16,
      dataRate: 550,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2020-09-05',
      mission: 'Urban Communication',
      power: 5500,
      mass: 260
    },
    connections: ['BS-002', 'BS-010']
  },
  {
    id: 'BS-007',
    name: 'Sarıyer Baz İstasyonu',
    type: 'scientific',
    position: {
      longitude: 29.0556,
      latitude: 41.1078,
      height: 90
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'standby',
    capabilities: {
      communicationRange: 25,
      coverageRadius: 10,
      dataRate: 300,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'TÜBİTAK',
      launchDate: '2019-04-18',
      mission: 'Research & Development',
      power: 3000,
      mass: 180
    },
    connections: ['BS-003']
  },
  {
    id: 'BS-008',
    name: 'Kartal Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.1876,
      latitude: 40.9103,
      height: 65
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 42,
      coverageRadius: 19,
      dataRate: 650,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2021-07-30',
      mission: 'Urban Communication',
      power: 6500,
      mass: 290
    },
    connections: ['BS-004', 'BS-011', 'BS-012']
  },
  {
    id: 'BS-009',
    name: 'Maltepe Baz İstasyonu',
    type: 'navigation',
    position: {
      longitude: 29.1556,
      latitude: 40.9333,
      height: 75
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 35,
      coverageRadius: 14,
      dataRate: 400,
      frequency: '1.57542'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2020-12-08',
      mission: 'GPS Relay',
      power: 4000,
      mass: 200
    },
    connections: ['BS-005', 'BS-013']
  },
  {
    id: 'BS-010',
    name: 'Zeytinburnu Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9078,
      latitude: 41.0089,
      height: 40
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'standby',
    capabilities: {
      communicationRange: 28,
      coverageRadius: 12,
      dataRate: 350,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2018-06-15',
      mission: 'Urban Communication',
      power: 3500,
      mass: 190
    },
    connections: ['BS-006', 'BS-014']
  },
  {
    id: 'BS-011',
    name: 'Pendik Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 29.2306,
      latitude: 40.8761,
      height: 85
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 48,
      coverageRadius: 21,
      dataRate: 750,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2022-03-25',
      mission: 'Port Monitoring',
      power: 7500,
      mass: 340
    },
    connections: ['BS-008', 'BS-015']
  },
  {
    id: 'BS-012',
    name: 'Tuzla Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.3917,
      latitude: 40.8250,
      height: 95
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 55,
      coverageRadius: 25,
      dataRate: 900,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2021-11-14',
      mission: 'Industrial Zone Communication',
      power: 9000,
      mass: 400
    },
    connections: ['BS-008']
  },
  {
    id: 'BS-013',
    name: 'Ataşehir Baz İstasyonu',
    type: 'navigation',
    position: {
      longitude: 29.1234,
      latitude: 40.9876,
      height: 100
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 40,
      coverageRadius: 17,
      dataRate: 500,
      frequency: '1.57542'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2020-02-28',
      mission: 'GPS Relay',
      power: 5000,
      mass: 230
    },
    connections: ['BS-009']
  },
  {
    id: 'BS-014',
    name: 'Fatih Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9503,
      latitude: 41.0186,
      height: 35
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 32,
      coverageRadius: 13,
      dataRate: 420,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2019-10-11',
      mission: 'Historical District Communication',
      power: 4200,
      mass: 210
    },
    connections: ['BS-010']
  },
  {
    id: 'BS-015',
    name: 'Bostancı Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 29.1234,
      latitude: 40.9567,
      height: 110
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 52,
      coverageRadius: 23,
      dataRate: 850,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2022-06-20',
      mission: 'Coastal Monitoring',
      power: 8500,
      mass: 380
    },
    connections: ['BS-011']
  }
]
