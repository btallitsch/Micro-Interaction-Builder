import { motion } from 'framer-motion'
import CodeOutput from './CodeOutput'

export default function Preview({ config }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-10">
      <motion.button
        whileHover={{
          scale: config.scale,
          rotate: config.rotate
        }}
        transition={{
          duration: config.duration,
          ease: config.ease
        }}
        className="px-6 py-3 bg-blue-600 rounded-2xl shadow-lg"
      >
        Hover Me
      </motion.button>

      <CodeOutput config={config} />
    </div>
  )
}
