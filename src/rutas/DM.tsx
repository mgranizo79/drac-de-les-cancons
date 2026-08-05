import { useEffect, useMemo } from 'react'
import { arcoCampana, episodios, heroes, personajes, trasfondo } from '../datos/campana'
import type { Episodio, Escena } from '../datos/tipos'
import { useAlmacenLocal } from '../estado/almacenLocal'

interface EntradaGuion {
  episodio: Episodio
  escena: Escena
  indice: number
}

/** Todas las escenas de todos los episodios, en orden. */
function aplanar(): EntradaGuion[] {
  const salida: EntradaGuion[] = []
  episodios.forEach((ep) => {
    ep.escenas.forEach((es) => {
      salida.push({ episodio: ep, escena: es, indice: salida.length })
    })
  })
  return salida
}

const NOMBRES: Record<string, string> = {
  paula: 'PAULA',
  luca: 'LUCA',
  mesa: 'LOS DOS',
}

export function DM() {
  const guion = useMemo(aplanar, [])
  const [posicion, setPosicion] = useAlmacenLocal<number>('drac:dm:posicion', 0)
  const [notas, setNotas] = useAlmacenLocal<Record<string, string>>('drac:dm:notas', {})

  const actual = guion[Math.min(Math.max(posicion, 0), guion.length - 1)]

  useEffect(() => {
    document.title = 'Guion — El Drac de les Cançons'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow, noarchive'
    document.head.appendChild(meta)
    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  // Las pistas que ya han salido: las de esta escena y todas las anteriores.
  const pistasReveladas = guion
    .slice(0, actual.indice + 1)
    .filter((e) => e.escena.pistaDelDragon)
    .map((e) => ({
      episodio: e.episodio.numero,
      escena: e.escena.titulo,
      texto: e.escena.pistaDelDragon as string,
    }))

  const claveNotas = `ep${actual.episodio.numero}`

  const irA = (delta: number) => {
    setPosicion((p) => Math.min(Math.max(p + delta, 0), guion.length - 1))
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="dm">
      <div className="dm__columnas">
        {/* ── COLUMNA IZQUIERDA: EL GUION ── */}
        <main className="dm__guion">
          <header className="dm__cabecera">
            <p className="dm__episodio">
              Episodio {actual.episodio.numero} · {actual.episodio.titulo}
            </p>
            <h1 className="dm__escena">
              <span className="dm__escena-num">{actual.indice + 1}</span>
              {actual.escena.titulo}
            </h1>
            <p className="dm__duracion">{actual.escena.duracion}</p>
          </header>

          {/* 1 · LEER EN VOZ ALTA */}
          <section className="bloque bloque--leer">
            <h2 className="bloque__titulo">Leer en voz alta</h2>
            {actual.escena.leerEnVozAlta.map((parrafo, i) => (
              <p key={i} className="bloque__lectura">
                «{parrafo}»
              </p>
            ))}
            {actual.escena.acotacion && <p className="bloque__acotacion">{actual.escena.acotacion}</p>}
          </section>

          {/* Ilustración de la escena: para girar el portátil y enseñarla. */}
          {actual.escena.ilustracion && (
            <section className="bloque bloque--ilustracion">
              <h2 className="bloque__titulo">Enséñales esto</h2>
              <img
                className="bloque__ilustracion"
                src={actual.escena.ilustracion.imagen}
                alt=""
              />
              <p className="bloque__acotacion">{actual.escena.ilustracion.pie}</p>
            </section>
          )}

          {/* 2 · LO QUE VEN */}
          <section className="bloque bloque--ven">
            <h2 className="bloque__titulo">Lo que ven</h2>
            <ul className="bloque__lista">
              {actual.escena.loQueVen.map((linea, i) => (
                <li key={i}>{linea}</li>
              ))}
            </ul>
          </section>

          {/* 3 · PREGUNTAR */}
          <section className="bloque bloque--preguntar">
            <h2 className="bloque__titulo">Preguntar</h2>
            <ul className="preguntas">
              {actual.escena.preguntar.map((p, i) => (
                <li key={i} className={`pregunta pregunta--${p.para}`}>
                  <span className="pregunta__quien">{NOMBRES[p.para] ?? p.para}</span>
                  <span className="pregunta__texto">{p.texto}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4 · TIRADAS */}
          {actual.escena.tiradas.length > 0 && (
            <section className="bloque bloque--tiradas">
              <h2 className="bloque__titulo">Tiradas</h2>
              {actual.escena.tiradas.map((t, i) => (
                <div key={i} className="tirada">
                  <p className="tirada__que">
                    <strong>{t.quien}:</strong> {t.que}
                  </p>
                  <div className="tirada__resultados">
                    <p className="tirada__exito">
                      <span className="tirada__marca">4+</span> {t.exito}
                    </p>
                    <p className="tirada__fallo">
                      <span className="tirada__marca">1-3</span> {t.fallo}
                    </p>
                  </div>
                  {t.nota && <p className="tirada__nota">{t.nota}</p>}
                </div>
              ))}
            </section>
          )}

          {/* 5 · PISTA DEL DRAGÓN */}
          {actual.escena.pistaDelDragon && (
            <section className="bloque bloque--pista">
              <h2 className="bloque__titulo">Pista del dragón</h2>
              <p className="bloque__pista">{actual.escena.pistaDelDragon}</p>
            </section>
          )}

          {/* 6 · SI SE TUERCE */}
          <section className="bloque bloque--emergencia">
            <h2 className="bloque__titulo">Si se tuerce</h2>
            <p className="bloque__aviso">No lo traigas de vuelta con palabras. Dale una tarea física.</p>
            <ul className="bloque__lista bloque__lista--frases">
              {actual.escena.siSeTuerce.map((frase, i) => (
                <li key={i}>{frase}</li>
              ))}
            </ul>
          </section>
        </main>

        {/* ── COLUMNA DERECHA: FIJA ── */}
        <aside className="dm__lateral">
          <section className="lateral__caja">
            <h2 className="lateral__titulo">Pistas ya reveladas</h2>
            {pistasReveladas.length === 0 ? (
              <p className="lateral__vacio">Todavía ninguna.</p>
            ) : (
              <ul className="lateral__pistas">
                {pistasReveladas.map((p, i) => (
                  <li key={i}>
                    <span className="lateral__etiqueta">
                      Ep {p.episodio} · {p.escena}
                    </span>
                    {p.texto}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Para responder dudas a mitad de partida sin cortar el ritmo.
              Plegado por defecto: ocupa una línea hasta que hace falta. */}
          <section className="lateral__caja">
            <h2 className="lateral__titulo">Quién es quién</h2>

            <details className="ref">
              <summary className="ref__titulo">{trasfondo.titulo}</summary>
              <div className="ref__cuerpo">
                {trasfondo.parrafos.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>

            {heroes.map((h) => (
              <details key={h.id} className="ref">
                <summary className="ref__titulo">
                  {h.nombre} <span className="ref__clase">{h.clase}</span>
                </summary>
                <div className="ref__cuerpo">
                  <p>{h.quienEs}</p>
                  <ul className="ref__poderes">
                    {h.poderes.map((p, i) => (
                      <li key={i}>
                        <strong>{p.nombre}</strong>
                        {p.usos && <span className="ref__usos">{p.usos}</span>}
                        <br />
                        {p.efecto}
                      </li>
                    ))}
                  </ul>
                  <p className="ref__combate">
                    <strong>En combate:</strong> {h.enCombate}
                  </p>
                </div>
              </details>
            ))}

            {personajes.map((p) => (
              <details key={p.id} className="ref">
                <summary className="ref__titulo">{p.nombre}</summary>
                <div className="ref__cuerpo">
                  <p>{p.descripcion}</p>
                  <p className="ref__combate">
                    <strong>En combate:</strong> {p.enCombate}
                  </p>
                </div>
              </details>
            ))}
          </section>

          <section className="lateral__caja">
            <h2 className="lateral__titulo">El arco completo</h2>
            <table className="arco">
              <thead>
                <tr>
                  <th>Ep</th>
                  <th>Canción</th>
                  <th>Pista</th>
                </tr>
              </thead>
              <tbody>
                {arcoCampana.map((fila) => (
                  <tr
                    key={fila.episodio}
                    className={fila.episodio === actual.episodio.numero ? 'arco__fila--actual' : undefined}
                  >
                    <td>{fila.episodio}</td>
                    <td>{fila.cancion}</td>
                    <td>{fila.pista}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="lateral__caja lateral__caja--notas">
            <h2 className="lateral__titulo">Lo que se inventan</h2>
            <textarea
              className="lateral__notas"
              value={notas[claveNotas] ?? ''}
              placeholder="Nombres que ponen, cosas que proponen, lo que hay que recordar para el próximo episodio…"
              onChange={(e) => setNotas((n) => ({ ...n, [claveNotas]: e.target.value }))}
            />
          </section>
        </aside>
      </div>

      {/* ── NAVEGACIÓN ── */}
      <nav className="dm__navegacion">
        <button type="button" className="nav-boton" onClick={() => irA(-1)} disabled={actual.indice === 0}>
          ← Escena anterior
        </button>
        <span className="dm__progreso">
          {actual.indice + 1} / {guion.length}
        </span>
        <button
          type="button"
          className="nav-boton nav-boton--principal"
          onClick={() => irA(1)}
          disabled={actual.indice === guion.length - 1}
        >
          Escena siguiente →
        </button>
      </nav>
    </div>
  )
}
