import { useEffect } from 'react'
import type { Heroe, Personaje, Poder } from '../datos/tipos'

/** Forma común: los héroes y los personajes se enseñan igual en grande. */
export interface Detalle {
  nombre: string
  subtitulo: string
  imagen: string
  texto: string
  poderes: Poder[]
  enCombate: string
  color: 'rojo' | 'azul' | 'neutro'
  /** Solo para los personajes: permite volver a taparlos. */
  onTapar?: () => void
}

export function detalleDeHeroe(h: Heroe): Detalle {
  return {
    nombre: h.nombre,
    subtitulo: h.clase,
    imagen: h.imagen,
    texto: h.quienEs,
    poderes: h.poderes,
    enCombate: h.enCombate,
    color: h.id === 'luca' ? 'rojo' : 'azul',
  }
}

export function detalleDePersonaje(p: Personaje, onTapar?: () => void): Detalle {
  return {
    nombre: p.nombre,
    subtitulo: p.detalle,
    imagen: p.imagen,
    texto: p.descripcion,
    poderes: [],
    enCombate: p.enCombate,
    color: 'neutro',
    onTapar,
  }
}

interface Props {
  detalle: Detalle | null
  onCerrar: () => void
}

export function FichaDetalle({ detalle, onCerrar }: Props) {
  useEffect(() => {
    if (!detalle) return
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCerrar()
    }
    window.addEventListener('keydown', alPulsar)
    return () => window.removeEventListener('keydown', alPulsar)
  }, [detalle, onCerrar])

  if (!detalle) return null

  return (
    // Tocar fuera cierra. El div de fondo no necesita rol: el botón de cerrar
    // de dentro es el control accesible de verdad.
    <div className="detalle-fondo" onClick={onCerrar}>
      <div
        className={`detalle detalle--${detalle.color}`}
        role="dialog"
        aria-modal="true"
        aria-label={detalle.nombre}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="detalle__cerrar" onClick={onCerrar} aria-label="Cerrar">
          ✕
        </button>

        <div className="detalle__retrato">
          <img src={detalle.imagen} alt="" />
        </div>

        <div className="detalle__texto">
          <h2 className="detalle__nombre">{detalle.nombre}</h2>
          <p className="detalle__subtitulo">{detalle.subtitulo}</p>
          <p className="detalle__quien">{detalle.texto}</p>

          {detalle.poderes.length > 0 && (
            <ul className="detalle__poderes">
              {detalle.poderes.map((p, i) => (
                <li key={i}>
                  <span className="detalle__poder-nombre">{p.nombre}</span>
                  {p.usos && <span className="detalle__usos">{p.usos}</span>}
                  <span className="detalle__poder-efecto">{p.efecto}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="detalle__combate">
            <strong>Si hay pelea:</strong> {detalle.enCombate}
          </p>

          {detalle.onTapar && (
            <button
              type="button"
              className="detalle__tapar"
              onClick={() => {
                detalle.onTapar?.()
                onCerrar()
              }}
            >
              Volver a taparlo
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
