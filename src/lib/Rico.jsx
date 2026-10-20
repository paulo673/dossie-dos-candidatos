// Converte **negrito** e *itálico* em <strong>/<em>; o resto é texto puro.
export default function Rico({ texto, as: Tag = 'span', className }) {
  if (texto == null) return null
  const partes = String(texto).split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g)
  return (
    <Tag className={className}>
      {partes.map((p, i) => {
        if (p.startsWith('**') && p.endsWith('**') && p.length > 4) return <strong key={i}>{p.slice(2, -2)}</strong>
        if (p.startsWith('*') && p.endsWith('*') && p.length > 2) return <em key={i}>{p.slice(1, -1)}</em>
        return p
      })}
    </Tag>
  )
}
