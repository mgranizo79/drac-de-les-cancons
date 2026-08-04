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

/** Personajes que van apareciendo en la historia. Añade aquí los nuevos. */
export type IdPersonaje = 'migas' | 'kobold' | 'dragon' | 'pluma' | 'gemelas' | 'ferran'

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
  /** Personaje que esta escena presenta en /mesa. */
  presenta?: IdPersonaje
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

export interface Personaje {
  id: IdPersonaje
  /** Cuidado con los spoilers: esto lo leen ellos. */
  nombre: string
  /** Se muestra bajo el nombre cuando ya ha aparecido. */
  detalle: string
  /** Ruta de la imagen dentro de public/. */
  imagen: string
  /** Quién es, en dos o tres frases. Para presentarlo en la mesa. */
  descripcion: string
  /** Qué hace si hay pelea. Para resolver dudas a mitad de partida. */
  enCombate: string
  /**
   * No se puede destapar hasta haber rescatado estas canciones.
   *
   * Hace falta porque el otro candado —que alguna escena escrita lo presente—
   * dejó de servir en cuanto se escribieron los cinco episodios: la escena que
   * presenta al dragón ya existe desde el primer día. Esto sí sigue el ritmo
   * real de la partida, que es lo que se quería.
   */
  requiereCanciones?: number
}

export type IdHeroe = 'paula' | 'luca'

export interface Poder {
  nombre: string
  efecto: string
  /** "1 vez por episodio", "3 por episodio"… Omitir si es ilimitado. */
  usos?: string
}

export interface Heroe {
  id: IdHeroe
  nombre: string
  clase: string
  imagen: string
  /** Quién es. Se lee en voz alta al presentarlo. */
  quienEs: string
  poderes: Poder[]
  enCombate: string
}

/** El contexto de la campaña: de dónde vienen y por qué. */
export interface Trasfondo {
  titulo: string
  parrafos: string[]
}
