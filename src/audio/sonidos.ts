// Sonidos generados con Web Audio: ni un fichero de audio que descargar,
// ni un permiso que pedir. Funciona sin conexión.
//
// En iPad el AudioContext solo arranca dentro de un gesto del usuario:
// por eso todo esto se dispara desde el onClick del dado.

type ContextoAudio = AudioContext | null

let ctx: ContextoAudio = null

function contexto(): ContextoAudio {
  if (typeof window === 'undefined') return null
  try {
    if (!ctx) {
      const Constructor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!Constructor) return null
      ctx = new Constructor()
    }
    if (ctx.state === 'suspended') void ctx.resume()
    return ctx
  } catch {
    return null
  }
}

/** Llamar desde un gesto del usuario para desbloquear el audio en iOS. */
export function despertarAudio(): void {
  contexto()
}

function nota(
  frecuencia: number,
  desde: number,
  duracion: number,
  tipo: OscillatorType = 'triangle',
  volumen = 0.2,
): void {
  const c = contexto()
  if (!c) return
  const osc = c.createOscillator()
  const gan = c.createGain()
  osc.type = tipo
  osc.frequency.setValueAtTime(frecuencia, desde)
  gan.gain.setValueAtTime(0.0001, desde)
  gan.gain.exponentialRampToValueAtTime(volumen, desde + 0.02)
  gan.gain.exponentialRampToValueAtTime(0.0001, desde + duracion)
  osc.connect(gan)
  gan.connect(c.destination)
  osc.start(desde)
  osc.stop(desde + duracion + 0.05)
}

/** Un golpe seco de dado contra la mesa. */
function golpe(desde: number, volumen = 0.3): void {
  const c = contexto()
  if (!c) return
  const duracion = 0.07
  const muestras = Math.max(1, Math.floor(c.sampleRate * duracion))
  const buffer = c.createBuffer(1, muestras, c.sampleRate)
  const datos = buffer.getChannelData(0)
  for (let i = 0; i < muestras; i++) {
    const caida = Math.pow(1 - i / muestras, 4)
    datos[i] = (Math.random() * 2 - 1) * caida
  }
  const fuente = c.createBufferSource()
  fuente.buffer = buffer
  const filtro = c.createBiquadFilter()
  filtro.type = 'bandpass'
  filtro.frequency.value = 900 + Math.random() * 1100
  filtro.Q.value = 1.2
  const gan = c.createGain()
  gan.gain.value = volumen
  fuente.connect(filtro)
  filtro.connect(gan)
  gan.connect(c.destination)
  fuente.start(desde)
}

/** El dado rodando: golpes cada vez más espaciados, como cuando pierde fuerza. */
export function sonarTirada(duracionMs: number): void {
  const c = contexto()
  if (!c) return
  const t0 = c.currentTime
  const total = duracionMs / 1000
  let t = 0
  let hueco = 0.055
  while (t < total) {
    golpe(t0 + t, 0.34 - (t / total) * 0.18)
    t += hueco
    hueco *= 1.16
  }
}

/** 4, 5 o 6: arpegio alegre hacia arriba. */
export function sonarExito(): void {
  const c = contexto()
  if (!c) return
  const t = c.currentTime
  nota(523.25, t, 0.16) // do
  nota(659.25, t + 0.1, 0.16) // mi
  nota(783.99, t + 0.2, 0.34) // sol
  nota(1046.5, t + 0.3, 0.42, 'sine', 0.14) // do agudo
}

/** 1, 2 o 3: no es un fracaso, solo "pasa otra cosa". Dos notas cortas hacia abajo. */
export function sonarFallo(): void {
  const c = contexto()
  if (!c) return
  const t = c.currentTime
  nota(392.0, t, 0.16, 'triangle', 0.18) // sol
  nota(311.13, t + 0.13, 0.3, 'triangle', 0.16) // mi bemol
}

/** Ruido filtrado que barre de una frecuencia a otra: el mar y el viento. */
function soplo(
  desde: number,
  duracion: number,
  opciones: { desdeHz: number; hastaHz: number; q?: number; volumen?: number },
): void {
  const c = contexto()
  if (!c) return
  const muestras = Math.max(1, Math.floor(c.sampleRate * duracion))
  const buffer = c.createBuffer(1, muestras, c.sampleRate)
  const datos = buffer.getChannelData(0)
  for (let i = 0; i < muestras; i++) datos[i] = Math.random() * 2 - 1
  const fuente = c.createBufferSource()
  fuente.buffer = buffer
  const filtro = c.createBiquadFilter()
  filtro.type = 'bandpass'
  filtro.Q.value = opciones.q ?? 3
  filtro.frequency.setValueAtTime(opciones.desdeHz, desde)
  filtro.frequency.exponentialRampToValueAtTime(opciones.hastaHz, desde + duracion)
  const gan = c.createGain()
  const volumen = opciones.volumen ?? 0.18
  gan.gain.setValueAtTime(0.0001, desde)
  gan.gain.exponentialRampToValueAtTime(volumen, desde + duracion * 0.3)
  gan.gain.exponentialRampToValueAtTime(0.0001, desde + duracion)
  fuente.connect(filtro)
  filtro.connect(gan)
  gan.connect(c.destination)
  fuente.start(desde)
  fuente.stop(desde + duracion)
}

/** Nota que se desliza de una frecuencia a otra: los trinos de los pájaros. */
function deslizar(desdeHz: number, hastaHz: number, desde: number, duracion: number, volumen = 0.15): void {
  const c = contexto()
  if (!c) return
  const osc = c.createOscillator()
  const gan = c.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(desdeHz, desde)
  osc.frequency.exponentialRampToValueAtTime(hastaHz, desde + duracion)
  gan.gain.setValueAtTime(0.0001, desde)
  gan.gain.exponentialRampToValueAtTime(volumen, desde + duracion * 0.25)
  gan.gain.exponentialRampToValueAtTime(0.0001, desde + duracion)
  osc.connect(gan)
  gan.connect(c.destination)
  osc.start(desde)
  osc.stop(desde + duracion + 0.05)
}

// ─────────────────────────────────────────────────────────────
//  LAS CINCO CANCIONES
//
//  La primera versión de esto eran efectos de sonido: ruido filtrado para el
//  viento, glissandos para los pájaros. Sonaban a efecto, no a canción que
//  vuelve a la isla, que es lo que son en la historia.
//
//  Ahora son melodías de verdad: notas de una escala, con bajo debajo y un
//  eco que les da sitio. Siguen generándose en el navegador, así que no hay
//  ni un fichero de audio que descargar.
// ─────────────────────────────────────────────────────────────

/** Las notas que se usan, por nombre, para que las melodías se lean. */
const N = {
  do3: 130.81, fa3: 174.61, sol3: 196.0, la3: 220.0,
  do4: 261.63, re4: 293.66, mi4: 329.63, fa4: 349.23, sol4: 392.0, la4: 440.0, si4: 493.88,
  do5: 523.25, re5: 587.33, mi5: 659.25, fa5: 698.46, sol5: 783.99, la5: 880.0, si5: 987.77,
  do6: 1046.5,
}

/** [nota, cuándo empieza, cuánto dura, volumen opcional] */
type Nota = [number, number, number, number?]

/** Eco corto: es lo que hace que cuatro notas sueltas suenen a música. */
function crearEco(c: AudioContext): DelayNode {
  const retardo = c.createDelay(1)
  retardo.delayTime.value = 0.26
  const realimentacion = c.createGain()
  realimentacion.gain.value = 0.28
  const filtro = c.createBiquadFilter()
  filtro.type = 'lowpass'
  filtro.frequency.value = 2200
  const salida = c.createGain()
  salida.gain.value = 0.5
  retardo.connect(realimentacion)
  realimentacion.connect(filtro)
  filtro.connect(retardo)
  retardo.connect(salida)
  salida.connect(c.destination)
  return retardo
}

/** Una nota con envolvente de caja de música: ataque suave y cola larga. */
function voz(
  c: AudioContext,
  eco: DelayNode,
  hz: number,
  desde: number,
  duracion: number,
  volumen: number,
  tipo: OscillatorType,
): void {
  const osc = c.createOscillator()
  const gan = c.createGain()
  osc.type = tipo
  osc.frequency.value = hz
  gan.gain.setValueAtTime(0.0001, desde)
  gan.gain.exponentialRampToValueAtTime(volumen, desde + 0.035)
  gan.gain.exponentialRampToValueAtTime(0.0001, desde + duracion)
  osc.connect(gan)
  gan.connect(c.destination)
  gan.connect(eco)
  osc.start(desde)
  osc.stop(desde + duracion + 0.05)
}

function tocar(
  melodia: Nota[],
  bajo: Nota[],
  volumenMelodia = 0.15,
  tipoMelodia: OscillatorType = 'triangle',
): void {
  const c = contexto()
  if (!c) return
  const t = c.currentTime
  const eco = crearEco(c)
  melodia.forEach(([hz, cuando, dura, vol]) =>
    voz(c, eco, hz, t + cuando, dura, vol ?? volumenMelodia, tipoMelodia),
  )
  // El bajo no va al eco: enturbiaría la mezcla.
  bajo.forEach(([hz, cuando, dura, vol]) => nota(hz, t + cuando, dura, 'sine', vol ?? 0.1))
}

const CANCIONES: Record<number, () => void> = {
  // 1 · DEL MAR — sube y baja como una ola, sin prisa. Do mayor.
  1: () =>
    tocar(
      [
        [N.sol4, 0, 0.55], [N.la4, 0.3, 0.55], [N.do5, 0.6, 0.7],
        [N.la4, 1.0, 0.55], [N.sol4, 1.3, 0.55], [N.mi4, 1.6, 0.6],
        [N.do4, 1.95, 1.3],
      ],
      [[N.do3, 0, 2.4, 0.1], [N.sol3, 1.2, 1.7, 0.08]],
    ),

  // 2 · DEL VIENTO — escala pentatónica que sube y se escapa. Ligera y rápida.
  2: () =>
    tocar(
      [
        [N.do5, 0, 0.3], [N.re5, 0.16, 0.3], [N.mi5, 0.32, 0.3],
        [N.sol5, 0.48, 0.32], [N.la5, 0.64, 0.36], [N.do6, 0.82, 0.9],
        [N.sol5, 1.05, 0.7, 0.09],
      ],
      [[N.sol3, 0, 1.6, 0.07]],
    ),

  // 3 · DE LOS PÁJAROS — saltos agudos y alegres, como quien no para quieto.
  3: () =>
    tocar(
      [
        [N.sol5, 0, 0.22], [N.do6, 0.13, 0.22], [N.si5, 0.26, 0.22],
        [N.sol5, 0.39, 0.26], [N.la5, 0.56, 0.22], [N.do6, 0.69, 0.24],
        [N.mi5, 0.85, 0.6],
      ],
      [[N.do4, 0, 1.2, 0.06]],
      0.13,
    ),

  // 4 · DE LA GENTE — cuatro acordes, como un coro entrando por voces.
  4: () => {
    const acorde = (notas: number[], cuando: number, dura: number): Nota[] =>
      notas.map((hz, i) => [hz, cuando + i * 0.05, dura, 0.09] as Nota)
    tocar(
      [
        ...acorde([N.do4, N.mi4, N.sol4], 0, 1.0),
        ...acorde([N.fa4, N.la4, N.do5], 0.7, 1.0),
        ...acorde([N.sol4, N.si4, N.re5], 1.4, 1.0),
        ...acorde([N.do5, N.mi5, N.sol5], 2.1, 1.6),
      ],
      [
        [N.do3, 0, 0.8, 0.1], [N.fa3, 0.7, 0.8, 0.1],
        [N.sol3, 1.4, 0.8, 0.1], [N.do3, 2.1, 1.6, 0.1],
      ],
    )
  },

  // 5 · DEL CORAZÓN — empieza en menor, se pone triste y acaba resolviendo
  //     en mayor. Es la que le regalan a ella: tenía que sonar a eso.
  5: () =>
    tocar(
      [
        [N.la4, 0, 0.55], [N.do5, 0.35, 0.55], [N.mi5, 0.7, 0.65],
        [N.re5, 1.1, 0.55], [N.do5, 1.45, 0.75],
        [N.la4, 1.9, 0.5], [N.sol4, 2.2, 0.5],
        [N.do5, 2.5, 1.6], [N.mi5, 2.62, 1.5, 0.1],
      ],
      [
        [N.la3, 0, 1.0, 0.1], [N.fa3, 1.0, 0.9, 0.1],
        [N.sol3, 1.9, 0.6, 0.1], [N.do3, 2.5, 1.8, 0.11],
      ],
    ),
}

/** Una canción vuelve a la isla. Cada número tiene su melodía. */
export function sonarCancion(numero: number): void {
  const c = contexto()
  if (!c) return
  ;(CANCIONES[numero] ?? CANCIONES[1])()
}

/** El Rayo de Luna: el diapasón carga y la luz sale disparada. */
export function sonarRayo(): void {
  const c = contexto()
  if (!c) return
  const t = c.currentTime
  nota(1318.51, t, 0.3, 'sine', 0.12) // el diapasón, que suena limpio
  deslizar(500, 1600, t + 0.04, 0.16, 0.1) // la nota se carga en las manos
  deslizar(2400, 260, t + 0.2, 0.36, 0.2) // y sale disparada
  soplo(t + 0.2, 0.45, { desdeHz: 3200, hastaHz: 700, q: 4, volumen: 0.1 })
}

/** Ficha de Valentía gastada: un golpecito de escudo. */
export function sonarValentia(): void {
  const c = contexto()
  if (!c) return
  const t = c.currentTime
  nota(440, t, 0.12, 'square', 0.1)
  nota(660, t + 0.07, 0.26, 'triangle', 0.16)
}

/** Un personaje nuevo aparece: dos notas, como un «¡tachán!» pequeño. */
export function sonarPersonaje(): void {
  const c = contexto()
  if (!c) return
  const t = c.currentTime
  nota(587.33, t, 0.14, 'triangle', 0.15) // re
  nota(880.0, t + 0.1, 0.32, 'sine', 0.16) // la
}
