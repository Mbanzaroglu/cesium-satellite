# Uydu Görüntüleme Arayüzü

React ve CesiumJS kullanılarak geliştirilmiş tek sayfalık uydu görselleştirme uygulaması.

## Özellikler

- 🛰️ 20 örnek uydu datası (İstanbul ve çevresi)
- 🗺️ CesiumJS ile 3D harita görüntüleme
- 🔍 Uydu filtreleme ve arama
- 📊 Detaylı uydu bilgileri popup ekranı
- 🔗 Uydu bağlantı çizgileri (seçili uydu için)
- ⭕ Etki alanı görselleştirmesi (coverage radius)
- 🎨 Modüler ve bakımı kolay kod yapısı

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

## Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── CesiumViewer/   # Cesium harita görüntüleyici
│   ├── SatelliteDetail/ # Uydu detay ekranı
│   └── SatelliteFilters/ # Filtre ve arama bileşenleri
├── context/            # React Context yapısı
│   └── SatelliteContext.tsx
├── data/               # Veri dosyaları
│   └── satellites.ts   # 20 örnek uydu datası
├── assets/             # SVG asset dosyaları
│   ├── satellite.svg
│   ├── antenna.svg
│   └── solar-panel.svg
├── config/             # Yapılandırma dosyaları
│   └── cesium.ts       # CesiumJS access token
├── types/              # TypeScript tip tanımları
│   └── satellite.ts
└── utils/              # Yardımcı fonksiyonlar
    ├── loadSvg.ts
    └── svgToDataUrl.ts
```

## Kullanım

1. Uyduları harita üzerinde görüntüleyin
2. Bir uyduya tıklayarak detaylarını görüntüleyin
3. Filtreleme ve arama ile uyduları filtreleyin
4. Seçili uydunun bağlantılarını görüntüleyin

## Teknolojiler

- React 18
- TypeScript
- CesiumJS
- Resium (CesiumJS React wrapper)
- Vite

## Notlar

- CesiumJS access token proje içinde yapılandırılmıştır
- Uydu pozisyonları statik olarak tanımlanmıştır
- Bağlantı çizgileri sadece seçili uydu için gösterilir

