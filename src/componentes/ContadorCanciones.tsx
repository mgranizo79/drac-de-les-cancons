import { useRef } from 'react'
import { canciones } from '../datos/campana'
import { despertarAudio, sonarCancion } from '../audio/sonidos'

interface Props {
  rescatadas: number
  onEncender: (numero: number) => void
  /** Dedo 1,5 s sobre el título: abre el panel del DM. Ningún niño lo hace sin querer. */
  onPulsacionLarga: () => void
}

const MS_PULSACION_LARGA = 1500

export function ContadorCanciones({ rescatadas, onEncender, onPulsacionLarga }: Props) {
  const temporizador = useRef<number | null>(null)

  const empezar = () => {
    temporizador.current = window.setTimeout(onPulsacionLarga, MS_PULSACION_LARGA)
  }
  const cancelar = () => {
    if (temporizador.current !== null) {
      window.clearTimeout(temporizador.current)
      temporizador.current = null
    }
  }

  return (
    <div className="canciones">
      <span
        className="canciones__titulo"
        onPointerDown={empezar}
        onPointerUp={cancelar}
        onPointerLeave={cancelar}
        onPointerCancel={cancelar}
      >
        LAS CINCO CANCIONES
      </span>
      <div className="canciones__lista">
        {canciones.map((c) => {
          const encendida = c.numero <= rescatadas
          return (
            <button
              key={c.numero}
              type="button"
              className={encendida ? 'cancion cancion--encendida' : 'cancion'}
              onClick={() => {
                despertarAudio()
                if (!encendida) sonarCancion(c.numero)
                onEncender(c.numero)
              }}
              aria-label={`Canción ${c.numero}: ${c.nombre}`}
            >
              <span className="cancion__nota" aria-hidden="true">
                ♪
              </span>
              <span className="cancion__nombre">{c.nombre}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
