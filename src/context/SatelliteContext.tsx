// Decision: Context wrapper (local subtree state for satellite selection and filtering)
import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react'
import { Satellite } from '../types/satellite'

export interface DisplayOptions {
  showAlert: boolean
  showGeneralInfo: boolean
  showPosition: boolean
  showCapabilities: boolean
  showTechnicalSpecs: boolean
}

interface SatelliteContextType {
  satellites: Satellite[]
  selectedSatellite: Satellite | null
  setSelectedSatellite: (satellite: Satellite | null) => void
  filteredSatellites: Satellite[]
  filters: {
    type: Satellite['type'][]
    status: string[]
    searchQuery: string
  }
  setFilters: (filters: {
    type: Satellite['type'][]
    status: string[]
    searchQuery: string
  }) => void
  displayOptions: DisplayOptions
  setDisplayOptions: (options: DisplayOptions | ((prev: DisplayOptions) => DisplayOptions)) => void
}

const SatelliteContext = createContext<SatelliteContextType | undefined>(undefined)

export const useSatelliteContext = () => {
  const context = useContext(SatelliteContext)
  if (!context) {
    throw new Error('useSatelliteContext must be used within SatelliteProvider')
  }
  return context
}

interface SatelliteProviderProps {
  children: ReactNode
  initialSatellites: Satellite[]
}

export const SatelliteProvider: React.FC<SatelliteProviderProps> = ({
  children,
  initialSatellites
}) => {
  const [satellites] = useState<Satellite[]>(initialSatellites)
  const [selectedSatellite, setSelectedSatellite] = useState<Satellite | null>(null)
  
  // Tüm benzersiz tipleri al
  const allTypes = useMemo(() => {
    const types = Array.from(new Set(initialSatellites.map(s => s.type)))
    return types as Satellite['type'][]
  }, [initialSatellites])
  
  const [filters, setFilters] = useState<{
    type: Satellite['type'][]
    status: string[]
    searchQuery: string
  }>({
    type: allTypes, // Varsayılan olarak tüm tipler seçili
    status: [],
    searchQuery: ''
  })

  // InfoBox'ta gösterilecek bilgileri kontrol eden state
  const [displayOptions, setDisplayOptions] = useState<DisplayOptions>({
    showAlert: true,
    showGeneralInfo: true,
    showPosition: true,
    showCapabilities: true,
    showTechnicalSpecs: true
  })

  // Filtreleme mantığı
  const filteredSatellites = useMemo(() => {
    return satellites.filter(satellite => {
      // Tip filtresi
      if (filters.type.length > 0 && !filters.type.includes(satellite.type)) {
        return false
      }

      // Durum filtresi
      if (filters.status.length > 0 && !filters.status.includes(satellite.status)) {
        return false
      }

      // Arama sorgusu
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase()
        const matchesName = satellite.name.toLowerCase().includes(query)
        const matchesId = satellite.id.toLowerCase().includes(query)
        const matchesOperator = satellite.metadata.operator.toLowerCase().includes(query)
        const matchesMission = satellite.metadata.mission.toLowerCase().includes(query)

        if (!matchesName && !matchesId && !matchesOperator && !matchesMission) {
          return false
        }
      }

      return true
    })
  }, [satellites, filters])

  const value = useMemo(
    () => ({
      satellites,
      selectedSatellite,
      setSelectedSatellite,
      filteredSatellites,
      filters,
      setFilters,
      displayOptions,
      setDisplayOptions
    }),
    [satellites, selectedSatellite, filteredSatellites, filters, displayOptions]
  )

  return (
    <SatelliteContext.Provider value={value}>
      {children}
    </SatelliteContext.Provider>
  )
}

