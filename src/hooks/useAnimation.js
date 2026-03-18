import { useState } from 'react'

export default function useAnimation() {
  const [settings, setSettings] = useState({
    scale: 1.1,
    duration: 0.3
  })

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return { settings, updateSetting }
}
