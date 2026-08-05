import { useMemo } from 'react'
import { personajesDelBando, personajesPresentables } from '../datos/campana'
import type { Bando, ControlDM, IdPersonaje, Personaje } from '../datos/tipos'
import { despertarAudio, sonarPersonaje } from '../audio/sonidos'

interface Props {
  encontrados: IdPersonaje[]
  /** Marca por dónde va la partida: cada carta se abre al llegar su episodio. */
  cancionesRescatadas: number
  /** Lo que el DM haya forzado a mano desde el panel oculto. */
  control: ControlDM
  onTocar: (id: IdPersonaje) => void
  onVerDetalle: (id: IdPersonaje) => void
}

const GRUPOS: Array<{ bando: Bando; titulo: string; icono: string }> = [
  { bando: 'aliado', titulo: 'Los que nos ayudan', icono: '🤝' },
  { bando: 'enemigo', titulo: 'Los que van a por nosotros', icono: '⚔️' },
]

// Misma idea que el mapa: todos empiezan tapados con una interrogación y
// se destapan cuando un dedo los toca. Volver a tocarlos abre su ficha grande.
//
// Con una excepción importante: solo se pueden destapar los personajes cuyo
// episodio ya ha llegado (o los que el DM haya abierto a mano). Si el dragón
// se pudiera abrir el primer día, la niña le vería el color y se acabaría la
// deducción de qué tipo de dragón es.

export function GaleriaPersonajes({
  encontrados,
  cancionesRescatadas,
  control,
  onTocar,
  onVerDetalle,
}: Props) {
  const presentables = useMemo(
    () => personajesPresentables(cancionesRescatadas, control),
    [cancionesRescatadas, control],
  )

  const tocar = (id: IdPersonaje, visto: boolean) => {
    despertarAudio()
    if (visto) {
      onVerDetalle(id)
      return
    }
    sonarPersonaje()
    onTocar(id)
  }

  const carta = (p: Personaje) => {
    const sePuedeAbrir = presentables.includes(p.id)
    const visto = sePuedeAbrir && encontrados.includes(p.id)
    return (
      <button
        key={p.id}
        type="button"
        className={visto ? 'personaje personaje--visto' : 'personaje'}
        onClick={() => tocar(p.id, visto)}
        disabled={!sePuedeAbrir}
        aria-label={visto ? `Ver la ficha de ${p.nombre}` : 'Personaje todavía no descubierto'}
      >
        {visto ? (
          <>
            {/* La descripción no cabe aquí desde que son seis: se lee
                entera en la ficha grande, que se abre tocando la carta. */}
            <img className="personaje__imagen" src={p.imagen} alt="" />
            <span className="personaje__nombre">{p.nombre}</span>
            <span className="personaje__detalle">{p.detalle}</span>
            <span className="personaje__lupa" aria-hidden="true">
              +
            </span>
          </>
        ) : (
          <span className="personaje__tapado" aria-hidden="true">
            ?
          </span>
        )}
      </button>
    )
  }

  return (
    <div className="galeria">
      {GRUPOS.map((g) => (
        <section key={g.bando} className={`grupo grupo--${g.bando}`}>
          <h3 className="grupo__titulo">
            <span aria-hidden="true">{g.icono}</span> {g.titulo}
          </h3>
          <div className="grupo__cartas">{personajesDelBando(g.bando).map(carta)}</div>
        </section>
      ))}
    </div>
  )
}
