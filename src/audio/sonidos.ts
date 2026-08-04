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

/** Una canción vuelve a la isla. */
export function sonarCancion(): void {
  const c = contexto()
  if (!c) return
  const t = c.currentTime
  const escala = [523.25, 587.33, 659.25, 783.99, 880.0]
  escala.forEach((f, i) => nota(f, t + i * 0.09, 0.5, 'sine', 0.15))
}

/** Ficha de Valentía gastada: un golpecito de escudo. */
export function sonarValentia(): void {
  const c = contexto()
  if (!c) return
  const t = c.currentTime
  nota(440, t, 0.12, 'square', 0.1)
  nota(660, t + 0.07, 0.26, 'triangle', 0.16)
}
