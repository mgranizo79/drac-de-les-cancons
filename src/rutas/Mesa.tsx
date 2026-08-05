import { useEffect, useState } from 'react'
import { Dado } from '../componentes/Dado'
import { FichaLuca, FichaPaula } from '../componentes/FichasHeroes'
import { ContadorCanciones } from '../componentes/ContadorCanciones'
import { CuadernoPistas } from '../componentes/CuadernoPistas'
import { GaleriaPersonajes } from '../componentes/GaleriaPersonajes'
import { PanelDM } from '../componentes/PanelDM'
import {
  FichaDetalle,
  detalleDeHeroe,
  detalleDePersonaje,
  type Detalle,
} from '../componentes/FichaDetalle'
import { MapaIsla } from '../componentes/arte/MapaIsla'
import { heroes, personajes } from '../datos/campana'
import type { IdPersonaje } from '../datos/tipos'
import { usePartida } from '../estado/usePartida'

type Pestana = 'heroes' | 'mapa' | 'personajes' | 'pistas'

const PESTANAS: Array<{ id: Pestana; etiqueta: string; icono: string }> = [
  { id: 'heroes', etiqueta: 'Héroes', icono: '🛡' },
  { id: 'mapa', etiqueta: 'Mapa', icono: '🧭' },
  { id: 'personajes', etiqueta: 'Quién hay', icono: '🐾' },
  { id: 'pistas', etiqueta: 'Pistas', icono: '🐉' },
]

export function Mesa() {
  const {
    estado,
    gastarValentia,
    alternarGrito,
    encenderCancion,
    escribirPista,
    escribirApuesta,
    alternarLugar,
    alternarPersonaje,
    controlarPersonaje,
  } = usePartida()

  const [pestana, setPestana] = useState<Pestana>('heroes')
  const [detalle, setDetalle] = useState<Detalle | null>(null)
  const [panelDM, setPanelDM] = useState(false)

  useEffect(() => {
    document.title = 'El Drac de les Cançons'
  }, [])

  const verHeroe = (id: 'paula' | 'luca') => {
    const h = heroes.find((x) => x.id === id)
    if (h) setDetalle(detalleDeHeroe(h))
  }

  const verPersonaje = (id: IdPersonaje) => {
    const p = personajes.find((x) => x.id === id)
    if (p) setDetalle(detalleDePersonaje(p, () => alternarPersonaje(id)))
  }

  return (
    <div className="mesa">
      <header className="mesa__barra">
        <ContadorCanciones
          rescatadas={estado.canciones}
          onEncender={encenderCancion}
          onPulsacionLarga={() => setPanelDM(true)}
        />
      </header>

      <main className="mesa__cuerpo">
        <section className="mesa__izquierda">
          <Dado />
        </section>

        <section className="mesa__derecha">
          <nav className="pestanas" aria-label="Secciones">
            {PESTANAS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={pestana === p.id ? 'pestana pestana--activa' : 'pestana'}
                onClick={() => setPestana(p.id)}
              >
                <span className="pestana__icono" aria-hidden="true">
                  {p.icono}
                </span>
                {p.etiqueta}
              </button>
            ))}
          </nav>

          <div className="panel">
            {pestana === 'heroes' && (
              <div className="panel__heroes">
                <FichaLuca
                  valentia={estado.valentia}
                  onGastar={gastarValentia}
                  onVerDetalle={() => verHeroe('luca')}
                />
                <FichaPaula
                  gritoUsado={estado.gritoUsado}
                  onGrito={alternarGrito}
                  onVerDetalle={() => verHeroe('paula')}
                />
              </div>
            )}

            {pestana === 'mapa' && (
              <div className="panel__mapa">
                <p className="panel__ayuda">Toda la isla, y por dónde vamos pasando</p>
                <MapaIsla />
              </div>
            )}

            {pestana === 'personajes' && (
              <div className="panel__personajes">
                <p className="panel__ayuda">Toca a alguien cuando lo hayáis conocido</p>
                <GaleriaPersonajes
                  encontrados={estado.personajes}
                  cancionesRescatadas={estado.canciones}
                  control={estado.control ?? {}}
                  onTocar={alternarPersonaje}
                  onVerDetalle={verPersonaje}
                />
              </div>
            )}

            {pestana === 'pistas' && (
              <CuadernoPistas
                pistas={estado.pistas}
                apuesta={estado.apuesta}
                onPista={escribirPista}
                onApuesta={escribirApuesta}
              />
            )}
          </div>
        </section>
      </main>

      <FichaDetalle detalle={detalle} onCerrar={() => setDetalle(null)} />

      <PanelDM
        abierto={panelDM}
        cancionesRescatadas={estado.canciones}
        control={estado.control ?? {}}
        onControlar={controlarPersonaje}
        onCerrar={() => setPanelDM(false)}
      />
    </div>
  )
}
