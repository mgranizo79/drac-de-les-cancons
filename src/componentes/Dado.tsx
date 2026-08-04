import { useEffect, useRef, useState } from 'react'
import { despertarAudio, sonarExito, sonarFallo, sonarTirada } from '../audio/sonidos'

const DURACION_MS = 1150

/** Posiciones de los puntos en una rejilla 3x3: [columna, fila]. */
const PUNTOS: Record<number, Array<[number, number]>> = {
  1: [[1, 1]],
  2: [
    [0, 0],
    [2, 2],
  ],
  3: [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  4: [
    [0, 0],
    [2, 0],
    [0, 2],
    [2, 2],
  ],
  5: [
    [0, 0],
    [2, 0],
    [1, 1],
    [0, 2],
    [2, 2],
  ],
  6: [
    [0, 0],
    [2, 0],
    [0, 1],
    [2, 1],
    [0, 2],
    [2, 2],
  ],
}

const COORD = [78, 150, 222]

function tirada(): number {
  return 1 + Math.floor(Math.random() * 6)
}

export function Dado() {
  const [cara, setCara] = useState(6)
  const [rodando, setRodando] = useState(false)
  const [resultado, setResultado] = useState<number | null>(null)
  const intervalo = useRef<number | null>(null)
  const temporizador = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (intervalo.current !== null) window.clearInterval(intervalo.current)
      if (temporizador.current !== null) window.clearTimeout(temporizador.current)
    }
  }, [])

  const tirar = () => {
    if (rodando) return
    despertarAudio()
    setRodando(true)
    setResultado(null)
    sonarTirada(DURACION_MS)

    intervalo.current = window.setInterval(() => setCara(tirada()), 85)

    temporizador.current = window.setTimeout(() => {
      if (intervalo.current !== null) window.clearInterval(intervalo.current)
      const n = tirada()
      setCara(n)
      setResultado(n)
      setRodando(false)
      if (n >= 4) sonarExito()
      else sonarFallo()
    }, DURACION_MS)
  }

  const bien = resultado !== null && resultado >= 4
  const mal = resultado !== null && resultado < 4

  const clases = ['dado']
  if (rodando) clases.push('dado--rodando')
  if (bien) clases.push('dado--bien')
  if (mal) clases.push('dado--mal')

  return (
    <div className="zona-dado">
      <button
        type="button"
        className={clases.join(' ')}
        onClick={tirar}
        aria-label="Tirar el dado"
        disabled={rodando}
      >
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="dado__cara">
          <rect x="10" y="10" width="280" height="280" rx="52" className="dado__cuerpo" />
          {PUNTOS[cara].map(([c, f], i) => (
            <circle key={i} cx={COORD[c]} cy={COORD[f]} r="27" className="dado__punto" />
          ))}
        </svg>
      </button>

      <div className="dado__mensaje" aria-live="polite">
        {resultado === null && !rodando && <span className="dado__pista">Toca el dado</span>}
        {rodando && <span className="dado__pista">…</span>}
        {bien && <span className="dado__bien">¡SALE BIEN!</span>}
        {mal && <span className="dado__mal">Pasa otra cosa…</span>}
      </div>
    </div>
  )
}
