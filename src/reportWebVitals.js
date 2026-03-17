const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFCP, onFID, onINP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onFCP(onPerfEntry)
      onFID(onPerfEntry)
      onINP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals

