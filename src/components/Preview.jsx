import React from 'react'
import { motion } from 'framer-motion'
import CodeOutput from './CodeOutput'

export default function Preview({ settings }) {
  return (
    <div style={{ marginLeft: 50 }}>
      <h3>Preview</h3>

      <motion.button
        whileHover={{ scale: settings.scale }}
        transition={{ duration: settings.duration }}
        style={{ padding: '10px 20px' }}
      >
        Hover Me
      </motion.button>

      <CodeOutput settings={settings} />
    </div>
  )
}
