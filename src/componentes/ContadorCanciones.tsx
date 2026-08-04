import { canciones } from '../datos/campana'
import { despertarAudio, sonarCancion } from '../audio/sonidos'

interface Props {
  rescatadas: number
  onEncender: (numero: number) => void
}

export function ContadorCanciones({ rescatadas, onEncender }: Props) {
  return (
    <div className="canciones">
      <span className="canciones__titulo">LAS CINCO CANCIONES</span>
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
