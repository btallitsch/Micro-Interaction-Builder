import ControlPanel from './components/ControlPanel'
import Preview from './components/Preview'
import useAnimation from './hooks/useAnimation'

export default function App() {
  const { config, update } = useAnimation()

  return (
    <div className="flex h-screen">
      <ControlPanel config={config} update={update} />
      <Preview config={config} />
    </div>
  )
}
