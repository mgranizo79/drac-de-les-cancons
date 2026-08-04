import type { Episodio, FilaArco, Lugar } from './tipos'
import { episodio1 } from './episodio1'

// ─────────────────────────────────────────────────────────────
//  PARA AÑADIR UN EPISODIO NUEVO:
//  1. Copia episodio1.ts → episodio2.ts y reescribe el contenido.
//  2. Impórtalo aquí y métele en el array `episodios`.
//  3. Rellena su fila en `arcoCampana`.
//  Ya está. No hay que tocar ningún componente.
// ─────────────────────────────────────────────────────────────

export const episodios: Episodio[] = [episodio1]

/** El arco completo. Esto es para ti, no para ellos. */
export const arcoCampana: FilaArco[] = [
  { episodio: 1, cancion: 'Del Mar (las olas)', pista: 'Fuego, escama roja, es hembra' },
  { episodio: 2, cancion: 'Del Viento', pista: 'Su nombre: Flamarada' },
  { episodio: 3, cancion: 'De los Pájaros', pista: 'Por qué robó las canciones' },
  { episodio: 4, cancion: 'De la Gente', pista: 'Su punto débil: el agua del mar' },
  { episodio: 5, cancion: 'Del Corazón', pista: '— el combate final' },
]

/** Las cinco canciones, para el contador de /mesa. */
export const canciones = [
  { numero: 1, nombre: 'Del Mar', vuelve: 'vuelven las olas' },
  { numero: 2, nombre: 'Del Viento', vuelve: 'vuelve el aire a soplar' },
  { numero: 3, nombre: 'De los Pájaros', vuelve: 'vuelven a cantar' },
  { numero: 4, nombre: 'De la Gente', vuelve: 'vuelven las voces' },
  { numero: 5, nombre: 'Del Corazón', vuelve: 'vuelve todo lo demás' },
]

export const lugares: Lugar[] = [
  { id: 'playa', nombre: 'La playa', detalle: 'Aquí empezó todo' },
  { id: 'puente', nombre: 'El puente de cuerdas', detalle: 'Las tablas están quemadas' },
  { id: 'cueva', nombre: 'La cueva del acantilado', detalle: 'Aquí estaba el kobold' },
  { id: 'montana', nombre: 'La montaña del dragón', detalle: 'Algo enorme os mira desde arriba' },
]

export function totalEscenas(): number {
  return episodios.reduce((n, ep) => n + ep.escenas.length, 0)
}
