export default function CodeOutput({ config }) {
  const code = `<motion.button
  whileHover={{
    scale: ${config.scale},
    rotate: ${config.rotate}
  }}
  transition={{
    duration: ${config.duration},
    ease: "${config.ease}"
  }}
>
  Hover Me
</motion.button>`

  return (
    <pre className="bg-zinc-800 p-4 rounded-xl text-sm w-[500px] overflow-x-auto">
      {code}
    </pre>
  )
}
