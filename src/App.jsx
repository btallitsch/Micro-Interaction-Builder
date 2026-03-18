import { useState } from 'react'
import ControlPanel from './components/ControlPanel'
import Preview from './components/Preview'
import CodeOutput from './components/CodeOutput'
import useAnimation from './hooks/useAnimation'

export default function App(){
  const { config, update, applyPreset } = useAnimation()
  const [tab,setTab]=useState("controls")

  return (
    <div className="flex h-screen">
      <div className="w-80 border-r border-zinc-800 p-4 space-y-4">
        <h1 className="text-xl font-bold">Micro Interaction Studio</h1>

        <div className="flex gap-2">
          <button onClick={()=>setTab("controls")}>Controls</button>
          <button onClick={()=>setTab("presets")}>Presets</button>
          <button onClick={()=>setTab("code")}>Code</button>
        </div>

        {tab==="controls" && <ControlPanel config={config} update={update}/>}
        {tab==="presets" && (
          <div className="space-y-2">
            <button onClick={()=>applyPreset("snappy")}>Snappy</button>
            <button onClick={()=>applyPreset("elastic")}>Elastic</button>
            <button onClick={()=>applyPreset("subtle")}>Subtle</button>
          </div>
        )}
        {tab==="code" && <CodeOutput config={config}/>}
      </div>

      <Preview config={config}/>
    </div>
  )
}
