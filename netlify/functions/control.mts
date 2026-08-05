import { getStore } from '@netlify/blobs'
import type { Context } from '@netlify/functions'

/**
 * El puente entre el portátil del DM y el iPad de la mesa.
 *
 * Los dos aparatos no se hablan solos: cada uno guarda su estado en su propio
 * localStorage. Esto es lo mínimo que hace falta para que el DM decida desde
 * su pantalla qué personajes se ven en la mesa.
 *
 *   GET  → devuelve lo último que se guardó
 *   POST → guarda { control } y le pone marca de tiempo
 *
 * La marca de tiempo es lo que evita que el iPad pise lo que acaba de mandar
 * el DM: solo aplica lo que llega si es más nuevo que lo último que vio.
 *
 * Sin autenticación a propósito. Es una partida de casa en una URL que no
 * conoce nadie, y meter tokens aquí solo añadiría cosas que se pueden romper
 * a mitad de sesión.
 */

interface Guardado {
  control: Record<string, boolean>
  ts: number
}

const VACIO: Guardado = { control: {}, ts: 0 }

export default async (req: Request, _context: Context) => {
  const cabeceras = {
    'content-type': 'application/json',
    'cache-control': 'no-store',
  }

  try {
    // Consistencia fuerte a propósito: por defecto Blobs es eventual, y una
    // lectura justo después de escribir devolvía vacío. Con la mesa
    // preguntando cada 3 segundos, eso significaba perder cambios del DM.
    const almacen = getStore({ name: 'control-dm', consistency: 'strong' })

    if (req.method === 'POST') {
      const cuerpo = (await req.json()) as { control?: Record<string, boolean> }
      const guardado: Guardado = {
        control: cuerpo.control ?? {},
        ts: Date.now(),
      }
      await almacen.setJSON('estado', guardado)
      return new Response(JSON.stringify(guardado), { headers: cabeceras })
    }

    const guardado = ((await almacen.get('estado', { type: 'json' })) as Guardado | null) ?? VACIO
    return new Response(JSON.stringify(guardado), { headers: cabeceras })
  } catch (error) {
    // Si el almacén falla, que no se lleve por delante la partida: la mesa
    // sigue funcionando con su panel local.
    return new Response(JSON.stringify({ ...VACIO, error: String(error) }), {
      status: 200,
      headers: cabeceras,
    })
  }
}
