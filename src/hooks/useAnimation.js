import { useState } from 'react'

export default function useAnimation() {
  const [config, setConfig] = useState({
    scale: 1.1,
    rotate: 0,
    duration: 0.3,
    ease: "easeOut"
  })

  const update = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }))
  }

  return { config, update }
}
