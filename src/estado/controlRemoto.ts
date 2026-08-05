import { useCallback, useEffect, useRef, useState } from 'react'
import type { ControlDM } from '../datos/tipos'

const URL_FUNCION = '/.netlify/functions/control'
const CADA_MS = 3000

/**
 * La mesa escucha lo que manda el DM desde su portátil.
 *
 * Solo aplica lo que llega si trae marca de tiempo más nueva que la última
 * vista: así no pisa lo que el propio iPad acaba de cambiar desde su panel.
 *
 * Si no hay red, esto calla y no rompe nada. La mesa sigue funcionando con su
 * panel local, que es justo para lo que se dejó.
 */
export function useEscucharControl(alRecibir: (control: ControlDM) => void) {
  const ultimoTs = useRef(0)
  const guardado = useRef(alRecibir)
  guardado.current = alRecibir

  useEffect(() => {
    let vivo = true

    const consultar = async () => {
      try {
        const respuesta = await fetch(URL_FUNCION, { cache: 'no-store' })
        if (!respuesta.ok || !vivo) return
        const datos = (await respuesta.json()) as { control?: ControlDM; ts?: number }
        if (!vivo) return
        if (typeof datos.ts === 'number' && datos.ts > ultimoTs.current) {
          ultimoTs.current = datos.ts
          guardado.current(datos.control ?? {})
        }
      } catch {
        // sin conexión: se reintenta al siguiente ciclo
      }
    }

    void consultar()
    const id = window.setInterval(consultar, CADA_MS)
    return () => {
      vivo = false
      window.clearInterval(id)
    }
  }, [])
}

export type EstadoEnvio = 'quieto' | 'enviando' | 'enviado' | 'error'

/** El DM manda a la mesa lo que quiere que se vea. */
export function useMandarControl() {
  const [estado, setEstado] = useState<EstadoEnvio>('quieto')
  const temporizador = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (temporizador.current !== null) window.clearTimeout(temporizador.current)
    },
    [],
  )

  const mandar = useCallback(async (control: ControlDM) => {
    setEstado('enviando')
    try {
      const respuesta = await fetch(URL_FUNCION, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ control }),
      })
      // Mirar el status no basta: si el almacén falla, la función contesta 200
      // a propósito para no llevarse la partida por delante, y entonces esto
      // cantaba «la mesa ya lo tiene» sin haber guardado nada. Lo que de
      // verdad dice si quedó guardado es la marca de tiempo que devuelve.
      const datos = (await respuesta.json().catch(() => null)) as { ts?: number } | null
      const quedoGuardado = respuesta.ok && typeof datos?.ts === 'number' && datos.ts > 0
      setEstado(quedoGuardado ? 'enviado' : 'error')
    } catch {
      setEstado('error')
    }
    if (temporizador.current !== null) window.clearTimeout(temporizador.current)
    temporizador.current = window.setTimeout(() => setEstado('quieto'), 2500)
  }, [])

  return { mandar, estado }
}
