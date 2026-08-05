import { personajes, personajesPresentables } from '../datos/campana'
import type { ControlDM, IdPersonaje } from '../datos/tipos'
import { useEscucharControl, useMandarControl } from '../estado/controlRemoto'
import { useAlmacenLocal } from '../estado/almacenLocal'

/**
 * Desde aquí el DM decide qué se ve en el iPad, sin levantarse.
 *
 * Como no sabemos por qué canción van (eso lo llevan ellos en la mesa), aquí
 * no se puede mostrar el estado automático de cada carta: solo forzarlas. El
 * botón Auto la devuelve a abrirse sola cuando llegue su episodio.
 */

const AVISO: Record<string, string> = {
  quieto: '',
  enviando: 'enviando…',
  enviado: '✓ la mesa ya lo tiene',
  error: '✗ no ha llegado: usa el panel del iPad',
}

export function ControlMesa() {
  const [control, setControl] = useAlmacenLocal<ControlDM>('drac:dm:control', {})
  const { mandar, estado } = useMandarControl()

  // Si abres la pantalla en otro sitio, se pone al día con lo último enviado.
  useEscucharControl(setControl)

  const cambiar = (id: IdPersonaje, visible: boolean | undefined) => {
    const nuevo: ControlDM = { ...control }
    if (visible === undefined) delete nuevo[id]
    else nuevo[id] = visible
    setControl(nuevo)
    void mandar(nuevo)
  }

  const soltarTodo = () => {
    setControl({})
    void mandar({})
  }

  // Con 0 canciones: lo que se vería sin tocar nada. Sirve de referencia.
  const deSalida = personajesPresentables(0, {})

  return (
    <section className="lateral__caja">
      <h2 className="lateral__titulo">Qué ven en la mesa</h2>

      <ul className="control-mesa">
        {personajes.map((p) => {
          const forzado = control[p.id]
          return (
            <li key={p.id} className="control-mesa__fila">
              <span className="control-mesa__nombre">
                {p.nombre}
                {deSalida.includes(p.id) && <span className="control-mesa__nota">se ve de salida</span>}
              </span>
              <span className="control-mesa__botones">
                <button
                  type="button"
                  className={forzado === true ? 'dm-boton dm-boton--activo' : 'dm-boton'}
                  onClick={() => cambiar(p.id, true)}
                >
                  Ver
                </button>
                <button
                  type="button"
                  className={forzado === false ? 'dm-boton dm-boton--activo' : 'dm-boton'}
                  onClick={() => cambiar(p.id, false)}
                >
                  Tapar
                </button>
                <button
                  type="button"
                  className="dm-boton dm-boton--suave"
                  onClick={() => cambiar(p.id, undefined)}
                  disabled={forzado === undefined}
                >
                  Auto
                </button>
              </span>
            </li>
          )
        })}
      </ul>

      <div className="control-mesa__pie">
        <button type="button" className="dm-boton dm-boton--suave" onClick={soltarTodo}>
          Todo en automático
        </button>
        <span className={`control-mesa__aviso control-mesa__aviso--${estado}`}>{AVISO[estado]}</span>
      </div>
    </section>
  )
}
