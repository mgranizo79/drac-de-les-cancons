import { EscudoSantJordi } from './arte/figuras'
import { despertarAudio, sonarRayo, sonarValentia } from '../audio/sonidos'

interface PropsLuca {
  valentia: [boolean, boolean, boolean]
  onGastar: (indice: number) => void
  onVerDetalle: () => void
}

export function FichaLuca({ valentia, onGastar, onVerDetalle }: PropsLuca) {
  const gastar = (i: number) => {
    despertarAudio()
    if (!valentia[i]) sonarValentia()
    onGastar(i)
  }

  return (
    <article className="ficha ficha--luca">
      <header className="ficha__cabecera">
        <h2 className="ficha__nombre">SIR LUCA</h2>
        <p className="ficha__clase">Caballero Pirata</p>
      </header>

      <div className="ficha__cuerpo">
        <button
          type="button"
          className="ficha__retrato"
          onClick={onVerDetalle}
          aria-label="Ver la ficha de Sir Luca en grande"
        >
          <img className="ficha__figura" src="/imagenes/luca.jpg" alt="Sir Luca, caballero pirata" />
          <span className="ficha__lupa" aria-hidden="true">
            +
          </span>
        </button>
        <div className="ficha__escudo">
          <EscudoSantJordi />
          <p className="ficha__poder">¡NADA LO ATRAVIESA!</p>
        </div>
      </div>

      <div className="valentia">
        <p className="valentia__titulo">MIS FICHAS DE VALENTÍA</p>
        <div className="valentia__fichas">
          {valentia.map((gastada, i) => (
            <button
              key={i}
              type="button"
              className={gastada ? 'valentia__ficha valentia__ficha--gastada' : 'valentia__ficha'}
              onClick={() => gastar(i)}
              aria-label={`Ficha de Valentía ${i + 1}${gastada ? ' (gastada)' : ''}`}
            >
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <path d="M50,12 l11,27 29,2 -22,19 7,29 -25,-16 -25,16 7,-29 -22,-19 29,-2 Z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

interface PropsPaula {
  gritoUsado: boolean
  onGrito: () => void
  onVerDetalle: () => void
}

export function FichaPaula({ gritoUsado, onGrito, onVerDetalle }: PropsPaula) {
  return (
    <article className="ficha ficha--paula">
      <header className="ficha__cabecera">
        <h2 className="ficha__nombre">PAULA</h2>
        <p className="ficha__clase">Cazadragones de la Luna</p>
      </header>

      <div className="ficha__cuerpo">
        <button
          type="button"
          className="ficha__retrato"
          onClick={onVerDetalle}
          aria-label="Ver la ficha de Paula en grande"
        >
          <img
            className="ficha__figura"
            src="/imagenes/paula.jpg"
            alt="Paula, cazadragones de la Luna"
          />
          <span className="ficha__lupa" aria-hidden="true">
            +
          </span>
        </button>
        <div className="ficha__poderes">
          {/* El Rayo no se gasta: es su ataque. El botón está para hacer el
              gesto y que suene, igual que Luca da un espadazo al aire. */}
          <button
            type="button"
            className="rayo"
            onClick={() => {
              despertarAudio()
              sonarRayo()
            }}
          >
            <span className="rayo__icono" aria-hidden="true">
              ✦
            </span>
            <span className="rayo__titulo">EL RAYO DE LUNA</span>
          </button>
          <button
            type="button"
            className={gritoUsado ? 'grito grito--usado' : 'grito'}
            onClick={() => {
              despertarAudio()
              onGrito()
            }}
          >
            <span className="grito__titulo">EL GRITO DE PLATA</span>
            <span className="grito__estado">{gritoUsado ? 'ya usado hoy' : 'disponible'}</span>
          </button>
        </div>
      </div>
    </article>
  )
}
