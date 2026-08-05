# El Drac de les Cançons

Web para dirigir una campaña de D&D muy simplificada para dos niños (3 y 9 años),
más el material de mesa imprimible.

React + Vite + React Router. Sin backend: todo el estado vive en el
`localStorage` del dispositivo que lo usa.

---

## Las dos pantallas

| Ruta | Dispositivo | Qué es |
|------|-------------|--------|
| `/mesa` | iPad en horizontal, apoyado en la mesa | Lo que ven los niños. Cero texto de DM. |
| `/dm-x7k2m9` | Portátil del DM, horizontal | El guion, a dos columnas. |

`/` redirige a `/mesa`. Cualquier otra ruta, también.

### Por qué esa ruta rara

`/dm-x7k2m9` es deliberadamente impredecible para que una niña de 9 años no
la encuentre por casualidad. Para que siga siéndolo:

- No está enlazada desde ninguna parte de la web.
- No hay sitemap.xml en el proyecto.
- `robots.txt` bloquea el sitio **entero** (`Disallow: /`), así no hace falta
  nombrar la ruta del DM en ningún fichero público.
- `netlify.toml` manda `X-Robots-Tag: noindex, nofollow` en todas las respuestas.
- La ruta del DM añade además su propia etiqueta `noindex` al cargarse.

Si algún día quieres cambiarla, está en un único sitio: `RUTA_DM` en `src/App.tsx`.

---

## Añadir los episodios 2 a 5

Todo el contenido son datos. **No hay que tocar ningún componente.**

1. Copia `src/datos/episodio1.ts` a `episodio2.ts` y reescribe el contenido.
2. En `src/datos/campana.ts`, impórtalo y añádelo al array `episodios`.
3. Rellena su fila en `arcoCampana` (la tabla de la columna derecha del DM).

El tipo `Escena` (en `src/datos/tipos.ts`) es exactamente la estructura de los
seis bloques de la pantalla del DM:

```ts
{
  id: 'ep2-e1',
  titulo: 'El nido vacío',
  duracion: '5 min',
  leerEnVozAlta: ['...'],   // 1 · texto literal, sale entrecomillado y en serif grande
  acotacion: '...',          // qué haces tú mientras lees
  loQueVen: ['...'],         // 2 · viñetas cortas para improvisar
  preguntar: [               // 3 · una pregunta por niño
    { para: 'paula', texto: '¿...?' },
    { para: 'luca',  texto: '¿...?' },
  ],
  tiradas: [                 // 4 · caja aparte, bien visible
    { quien: 'Paula', que: '...', exito: '...', fallo: '...', nota: '...' },
  ],
  pistaDelDragon: '...',     // 5 · sale en rojo
  siSeTuerce: ['...'],       // 6 · frases literales para cuando Luca se despiste
  desbloquea: 'cueva',       // opcional: lugar del mapa que se abre en /mesa
  rescataCancion: 2,         // opcional: número de canción rescatada
}
```

Para añadir un sitio al mapa: mételo en el array `LUGARES` de
`src/componentes/arte/MapaIsla.tsx`, con sus coordenadas sobre la ilustración
(el `viewBox` son sus medidas: 1600 × 2400). El sitio tiene que salir ya
dibujado en la ilustración, porque el mapa dejó de dibujarse en código.
Tampoco hay ya zonas que se desbloqueen tocándolas, así que no hace falta
tocar `IdLugar` ni `lugares`.

Si el sitio tiene que salir también en el póster de pared, añádelo en
`material-mesa/html/3-mapa-isla.html` y regenera su PDF.

---

## Desarrollo

```bash
npm install
npm run dev
```

- `npm run build` — genera `dist/`
- `npm run typecheck` — comprobación de tipos (no bloquea el build)
- `npm run preview` — sirve el build para probarlo

---

## Material imprimible

En `material-mesa/` hay cinco PDF A4 a color, listos para la impresora:

| Fichero | Qué es |
|---------|--------|
| `pdf/1-ficha-luca.pdf` | Ficha de Sir Luca: escudo de Sant Jordi y 3 huecos para las fichas de Valentía |
| `pdf/2-ficha-paula.pdf` | Ficha de Paula: sus tres poderes y el cuaderno de pistas sobre el dragón |
| `pdf/3-mapa-isla.pdf` | Póster de la isla con los ocho sitios de la campaña, numerados por episodio |
| `pdf/4-tokens.pdf` | Figuras recortables que se tienen de pie |
| `pdf/5-tracker-canciones.pdf` | Tracker de las 5 canciones, para la pared |
| `pdf/0-material-completo-episodio-1.pdf` | Los cinco anteriores en un solo archivo |

Los fuentes están en `material-mesa/html/`. Son SVG a tamaño A4 exacto: para
regenerar los PDF después de tocarlos, con Chrome instalado:

```bash
chrome --headless --disable-gpu --no-pdf-header-footer --allow-file-access-from-files --print-to-pdf=salida.pdf entrada.html
```

El `--allow-file-access-from-files` hace falta desde que las fichas y las
figuras llevan ilustraciones: sin él Chrome no carga las imágenes locales y
salen los huecos en blanco. Las imágenes de impresión están en
`material-mesa/imagenes/tarjetas/` (las mismas de `public/imagenes/`,
reescaladas a 750 px y en JPEG para que los PDF no pesen 7 MB).

El mapa es la ilustración `material-mesa/imagenes/mapa-isla.jpg` con los ocho
sitios encima, la misma que se ve en `/mesa` (ahí, reescalada a 1200 px en
`public/imagenes/`). El mapa que se dibujaba a mano en SVG ya no se usa en
ningún sitio: se queda en el historial de git. Al tocar el imprimible hay que
rehacer también el archivo completo, que lleva dentro su página:

```bash
python -c "from pypdf import PdfWriter; w=PdfWriter(); [w.append(f) for f in ['1-ficha-luca.pdf','2-ficha-paula.pdf','3-mapa-isla.pdf','4-tokens.pdf','5-tracker-canciones.pdf']]; w.write('0-material-completo-episodio-1.pdf')"
```

---

## Desplegar en Netlify

`netlify.toml` ya trae la configuración: build `npm run build`, publish `dist`
y el redirect SPA `/* → /index.html 200` (sin él, React Router da 404 al
recargar `/mesa` o la ruta del DM).

Los pasos exactos están en `DESPLIEGUE.md`.
