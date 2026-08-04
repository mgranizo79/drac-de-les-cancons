import type { Episodio } from './tipos'

// Episodio 4. Dos cosas pasan aquí: aparece la gente de la isla (hasta ahora
// parecía deshabitada) y se descubre el punto débil, que es lo que hace
// ganable el episodio 5. La pista tiene que quedar clarísima: agua de mar.

export const episodio4: Episodio = {
  numero: 4,
  titulo: 'La Cala Escondida',
  duracionObjetivo: '30-40 min',
  cancion: 'La Canción de la Gente',
  escenas: [
    {
      id: 'ep4-e1',
      titulo: 'Humo al otro lado',
      duracion: '4 min',
      leerEnVozAlta: [
        'Con los pájaros cantando otra vez, la isla ya casi suena normal. Casi.',
        'Desde arriba del árbol se ve algo que no habíais visto nunca: al otro lado de la isla, pegado al mar, sale un hilillo de humo. Y no es el humo de la montaña. Este es pequeño, y es de una chimenea.',
        'Hay alguien más en esta isla. Y lleva todo este tiempo ahí.',
      ],
      acotacion:
        'Que caigan ellos en la cuenta de que nunca han visto una sola persona en la isla. Si Paula pregunta por qué no han salido antes, contesta con otra pregunta: «¿tú saldrías, con un dragón arriba?».',
      loQueVen: [
        'Un hilo de humo fino, muy lejos, justo al lado del mar.',
        'Tejados pequeños entre las rocas: unas quince casas, no más.',
        'Barcas de pesca boca abajo en la arena, bien colocadas y cuidadas.',
        'Nadie por la calle. Pero hay ropa tendida, y la ropa está limpia.',
        'Capitán Migas se pone nerviosísimo y sale volando hacia allí sin esperaros.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Por qué crees que nadie ha salido a saludarnos en cuatro días?' },
        { para: 'luca', texto: 'Vamos a conocer gente nueva. ¿Cómo te presentas tú?' },
      ],
      tiradas: [],
      siSeTuerce: [
        '«Luca, cuenta cuántas casas ves desde aquí arriba.»',
        '«Sir Luca, ve tú delante y llama a la puerta con el escudo.»',
      ],
    },

    {
      id: 'ep4-e2',
      titulo: 'El pueblo que no puede hablar',
      duracion: '6 min',
      leerEnVozAlta: [
        'Es un pueblo de pescadores pequeñito, metido en una cala entre dos rocas. Y está lleno de gente.',
        'Salen de las casas y se os quedan mirando. Un montón de personas: viejos, padres, madres, niños. Todos abren la boca para decir algo…',
        'Y no sale nada. Ni una palabra. Llevan así desde que llegó ella.',
        'Entonces una señora saca una pizarra y escribe con tiza, muy deprisa: «¿HABÉIS BAJADO DE LA MONTAÑA?»',
      ],
      acotacion:
        'La gente del pueblo se comunica con pizarras, gestos y dibujos. Es una escena de mucho ruido silencioso: haz aspavientos, señala, escribe en el aire. Si Luca se pone a hacer gestos con ellos, perfecto: esta escena premia eso.',
      loQueVen: [
        'Unas quince casas encaladas, todas con la puerta abierta.',
        'Gente de todas las edades, muda, haciéndose entender con las manos.',
        'Pizarras y trozos de carbón colgando de cada puerta, listos para escribir.',
        'Las barcas están secas y bien guardadas: hace mucho que no sale nadie a pescar.',
        'En el centro del pueblo hay un faro apagado, y de él sí sale un ruido: un zumbido bajito.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Qué le contestas a la señora de la pizarra?' },
        { para: 'luca', texto: 'Hay niños de tu edad mirándote. ¿Qué haces?' },
      ],
      tiradas: [
        {
          quien: 'Los dos, ayudándose',
          que: 'Contarles con gestos todo lo que habéis hecho hasta ahora',
          exito:
            'Lo entienden. Y cuando pilláis que habéis devuelto el mar, el viento y los pájaros, el pueblo entero se pone a aplaudir. Aplausos sin una sola voz: es rarísimo y es precioso.',
          fallo:
            'Entienden que venís a robarles las barcas y se lía un buen jaleo mudo hasta que Luca enseña el escudo de Sant Jordi y todo el mundo se calma de golpe.',
          nota: 'Si os ayudáis, tiráis los dos dados y os quedáis el mejor. El fallo aquí es divertidísimo: aprovéchalo.',
        },
      ],
      siSeTuerce: [
        '«Luca, explícales tú sin hablar que hemos vencido a un kobold. ¡Sin voz!»',
        '«Sir Luca, enséñales el escudo. ¡Levántalo bien alto!»',
      ],
    },

    {
      id: 'ep4-e3',
      titulo: 'Los dibujos de Mira',
      duracion: '7 min',
      leerEnVozAlta: [
        'Una niña de más o menos vuestra edad os coge de la mano y os lleva a la pared del puerto. Se llama Mira: lo sabéis porque lo lleva escrito en el delantal.',
        'La pared entera está llena de dibujos suyos, hechos con carbón. Es lo que ha ido pasando en la isla, día por día, desde que llegó el dragón.',
        'Y en un rincón hay un dibujo distinto de todos los demás. Ese lo ha repasado tantas veces que casi ha agujereado la piedra.',
      ],
      acotacion:
        'El dibujo repasado es la pista, pero no lo señales tú. Deja que lo encuentren. Si tardan, que Mira se ponga delante de ese dibujo y no se mueva.',
      loQueVen: [
        'Decenas de dibujos a carbón: el dragón llegando, la gente escondiéndose, las barcas guardadas.',
        'Un dibujo donde el dragón vuela por encima de las casas, muy grande.',
        'Otro donde el dragón se lleva algo en las garras, y la gente abajo con la boca abierta.',
        'El dibujo repasado: el dragón volando bajito sobre el mar, una ola que sube… y el dragón saliendo disparado hacia arriba, torcido, con la boca abierta.',
        'Alrededor de ese dibujo, Mira ha dibujado muchísimas olas. Muchísimas. Como si fuera importante.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Qué está pasando en ese dibujo? ¿Por qué lo habrá repasado tanto?' },
        { para: 'luca', texto: '¿Dibujas tú algo en la pared? ¿Qué dibujas?' },
      ],
      tiradas: [
        {
          quien: 'Paula',
          que: 'Entender qué le pasó al dragón en ese dibujo',
          exito:
            'Lo ve claro: una ola le salpicó y salió huyendo. El agua del mar le hace daño. Mira asiente con la cabeza tan fuerte que casi se marea.',
          fallo:
            'Se queda a medias: entiende que pasó algo en el mar, pero no qué. Mira, desesperada, coge un cubo, lo llena de agua y hace como que se la tira a un dragón imaginario. Ahora sí.',
          nota: 'La pista sale con 4+ y con 1-3. Lo único que cambia es lo ridícula que se pone Mira para explicarlo.',
        },
      ],
      siSeTuerce: [
        '«Luca, dibuja tú un dragón en la pared. ¡Grande!»',
        '«Sir Luca, coge el cubo de agua. ¡Tú serás el que se lo tire!»',
      ],
    },

    {
      id: 'ep4-e4',
      titulo: 'El kobold del faro',
      duracion: '8 min',
      leerEnVozAlta: [
        'El zumbido sale del faro. Subís los escalones de caracol y arriba del todo, donde debería estar la luz, hay un tarro gigante. El más grande que habéis visto.',
        'Dentro hay cientos de lucecitas apretadas, y suena a mercado, a patio de colegio, a gente riéndose. Son todas las voces del pueblo.',
        'Y delante del tarro hay un kobold con un palo, montando guardia. Este no está asustado. Este está esperándoos, porque ya le han avisado los otros dos.',
      ],
      acotacion:
        'Este es el combate más duro de los tres, y el último antes del final. Que se note: el kobold no huye, planta cara. Recuérdales que abajo hay un pueblo entero mirando por la ventana del faro.',
      loQueVen: [
        'Un faro por dentro, con escalera de caracol y mucho eco.',
        'Un tarro enorme, del tamaño de un cubo, lleno de lucecitas apretujadas.',
        'Un kobold plantado delante con un palo, más grande que los otros dos.',
        'Por la ventana se ve a todo el pueblo abajo, mirando hacia arriba sin decir nada.',
        'Si os fijáis: el kobold está de espaldas al mar y no mira ni una vez hacia el agua. Les pasa lo mismo que a su ama.',
      ],
      preguntar: [
        { para: 'luca', texto: 'Todo el pueblo te está mirando. ¿Qué gritas antes de atacar?' },
        { para: 'paula', texto: '¿Rayo de Luna, canción, o guardas el Grito de Plata para el final?' },
      ],
      tiradas: [
        {
          quien: 'Los dos, por turnos',
          que: 'Ganar al guardián del faro: necesitáis 4 aciertos entre los dos',
          exito: 'Un acierto. Retrocede un escalón. Y otro. Se está quedando sin faro por detrás.',
          fallo:
            'Os da un palazo al tarro y se escapan tres o cuatro voces sueltas por la ventana. Abajo, en el pueblo, tres personas se ponen a hablar de golpe y se echan a llorar de la emoción.',
          nota:
            'Cuatro aciertos, no tres: es el último combate. Si alguien se acuerda de que el kobold le tiene miedo al mar y propone empujarlo hacia la ventana o mojarlo, dale la victoria directamente. Eso es exactamente lo que quieres que aprendan hoy.',
        },
      ],
      pistaDelDragon:
        'Los kobolds tampoco se acercan al agua salada. Este pelea de espaldas al mar y no mira ni una vez por la ventana.',
      siSeTuerce: [
        '«Luca, ¡el kobold sube por la escalera! ¡Corre tras él!»',
        '«Sir Luca, ponte delante del tarro con el escudo. ¡Que no lo rompa!»',
        '«Luca, tira tú el dado de Paula.»',
      ],
      presenta: 'kobold',
    },

    {
      id: 'ep4-e5',
      titulo: 'La Canción de la Gente',
      duracion: '5 min',
      leerEnVozAlta: [
        'Abrís el tarro grande. Y salen cientos de voces a la vez, como cuando abres la puerta de un colegio en el patio.',
        'Bajan en espiral por el faro, se meten por las ventanas de las casas, y el pueblo entero empieza a hablar de golpe. Todos a la vez. Nadie escucha a nadie. Es un escándalo maravilloso.',
        'Mira sube corriendo las escaleras del faro y lo primero que dice con voz, después de tanto tiempo, es: «¡GRACIAS!». Y luego se pone colorada.',
      ],
      acotacion:
        'Momento de fiesta. Que Luca pegue la cuarta pegatina. Y si quieren quedarse un rato en el pueblo hablando con la gente, déjalos: se lo han ganado, y de ahí saldrán ideas para el final.',
      loQueVen: [
        'Voces por todas partes. Gente abrazándose. Alguien cantando fatal.',
        'Los pescadores dando la vuelta a las barcas: mañana vuelven a salir a pescar.',
        'Mira, colorada, sin saber qué más decir.',
        'Vuestro barco, en la otra punta de la isla, con la vela hinchada. Ya casi está listo.',
        'Y arriba, en la montaña, el humo se ha parado. Ella os ha oído.',
      ],
      preguntar: [
        { para: 'luca', texto: '¿Qué es lo primero que le dices a Mira ahora que puede contestarte?' },
        { para: 'paula', texto: 'Solo queda una canción. ¿Estás preparada para subir?' },
      ],
      tiradas: [],
      siSeTuerce: [
        '«Sir Luca, abre tú el tarro grande. ¡Que pesa mucho, con las dos manos!»',
        '«Luca, haz tú de pueblo entero hablando a la vez.»',
      ],
      rescataCancion: 4,
    },

    {
      id: 'ep4-e6',
      titulo: 'Lo que sabe el viejo Ferran',
      duracion: '5 min',
      leerEnVozAlta: [
        'El más viejo del pueblo, un pescador con las manos como cuerdas, os sienta en su barca y os cuenta lo que vio con sus propios ojos.',
        '«Yo estaba pescando aquella mañana. Bajó a por un atún, volando bajita. Y una ola le dio de lleno en la cara.»',
        '«Y esa cosa enorme, que escupe fuego y podría comernos a todos, salió gritando como si le hubieran hecho el mayor daño del mundo. Y no ha vuelto a bajar al mar. Ni una vez.»',
        '«Por eso seguimos vivos, chicos. Por eso este pueblo está aquí abajo, pegado al agua, y no arriba. El mar nos protege.»',
      ],
      acotacion:
        'Aquí es donde se cierra el plan del episodio 5. Asegúrate de que a Paula le queda clarísimo: agua de mar. Que lo apunte en el cuaderno. Y si pregunta cómo van a subir agua del mar hasta la montaña, devuélvele la pregunta: que lo resuelvan ellos, y que Ferran les dé lo que necesiten.',
      loQueVen: [
        'Un pescador viejísimo con las manos llenas de cicatrices de cuerda.',
        'Su barca, con el nombre borrado por el sol.',
        'Detrás de él, todo el pueblo escuchando en silencio otra vez, pero ahora porque quieren.',
        'Ferran señala unos odres de piel colgados: los que usan para llevar agua.',
        'Mira ya está llenando uno de agua de mar sin que nadie se lo haya pedido.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Cómo vais a subir agua del mar hasta lo alto de la montaña?' },
        { para: 'luca', texto: '¿Cuánta agua puedes llevar tú? ¿Y quién te ayuda?' },
        { para: 'mesa', texto: 'Mañana subimos. ¿Qué os lleváis?' },
      ],
      tiradas: [],
      pistaDelDragon:
        'SU PUNTO DÉBIL: el AGUA DEL MAR. Una ola le dio en la cara y no ha vuelto a bajar. Por eso el pueblo vive pegado al agua. — Que se lleven odres llenos: es el arma del episodio 5. Apunta qué más deciden llevarse.',
      siSeTuerce: [
        '«Sir Luca, coge tú un odre y llénalo de agua del mar. ¡Hasta arriba!»',
        '«Luca, ¿pesa mucho? ¡A ver cuánto aguantas!»',
      ],
    },
  ],
}
