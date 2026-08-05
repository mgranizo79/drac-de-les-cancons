import { useEffect } from 'react'
import { personajes, personajesPresentables } from '../datos/campana'
import type { ControlDM, IdPersonaje } from '../datos/tipos'

/**
 * El panel de control del DM, escondido dentro de /mesa.
 *
 * Va aquí y no en la pantalla del portátil porque no hay backend: los dos
 * dispositivos no se hablan. Como en la mesa estáis todos juntos, con estirar
 * el brazo se consigue lo mismo.
 *
 * Se abre dejando el dedo 1,5 segundos sobre el título de las canciones, que
 * es un gesto que ningún niño hace por casualidad.
 */

interface Props {
  abierto: boolean
  cancionesRescatadas: number
  control: ControlDM
  onControlar: (id: IdPersonaje, visible: boolean | undefined) => void
  onCerrar: () => void
}

export function PanelDM({ abierto, cancionesRescatadas, control, onControlar, onCerrar }: Props) {
  useEffect(() => {
    if (!abierto) return
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCerrar()
    }
    window.addEventListener('keydown', alPulsar)
    return () => window.removeEventListener('keydown', alPulsar)
  }, [abierto, onCerrar])

  if (!abierto) return null

  // Sin nada forzado a mano: qué se vería solo por las canciones que llevan.
  const automaticos = personajesPresentables(cancionesRescatadas, {})

  return (
    <div className="dm-fondo" onClick={onCerrar}>
      <div
        className="dm-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Control del DM"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="dm-panel__cabecera">
          <h2>Control del DM</h2>
          <button type="button" className="dm-panel__cerrar" onClick={onCerrar} aria-label="Cerrar">
            ✕
          </button>
        </header>

        <p className="dm-panel__ayuda">
          Por defecto cada carta se abre sola al llegar su episodio. Aquí puedes adelantarla o
          taparla a mano. Llevan <strong>{cancionesRescatadas} de 5</strong> canciones.
        </p>

        <ul className="dm-panel__lista">
          {personajes.map((p) => {
            const auto = automaticos.includes(p.id)
            const forzado = control[p.id]
            const estado = forzado === undefined ? (auto ? 'auto-visible' : 'auto-oculto') : forzado ? 'forzado-visible' : 'forzado-oculto'
            return (
              <li key={p.id} className="dm-fila">
                <span className="dm-fila__nombre">
                  {p.nombre}
                  <span className={`dm-fila__bando dm-fila__bando--${p.bando}`}>
                    {p.bando === 'aliado' ? 'amigo' : 'enemigo'}
                  </span>
                </span>

                <span className={`dm-fila__estado dm-fila__estado--${estado}`}>
                  {estado === 'auto-visible' && 'se ve'}
                  {estado === 'auto-oculto' && `tapado hasta ${p.requiereCanciones ?? 0} canciones`}
                  {estado === 'forzado-visible' && 'abierto a mano'}
                  {estado === 'forzado-oculto' && 'tapado a mano'}
                </span>

                <span className="dm-fila__botones">
                  <button
                    type="button"
                    className={forzado === true ? 'dm-boton dm-boton--activo' : 'dm-boton'}
                    onClick={() => onControlar(p.id, true)}
                  >
                    Mostrar
                  </button>
                  <button
                    type="button"
                    className={forzado === false ? 'dm-boton dm-boton--activo' : 'dm-boton'}
                    onClick={() => onControlar(p.id, false)}
                  >
                    Tapar
                  </button>
                  <button
                    type="button"
                    className="dm-boton dm-boton--suave"
                    onClick={() => onControlar(p.id, undefined)}
                    disabled={forzado === undefined}
                  >
                    Auto
                  </button>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
