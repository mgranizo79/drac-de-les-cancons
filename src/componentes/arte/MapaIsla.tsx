import type { IdLugar } from '../../datos/tipos'

interface Props {
  desbloqueados: IdLugar[]
  onTocar: (id: IdLugar) => void
}

// El mismo mapa que el imprimible, pero con los cuatro sitios
// apagados hasta que un dedo los toca.

export function MapaIsla({ desbloqueados, onTocar }: Props) {
  const abierto = (id: IdLugar) => desbloqueados.includes(id)

  const claseLugar = (id: IdLugar) => (abierto(id) ? 'lugar lugar--abierto' : 'lugar')

  return (
    <svg
      viewBox="110 380 1880 2060"
      xmlns="http://www.w3.org/2000/svg"
      className="mapa-isla"
      role="img"
      aria-label="Mapa de la isla del silencio"
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
        <g id="arbol">
          <rect x="-6" y="-24" width="12" height="26" fill="#7A5A38" />
          <circle cx="0" cy="-40" r="27" fill="#6E8A52" />
          <circle cx="-17" cy="-29" r="19" fill="#7E9A60" />
          <circle cx="17" cy="-29" r="19" fill="#5A7644" />
        </g>
      </defs>

      {/* mar */}
      <rect x="118" y="392" width="1864" height="2028" rx="18" fill="#A6C9DA" stroke="#5E8299" strokeWidth="8" />
      <g opacity="0.7">
        <use href="#ola" transform="translate(190,900)" />
        <use href="#ola" transform="translate(300,1120)" />
        <use href="#ola" transform="translate(180,1360)" />
        <use href="#ola" transform="translate(300,1580)" />
        <use href="#ola" transform="translate(190,1820)" />
        <use href="#ola" transform="translate(310,2040)" />
        <use href="#ola" transform="translate(1760,560)" />
        <use href="#ola" transform="translate(1820,760)" />
        <use href="#ola" transform="translate(1846,1500)" />
        <use href="#ola" transform="translate(1790,1720)" />
        <use href="#ola" transform="translate(1856,1960)" />
        <use href="#ola" transform="translate(1720,2180)" />
        <use href="#ola" transform="translate(880,2380)" />
      </g>

      {/* isla */}
      <use href="#costa" fill="#F0DFB0" stroke="#C9A96A" strokeWidth="26" />
      <use href="#costa" fill="#E4CE96" stroke="#8A6A3C" strokeWidth="7" />
      <g clipPath="url(#islaClip)">
        <g fill="#9BB47C" opacity="0.85">
          <ellipse cx="700" cy="1180" rx="250" ry="200" />
          <ellipse cx="1420" cy="1480" rx="230" ry="190" />
          <ellipse cx="860" cy="1900" rx="290" ry="180" />
        </g>
        <ellipse cx="980" cy="2300" rx="500" ry="190" fill="#F5E7BC" />
      </g>

      {/* camino */}
      <g fill="none" stroke="#A8342C" strokeWidth="13" strokeLinecap="round" strokeDasharray="4 44" opacity="0.55">
        <path d="M900,2200 C1080,2160 1260,2060 1360,1962" />
        <path d="M1300,1812 C1120,1762 900,1722 800,1682" />
        <path d="M760,1560 C820,1400 900,1240 985,1060" />
      </g>

      <use href="#arbol" transform="translate(560,1240) scale(1.2)" />
      <use href="#arbol" transform="translate(1440,1560) scale(1.15)" />
      <use href="#arbol" transform="translate(880,1960) scale(1.05)" />

      {/* ── LA MONTAÑA ── */}
      <g className={claseLugar('montana')} onClick={() => onTocar('montana')}>
        <g className="lugar__dibujo">
          <path d="M1160,1000 L1350,720 L1520,1000 Z" fill="#A8977C" stroke="#6B5B44" strokeWidth="8" strokeLinejoin="round" />
          <path d="M1350,720 L1520,1000 L1420,1000 Z" fill="#8F7F66" />
          <path d="M760,1000 L1010,590 L1260,1000 Z" fill="#B3A186" stroke="#6B5B44" strokeWidth="8" strokeLinejoin="round" />
          <path d="M1010,590 L1260,1000 L1120,1000 Z" fill="#9B8A70" />
          <path d="M960,1000 L960,900 C960,846 1060,846 1060,900 L1060,1000 Z" fill="#33261A" />
          <circle cx="990" cy="922" r="11" fill="#E8A63A" />
          <circle cx="1032" cy="922" r="11" fill="#E8A63A" />
          <g fill="none" stroke="#8A7A66" strokeWidth="9" strokeLinecap="round" opacity="0.8">
            <path d="M1010,566 C1046,518 972,484 1006,434" />
            <path d="M1090,640 C1124,602 1064,572 1094,532" />
          </g>
        </g>
        {abierto('montana') ? (
          <g className="lugar__etiqueta">
            <rect x="836" y="1030" width="600" height="86" rx="22" fill="#FAF0D4" stroke="#8A2820" strokeWidth="7" />
            <text x="1136" y="1090" textAnchor="middle" className="lugar__texto lugar__texto--peligro">
              LA MONTAÑA DEL DRAGÓN
            </text>
          </g>
        ) : (
          <g className="lugar__cerrado">
            <circle cx="1140" cy="850" r="86" />
            <text x="1140" y="890" textAnchor="middle">?</text>
          </g>
        )}
        <rect className="lugar__toque" x="740" y="570" width="800" height="470" />
      </g>

      {/* ── LA CUEVA ── */}
      <g className={claseLugar('cueva')} onClick={() => onTocar('cueva')}>
        <g className="lugar__dibujo">
          <path
            d="M470,1640 L470,1420 L556,1382 L646,1414 L742,1376 L830,1408 L900,1382 L900,1640 Z"
            fill="#C2AE8A"
            stroke="#6B5B44"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <g stroke="#9C876A" strokeWidth="6" strokeLinecap="round">
            <line x1="492" y1="1476" x2="878" y2="1462" />
            <line x1="492" y1="1536" x2="878" y2="1524" />
            <line x1="492" y1="1596" x2="878" y2="1588" />
          </g>
          <path d="M614,1640 L614,1546 C614,1478 746,1478 746,1546 L746,1640 Z" fill="#33261A" />
          <circle cx="680" cy="1580" r="15" fill="#E8C87A" opacity="0.9" />
        </g>
        {abierto('cueva') ? (
          <g className="lugar__etiqueta">
            <rect x="410" y="1666" width="620" height="86" rx="22" fill="#FAF0D4" stroke="#5C4426" strokeWidth="7" />
            <text x="720" y="1726" textAnchor="middle" className="lugar__texto">
              LA CUEVA DEL ACANTILADO
            </text>
          </g>
        ) : (
          <g className="lugar__cerrado">
            <circle cx="685" cy="1510" r="80" />
            <text x="685" y="1548" textAnchor="middle">?</text>
          </g>
        )}
        <rect className="lugar__toque" x="450" y="1360" width="470" height="320" />
      </g>

      {/* ── EL PUENTE ── */}
      <g className={claseLugar('puente')} onClick={() => onTocar('puente')}>
        <g className="lugar__dibujo">
          <g clipPath="url(#islaClip)">
            <path
              d="M1070,1898 C1180,1846 1290,1922 1400,1874 C1500,1830 1590,1896 1668,1856
                 L1668,1930 C1590,1970 1500,1904 1400,1948 C1290,1996 1180,1920 1070,1972 Z"
              fill="#5C4A32"
              stroke="#3E3120"
              strokeWidth="6"
            />
          </g>
          <g stroke="#7A5730" strokeWidth="12" strokeLinecap="round">
            <line x1="1050" y1="1748" x2="1050" y2="1852" />
            <line x1="1690" y1="1718" x2="1690" y2="1822" />
          </g>
          <path d="M1050,1830 Q1370,1960 1690,1800" fill="none" stroke="#8A6A3C" strokeWidth="11" strokeLinecap="round" />
          <path d="M1050,1760 Q1370,1890 1690,1730" fill="none" stroke="#8A6A3C" strokeWidth="9" strokeLinecap="round" />
          <g stroke="#A8834A" strokeWidth="9" strokeLinecap="round">
            <line x1="1050" y1="1760" x2="1050" y2="1830" />
            <line x1="1146" y1="1792" x2="1146" y2="1862" />
            <line x1="1594" y1="1771" x2="1594" y2="1841" />
            <line x1="1690" y1="1730" x2="1690" y2="1800" />
          </g>
          <g stroke="#2E2118" strokeWidth="14" strokeLinecap="round">
            <line x1="1242" y1="1812" x2="1242" y2="1882" />
            <line x1="1370" y1="1817" x2="1370" y2="1887" />
            <line x1="1498" y1="1800" x2="1498" y2="1870" />
          </g>
          <g fill="none" stroke="#C1272D" strokeWidth="8" strokeLinecap="round" opacity="0.85">
            <path d="M1306,1780 C1322,1756 1290,1742 1308,1716" />
            <path d="M1434,1768 C1450,1744 1418,1730 1436,1704" />
          </g>
        </g>
        {abierto('puente') ? (
          <g className="lugar__etiqueta">
            <rect x="1090" y="2000" width="560" height="86" rx="22" fill="#FAF0D4" stroke="#5C4426" strokeWidth="7" />
            <text x="1370" y="2060" textAnchor="middle" className="lugar__texto">
              EL PUENTE DE CUERDAS
            </text>
          </g>
        ) : (
          <g className="lugar__cerrado">
            <circle cx="1370" cy="1830" r="80" />
            <text x="1370" y="1868" textAnchor="middle">?</text>
          </g>
        )}
        <rect className="lugar__toque" x="1020" y="1690" width="700" height="310" />
      </g>

      {/* ── LA PLAYA ── */}
      <g className={claseLugar('playa')} onClick={() => onTocar('playa')}>
        <g className="lugar__dibujo">
          <g transform="translate(690,2126) scale(0.86)">
            <g transform="rotate(-11)">
              <path d="M0,0 L300,0 C284,72 246,104 150,104 C54,104 16,72 0,0 Z" fill="#8A5F32" stroke="#5C3E1E" strokeWidth="8" />
              <rect x="0" y="-16" width="300" height="22" rx="8" fill="#A87A44" stroke="#5C3E1E" strokeWidth="6" />
              <rect x="140" y="-230" width="16" height="216" fill="#7A5730" />
              <path d="M156,-218 C232,-190 236,-118 158,-84 Z" fill="#F6EFDC" stroke="#B9A87E" strokeWidth="6" />
              <path d="M140,-206 C76,-182 72,-124 138,-96 Z" fill="#EDE3CA" stroke="#B9A87E" strokeWidth="6" />
              <path d="M148,-244 L216,-228 L148,-212 Z" fill="#C1272D" />
            </g>
          </g>
        </g>
        {abierto('playa') ? (
          <g className="lugar__etiqueta">
            <rect x="600" y="2262" width="480" height="86" rx="22" fill="#FAF0D4" stroke="#5C4426" strokeWidth="7" />
            <text x="840" y="2322" textAnchor="middle" className="lugar__texto">
              LA PLAYA
            </text>
          </g>
        ) : (
          <g className="lugar__cerrado">
            <circle cx="860" cy="2160" r="80" />
            <text x="860" y="2198" textAnchor="middle">?</text>
          </g>
        )}
        <rect className="lugar__toque" x="560" y="1980" width="560" height="380" />
      </g>

      {/* rosa de los vientos */}
      <g transform="translate(288,640)">
        <circle cx="0" cy="0" r="104" fill="#F3E3BE" fillOpacity="0.92" stroke="#7A5A32" strokeWidth="7" />
        <path d="M0,-90 L22,-22 L90,0 L22,22 L0,90 L-22,22 L-90,0 L-22,-22 Z" fill="#7A5A32" />
        <path d="M0,-90 L22,-22 L0,0 Z" fill="#C1272D" />
        <path d="M0,-90 L-22,-22 L0,0 Z" fill="#8A2820" />
      </g>
    </svg>
  )
}
