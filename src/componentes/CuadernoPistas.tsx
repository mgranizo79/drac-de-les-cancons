interface Props {
  pistas: string[]
  apuesta: string
  onPista: (indice: number, texto: string) => void
  onApuesta: (texto: string) => void
}

export function CuadernoPistas({ pistas, apuesta, onPista, onApuesta }: Props) {
  return (
    <section className="cuaderno">
      <h2 className="cuaderno__titulo">MIS PISTAS SOBRE EL DRAGÓN</h2>
      <p className="cuaderno__ayuda">Una pista por episodio. Apúntalas todas.</p>

      <ol className="cuaderno__lista">
        {pistas.map((texto, i) => (
          <li key={i} className="cuaderno__linea">
            <span className={`cuaderno__numero cuaderno__numero--${i + 1}`}>{i + 1}</span>
            <input
              type="text"
              className="cuaderno__campo"
              value={texto}
              placeholder={i === 0 ? 'Ej: escupe fuego…' : ''}
              onChange={(e) => onPista(i, e.target.value)}
              aria-label={`Pista del episodio ${i + 1}`}
            />
          </li>
        ))}
      </ol>

      <div className="apuesta">
        <label className="apuesta__titulo" htmlFor="apuesta">
          MI APUESTA: ¿QUÉ DRAGÓN ES?
        </label>
        <input
          id="apuesta"
          type="text"
          className="apuesta__campo"
          value={apuesta}
          placeholder="Escribe aquí tu teoría"
          onChange={(e) => onApuesta(e.target.value)}
        />
        <p className="apuesta__nota">Puedes cambiar de idea en cada episodio</p>
      </div>
    </section>
  )
}
