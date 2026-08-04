// Modelo de contenido de la campaña.
//
// La idea: los episodios 2-5 se añaden escribiendo SOLO datos
// (un fichero por episodio en esta carpeta + una línea en campana.ts).
// Ningún componente necesita tocarse.

/** A quién le hablas. 'mesa' = a los dos a la vez. */
export type Destinatario = 'paula' | 'luca' | 'mesa'

export interface Pregunta {
  para: Destinatario
  texto: string
}

export interface Tirada {
  /** Quién tira: 'Paula', 'Luca', 'Los dos'… texto libre. */
  quien: string
  /** Qué se intenta conseguir. */
  que: string
  /** Qué pasa con 4, 5 o 6. */
  exito: string
  /** Qué pasa con 1, 2 o 3. Nunca es un fracaso: pasa otra cosa. */
  fallo: string
  /** Nota opcional: automatismos, poderes que aplican, etc. */
  nota?: string
}

/** Localizaciones del mapa. Añade aquí las de los episodios siguientes. */
export type IdLugar = 'playa' | 'puente' | 'cueva' | 'montana'

export interface Escena {
  id: string
  titulo: string
  /** "3 min", "7 min"… se muestra junto al título. */
  duracion: string
  /** Texto literal, entrecomillado, para leer tal cual. */
  leerEnVozAlta: string[]
  /** Acotación de dirección: qué haces tú mientras lees. */
  acotacion?: string
  /** El escenario en viñetas cortas, para improvisar si preguntan. */
  loQueVen: string[]
  preguntar: Pregunta[]
  tiradas: Tirada[]
  /** Se muestra en rojo. Es lo que Paula tiene que deducir. */
  pistaDelDragon?: string
  /** Frases literales para cuando Luca se despiste. */
  siSeTuerce: string[]
  /** Lugar del mapa que esta escena desbloquea en /mesa. */
  desbloquea?: IdLugar
  /** Número de canción (1-5) que se rescata al terminar la escena. */
  rescataCancion?: number
}

export interface Episodio {
  numero: number
  titulo: string
  duracionObjetivo: string
  /** Nombre de la canción que se recupera en el episodio. */
  cancion: string
  escenas: Escena[]
}

/** Una fila de la tabla del arco completo (columna derecha del DM). */
export interface FilaArco {
  episodio: number
  cancion: string
  pista: string
}

export interface Lugar {
  id: IdLugar
  nombre: string
  /** Se muestra bajo el nombre cuando está desbloqueado. */
  detalle: string
}
