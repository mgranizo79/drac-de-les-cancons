// El mapa de los cinco episodios.
//
// Es la misma ilustración que cuelga de la pared (material-mesa/imagenes/
// mapa-isla.jpg, aquí reescalada a 1200 px), con los ocho sitios numerados
// encima. Antes esto era un mapa dibujado a mano en SVG; se cambió para que
// la mesa y el póster enseñen exactamente el mismo dibujo, que es lo que
// ayuda a los niños a situarse. El dibujo vectorial sigue en el historial de
// git si algún día hace falta.
//
// El viewBox son las medidas de la ilustración, así que las coordenadas de
// los sitios se leen directamente sobre ella. Si cambia la imagen, hay que
// recolocarlos: los mismos valores, a otra escala, están en el imprimible
// (material-mesa/html/3-mapa-isla.html).
//
// El número es el del EPISODIO, no el del orden: por eso hay tres «1». El
// orden del viaje ya lo cuenta el camino de puntos rojos del propio dibujo.

interface Lugar {
  x: number
  y: number
  episodio: number
  nombre: string
}

const COLOR_EPISODIO: Record<number, string> = {
  1: '#C1272D',
  2: '#2E7D8C',
  3: '#4A8C46',
  4: '#C9A227',
  5: '#8A2820',
}

const LUGARES: Lugar[] = [
  { x: 721, y: 1992, episodio: 1, nombre: 'La playa' },
  { x: 1007, y: 1677, episodio: 1, nombre: 'El puente' },
  { x: 1424, y: 1404, episodio: 1, nombre: 'La cueva' },
  { x: 1080, y: 1020, episodio: 2, nombre: 'El bosque' },
  { x: 1117, y: 517, episodio: 2, nombre: 'El molino' },
  { x: 469, y: 828, episodio: 3, nombre: 'El árbol' },
  { x: 403, y: 1503, episodio: 4, nombre: 'La cala' },
  { x: 647, y: 1260, episodio: 5, nombre: 'La montaña' },
]

export function MapaIsla() {
  return (
    <svg
      viewBox="0 0 1600 2400"
      xmlns="http://www.w3.org/2000/svg"
      className="mapa-isla"
      role="img"
      aria-label="Mapa de la isla del silencio con los sitios de los cinco episodios"
    >
      <image href="/imagenes/mapa-isla.jpg" x="0" y="0" width="1600" height="2400" />

      {LUGARES.map((l) => {
        const color = COLOR_EPISODIO[l.episodio]
        return (
          <g key={l.nombre} className="hito">
            <circle cx={l.x} cy={l.y} r="52" fill="#FFFFFF" stroke={color} strokeWidth="10" />
            <text x={l.x} y={l.y + 20} textAnchor="middle" className="hito__numero" fill={color}>
              {l.episodio}
            </text>
            <g>
              <rect
                x={l.x - 148}
                y={l.y + 65}
                width="296"
                height="67"
                rx="20"
                fill="#FAF0D4"
                fillOpacity="0.95"
                stroke={color}
                strokeWidth="6"
              />
              <text x={l.x} y={l.y + 112} textAnchor="middle" className="hito__nombre">
                {l.nombre}
              </text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}
