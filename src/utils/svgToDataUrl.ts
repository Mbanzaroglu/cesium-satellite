// SVG'yi data URL'e çeviren yardımcı fonksiyon
export const svgToDataUrl = (svgContent: string): string => {
  const encoded = encodeURIComponent(svgContent)
  return `data:image/svg+xml,${encoded}`
}

