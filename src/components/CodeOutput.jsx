import React from 'react'

export default function CodeOutput({ settings }) {
  const code = `
<motion.button
  whileHover={{ scale: ${settings.scale} }}
  transition={{ duration: ${settings.duration} }}
>
  Hover Me
</motion.button>
`

  return (
    <pre style={{ marginTop: 20, background: '#eee', padding: 10 }}>
      {code}
    </pre>
  )
}
