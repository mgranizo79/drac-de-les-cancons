# Desplegar en Netlify — pasos exactos

Todo lo que hay que configurar ya está en `netlify.toml`. Netlify lo lee solo:
no hace falta rellenar nada en su interfaz.

## ¿Hace falta instalar Node en el portátil?

**No.** Netlify compila en sus propios servidores: clona el repo de GitHub,
ejecuta ahí `npm install` y `npm run build`, y publica el `dist/` resultante.
En este portátil solo hace falta **git**, que ya está instalado.

Node en local sirve únicamente para dos cosas opcionales:

- `npm run dev` — ver los cambios al instante mientras editas.
- `npm run build` — comprobar que compila **antes** de subirlo.

Sin eso, el ciclo es: editas → push → Netlify compila → miras el resultado.
Si algo no compila, Netlify **no publica nada roto**: deja el sitio anterior
como está y te enseña el error en el log del despliegue.

---

## 1. Subir el repo a GitHub

Desde la carpeta del proyecto:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Campaña El Drac de les Cançons: web de mesa y guion del DM"
```

Crea el repositorio en GitHub. **Que sea privado**: así la ruta del DM tampoco
se pasea por ahí.

- Con GitHub CLI:

```bash
gh repo create drac-de-les-cancons --private --source=. --remote=origin --push
```

- O a mano: crea el repo vacío en github.com y luego:

```bash
git remote add origin https://github.com/TU-USUARIO/drac-de-les-cancons.git
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

---

## 2. Conectarlo a Netlify

1. Entra en [app.netlify.com](https://app.netlify.com) y haz login con GitHub.
2. **Add new site** → **Import an existing project**.
3. Elige **GitHub** y autoriza el acceso al repositorio.
4. Selecciona `drac-de-les-cancons`.
5. En la pantalla de configuración **no toques nada**: Netlify lee `netlify.toml`
   y ya rellena build command (`npm run build`) y publish directory (`dist`).
6. **Deploy**.

El primer despliegue tarda un par de minutos. Te queda una URL del tipo
`https://algo-aleatorio.netlify.app`.

---

## 3. Ponerle un nombre decente

**Site configuration** → **Site details** → **Change site name**.

Por ejemplo `drac-cancons` → `https://drac-cancons.netlify.app`.

Las dos direcciones que vas a usar:

- iPad de los niños: `https://drac-cancons.netlify.app/mesa`
- Tu portátil: `https://drac-cancons.netlify.app/dm-x7k2m9`

---

## 4. Comprobar que el redirect SPA funciona

Es el paso que más se olvida. Abre **directamente** en el navegador:

```
https://TU-SITIO.netlify.app/dm-x7k2m9
```

Y una vez cargada, **recarga la página con F5**.

- Si sale el guion → el redirect funciona.
- Si sale un 404 de Netlify → `netlify.toml` no se ha aplicado. Revisa que esté
  en la raíz del repo y que el despliegue lo haya detectado (aparece en el log
  del build como "Redirect rules processed").

---

## 5. Ponerlo en la pantalla de inicio del iPad

En Safari, con `/mesa` abierto: botón de compartir → **Añadir a pantalla de
inicio**. Se abre a pantalla completa, sin barra de navegación, y los niños no
pueden escribir otra URL.

---

## Actualizaciones

Cada `git push` a `main` dispara un despliegue nuevo automáticamente. Para
añadir el episodio 2 basta con editar los datos, hacer commit y push.

---

## Dos avisos

**El estado no se sincroniza entre dispositivos.** No hay backend: lo que toquen
en el iPad se guarda en el iPad, y tus notas del DM se guardan en tu portátil.
Es lo que pediste, pero conviene saberlo: si borras los datos del navegador,
se pierden las pistas que haya escrito Paula.

**El nombre del dragón es un spoiler.** «Flamarada» es la pista del episodio 2.
No aparece en ninguna pantalla de `/mesa` a propósito — pero sí está impreso en
la hoja de figuras recortables, así que no saques ese token hasta que toque.
