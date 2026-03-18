export default function ControlPanel({config,update}){
  return (
    <div className="space-y-4">
      <div>
        <label>Scale</label>
        <input type="range" min="1" max="2" step="0.1"
        value={config.scale}
        onChange={e=>update('scale',parseFloat(e.target.value))}/>
      </div>
      <div>
        <label>Rotate</label>
        <input type="range" min="-45" max="45"
        value={config.rotate}
        onChange={e=>update('rotate',parseFloat(e.target.value))}/>
      </div>
      <div>
        <label>Duration</label>
        <input type="range" min="0.1" max="1" step="0.1"
        value={config.duration}
        onChange={e=>update('duration',parseFloat(e.target.value))}/>
      </div>
    </div>
  )
}
