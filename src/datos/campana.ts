import type {
  Bando,
  ControlDM,
  Episodio,
  FilaArco,
  Heroe,
  IdPersonaje,
  Lugar,
  Personaje,
  Trasfondo,
} from './tipos'
import { episodio1 } from './episodio1'
import { episodio2 } from './episodio2'
import { episodio3 } from './episodio3'
import { episodio4 } from './episodio4'
import { episodio5 } from './episodio5'

// ─────────────────────────────────────────────────────────────
//  PARA AÑADIR UN EPISODIO NUEVO:
//  1. Copia episodio1.ts → episodio2.ts y reescribe el contenido.
//  2. Impórtalo aquí y métele en el array `episodios`.
//  3. Rellena su fila en `arcoCampana`.
//  Ya está. No hay que tocar ningún componente.
// ─────────────────────────────────────────────────────────────

export const episodios: Episodio[] = [episodio1, episodio2, episodio3, episodio4, episodio5]

/** El arco completo. Esto es para ti, no para ellos. */
export const arcoCampana: FilaArco[] = [
  { episodio: 1, cancion: 'Del Mar (las olas)', pista: 'Fuego, escama roja, es hembra' },
  { episodio: 2, cancion: 'Del Viento', pista: 'Su nombre: Flamarada' },
  { episodio: 3, cancion: 'De los Pájaros', pista: 'Está sola y no sabe cantar' },
  { episodio: 4, cancion: 'De la Gente', pista: 'Su punto débil: el agua del mar' },
  { episodio: 5, cancion: 'Del Corazón', pista: 'La quinta no se rescata: se regala' },
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

// OJO CON LOS SPOILERS: estos nombres salen en el iPad.
// El dragón se llama «EL DRAGÓN» hasta el episodio 2, que es donde se
// descubre su nombre. No lo cambies antes de tiempo.
export const personajes: Personaje[] = [
  {
    id: 'migas',
    bando: 'aliado',
    nombre: 'CAPITÁN MIGAS',
    detalle: 'No le sale ni un sonido',
    imagen: '/imagenes/migas.png',
    descripcion:
      'Una gaviota gorda y de muy mal genio. Vive en la isla desde siempre y se la conoce piedra a piedra. El dragón le robó la voz, así que se explica a base de gestos, alas y pataditas en la arena.',
    enCombate:
      'No pelea: sale volando. Pero si le caéis bien, os lleva al sitio correcto y eso vale más que una espada.',
  },
  {
    id: 'kobold',
    bando: 'enemigo',
    nombre: 'EL KOBOLD',
    detalle: 'Trabaja para el dragón',
    imagen: '/imagenes/kobold.png',
    descripcion:
      'Un bicho verde y escamoso del tamaño de un perro pequeño, con cuernecitos y ojos amarillos. Recorre la isla metiendo canciones en tarros de cristal para su ama. Está más asustado que enfadado.',
    enCombate:
      'Roba palabras: con 1-3 os quedáis sin poder decir una palabra durante la escena. Necesitáis 3 aciertos para echarlo. El Grito de Plata acaba con él al instante.',
  },
  {
    id: 'pluma',
    bando: 'aliado',
    nombre: 'DOÑA PLUMA',
    detalle: 'La más vieja de la isla',
    imagen: '/imagenes/pluma.png',
    descripcion:
      'Una urraca viejísima y muy digna, con una pluma blanca en la cabeza. Vive en el árbol de los mil nidos y conoció a Flamarada cuando era pequeña. Es la única que sabe por qué se llevó las canciones.',
    enCombate:
      'No pelea, que para eso está mayor. Lo suyo es saber cosas que no sabe nadie más, y eso resuelve más que una espada.',
    requiereCanciones: 2,
  },
  {
    id: 'gemelas',
    bando: 'aliado',
    nombre: 'GALA Y ABRIL',
    detalle: 'Las druidas de la cala',
    imagen: '/imagenes/gemelas.png',
    descripcion:
      'Dos hermanas gemelas de cinco años que no se parecen en nada. A Gala le hacen caso las plantas y cuida el único jardín que queda en la isla. A Abril la siguen los gatos a todas partes, y les entiende cuando maúllan. Son pequeñas, pero cuando hay pelea os echan una mano.',
    enCombate:
      'Pelean, y a su manera son temibles. GALA hace crecer enredaderas del suelo que agarran al enemigo por los pies: el siguiente ataque que os lance, falla. ABRIL lanza gatos: coge uno, lo tira contra el enemigo y el gato hace el resto. Cuenta como un acierto, sin tirar dado. Cada una puede hacerlo una vez por combate, y hay que pedírselo.',
    requiereCanciones: 3,
  },
  {
    id: 'ferran',
    bando: 'aliado',
    nombre: 'EL VIEJO FERRAN',
    detalle: 'Vio lo que pasó en el mar',
    imagen: '/imagenes/ferran.png',
    descripcion:
      'El pescador más viejo de la cala, con las manos llenas de cicatrices de cuerda. Estaba pescando la mañana en que una ola le dio en la cara al dragón, y no se le ha olvidado nunca.',
    enCombate:
      'Ya no pelea. Lo que hace es llenaros los odres de agua del mar, que es lo que de verdad gana la última batalla.',
    requiereCanciones: 3,
  },
  {
    id: 'dragon',
    bando: 'enemigo',
    nombre: 'EL DRAGÓN',
    detalle: 'Os mira desde la montaña',
    imagen: '/imagenes/dragon.png',
    descripcion:
      'Nadie lo ha visto todavía. Vive en una cueva en lo alto de la montaña, llena de monedas de oro con una canción atrapada dentro de cada una. Los demás dragones acumulan tesoros; este acumula canciones.',
    enCombate:
      'Todavía no toca. Cuando llegue el momento harán falta las cinco canciones: la del Mar apaga su fuego, el escudo aguanta su aliento y el Grito de Plata es el golpe final.',
    requiereCanciones: 4,
  },
]

/**
 * Qué personajes se pueden destapar en /mesa ahora mismo. Hacen falta dos
 * condiciones:
 *
 *   1. Que alguna escena escrita lo presente.
 *   2. Que la partida haya llegado a su episodio, contado en canciones
 *      rescatadas.
 *
 * La primera sola no basta, y es un error que ya se cometió: mientras solo
 * existían dos episodios, el dragón no se podía destapar porque ninguna escena
 * lo presentaba. Al escribir el episodio 5 esa escena pasó a existir y su
 * carta quedó abierta desde el primer día, que es justo lo que no se quería:
 * si la niña le ve el color, se acaba la deducción de qué tipo de dragón es.
 *
 * La segunda condición sí sigue el ritmo real de la partida, porque el
 * contador de canciones lo llevan ellos en el propio iPad.
 */
export function personajesPresentables(
  cancionesRescatadas: number,
  control: ControlDM = {},
): IdPersonaje[] {
  const presentados = new Set<IdPersonaje>()
  episodios.forEach((ep) =>
    ep.escenas.forEach((es) => {
      if (es.presenta) presentados.add(es.presenta)
    }),
  )
  return personajes
    .filter((p) => {
      // Lo que haya decidido el DM a mano manda sobre todo lo demás.
      const manual = control[p.id]
      if (manual !== undefined) return manual
      return presentados.has(p.id) && (p.requiereCanciones ?? 0) <= cancionesRescatadas
    })
    .map((p) => p.id)
}

/** Los personajes de un bando, en el orden en que aparecen en la historia. */
export function personajesDelBando(bando: Bando): Personaje[] {
  return personajes.filter((p) => p.bando === bando)
}

export const heroes: Heroe[] = [
  {
    id: 'paula',
    nombre: 'PAULA',
    clase: 'Cazadragones de la Luna',
    imagen: '/imagenes/paula.png',
    quienEs:
      'Sabe de dragones más que nadie: se los ha estudiado todos, uno por uno. No caza con espada, caza cantando: su voz es su arma. Lleva la luna en la frente porque los dragones se ven mejor de noche, y un diapasón de plata colgado del cinturón que le regaló la luna cuando era pequeña.',
    poderes: [
      {
        nombre: 'El Rayo de Luna',
        efecto:
          'Golpea el diapasón de plata, la nota se le queda en las manos convertida en luz y la lanza. Con 4+ acierta y la criatura sale despedida hacia atrás. Con 1-3 el rayo rebota en una piedra y enciende algo que no tocaba.',
        usos: 'siempre que quiera',
      },
      {
        nombre: 'El Grito de Plata',
        efecto: 'Canta una nota y cualquier criatura del dragón huye. Sin tirar dado, ella decide cuándo.',
        usos: '1 vez por episodio',
      },
      {
        nombre: 'Ojo de experta',
        efecto:
          'Cuando aparece una pista, se le pregunta en serio qué dragón cree que es. Si acierta, todo el grupo gana un dado extra.',
      },
    ],
    enCombate:
      'Tiene dos maneras de atacar y elige ella: cantando, o lanzando el Rayo de Luna con las manos. Las dos tiran dado igual. Si canta, pregúntale qué canta y déjala cantarlo de verdad.',
  },
  {
    id: 'luca',
    nombre: 'SIR LUCA',
    clase: 'Caballero Pirata',
    imagen: '/imagenes/luca.png',
    quienEs:
      'Es el más pequeño de la tripulación y el que va primero. Lleva el Escudo de Sant Jordi, blanco con la cruz roja, que le viene de familia. No le tiene miedo a nada, y eso a veces es un problema.',
    poderes: [
      {
        nombre: 'El Escudo de Sant Jordi',
        efecto:
          'Si pone el escudo delante, no le pasa nada a él ni a quien esté detrás. Ni siquiera el fuego de dragón. Si se levanta y lo hace de verdad: éxito automático.',
      },
      {
        nombre: 'Fichas de Valentía',
        efecto: 'Gasta una y algo le sale bien automáticamente, sin tirar el dado.',
        usos: '3 por episodio',
      },
    ],
    enCombate: 'Ataca con la espada. Que dé un espadazo al aire de verdad, y luego tire el dado.',
  },
]

export const trasfondo: Trasfondo = {
  titulo: 'Por qué estaban en un barco',
  parrafos: [
    'El barco de Paula y Luca no navega con viento: navega con canciones. Mientras alguien canta a bordo, el barco avanza. Por eso siempre van cantando.',
    'Habían oído hablar de una isla de la que ya no llegaba ningún sonido, y fueron a ver qué pasaba. Se acercaron cantando, como siempre… y de golpe la canción se les apagó en la boca. El barco se paró en seco y encalló en la playa.',
    'Por eso el episodio 1 se llama El Barco sin Canción: hasta que no recuperen las cinco, no pueden volver a navegar. Están atrapados en la isla, y esa es la razón de fondo de toda la campaña.',
  ],
}

export function totalEscenas(): number {
  return episodios.reduce((n, ep) => n + ep.escenas.length, 0)
}
