import { personajes } from '../datos/campana'
import type { IdPersonaje } from '../datos/tipos'
import { despertarAudio, sonarPersonaje } from '../audio/sonidos'

interface Props {
  encontrados: IdPersonaje[]
  onTocar: (id: IdPersonaje) => void
}

// Misma idea que el mapa: todos empiezan tapados con una interrogación y
// se destapan cuando un dedo los toca. Volver a tocarlos los vuelve a tapar,
// por si alguien se adelanta sin querer.

export function GaleriaPersonajes({ encontrados, onTocar }: Props) {
  const tocar = (id: IdPersonaje, visto: boolean) => {
    despertarAudio()
    if (!visto) sonarPersonaje()
    onTocar(id)
  }

  return (
    <div className="galeria">
      {personajes.map((p) => {
        const visto = encontrados.includes(p.id)
        return (
          <button
            key={p.id}
            type="button"
            className={visto ? 'personaje personaje--visto' : 'personaje'}
            onClick={() => tocar(p.id, visto)}
            aria-label={visto ? p.nombre : 'Personaje todavía no descubierto'}
          >
            {visto ? (
              <>
                <img className="personaje__imagen" src={p.imagen} alt="" />
                <span className="personaje__nombre">{p.nombre}</span>
                <span className="personaje__detalle">{p.detalle}</span>
              </>
            ) : (
              <span className="personaje__tapado" aria-hidden="true">
                ?
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
