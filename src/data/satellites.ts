import { Satellite } from '../types/satellite'

// Decision: Centralized management (static data source)
// 55 örnek baz istasyonu datası - İstanbul ve çevresi

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
    connections: ['BS-002', 'BS-003', 'BS-005', 'BS-014', 'BS-042', 'BS-037', 'BS-039'],
    alert: {
      faultRisk: 45,
      alertStatus: 'warning',
      recommendedAction: 'Periyodik bakım önerilir'
    }
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
    connections: ['BS-001', 'BS-004', 'BS-006', 'BS-033', 'BS-051', 'BS-034', 'BS-052'],
    alert: {
      faultRisk: 30,
      alertStatus: 'normal',
      recommendedAction: 'Rutin kontrol yeterli'
    }
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
    connections: ['BS-001', 'BS-007', 'BS-036', 'BS-037', 'BS-038', 'BS-024', 'BS-039'],
    alert: {
      faultRisk: 65,
      alertStatus: 'critical',
      recommendedAction: 'Önleyici bakım gerekli'
    }
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
    connections: ['BS-002', 'BS-005', 'BS-008', 'BS-032', 'BS-033', 'BS-031']
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
    connections: ['BS-001', 'BS-004', 'BS-009', 'BS-043', 'BS-042', 'BS-014', 'BS-035']
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
    connections: ['BS-002', 'BS-010', 'BS-021', 'BS-022', 'BS-050', 'BS-049']
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
    connections: ['BS-003', 'BS-016', 'BS-041', 'BS-007']
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
    connections: ['BS-004', 'BS-011', 'BS-012', 'BS-019', 'BS-020', 'BS-017', 'BS-018']
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
    connections: ['BS-005', 'BS-013', 'BS-035', 'BS-034', 'BS-053', 'BS-054']
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
    connections: ['BS-006', 'BS-014', 'BS-049', 'BS-048', 'BS-047', 'BS-046', 'BS-050']
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
    connections: ['BS-008', 'BS-015', 'BS-019', 'BS-020', 'BS-012']
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
    connections: ['BS-008', 'BS-020', 'BS-011', 'BS-019', 'BS-012']
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
    connections: ['BS-009', 'BS-054', 'BS-055', 'BS-035', 'BS-053', 'BS-031']
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
    connections: ['BS-010', 'BS-045', 'BS-046', 'BS-047', 'BS-048', 'BS-049', 'BS-001', 'BS-005']
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
    connections: ['BS-011', 'BS-034', 'BS-053', 'BS-054', 'BS-035', 'BS-009', 'BS-055']
  },
  {
    id: 'BS-016',
    name: 'Beykoz Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.0950,
      latitude: 41.1350,
      height: 120
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 60,
      coverageRadius: 28,
      dataRate: 1000,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2022-08-15',
      mission: 'Urban Communication',
      power: 10000,
      mass: 450
    },
    connections: ['BS-007', 'BS-017', 'BS-041', 'BS-040', 'BS-016']
  },
  {
    id: 'BS-017',
    name: 'Çekmeköy Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.1600,
      latitude: 41.0380,
      height: 88
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 46,
      coverageRadius: 20,
      dataRate: 680,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2021-09-22',
      mission: 'Suburban Communication',
      power: 6800,
      mass: 300
    },
    connections: ['BS-016', 'BS-018', 'BS-008', 'BS-017', 'BS-031', 'BS-019']
  },
  {
    id: 'BS-018',
    name: 'Sancaktepe Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 29.2234,
      latitude: 41.0178,
      height: 72
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
      dataRate: 520,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2020-04-30',
      mission: 'Traffic Monitoring',
      power: 5200,
      mass: 240
    },
    connections: ['BS-017', 'BS-019', 'BS-018', 'BS-031', 'BS-032']
  },
  {
    id: 'BS-019',
    name: 'Sultanbeyli Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.2711,
      latitude: 40.9633,
      height: 68
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 44,
      coverageRadius: 19,
      dataRate: 620,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2021-06-10',
      mission: 'Urban Communication',
      power: 6200,
      mass: 275
    },
    connections: ['BS-018', 'BS-011', 'BS-020']
  },
  {
    id: 'BS-020',
    name: 'Gebze Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.4306,
      latitude: 40.7978,
      height: 105
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 58,
      coverageRadius: 26,
      dataRate: 950,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2022-05-12',
      mission: 'Industrial Communication',
      power: 9500,
      mass: 420
    },
    connections: ['BS-019', 'BS-012', 'BS-020', 'BS-011', 'BS-008']
  },
  {
    id: 'BS-021',
    name: 'Büyükçekmece Baz İstasyonu',
    type: 'navigation',
    position: {
      longitude: 28.5789,
      latitude: 41.0200,
      height: 82
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 36,
      coverageRadius: 15,
      dataRate: 480,
      frequency: '1.57542'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2020-11-25',
      mission: 'GPS Relay',
      power: 4800,
      mass: 225
    },
    connections: ['BS-006', 'BS-022']
  },
  {
    id: 'BS-022',
    name: 'Küçükçekmece Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.7767,
      latitude: 41.0167,
      height: 56
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 34,
      coverageRadius: 14,
      dataRate: 460,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2019-12-05',
      mission: 'Urban Communication',
      power: 4600,
      mass: 215
    },
    connections: ['BS-021', 'BS-006', 'BS-023', 'BS-022', 'BS-028', 'BS-029']
  },
  {
    id: 'BS-023',
    name: 'Avcılar Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.7144,
      latitude: 41.0067,
      height: 63
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 41,
      coverageRadius: 18,
      dataRate: 590,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2021-03-18',
      mission: 'Urban Communication',
      power: 5900,
      mass: 270
    },
    connections: ['BS-022', 'BS-024', 'BS-028', 'BS-023', 'BS-029', 'BS-030']
  },
  {
    id: 'BS-024',
    name: 'Başakşehir Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 28.8022,
      latitude: 41.0894,
      height: 92
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 49,
      coverageRadius: 21,
      dataRate: 720,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2022-02-14',
      mission: 'Urban Monitoring',
      power: 7200,
      mass: 330
    },
    connections: ['BS-023', 'BS-025', 'BS-003', 'BS-024', 'BS-036', 'BS-038']
  },
  {
    id: 'BS-025',
    name: 'Arnavutköy Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.7406,
      latitude: 41.2092,
      height: 78
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'standby',
    capabilities: {
      communicationRange: 33,
      coverageRadius: 13,
      dataRate: 410,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2018-09-10',
      mission: 'Suburban Communication',
      power: 4100,
      mass: 195
    },
    connections: ['BS-024', 'BS-027', 'BS-025', 'BS-026']
  },
  {
    id: 'BS-026',
    name: 'Silivri Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.2244,
      latitude: 41.0739,
      height: 67
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 43,
      coverageRadius: 19,
      dataRate: 610,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2021-08-03',
      mission: 'Suburban Communication',
      power: 6100,
      mass: 285
    },
    connections: ['BS-021', 'BS-022', 'BS-026', 'BS-027', 'BS-006', 'BS-030']
  },
  {
    id: 'BS-027',
    name: 'Çatalca Baz İstasyonu',
    type: 'scientific',
    position: {
      longitude: 28.4611,
      latitude: 41.1431,
      height: 115
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 27,
      coverageRadius: 11,
      dataRate: 320,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'TÜBİTAK',
      launchDate: '2020-01-20',
      mission: 'Research & Development',
      power: 3200,
      mass: 170
    },
    connections: ['BS-025', 'BS-026', 'BS-027']
  },
  {
    id: 'BS-028',
    name: 'Esenyurt Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.6778,
      latitude: 41.0333,
      height: 74
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 47,
      coverageRadius: 20,
      dataRate: 690,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2022-01-08',
      mission: 'Urban Communication',
      power: 6900,
      mass: 310
    },
    connections: ['BS-023', 'BS-029', 'BS-028', 'BS-022', 'BS-030']
  },
  {
    id: 'BS-029',
    name: 'Beylikdüzü Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.6433,
      latitude: 41.0011,
      height: 61
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 39,
      coverageRadius: 17,
      dataRate: 540,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2021-04-15',
      mission: 'Urban Communication',
      power: 5400,
      mass: 250
    },
    connections: ['BS-028', 'BS-030', 'BS-029', 'BS-021', 'BS-022']
  },
  {
    id: 'BS-030',
    name: 'Yakuplu Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 28.6111,
      latitude: 40.9783,
      height: 53
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 31,
      coverageRadius: 12,
      dataRate: 380,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2019-07-22',
      mission: 'Traffic Monitoring',
      power: 3800,
      mass: 185
    },
    connections: ['BS-029', 'BS-021', 'BS-030', 'BS-022', 'BS-028']
  },
  {
    id: 'BS-031',
    name: 'Ümraniye Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.1222,
      latitude: 41.0211,
      height: 86
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 51,
      coverageRadius: 22,
      dataRate: 780,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2022-07-05',
      mission: 'Urban Communication',
      power: 7800,
      mass: 355
    },
    connections: ['BS-018', 'BS-013', 'BS-032', 'BS-031', 'BS-017', 'BS-054', 'BS-055']
  },
  {
    id: 'BS-032',
    name: 'Çamlıca Baz İstasyonu',
    type: 'navigation',
    position: {
      longitude: 29.0656,
      latitude: 41.0250,
      height: 130
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 62,
      coverageRadius: 29,
      dataRate: 1100,
      frequency: '1.57542'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2021-12-18',
      mission: 'GPS Relay',
      power: 11000,
      mass: 480
    },
    connections: ['BS-031', 'BS-004', 'BS-033', 'BS-032', 'BS-002', 'BS-018']
  },
  {
    id: 'BS-033',
    name: 'Fenerbahçe Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.0406,
      latitude: 40.9756,
      height: 48
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 37,
      coverageRadius: 15,
      dataRate: 490,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2020-06-28',
      mission: 'Coastal Communication',
      power: 4900,
      mass: 228
    },
    connections: ['BS-032', 'BS-002', 'BS-034', 'BS-033', 'BS-051', 'BS-052']
  },
  {
    id: 'BS-034',
    name: 'Bostancı Sahil Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 29.1100,
      latitude: 40.9500,
      height: 42
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 29,
      coverageRadius: 12,
      dataRate: 360,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2019-05-12',
      mission: 'Coastal Monitoring',
      power: 3600,
      mass: 175
    },
    connections: ['BS-033', 'BS-015', 'BS-035', 'BS-034', 'BS-053', 'BS-054', 'BS-055']
  },
  {
    id: 'BS-035',
    name: 'Dragos Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.1356,
      latitude: 40.9333,
      height: 58
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
      dataRate: 510,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2021-10-09',
      mission: 'Coastal Communication',
      power: 5100,
      mass: 235
    },
    connections: ['BS-034', 'BS-009', 'BS-035', 'BS-053', 'BS-054', 'BS-055']
  },
  {
    id: 'BS-036',
    name: 'Kağıthane Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9778,
      latitude: 41.0744,
      height: 77
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 45,
      coverageRadius: 19,
      dataRate: 660,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2021-11-30',
      mission: 'Urban Communication',
      power: 6600,
      mass: 295
    },
    connections: ['BS-003', 'BS-037', 'BS-036', 'BS-038', 'BS-001', 'BS-024']
  },
  {
    id: 'BS-037',
    name: 'Şişli Merkez Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9856,
      latitude: 41.0606,
      height: 98
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 53,
      coverageRadius: 24,
      dataRate: 820,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2022-04-22',
      mission: 'Urban Communication',
      power: 8200,
      mass: 370
    },
    connections: ['BS-036', 'BS-003', 'BS-038', 'BS-037', 'BS-039', 'BS-001']
  },
  {
    id: 'BS-038',
    name: 'Mecidiyeköy Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 28.9933,
      latitude: 41.0689,
      height: 112
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 56,
      coverageRadius: 25,
      dataRate: 880,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2022-09-10',
      mission: 'Traffic Monitoring',
      power: 8800,
      mass: 395
    },
    connections: ['BS-037', 'BS-039', 'BS-038', 'BS-036', 'BS-003', 'BS-024']
  },
  {
    id: 'BS-039',
    name: 'Levent Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.0111,
      latitude: 41.0811,
      height: 125
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 61,
      coverageRadius: 28,
      dataRate: 980,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2022-10-15',
      mission: 'Business District Communication',
      power: 9800,
      mass: 440
    },
    connections: ['BS-038', 'BS-040', 'BS-001', 'BS-039', 'BS-037', 'BS-042']
  },
  {
    id: 'BS-040',
    name: 'Etiler Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.0233,
      latitude: 41.0922,
      height: 89
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 48,
      coverageRadius: 20,
      dataRate: 710,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2021-12-05',
      mission: 'Urban Communication',
      power: 7100,
      mass: 325
    },
    connections: ['BS-039', 'BS-041', 'BS-040', 'BS-042', 'BS-016']
  },
  {
    id: 'BS-041',
    name: 'Bebek Baz İstasyonu',
    type: 'navigation',
    position: {
      longitude: 29.0433,
      latitude: 41.0789,
      height: 46
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
      dataRate: 470,
      frequency: '1.57542'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2020-05-20',
      mission: 'GPS Relay',
      power: 4700,
      mass: 220
    },
    connections: ['BS-040', 'BS-016', 'BS-041', 'BS-039', 'BS-007']
  },
  {
    id: 'BS-042',
    name: 'Ortaköy Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.0244,
      latitude: 41.0478,
      height: 38
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
      dataRate: 430,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2019-08-14',
      mission: 'Coastal Communication',
      power: 4300,
      mass: 205
    },
    connections: ['BS-001', 'BS-043', 'BS-042', 'BS-039', 'BS-040']
  },
  {
    id: 'BS-043',
    name: 'Karaköy Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9767,
      latitude: 41.0222,
      height: 52
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 39,
      coverageRadius: 17,
      dataRate: 530,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2020-10-12',
      mission: 'Port Communication',
      power: 5300,
      mass: 245
    },
    connections: ['BS-042', 'BS-005', 'BS-044', 'BS-043', 'BS-014', 'BS-045']
  },
  {
    id: 'BS-044',
    name: 'Eminönü Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 28.9711,
      latitude: 41.0167,
      height: 33
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 30,
      coverageRadius: 12,
      dataRate: 370,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2018-12-18',
      mission: 'Historical District Monitoring',
      power: 3700,
      mass: 180
    },
    connections: ['BS-043', 'BS-014', 'BS-044', 'BS-045', 'BS-046']
  },
  {
    id: 'BS-045',
    name: 'Sultanahmet Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9744,
      latitude: 41.0083,
      height: 28
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 26,
      coverageRadius: 11,
      dataRate: 340,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2018-07-25',
      mission: 'Tourist Area Communication',
      power: 3400,
      mass: 165
    },
    connections: ['BS-044', 'BS-046', 'BS-045', 'BS-014', 'BS-010']
  },
  {
    id: 'BS-046',
    name: 'Aksaray Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9511,
      latitude: 41.0067,
      height: 41
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 36,
      coverageRadius: 15,
      dataRate: 450,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2019-03-08',
      mission: 'Urban Communication',
      power: 4500,
      mass: 215
    },
    connections: ['BS-045', 'BS-014', 'BS-047', 'BS-046', 'BS-044', 'BS-048']
  },
  {
    id: 'BS-047',
    name: 'Laleli Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9567,
      latitude: 41.0111,
      height: 49
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
      dataRate: 500,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2020-01-15',
      mission: 'Urban Communication',
      power: 5000,
      mass: 235
    },
    connections: ['BS-046', 'BS-048', 'BS-047', 'BS-045', 'BS-049']
  },
  {
    id: 'BS-048',
    name: 'Vatan Caddesi Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 28.9433,
      latitude: 41.0133,
      height: 57
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 41,
      coverageRadius: 18,
      dataRate: 580,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2021-02-28',
      mission: 'Traffic Monitoring',
      power: 5800,
      mass: 270
    },
    connections: ['BS-047', 'BS-049', 'BS-048', 'BS-046', 'BS-050']
  },
  {
    id: 'BS-049',
    name: 'Topkapı Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9233,
      latitude: 41.0206,
      height: 64
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 44,
      coverageRadius: 19,
      dataRate: 630,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2021-05-25',
      mission: 'Urban Communication',
      power: 6300,
      mass: 285
    },
    connections: ['BS-048', 'BS-050', 'BS-010', 'BS-049', 'BS-047', 'BS-014']
  },
  {
    id: 'BS-050',
    name: 'Yedikule Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 28.9100,
      latitude: 41.0056,
      height: 71
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 46,
      coverageRadius: 20,
      dataRate: 670,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2021-08-12',
      mission: 'Urban Communication',
      power: 6700,
      mass: 300
    },
    connections: ['BS-049', 'BS-006', 'BS-050', 'BS-048', 'BS-010']
  },
  {
    id: 'BS-051',
    name: 'Kadıköy Moda Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.0300,
      latitude: 40.9800,
      height: 44
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 33,
      coverageRadius: 13,
      dataRate: 400,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2019-11-05',
      mission: 'Coastal Communication',
      power: 4000,
      mass: 190
    },
    connections: ['BS-002', 'BS-052', 'BS-051', 'BS-033', 'BS-034']
  },
  {
    id: 'BS-052',
    name: 'Fenerbahçe Park Baz İstasyonu',
    type: 'observation',
    position: {
      longitude: 29.0456,
      latitude: 40.9700,
      height: 39
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 28,
      coverageRadius: 11,
      dataRate: 350,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2018-09-30',
      mission: 'Park Monitoring',
      power: 3500,
      mass: 170
    },
    connections: ['BS-051', 'BS-033', 'BS-052', 'BS-002', 'BS-034']
  },
  {
    id: 'BS-053',
    name: 'Kozyatağı Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.1000,
      latitude: 40.9656,
      height: 83
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
      dataRate: 760,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Vodafone',
      launchDate: '2022-03-18',
      mission: 'Urban Communication',
      power: 7600,
      mass: 345
    },
    connections: ['BS-015', 'BS-034', 'BS-054', 'BS-055', 'BS-035'],
    alert: {
      faultRisk: 55,
      alertStatus: 'warning',
      recommendedAction: 'Önleyici bakım önerilir - Yakın zamanda kontrol edilmeli'
    }
  },
  {
    id: 'BS-054',
    name: 'Ataşehir Merkez Baz İstasyonu',
    type: 'communication',
    position: {
      longitude: 29.1234,
      latitude: 40.9876,
      height: 96
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 54,
      coverageRadius: 24,
      dataRate: 840,
      frequency: '2.4-2.5'
    },
    metadata: {
      operator: 'Turkcell',
      launchDate: '2022-06-05',
      mission: 'Business District Communication',
      power: 8400,
      mass: 380
    },
    connections: ['BS-053', 'BS-013', 'BS-055', 'BS-054', 'BS-031', 'BS-009']
  },
  {
    id: 'BS-055',
    name: 'Küçükyalı Baz İstasyonu',
    type: 'navigation',
    position: {
      longitude: 29.0900,
      latitude: 40.9300,
      height: 59
    },
    orbit: {
      altitude: 0,
      inclination: 0,
      period: 0
    },
    status: 'active',
    capabilities: {
      communicationRange: 37,
      coverageRadius: 15,
      dataRate: 480,
      frequency: '1.57542'
    },
    metadata: {
      operator: 'Türk Telekom',
      launchDate: '2020-07-22',
      mission: 'GPS Relay',
      power: 4800,
      mass: 225
    },
    connections: ['BS-054', 'BS-035', 'BS-053', 'BS-009', 'BS-034']
  }
]
