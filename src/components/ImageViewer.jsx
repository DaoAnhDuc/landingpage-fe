import React, { useState, useEffect } from 'react'

export default function ImageViewer({ src }) {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setSize({ width: img.width, height: img.height })
    }
  }, [src])

  return (
    <div className="max-w-full flex flex-col items-center p-1" style={{border: '1px solid #dfdfdf'}}>
      <img src={src} alt="Preview" className="max-w-full max-h-[80vh] object-contain shadow-lg rounded" />
      <p className="mt-2 text-sm text-gray-600">
        Kích thước: {size.width} x {size.height} px
      </p>
    </div>
  )
}
