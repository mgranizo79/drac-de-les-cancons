import { useCallback, useMemo } from 'react'
import { useAlmacenLocal } from './almacenLocal'
import type { ControlDM, IdLugar, IdPersonaje } from '../datos/tipos'

export interface EstadoPartida {
  /** true = ficha de Valentía ya gastada. */
  valentia: [boolean, boolean, boolean]
  /** El Grito de Plata: 1 vez por episodio. */
  gritoUsado: boolean
  /** Cuántas canciones se han rescatado (0-5). */
  canciones: number
  /** El cuaderno de Paula: una teoría por episodio. */
  pistas: string[]
  /** ¿Qué dragón cree que es? */
  apuesta: string
  /** Lugares del mapa ya descubiertos. */
  lugares: IdLugar[]
  /** Personajes que ya han aparecido en la historia. */
  personajes: IdPersonaje[]
  /** Lo que el DM ha forzado a mano desde el panel oculto. */
  control: ControlDM
}

const ESTADO_INICIAL: EstadoPartida = {
  valentia: [false, false, false],
  gritoUsado: false,
  canciones: 0,
  pistas: ['', '', '', '', ''],
  apuesta: '',
  lugares: [],
  personajes: [],
  control: {},
}

export function usePartida() {
  const [guardado, setEstado, reiniciar] = useAlmacenLocal<EstadoPartida>(
    'drac:partida',
    ESTADO_INICIAL,
  )

  // Una partida empezada antes de que existiera un campo no lo trae al
  // recuperarla del localStorage. Sin esto, el iPad de una partida a medias
  // se quedaría en blanco al estrenar la galería de personajes.
  const estado = useMemo<EstadoPartida>(() => ({ ...ESTADO_INICIAL, ...guardado }), [guardado])

  const gastarValentia = useCallback(
    (indice: number) => {
      setEstado((e) => {
        const valentia = [...e.valentia] as EstadoPartida['valentia']
        valentia[indice] = !valentia[indice]
        return { ...e, valentia }
      })
    },
    [setEstado],
  )

  const alternarGrito = useCallback(() => {
    setEstado((e) => ({ ...e, gritoUsado: !e.gritoUsado }))
  }, [setEstado])

  const encenderCancion = useCallback(
    (numero: number) => {
      // Tocar una canción ya encendida la apaga (por si se toca sin querer).
      setEstado((e) => ({ ...e, canciones: e.canciones === numero ? numero - 1 : numero }))
    },
    [setEstado],
  )

  const escribirPista = useCallback(
    (indice: number, texto: string) => {
      setEstado((e) => {
        const pistas = [...e.pistas]
        pistas[indice] = texto
        return { ...e, pistas }
      })
    },
    [setEstado],
  )

  const escribirApuesta = useCallback(
    (texto: string) => setEstado((e) => ({ ...e, apuesta: texto })),
    [setEstado],
  )

  const alternarLugar = useCallback(
    (id: IdLugar) => {
      setEstado((e) => ({
        ...e,
        lugares: e.lugares.includes(id)
          ? e.lugares.filter((l) => l !== id)
          : [...e.lugares, id],
      }))
    },
    [setEstado],
  )

  const alternarPersonaje = useCallback(
    (id: IdPersonaje) => {
      setEstado((e) => {
        const vistos = e.personajes ?? []
        return {
          ...e,
          personajes: vistos.includes(id) ? vistos.filter((p) => p !== id) : [...vistos, id],
        }
      })
    },
    [setEstado],
  )

  /**
   * El DM fuerza que un personaje se vea o no se vea, desde el panel oculto.
   * Pasar `undefined` devuelve la carta a la regla automática de canciones.
   */
  const controlarPersonaje = useCallback(
    (id: IdPersonaje, visible: boolean | undefined) => {
      setEstado((e) => {
        const control = { ...(e.control ?? {}) }
        if (visible === undefined) delete control[id]
        else control[id] = visible
        return { ...e, control }
      })
    },
    [setEstado],
  )

  /** Lo que llega del portátil del DM: reemplaza el control entero. */
  const aplicarControlRemoto = useCallback(
    (control: ControlDM) => setEstado((e) => ({ ...e, control })),
    [setEstado],
  )

  /** Nuevo episodio: se recuperan la Valentía y el Grito, se conserva todo lo demás. */
  const nuevoEpisodio = useCallback(() => {
    setEstado((e) => ({ ...e, valentia: [false, false, false], gritoUsado: false }))
  }, [setEstado])

  return {
    estado,
    gastarValentia,
    alternarGrito,
    encenderCancion,
    escribirPista,
    escribirApuesta,
    alternarLugar,
    alternarPersonaje,
    controlarPersonaje,
    aplicarControlRemoto,
    nuevoEpisodio,
    reiniciarTodo: reiniciar,
  }
}
