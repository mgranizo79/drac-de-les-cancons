// El mapa de los cinco episodios.
//
// La versión anterior tenía cuatro zonas que se desbloqueaban tocándolas,
// pero los niños no llegaron a usarlo: miraban el dado y las cartas. Así que
// ahora es un mapa a secas, sin nada que tocar, y a cambio salen los ocho
// sitios de la campaña entera con el camino en el orden en que se visitan.
//
// El recorrido es una espiral: empiezan en la playa, dan la vuelta a la isla
// y acaban subiendo a la montaña del centro.

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
  { x: 880, y: 2210, episodio: 1, nombre: 'La playa' },
  { x: 1440, y: 1940, episodio: 1, nombre: 'El puente' },
  { x: 1660, y: 1500, episodio: 1, nombre: 'La cueva' },
  { x: 1460, y: 940, episodio: 2, nombre: 'El bosque' },
  { x: 1080, y: 700, episodio: 2, nombre: 'El molino' },
  { x: 640, y: 1020, episodio: 3, nombre: 'El árbol' },
  { x: 540, y: 1740, episodio: 4, nombre: 'La cala' },
  { x: 1090, y: 1400, episodio: 5, nombre: 'La montaña' },
]

export function MapaIsla() {
  return (
    <svg
      viewBox="110 380 1880 2060"
      xmlns="http://www.w3.org/2000/svg"
      className="mapa-isla"
      role="img"
      aria-label="Mapa de la isla del silencio con los sitios de los cinco episodios"
    >
      <defs>
        <path
          id="costa"
          d="M1040,470 C1330,478 1530,596 1614,790 C1690,970 1666,1116 1740,1288
             C1818,1470 1786,1668 1648,1818 C1516,1962 1552,2110 1418,2226
             C1284,2340 902,2358 706,2252 C512,2148 436,1972 486,1796
             C534,1622 400,1486 440,1288 C478,1096 570,918 706,782 C842,646 894,462 1040,470 Z"
        />
        <clipPath id="islaClip">
          <use href="#costa" />
        </clipPath>
        <g id="ola">
          <path d="M0,0 q14,-12 28,0 q14,12 28,0" fill="none" stroke="#6E9BB2" strokeWidth="7" strokeLinecap="round" />
        </g>
        <g id="arbolito">
          <rect x="-5" y="-20" width="10" height="22" fill="#7A5A38" />
          <circle cx="0" cy="-34" r="23" fill="#6E8A52" />
          <circle cx="-14" cy="-25" r="16" fill="#7E9A60" />
          <circle cx="14" cy="-25" r="16" fill="#5A7644" />
        </g>
      </defs>

      {/* mar */}
      <rect x="118" y="392" width="1864" height="2028" rx="18" fill="#A6C9DA" stroke="#5E8299" strokeWidth="8" />
      <g opacity="0.7">
        <use href="#ola" transform="translate(190,900)" />
        <use href="#ola" transform="translate(300,1180)" />
        <use href="#ola" transform="translate(190,1500)" />
        <use href="#ola" transform="translate(300,1860)" />
        <use href="#ola" transform="translate(210,2220)" />
        <use href="#ola" transform="translate(1800,700)" />
        <use href="#ola" transform="translate(1856,1120)" />
        <use href="#ola" transform="translate(1790,1700)" />
        <use href="#ola" transform="translate(1856,2060)" />
        <use href="#ola" transform="translate(880,2380)" />
        <use href="#ola" transform="translate(1280,440)" />
      </g>

      {/* isla */}
      <use href="#costa" fill="#F0DFB0" stroke="#C9A96A" strokeWidth="26" />
      <use href="#costa" fill="#E4CE96" stroke="#8A6A3C" strokeWidth="7" />
      <g clipPath="url(#islaClip)">
        <g fill="#9BB47C" opacity="0.8">
          <ellipse cx="1420" cy="1000" rx="260" ry="200" />
          <ellipse cx="680" cy="1080" rx="240" ry="190" />
          <ellipse cx="900" cy="1900" rx="280" ry="170" />
        </g>
        <ellipse cx="960" cy="2290" rx="480" ry="180" fill="#F5E7BC" />
      </g>

      {/* el camino, en el orden en que los visitan */}
      <polyline
        points="880,2210 1440,1940 1660,1500 1460,940 1080,700 640,1020 540,1740 1090,1400"
        fill="none"
        stroke="#A8342C"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 40"
        opacity="0.75"
      />

      {/* ── LA MONTAÑA, en el centro ── */}
      <g>
        <path d="M900,1560 L1090,1230 L1280,1560 Z" fill="#B3A186" stroke="#6B5B44" strokeWidth="8" strokeLinejoin="round" />
        <path d="M1090,1230 L1280,1560 L1170,1560 Z" fill="#9B8A70" />
        <path d="M1230,1560 L1360,1370 L1480,1560 Z" fill="#A8977C" stroke="#6B5B44" strokeWidth="8" strokeLinejoin="round" />
        <path d="M1046,1560 L1046,1490 C1046,1450 1134,1450 1134,1490 L1134,1560 Z" fill="#33261A" />
        <circle cx="1070" cy="1506" r="9" fill="#E8A63A" />
        <circle cx="1110" cy="1506" r="9" fill="#E8A63A" />
        <g fill="none" stroke="#8A7A66" strokeWidth="8" strokeLinecap="round" opacity="0.8">
          <path d="M1090,1210 C1122,1168 1058,1138 1088,1094" />
        </g>
      </g>

      {/* ── EL BARCO, en la playa ── */}
      <g transform="translate(760,2130) scale(0.62)">
        <g transform="rotate(-11)">
          <path d="M0,0 L300,0 C284,72 246,104 150,104 C54,104 16,72 0,0 Z" fill="#8A5F32" stroke="#5C3E1E" strokeWidth="8" />
          <rect x="0" y="-16" width="300" height="22" rx="8" fill="#A87A44" stroke="#5C3E1E" strokeWidth="6" />
          <rect x="140" y="-230" width="16" height="216" fill="#7A5730" />
          <path d="M156,-218 C232,-190 236,-118 158,-84 Z" fill="#F6EFDC" stroke="#B9A87E" strokeWidth="6" />
          <path d="M148,-244 L216,-228 L148,-212 Z" fill="#C1272D" />
        </g>
      </g>

      {/* ── EL PUENTE ── */}
      <g>
        <g clipPath="url(#islaClip)">
          <path
            d="M1300,1980 C1380,1936 1460,1998 1560,1954 L1560,2010 C1460,2054 1380,1992 1300,2036 Z"
            fill="#5C4A32"
            stroke="#3E3120"
            strokeWidth="5"
          />
        </g>
        <path d="M1300,1930 Q1430,2000 1560,1906" fill="none" stroke="#8A6A3C" strokeWidth="9" strokeLinecap="round" />
        <g stroke="#2E2118" strokeWidth="10" strokeLinecap="round">
          <line x1="1370" y1="1900" x2="1370" y2="1955" />
          <line x1="1430" y1="1912" x2="1430" y2="1967" />
          <line x1="1490" y1="1900" x2="1490" y2="1955" />
        </g>
      </g>

      {/* ── LA CUEVA ── */}
      <g>
        <path d="M1560,1580 L1560,1420 L1620,1394 L1690,1418 L1760,1394 L1760,1580 Z" fill="#C2AE8A" stroke="#6B5B44" strokeWidth="7" strokeLinejoin="round" />
        <path d="M1626,1580 L1626,1512 C1626,1466 1700,1466 1700,1512 L1700,1580 Z" fill="#33261A" />
      </g>

      {/* ── EL BOSQUE ── */}
      <use href="#arbolito" transform="translate(1390,1000) scale(1.15)" />
      <use href="#arbolito" transform="translate(1490,1030) scale(0.95)" />
      <use href="#arbolito" transform="translate(1440,930) scale(1.05)" />

      {/* ── EL MOLINO ── */}
      <g transform="translate(1080,700)">
        <path d="M-46,110 L-30,0 L30,0 L46,110 Z" fill="#C2AE8A" stroke="#6B5B44" strokeWidth="7" strokeLinejoin="round" />
        <path d="M-38,0 L0,-42 L38,0 Z" fill="#8A6A3C" stroke="#5C4426" strokeWidth="6" strokeLinejoin="round" />
        <g stroke="#7A5730" strokeWidth="9" strokeLinecap="round">
          <line x1="0" y1="-16" x2="-74" y2="-72" />
          <line x1="0" y1="-16" x2="74" y2="-72" />
          <line x1="0" y1="-16" x2="-58" y2="52" />
          <line x1="0" y1="-16" x2="58" y2="52" />
        </g>
        <circle cx="0" cy="-16" r="11" fill="#5C4426" />
      </g>

      {/* ── EL ÁRBOL DE LOS MIL NIDOS ── */}
      <g transform="translate(640,1020)">
        <rect x="-26" y="-30" width="52" height="120" rx="10" fill="#7A5A38" stroke="#523A22" strokeWidth="6" />
        <circle cx="0" cy="-80" r="96" fill="#5A7644" stroke="#3E5730" strokeWidth="6" />
        <circle cx="-64" cy="-42" r="58" fill="#6E8A52" />
        <circle cx="64" cy="-42" r="58" fill="#6E8A52" />
        <g fill="#8A6A3C">
          <ellipse cx="-40" cy="-90" rx="20" ry="13" />
          <ellipse cx="34" cy="-114" rx="20" ry="13" />
          <ellipse cx="8" cy="-46" rx="20" ry="13" />
          <ellipse cx="-58" cy="-24" rx="18" ry="12" />
        </g>
      </g>

      {/* ── LA CALA ESCONDIDA ── */}
      <g transform="translate(540,1740)">
        <g fill="#FAF6EC" stroke="#8A6A3C" strokeWidth="6">
          <path d="M-92,60 L-92,6 L-62,-20 L-32,6 L-32,60 Z" />
          <path d="M-24,60 L-24,-6 L10,-36 L44,-6 L44,60 Z" />
          <path d="M52,60 L52,10 L80,-14 L108,10 L108,60 Z" />
        </g>
        {/* el faro */}
        <g transform="translate(0,-96)">
          <path d="M-20,96 L-13,-6 L13,-6 L20,96 Z" fill="#FAF6EC" stroke="#8A6A3C" strokeWidth="6" />
          <rect x="-15" y="24" width="30" height="16" fill="#C1272D" />
          <rect x="-15" y="60" width="30" height="16" fill="#C1272D" />
          <path d="M-18,-6 L18,-6 L12,-30 L-12,-30 Z" fill="#E8C87A" stroke="#8A6520" strokeWidth="5" />
        </g>
      </g>

      {/* ── LOS OCHO SITIOS, numerados por episodio ── */}
      {LUGARES.map((l) => {
        const color = COLOR_EPISODIO[l.episodio]
        return (
          <g key={l.nombre} className="hito">
            <circle cx={l.x} cy={l.y} r="46" fill="#FFFFFF" stroke={color} strokeWidth="9" />
            <text x={l.x} y={l.y + 17} textAnchor="middle" className="hito__numero" fill={color}>
              {l.episodio}
            </text>
            <g>
              <rect
                x={l.x - 132}
                y={l.y + 58}
                width="264"
                height="60"
                rx="18"
                fill="#FAF0D4"
                fillOpacity="0.95"
                stroke={color}
                strokeWidth="5"
              />
              <text x={l.x} y={l.y + 100} textAnchor="middle" className="hito__nombre">
                {l.nombre}
              </text>
            </g>
          </g>
        )
      })}

      {/* rosa de los vientos */}
      <g transform="translate(290,620)">
        <circle cx="0" cy="0" r="92" fill="#F3E3BE" fillOpacity="0.92" stroke="#7A5A32" strokeWidth="7" />
        <path d="M0,-80 L20,-20 L80,0 L20,20 L0,80 L-20,20 L-80,0 L-20,-20 Z" fill="#7A5A32" />
        <path d="M0,-80 L20,-20 L0,0 Z" fill="#C1272D" />
        <path d="M0,-80 L-20,-20 L0,0 Z" fill="#8A2820" />
      </g>
    </svg>
  )
}
