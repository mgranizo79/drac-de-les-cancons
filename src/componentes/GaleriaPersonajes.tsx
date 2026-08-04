import { useMemo } from 'react'
import { personajes, personajesPresentables } from '../datos/campana'
import type { IdPersonaje } from '../datos/tipos'
import { despertarAudio, sonarPersonaje } from '../audio/sonidos'

interface Props {
  encontrados: IdPersonaje[]
  onTocar: (id: IdPersonaje) => void
}

// Misma idea que el mapa: todos empiezan tapados con una interrogación y
// se destapan cuando un dedo los toca. Volver a tocarlos los vuelve a tapar,
// por si alguien se adelanta sin querer.
//
// Con una excepción importante: solo se pueden destapar los personajes que
// alguna escena ya escrita presenta. El dragón no lo presenta ninguna, así
// que su carta no se abre por mucho que la toquen. Si se abriera, la niña le
// vería el color y se acabaría la deducción de qué tipo de dragón es.

export function GaleriaPersonajes({ encontrados, onTocar }: Props) {
  const presentables = useMemo(() => personajesPresentables(), [])

  const tocar = (id: IdPersonaje, visto: boolean) => {
    despertarAudio()
    if (!visto) sonarPersonaje()
    onTocar(id)
  }

  return (
    <div className="galeria">
      {personajes.map((p) => {
        const sePuedeAbrir = presentables.includes(p.id)
        const visto = sePuedeAbrir && encontrados.includes(p.id)
        return (
          <button
            key={p.id}
            type="button"
            className={visto ? 'personaje personaje--visto' : 'personaje'}
            onClick={() => tocar(p.id, visto)}
            disabled={!sePuedeAbrir}
            aria-label={visto ? p.nombre : 'Personaje todavía no descubierto'}
          >
            {visto ? (
              <>
                <img className="personaje__imagen" src={p.imagen} alt="" />
                <span className="personaje__nombre">{p.nombre}</span>
                <span className="personaje__detalle">{p.detalle}</span>
                <span className="personaje__descripcion">{p.descripcion}</span>
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
