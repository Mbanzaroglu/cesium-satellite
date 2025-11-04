// Decision: Context wrapper (Cesium viewer component for local rendering)
import { useRef, useEffect } from 'react'
import React from 'react'
import { Viewer, Entity, EllipseGraphics, BillboardGraphics, PolylineGraphics } from 'resium'
import * as Cesium from 'cesium'
import { useSatelliteContext } from '../../context/SatelliteContext'
import { loadTowerIcon, loadAntennaIcon } from '../../utils/loadSvg'
import { CESIUM_ACCESS_TOKEN, ISTANBUL_CENTER } from '../../config/cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

// Cesium access token'ı ayarla
if (typeof window !== 'undefined') {
  (window as any).CESIUM_BASE_URL = '/node_modules/cesium/Build/Cesium/'
  Cesium.Ion.defaultAccessToken = CESIUM_ACCESS_TOKEN
}

const CesiumViewer: React.FC = () => {
  const { filteredSatellites, selectedSatellite, setSelectedSatellite, displayOptions } = useSatelliteContext()
  const viewerRef = useRef<Cesium.Viewer | null>(null)
  const initializedRef = useRef(false)
  const tiltModeEnabledRef = useRef(false) // Varsayılan olarak tilt modu kapalı
  const clickHandlerRef = useRef<Cesium.ScreenSpaceEventHandler | null>(null)
  // Her baz istasyonu için rastgele animasyon fazı (bağımsız parıldama için)
  const animationPhasesRef = useRef<Map<string, number>>(new Map())

  // Seçili baz istasyonu değiştiğinde console'a yazdır
  useEffect(() => {
    if (selectedSatellite) {
      console.log('Seçili Baz İstasyonu Detayları:', selectedSatellite)
    }
  }, [selectedSatellite])

  // Viewer hazır olduğunda çağrılacak callback
  const handleViewerReady = (viewer: Cesium.Viewer) => {
    if (viewerRef.current === viewer && initializedRef.current) return
    const wasInitialized = initializedRef.current
    viewerRef.current = viewer
    initializedRef.current = true

    // Imagery provider ekle (eğer yoksa)
    if (!viewer.imageryLayers.length) {
      Cesium.createWorldImageryAsync({
        style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS
      }).then((imageryProvider) => {
        viewer.imageryLayers.removeAll()
        viewer.imageryLayers.addImageryProvider(imageryProvider)
      }).catch((error) => {
        console.error('Imagery provider yüklenemedi:', error)
      })
    }

    // İstanbul'a odaklan (sadece ilk kez)
    if (!wasInitialized) {
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(
          ISTANBUL_CENTER.longitude,
          ISTANBUL_CENTER.latitude,
          ISTANBUL_CENTER.height
        )
      })
    }

    // Cesium Ion logosunu kaldır
    try {
      const cesiumWidget = (viewer as any)._cesiumWidget
      if (cesiumWidget && cesiumWidget._creditContainer) {
        cesiumWidget._creditContainer.style.display = 'none'
      }
    } catch (e) {
      // Credit container'a erişilemediyse sessizce geç
    }

    // Coverage area entity'lerini pickable false yap
    // Bu sayede tıklama event'leri ana entity'ye gidecek
    viewer.entities.collectionChanged.addEventListener(() => {
      viewer.entities.values.forEach(entity => {
        if (entity.id && typeof entity.id === 'string' && entity.id.includes('-coverage')) {
          // Coverage entity'yi pickable yapma
          ;(entity as any).allowPicking = false
        }
      })
    })

    // Camera controller ayarları
    const cameraController = viewer.scene.screenSpaceCameraController
    
    // Önceki click handler'ı temizle (eğer varsa)
    if (clickHandlerRef.current) {
      clickHandlerRef.current.destroy()
    }
    
    // Entity tıklamasında kamera zoom/tilt yapmasını tamamen engelle
    // ScreenSpaceEventHandler ile tıklama event'ini yakala ve entity seçimini manuel yap
    const clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
    clickHandlerRef.current = clickHandler
    clickHandler.setInputAction((click: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
      // Drill pick kullan - tüm tıklanan objeleri al
      const pickedObjects = viewer.scene.drillPick(click.position)
      let pickedEntity: Cesium.Entity | null = null
      
      // Coverage area ve anten entity'lerini atla, sadece ana baz istasyonu entity'sini seç
      for (const picked of pickedObjects) {
        if (picked.id) {
          const entityId = picked.id.id as string
          // Coverage area ve anten entity'lerini atla
          if (entityId && !entityId.includes('-coverage') && !entityId.includes('-antenna')) {
            // Ana baz istasyonu entity'sini bul
            pickedEntity = picked.id as Cesium.Entity
            break
          }
        }
      }
      
      // Eğer direkt entity bulunamadıysa, filteredSatellites'teki ID'leri kontrol et
      if (!pickedEntity) {
        // Tüm picked objects'te satellite ID'lerini ara
        for (const picked of pickedObjects) {
          if (picked.id) {
            const entityId = picked.id.id as string
            if (entityId && filteredSatellites.some(s => s.id === entityId)) {
              pickedEntity = picked.id as Cesium.Entity
              break
            }
          }
        }
      }
      
      if (pickedEntity && pickedEntity.id) {
        const entityId = pickedEntity.id as string
        const satellite = filteredSatellites.find(s => s.id === entityId)
        if (satellite) {
          // Entity'yi seç - InfoBox otomatik olarak açılacak
          viewer.selectedEntity = pickedEntity
          setSelectedSatellite(satellite)
          
          // InfoBox'ın görünür olduğundan emin ol
          if (viewer.infoBox && viewer.infoBox.viewModel) {
            viewer.infoBox.viewModel.showInfo = true
          }
          
          // Kamera pozisyonunu ve açısını koru (zoom yapma, tilt yapma)
          const currentPosition = viewer.camera.position.clone()
          const currentHeading = viewer.camera.heading
          const currentPitch = tiltModeEnabledRef.current ? viewer.camera.pitch : -Cesium.Math.PI_OVER_TWO
          const currentRoll = viewer.camera.roll
          
          // Kamerayı aynı pozisyonda tut
          setTimeout(() => {
            viewer.camera.setView({
              destination: currentPosition,
              orientation: {
                heading: currentHeading,
                pitch: currentPitch,
                roll: currentRoll
              }
            })
          }, 0)
        }
      } else {
        // Boş alana tıklandı - seçimi temizle
        viewer.selectedEntity = undefined
        setSelectedSatellite(null)
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

    // Varsayılan olarak tilt modu kapalı (dünyaya paralel hareket)
    if (!wasInitialized) {
      tiltModeEnabledRef.current = false
      cameraController.enableTilt = false
    }
    
    // Tilt modu toggle fonksiyonu - window'a ekle
    if (typeof window !== 'undefined') {
      // Tilt modu toggle fonksiyonu - her zaman viewerRef.current kullan
      (window as any).toggleTiltMode = () => {
        // Her seferinde viewerRef'ten al, böylece güncel viewer'ı kullanır
        const currentViewer = viewerRef.current
        if (!currentViewer) {
          console.error('❌ Viewer bulunamadı! Viewer hazır olmayabilir.')
          return false
        }
        
        // Tilt durumunu değiştir
        tiltModeEnabledRef.current = !tiltModeEnabledRef.current
        const newTiltState = tiltModeEnabledRef.current
        
        // Camera controller'ı güncelle
        currentViewer.scene.screenSpaceCameraController.enableTilt = newTiltState
        
        console.log('🔄 Tilt modu değiştirildi:', newTiltState ? 'AÇIK ✅' : 'KAPALI ❌')
        
        // Event dispatch et - UI bileşenini güncellemek için
        window.dispatchEvent(new CustomEvent('tiltModeChanged', { 
          detail: { enabled: newTiltState } 
        }))
        
        // Eğer tilt kapalıysa, kamerayı dünyaya paralel yap
        if (!newTiltState) {
          const currentHeading = currentViewer.camera.heading
          const currentPosition = currentViewer.camera.position.clone()
          currentViewer.camera.setView({
            destination: currentPosition,
            orientation: {
              heading: currentHeading,
              pitch: -Cesium.Math.PI_OVER_TWO,
              roll: 0.0
            }
          })
        }
        
        return newTiltState
      }
      
      // Tilt modu durumunu getiren fonksiyon
      (window as any).getTiltMode = () => {
        return tiltModeEnabledRef.current
      }
      
      console.log('✅ Tilt toggle fonksiyonları window\'a eklendi')
      
      // İlk yüklemede dünyaya paralel bakış
      if (!wasInitialized) {
        setTimeout(() => {
          const currentPosition = viewer.camera.position.clone()
          const currentHeading = viewer.camera.heading
          viewer.camera.setView({
            destination: currentPosition,
            orientation: {
              heading: currentHeading,
              pitch: -Cesium.Math.PI_OVER_TWO,
              roll: 0.0
            }
          })
        }, 100)
      }
    }
  }

  // Event listener handleViewerReady içinde closure ile filteredSatellites'e erişiyor
  // Ancak filteredSatellites değiştiğinde eski closure'lar eski değeri kullanır
  // Bu sorunu çözmek için event listener'ı useCallback ile sarmalayıp güncel değerleri kullanabiliriz
  // Şimdilik basit çözüm: handleViewerReady her çağrıldığında yeni listener ekleniyor
  // (Cesium'da duplicate listener'lar sorun yaratmaz, ama performans için optimize edilebilir)

  // Seçili baz istasyonunun bağlantılarını hesapla
  // Önce connections array'ine bak, yoksa communicationRange'e göre hesapla
  const getConnections = () => {
    if (!selectedSatellite) {
      return []
    }

    const connections: Array<{ from: typeof selectedSatellite; to: typeof filteredSatellites[0] }> = []

    // Manuel olarak tanımlanmış bağlantılar varsa onları kullan
    if (selectedSatellite.connections && selectedSatellite.connections.length > 0) {
      selectedSatellite.connections.forEach(connectedId => {
        const connectedStation = filteredSatellites.find(s => s.id === connectedId)
        if (connectedStation) {
          connections.push({
            from: selectedSatellite,
            to: connectedStation
          })
        }
      })
    } else {
      // Manuel bağlantı yoksa, communicationRange'e göre hesapla
      filteredSatellites.forEach(station => {
        if (station.id === selectedSatellite.id) return // Kendisiyle bağlantı yok

        // İki baz istasyonu arasındaki mesafeyi hesapla
        const pos1 = Cesium.Cartesian3.fromDegrees(
          selectedSatellite.position.longitude,
          selectedSatellite.position.latitude,
          selectedSatellite.position.height
        )
        const pos2 = Cesium.Cartesian3.fromDegrees(
          station.position.longitude,
          station.position.latitude,
          station.position.height
        )
        const distance = Cesium.Cartesian3.distance(pos1, pos2) / 1000 // km cinsinden

        // İki baz istasyonunun da communicationRange'i içinde mi kontrol et
        const inRange1 = distance <= selectedSatellite.capabilities.communicationRange
        const inRange2 = distance <= station.capabilities.communicationRange

        if (inRange1 && inRange2) {
          connections.push({
            from: selectedSatellite,
            to: station
          })
        }
      })
    }

    return connections
  }

  const connections = getConnections()
  const towerIcon = loadTowerIcon() // Sabit kule/platform
  const antennaIcon = loadAntennaIcon() // Animasyonlu mavi anten
  
  // Bağlantılı istasyon ID'lerini topla
  const connectedStationIds = new Set<string>()
  connections.forEach(conn => {
    connectedStationIds.add(conn.to.id)
  })

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Viewer
        ref={(v) => {
          if (v && v.cesiumElement) {
            handleViewerReady(v.cesiumElement)
          }
        }}
        fullscreenButton={true}
        vrButton={false}
        animation={false}
        timeline={false}
        baseLayerPicker={true}
        geocoder={true}
        homeButton={true}
        infoBox={true}
        navigationHelpButton={true}
        sceneModePicker={true}
        selectionIndicator={true}
        shouldAnimate={false}
      >
        {/* Baz istasyonlarını göster */}
        {filteredSatellites.map(satellite => {
          const isSelected = selectedSatellite?.id === satellite.id
          const isConnected = connectedStationIds.has(satellite.id) && !isSelected
          
          // Her baz istasyonu için rastgele animasyon fazı oluştur (bağımsız parıldama için)
          if (!animationPhasesRef.current.has(satellite.id)) {
            animationPhasesRef.current.set(satellite.id, Math.random() * Math.PI * 2)
          }
          const phase = animationPhasesRef.current.get(satellite.id) || 0
          
          // Sabit kule için scale (animasyon yok)
          const towerScale = isSelected ? 2.25 : (isConnected ? 1.8 : 1.5)
          
          // Anten için sadece scale animasyonu (glimpse efekti - olduğu yerde büyüyüp küçülme)
          const antennaAnimatedScale = new Cesium.CallbackProperty(() => {
            if (!viewerRef.current) {
              const baseScale = isSelected ? 2.25 : (isConnected ? 1.8 : 1.5)
              return baseScale
            }
            
            // Zaman bazlı scale animasyonu (glimpse efekti - olduğu yerde büyüyüp küçülme)
            // Daha belirgin pulse için genlik artırıldı (0.15 -> 0.25)
            const time = (Date.now() / 1000) % 2
            const pulse = Math.sin((time * Math.PI) + phase) * 0.25 + 0.75 // 0.5 - 1.0 arası (daha belirgin)
            const baseScale = isSelected ? 2.25 : (isConnected ? 1.8 : 1.5)
            
            return baseScale * pulse
          }, false)

          // Alert bilgisi için varsayılan değerler
          const alertInfo = satellite.alert || {
            faultRisk: 0,
            alertStatus: 'good' as const,
            recommendedAction: 'Herhangi bir aksiyon gerekmiyor'
          }

          // Alert durumu için renkler
          const alertStatusColors = {
            critical: '#F44336',
            warning: '#FF9800',
            normal: '#4CAF50',
            good: '#2196F3'
          }

          const alertStatusLabels = {
            critical: 'Critical',
            warning: 'Warning',
            normal: 'Normal',
            good: 'Good'
          }

          const statusColors = {
            active: '#4CAF50',
            standby: '#FF9800',
            maintenance: '#F44336'
          }

          const typeLabels = {
            communication: 'İletişim',
            observation: 'Gözlem',
            navigation: 'Navigasyon',
            scientific: 'Bilimsel'
          }

          // Detaylı HTML description oluştur - displayOptions'a göre
          const sections: string[] = []

          // AI Uyarı Bölümü
          if (displayOptions.showAlert) {
            sections.push(`
              <div style="background: #34495E; padding: 16px; border-radius: 6px; margin-bottom: 16px; border-left: 4px solid ${alertStatusColors[alertInfo.alertStatus]};">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                  <span style="font-size: 18px;">⚠️</span>
                  <span style="color: #ffffff; font-size: 16px; font-weight: 600;">AI Uyarısı</span>
                </div>
                <div style="color: #ffffff;">
                  <div style="margin-bottom: 8px;">
                    <span style="color: #BDC3C7;">Site:</span>
                    <span style="margin-left: 8px; font-weight: 600;">${satellite.name}</span>
                  </div>
                  <div style="margin-bottom: 8px;">
                    <span style="color: #BDC3C7;">Arıza Riski:</span>
                    <span style="margin-left: 8px; color: #FF9800; font-weight: 600; font-size: 16px;">${alertInfo.faultRisk}%</span>
                  </div>
                  <div style="margin-bottom: 8px;">
                    <span style="color: #BDC3C7;">Durum:</span>
                    <span style="margin-left: 8px; color: ${alertStatusColors[alertInfo.alertStatus]}; font-weight: 700; font-size: 16px;">${alertStatusLabels[alertInfo.alertStatus]}</span>
                  </div>
                  <div>
                    <span style="color: #BDC3C7;">Önerilen Aksiyon:</span>
                    <span style="margin-left: 8px; color: #E74C3C; font-weight: 500;">${alertInfo.recommendedAction}</span>
                  </div>
                </div>
              </div>
            `)
          }

          // Genel Bilgiler
          if (displayOptions.showGeneralInfo) {
            sections.push(`
              <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                <h3 style="margin: 0 0 12px 0; color: #555; font-size: 16px; font-weight: 600;">Genel Bilgiler</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">ID:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.id}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Tip:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${typeLabels[satellite.type]}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Operatör:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.metadata.operator}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Görev:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.metadata.mission}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Durum:</td>
                    <td style="padding: 6px 0; color: ${statusColors[satellite.status]}; font-weight: 600; text-align: right;">
                      ${satellite.status === 'active' ? 'Aktif' : satellite.status === 'standby' ? 'Beklemede' : 'Bakımda'}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Fırlatma Tarihi:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.metadata.launchDate}</td>
                  </tr>
                </table>
              </div>
            `)
          }

          // Pozisyon
          if (displayOptions.showPosition) {
            sections.push(`
              <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                <h3 style="margin: 0 0 12px 0; color: #555; font-size: 16px; font-weight: 600;">Pozisyon</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Boylam:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.position.longitude.toFixed(4)}°</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Enlem:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.position.latitude.toFixed(4)}°</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Yükseklik:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.position.height} m</td>
                  </tr>
                </table>
              </div>
            `)
          }

          // Yetenekler
          if (displayOptions.showCapabilities) {
            sections.push(`
              <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                <h3 style="margin: 0 0 12px 0; color: #555; font-size: 16px; font-weight: 600;">Yetenekler</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">İletişim Menzili:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.capabilities.communicationRange} km</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Kapsama Yarıçapı:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.capabilities.coverageRadius} km</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Veri Hızı:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.capabilities.dataRate} Mbps</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Frekans:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.capabilities.frequency} GHz</td>
                  </tr>
                </table>
              </div>
            `)
          }

          // Teknik Özellikler
          if (displayOptions.showTechnicalSpecs) {
            sections.push(`
              <div style="background: #f8f9fa; padding: 12px; border-radius: 6px;">
                <h3 style="margin: 0 0 12px 0; color: #555; font-size: 16px; font-weight: 600;">Teknik Özellikler</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Güç:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.metadata.power} W</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666; font-weight: 500;">Kütle:</td>
                    <td style="padding: 6px 0; color: #333; font-weight: 600; text-align: right;">${satellite.metadata.mass} kg</td>
                  </tr>
                </table>
              </div>
            `)
          }

          // Eğer hiçbir bölüm seçilmemişse varsayılan mesaj
          const descriptionHTML = sections.length > 0
            ? `<div style="font-family: Arial, sans-serif; color: #333; max-width: 500px;">${sections.join('')}</div>`
            : `<div style="font-family: Arial, sans-serif; color: #666; max-width: 500px; padding: 20px; text-align: center;"><p>No information sections are enabled. Please select at least one section in the Display Options panel.</p></div>`

          return (
            <React.Fragment key={satellite.id}>
              {/* Ana baz istasyonu entity - tıklanabilir */}
              <Entity
                id={satellite.id}
                name={satellite.name}
                position={Cesium.Cartesian3.fromDegrees(
                  satellite.position.longitude,
                  satellite.position.latitude,
                  satellite.position.height
                )}
                description={descriptionHTML}
              >
                {/* Sabit kule/platform - animasyon yok, anten ışığına göre hizalanmış */}
                <BillboardGraphics
                  image={towerIcon}
                  scale={towerScale}
                  verticalOrigin={Cesium.VerticalOrigin.CENTER}
                  horizontalOrigin={Cesium.HorizontalOrigin.CENTER}
                  pixelOffset={new Cesium.Cartesian2(0, 10)}
                  color={Cesium.Color.WHITE.withAlpha(1.0)}
                  heightReference={Cesium.HeightReference.RELATIVE_TO_GROUND}
                  disableDepthTestDistance={Number.POSITIVE_INFINITY}
                />
              </Entity>
              
              {/* Animasyonlu mavi anten kısmı - sadece bu parıldayacak (olduğu yerde scale up/down) */}
              <Entity
                id={`${satellite.id}-antenna`}
                position={Cesium.Cartesian3.fromDegrees(
                  satellite.position.longitude,
                  satellite.position.latitude,
                  satellite.position.height
                )}
              >
                <BillboardGraphics
                  image={antennaIcon}
                  scale={antennaAnimatedScale}
                  verticalOrigin={Cesium.VerticalOrigin.CENTER}
                  horizontalOrigin={Cesium.HorizontalOrigin.CENTER}
                  pixelOffset={new Cesium.Cartesian2(0, 0)}
                  color={Cesium.Color.WHITE.withAlpha(1.0)}
                  heightReference={Cesium.HeightReference.RELATIVE_TO_GROUND}
                  disableDepthTestDistance={Number.POSITIVE_INFINITY}
                />
              </Entity>

              {/* Etki alanı circle - ayrı entity (tıklama event'leri drillPick ile filtrelenir) */}
              {isSelected && (
                <Entity
                  id={`${satellite.id}-coverage`}
                  position={Cesium.Cartesian3.fromDegrees(
                    satellite.position.longitude,
                    satellite.position.latitude,
                    0
                  )}
                  show={true}
                >
                  <EllipseGraphics
                    semiMajorAxis={satellite.capabilities.coverageRadius * 1000} // km'den metreye
                    semiMinorAxis={satellite.capabilities.coverageRadius * 1000}
                    material={Cesium.Color.BLUE.withAlpha(0.15)} // Daha şeffaf
                    outline={true}
                    outlineColor={Cesium.Color.BLUE.withAlpha(0.5)} // Daha şeffaf outline
                    outlineWidth={1.5} // Daha ince
                    height={0}
                  />
                </Entity>
              )}
            </React.Fragment>
          )
        })}

        {/* Bağlantı çizgileri (sadece seçili baz istasyonu için) */}
        {connections.map((connection, index) => (
          <Entity
            key={`connection-${connection.from.id}-${connection.to.id}-${index}`}
          >
            <PolylineGraphics
              positions={Cesium.Cartesian3.fromDegreesArrayHeights([
                connection.from.position.longitude,
                connection.from.position.latitude,
                connection.from.position.height,
                connection.to.position.longitude,
                connection.to.position.latitude,
                connection.to.position.height
              ])}
              width={2}
              material={Cesium.Color.YELLOW.withAlpha(0.8)}
              clampToGround={false}
              arcType={Cesium.ArcType.NONE}
            />
          </Entity>
        ))}
      </Viewer>
    </div>
  )
}

export default CesiumViewer

