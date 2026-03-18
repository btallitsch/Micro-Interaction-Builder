import { useState, useEffect } from 'react'

const presets = {
  snappy: { scale: 1.1, rotate: 0, duration: 0.2 },
  elastic: { scale: 1.2, rotate: 5, duration: 0.6 },
  subtle: { scale: 1.05, rotate: 0, duration: 0.3 }
}

export default function useAnimation() {
  const [config, setConfig] = useState(() => {
    const saved = localStorage.getItem("anim")
    return saved ? JSON.parse(saved) : { scale:1.1, rotate:0, duration:0.3 }
  })

  useEffect(()=>{
    localStorage.setItem("anim", JSON.stringify(config))
  },[config])

  const update = (k,v)=>setConfig(p=>({...p,[k]:v}))
  const applyPreset = (name)=>setConfig(presets[name])

  return { config, update, applyPreset }
}
