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

/** Nota con vaivén lento, como el oleaje. */
function ondular(frecuencia: number, desde: number, duracion: number, volumen = 0.16): void {
  const c = contexto()
  if (!c) return
  const osc = c.createOscillator()
  const lfo = c.createOscillator()
  const profundidad = c.createGain()
  const gan = c.createGain()
  osc.type = 'sine'
  osc.frequency.value = frecuencia
  lfo.type = 'sine'
  lfo.frequency.value = 1.5
  profundidad.gain.value = frecuencia * 0.05
  lfo.connect(profundidad)
  profundidad.connect(osc.frequency)
  gan.gain.setValueAtTime(0.0001, desde)
  gan.gain.exponentialRampToValueAtTime(volumen, desde + 0.3)
  gan.gain.exponentialRampToValueAtTime(0.0001, desde + duracion)
  osc.connect(gan)
  gan.connect(c.destination)
  osc.start(desde)
  lfo.start(desde)
  osc.stop(desde + duracion + 0.05)
  lfo.stop(desde + duracion + 0.05)
}

/**
 * Cada canción suena a lo que devuelve a la isla. Antes las cinco disparaban
 * la misma escala y no había forma de distinguirlas.
 */
const CANCIONES: Record<number, (t: number) => void> = {
  // 1 · DEL MAR — una ola que va y viene, con su espuma
  1: (t) => {
    ondular(196.0, t, 2.2, 0.16)
    ondular(293.66, t + 0.15, 2.0, 0.09)
    soplo(t, 1.1, { desdeHz: 400, hastaHz: 1500, q: 1.2, volumen: 0.1 })
    soplo(t + 1.1, 1.1, { desdeHz: 1500, hastaHz: 400, q: 1.2, volumen: 0.08 })
  },

  // 2 · DEL VIENTO — una ráfaga que pasa de largo. Sin nota: solo aire.
  2: (t) => {
    soplo(t, 1.8, { desdeHz: 300, hastaHz: 2600, q: 6, volumen: 0.17 })
    soplo(t + 0.55, 1.5, { desdeHz: 2200, hastaHz: 500, q: 8, volumen: 0.12 })
  },

  // 3 · DE LOS PÁJAROS — cuatro trinos agudos, rápidos y desordenados
  3: (t) => {
    deslizar(1200, 2100, t, 0.13)
    deslizar(1500, 2400, t + 0.17, 0.11)
    deslizar(1050, 1900, t + 0.33, 0.15)
    deslizar(1750, 2600, t + 0.55, 0.19, 0.13)
  },

  // 4 · DE LA GENTE — un coro: las voces van entrando una detrás de otra
  4: (t) => {
    nota(261.63, t, 1.7, 'triangle', 0.12)
    nota(329.63, t + 0.2, 1.5, 'triangle', 0.11)
    nota(392.0, t + 0.4, 1.4, 'triangle', 0.11)
    nota(523.25, t + 0.6, 1.3, 'sine', 0.1)
  },

  // 5 · DEL CORAZÓN — dos latidos y una nota que se abre
  5: (t) => {
    nota(90, t, 0.2, 'sine', 0.3)
    nota(90, t + 0.32, 0.24, 'sine', 0.26)
    nota(440.0, t + 0.62, 0.5, 'triangle', 0.14)
    nota(659.25, t + 0.88, 1.2, 'sine', 0.15)
  },
}

/** Una canción vuelve a la isla. Cada número suena distinto. */
export function sonarCancion(numero: number): void {
  const c = contexto()
  if (!c) return
  const tocar = CANCIONES[numero] ?? CANCIONES[1]
  tocar(c.currentTime)
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
