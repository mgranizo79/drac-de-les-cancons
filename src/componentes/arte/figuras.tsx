import { useId } from 'react'
import type { SVGProps } from 'react'

// Los mismos dibujos que las fichas imprimibles de material-mesa/,
// convertidos a componentes. Cada figura vive en un lienzo 400 x 520
// con los pies apoyados en y=520.

/** useId() devuelve ids con ':', que rompen las referencias url(#id) del SVG. */
function idLimpio(bruto: string): string {
  return bruto.replace(/:/g, '')
}

export function FiguraLuca(props: SVGProps<SVGSVGElement>) {
  const id = idLimpio(useId())
  const torso = `torso-${id}`
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <clipPath id={torso}>
          <path d="M150,278 C142,320 144,368 148,404 L252,404 C256,368 258,320 250,278 Z" />
        </clipPath>
      </defs>
      <path
        d="M152,272 C86,300 66,410 74,480 L326,480 C334,410 314,300 248,272 Z"
        fill="#B02128"
        stroke="#8A1519"
        strokeWidth="5"
      />
      <rect x="162" y="410" width="34" height="60" fill="#3A4A6B" />
      <rect x="204" y="410" width="34" height="60" fill="#3A4A6B" />
      <rect x="150" y="456" width="52" height="36" rx="13" fill="#2A2119" />
      <rect x="198" y="456" width="52" height="36" rx="13" fill="#2A2119" />
      <g clipPath={`url(#${torso})`}>
        <rect x="130" y="266" width="145" height="150" fill="#FAF6EC" />
        <rect x="130" y="288" width="145" height="19" fill="#2E5C8A" />
        <rect x="130" y="324" width="145" height="19" fill="#2E5C8A" />
        <rect x="130" y="360" width="145" height="19" fill="#2E5C8A" />
      </g>
      <path
        d="M150,278 C142,320 144,368 148,404 L252,404 C256,368 258,320 250,278 Z"
        fill="none"
        stroke="#4A3728"
        strokeWidth="6"
      />
      <rect x="138" y="384" width="124" height="34" rx="7" fill="#4A3728" />
      <rect x="180" y="389" width="40" height="24" rx="5" fill="#E0B84A" stroke="#8A6520" strokeWidth="4" />
      <path d="M150,292 Q120,332 130,374" stroke="#F7CFA6" strokeWidth="34" fill="none" strokeLinecap="round" />
      <circle cx="130" cy="378" r="21" fill="#F7CFA6" />
      <path d="M250,292 Q292,272 314,296" stroke="#F7CFA6" strokeWidth="34" fill="none" strokeLinecap="round" />
      <g transform="translate(318,300) rotate(32)">
        <rect x="-15" y="-186" width="30" height="190" rx="7" fill="#DCE3EC" stroke="#93A0B2" strokeWidth="5" />
        <path d="M-15,-182 L0,-214 L15,-182 Z" fill="#DCE3EC" stroke="#93A0B2" strokeWidth="5" strokeLinejoin="round" />
        <rect x="-46" y="2" width="92" height="20" rx="8" fill="#E0B84A" stroke="#8A6520" strokeWidth="5" />
        <rect x="-13" y="20" width="26" height="54" rx="10" fill="#6B4A2A" stroke="#40291A" strokeWidth="5" />
      </g>
      <circle cx="318" cy="300" r="22" fill="#F7CFA6" />
      <rect x="180" y="248" width="40" height="38" fill="#EFC094" />
      <circle cx="200" cy="175" r="98" fill="#F7CFA6" stroke="#D9A374" strokeWidth="5" />
      <circle cx="148" cy="206" r="18" fill="#F3A6A6" opacity="0.55" />
      <circle cx="252" cy="206" r="18" fill="#F3A6A6" opacity="0.55" />
      <circle cx="171" cy="176" r="12" fill="#2A2119" />
      <circle cx="229" cy="176" r="12" fill="#2A2119" />
      <circle cx="175" cy="171" r="4" fill="#FFFFFF" />
      <circle cx="233" cy="171" r="4" fill="#FFFFFF" />
      <path d="M164,208 Q200,244 236,208" stroke="#8A4A26" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M124,134 C128,70 158,44 200,44 C242,44 272,70 276,134 Z" fill="#332820" />
      <path d="M124,130 C160,141 240,141 276,130 L278,146 C240,157 160,157 122,146 Z" fill="#E0B84A" />
      <path
        d="M76,148 C76,120 120,134 200,134 C280,134 324,120 324,148 C324,172 270,186 200,186 C130,186 76,172 76,148 Z"
        fill="#2A2119"
      />
      <circle cx="200" cy="92" r="21" fill="#FAF6EC" />
      <circle cx="193" cy="89" r="5" fill="#2A2119" />
      <circle cx="207" cy="89" r="5" fill="#2A2119" />
      <rect x="195" y="101" width="10" height="8" rx="2" fill="#2A2119" />
      <path d="M270,84 C302,48 332,40 348,34 C332,56 326,88 298,106 Z" fill="#C1272D" stroke="#8A1519" strokeWidth="4" />
    </svg>
  )
}

export function FiguraPaula(props: SVGProps<SVGSVGElement>) {
  const id = idLimpio(useId())
  const tunica = `tunica-${id}`
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <clipPath id={tunica}>
          <path d="M148,276 C136,324 138,372 144,410 L256,410 C262,372 264,324 252,276 Z" />
        </clipPath>
      </defs>
      <path
        d="M150,268 C82,296 60,412 68,486 L332,486 C340,412 318,296 250,268 Z"
        fill="#2C3E6B"
        stroke="#1C2947"
        strokeWidth="5"
      />
      <g fill="#E8D98A">
        <path d="M108,344 l9,22 24,2 -18,15 6,24 -21,-13 -21,13 6,-24 -18,-15 24,-2 Z" />
        <path d="M292,326 l9,22 24,2 -18,15 6,24 -21,-13 -21,13 6,-24 -18,-15 24,-2 Z" />
        <path d="M96,432 l7,18 20,2 -15,12 5,20 -17,-11 -17,11 5,-20 -15,-12 20,-2 Z" />
      </g>
      <path d="M112,180 C96,268 100,360 112,412 L152,412 C138,340 136,250 146,186 Z" fill="#4A3327" />
      <path d="M288,180 C304,268 300,360 288,412 L248,412 C262,340 264,250 254,186 Z" fill="#4A3327" />
      <rect x="164" y="414" width="32" height="56" fill="#5C4A7A" />
      <rect x="204" y="414" width="32" height="56" fill="#5C4A7A" />
      <rect x="152" y="458" width="50" height="34" rx="12" fill="#3A2C22" />
      <rect x="198" y="458" width="50" height="34" rx="12" fill="#3A2C22" />
      <g clipPath={`url(#${tunica})`}>
        <rect x="130" y="264" width="145" height="156" fill="#7B5EA7" />
        <rect x="130" y="330" width="145" height="18" fill="#9B7FC4" />
      </g>
      <path
        d="M148,276 C136,324 138,372 144,410 L256,410 C262,372 264,324 252,276 Z"
        fill="none"
        stroke="#4C3572"
        strokeWidth="6"
      />
      <rect x="138" y="386" width="124" height="30" rx="7" fill="#C9A227" />
      <path d="M150,292 Q118,330 126,372" stroke="#F7CFA6" strokeWidth="32" fill="none" strokeLinecap="round" />
      <circle cx="126" cy="376" r="20" fill="#F7CFA6" />
      <path d="M250,292 Q286,278 300,314" stroke="#F7CFA6" strokeWidth="32" fill="none" strokeLinecap="round" />
      <circle cx="302" cy="318" r="20" fill="#F7CFA6" />
      <rect x="182" y="248" width="36" height="36" fill="#EFC094" />
      <circle cx="200" cy="176" r="94" fill="#F7CFA6" stroke="#D9A374" strokeWidth="5" />
      <path
        d="M108,168 C112,92 150,58 200,58 C250,58 288,92 292,168 C270,132 240,116 200,116 C160,116 130,132 108,168 Z"
        fill="#4A3327"
      />
      <circle cx="152" cy="200" r="17" fill="#F3A6A6" opacity="0.55" />
      <circle cx="248" cy="200" r="17" fill="#F3A6A6" opacity="0.55" />
      <circle cx="173" cy="172" r="11" fill="#2A2119" />
      <circle cx="227" cy="172" r="11" fill="#2A2119" />
      <circle cx="177" cy="167" r="4" fill="#FFFFFF" />
      <circle cx="231" cy="167" r="4" fill="#FFFFFF" />
      <ellipse cx="200" cy="216" rx="20" ry="26" fill="#8A3A3A" />
      <ellipse cx="200" cy="226" rx="13" ry="12" fill="#C9645F" />
      <path
        d="M112,150 C140,128 170,120 200,120 C230,120 260,128 288,150 L284,168 C258,146 230,138 200,138 C170,138 142,146 116,168 Z"
        fill="#C9D4E5"
        stroke="#8E9BB0"
        strokeWidth="4"
      />
      <path
        d="M200,68 a42,42 0 1,0 0,84 a31,31 0 1,1 0,-84 Z"
        fill="#E8D98A"
        stroke="#B08F1E"
        strokeWidth="5"
        transform="rotate(-90 200 110)"
      />
      <g fill="#2C3E6B">
        <g transform="translate(332,196)">
          <ellipse cx="0" cy="0" rx="18" ry="14" transform="rotate(-22)" />
          <rect x="12" y="-66" width="8" height="66" />
          <path d="M20,-66 C42,-55 46,-34 34,-18 C42,-38 34,-50 20,-55 Z" />
        </g>
        <g transform="translate(366,116) scale(0.75)">
          <ellipse cx="0" cy="0" rx="18" ry="14" transform="rotate(-22)" />
          <rect x="12" y="-66" width="8" height="66" />
          <path d="M20,-66 C42,-55 46,-34 34,-18 C42,-38 34,-50 20,-55 Z" />
        </g>
      </g>
    </svg>
  )
}

/** El escudo de Sant Jordi, para la ficha de Luca. */
export function EscudoSantJordi(props: SVGProps<SVGSVGElement>) {
  const id = idLimpio(useId())
  const recorte = `escudo-${id}`
  const contorno = 'M12,12 L288,12 L288,178 C288,278 232,338 150,360 C68,338 12,278 12,178 Z'
  return (
    <svg viewBox="0 0 300 372" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <clipPath id={recorte}>
          <path d={contorno} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${recorte})`}>
        <rect x="0" y="0" width="300" height="372" fill="#FFFFFF" />
        <rect x="122" y="0" width="56" height="372" fill="#C1272D" />
        <rect x="0" y="112" width="300" height="56" fill="#C1272D" />
      </g>
      <path d={contorno} fill="none" stroke="#E0B84A" strokeWidth="14" />
      <path d={contorno} fill="none" stroke="#8A6520" strokeWidth="4" />
    </svg>
  )
}

/** Flamarada. Ojo: el nombre es la pista del episodio 2, no lo pongas en pantalla. */
export function FiguraDragon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M148,268 C74,196 26,204 14,236 C40,238 56,254 60,282 C86,268 104,272 116,286 C110,318 126,342 152,352 Z"
        fill="#8A1519"
        stroke="#5E0E12"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M252,268 C326,196 374,204 386,236 C360,238 344,254 340,282 C314,268 296,272 284,286 C290,318 274,342 248,352 Z"
        fill="#8A1519"
        stroke="#5E0E12"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <g stroke="#B94A48" strokeWidth="5" fill="none">
        <path d="M140,286 L60,268" />
        <path d="M136,318 L104,292" />
        <path d="M260,286 L340,268" />
        <path d="M264,318 L296,292" />
      </g>
      <path d="M252,442 C312,458 348,436 352,396 C338,420 314,428 268,414 Z" fill="#C1272D" stroke="#8A1519" strokeWidth="6" />
      <path d="M352,396 L392,368 L372,414 Z" fill="#E8A63A" stroke="#B0741A" strokeWidth="5" strokeLinejoin="round" />
      <g stroke="#C1272D" strokeWidth="34" strokeLinecap="round">
        <path d="M156,432 L150,478" />
        <path d="M244,432 L250,478" />
      </g>
      <g fill="#E8C87A" stroke="#B0741A" strokeWidth="4">
        <path d="M118,494 L182,494 L176,514 L124,514 Z" />
        <path d="M218,494 L282,494 L276,514 L224,514 Z" />
      </g>
      <ellipse cx="200" cy="378" rx="96" ry="92" fill="#C1272D" stroke="#8A1519" strokeWidth="7" />
      <ellipse cx="200" cy="396" rx="58" ry="64" fill="#E8A63A" />
      <g stroke="#C98A22" strokeWidth="5">
        <line x1="146" y1="368" x2="254" y2="368" />
        <line x1="148" y1="404" x2="252" y2="404" />
        <line x1="156" y1="440" x2="244" y2="440" />
      </g>
      <g fill="#8A1519">
        <path d="M200,286 L182,246 L218,246 Z" />
        <path d="M158,300 L142,266 L176,268 Z" />
        <path d="M242,300 L258,266 L224,268 Z" />
      </g>
      <ellipse cx="200" cy="212" rx="92" ry="80" fill="#C1272D" stroke="#8A1519" strokeWidth="7" />
      <path d="M108,224 C64,232 40,252 34,276 C64,272 92,266 116,258 Z" fill="#C1272D" stroke="#8A1519" strokeWidth="6" />
      <path d="M40,268 C10,264 -4,282 8,300 C24,290 34,290 46,296 C40,282 40,274 40,268 Z" fill="#E8A63A" stroke="#C1272D" strokeWidth="5" />
      <path d="M34,276 C16,278 10,288 18,296 C26,290 32,290 38,292 Z" fill="#F5E08A" />
      <ellipse cx="168" cy="196" rx="26" ry="28" fill="#F0D24A" stroke="#8A1519" strokeWidth="5" />
      <ellipse cx="238" cy="196" rx="26" ry="28" fill="#F0D24A" stroke="#8A1519" strokeWidth="5" />
      <ellipse cx="168" cy="196" rx="8" ry="22" fill="#2A2119" />
      <ellipse cx="238" cy="196" rx="8" ry="22" fill="#2A2119" />
      <path d="M138,158 L196,174" stroke="#8A1519" strokeWidth="9" strokeLinecap="round" />
      <path d="M266,158 L212,174" stroke="#8A1519" strokeWidth="9" strokeLinecap="round" />
      <path d="M148,142 C130,102 138,72 158,54 C158,96 166,124 178,144 Z" fill="#E8C87A" stroke="#B0741A" strokeWidth="5" />
      <path d="M252,142 C270,102 262,72 242,54 C242,96 234,124 222,144 Z" fill="#E8C87A" stroke="#B0741A" strokeWidth="5" />
      <circle cx="106" cy="240" r="7" fill="#5E0E12" />
    </svg>
  )
}
