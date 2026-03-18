import { motion } from 'framer-motion'

export default function Preview({config}){
  return (
    <div className="flex-1 flex items-center justify-center">
      <motion.button
        whileHover={{scale:config.scale, rotate:config.rotate}}
        transition={{duration:config.duration}}
        className="px-6 py-3 bg-indigo-600 rounded-xl shadow-lg"
      >
        Hover Me
      </motion.button>
    </div>
  )
}
