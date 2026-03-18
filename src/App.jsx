import React from 'react'
import ControlPanel from './components/ControlPanel'
import Preview from './components/Preview'
import useAnimation from './hooks/useAnimation'

export default function App() {
  const { settings, updateSetting } = useAnimation()

  return (
    <div style={{ display: 'flex', padding: 20 }}>
      <ControlPanel settings={settings} updateSetting={updateSetting} />
      <Preview settings={settings} />
    </div>
  )
}
