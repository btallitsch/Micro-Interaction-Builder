export default function CodeOutput({config}){
  return (
<pre className="text-xs bg-zinc-900 p-4 rounded">
{`<motion.button
  whileHover={{
    scale:${config.scale},
    rotate:${config.rotate}
  }}
  transition={{duration:${config.duration}}}
/>`}
</pre>
  )
}
