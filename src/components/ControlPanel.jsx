import React from 'react'

export default function ControlPanel({ settings, updateSetting }) {
  return (
    <div style={{ width: 300 }}>
      <h3>Controls</h3>

      <label>Scale</label>
      <input
        type="range"
        min="1"
        max="2"
        step="0.1"
        value={settings.scale}
        onChange={(e) => updateSetting('scale', parseFloat(e.target.value))}
      />

      <label>Duration</label>
      <input
        type="range"
        min="0.1"
        max="1"
        step="0.1"
        value={settings.duration}
        onChange={(e) => updateSetting('duration', parseFloat(e.target.value))}
      />
    </div>
  )
}
