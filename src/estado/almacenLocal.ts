import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Estado persistido en el localStorage del propio dispositivo.
 * Sin backend: lo que hay en el iPad se queda en el iPad.
 */
export function useAlmacenLocal<T>(clave: string, valorInicial: T) {
  const inicialRef = useRef(valorInicial)

  const [valor, setValor] = useState<T>(() => {
    try {
      const guardado = window.localStorage.getItem(clave)
      if (guardado === null) return inicialRef.current
      return JSON.parse(guardado) as T
    } catch {
      return inicialRef.current
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor))
    } catch {
      // Safari en navegación privada tira aquí. La partida sigue
      // funcionando en memoria; solo se pierde al recargar.
    }
  }, [clave, valor])

  const reiniciar = useCallback(() => setValor(inicialRef.current), [])

  return [valor, setValor, reiniciar] as const
}
