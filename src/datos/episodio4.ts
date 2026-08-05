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
      titulo: 'El jardín de Gala y Abril',
      duracion: '7 min',
      leerEnVozAlta: [
        'Dos niñas pequeñas, de unos cinco años, os cogen de la mano una por cada lado y tiran de vosotros sin pedir permiso.',
        'Son hermanas y son gemelas, aunque no se parecen en nada: una tiene el pelo castaño y unos ojos enormes que se fijan en todo, y la otra es rubia y no ha parado de reírse desde que os ha visto. Se llaman Gala y Abril.',
        'Os llevan detrás de las rocas, y allí hay una cosa que no habíais visto en toda la isla: verde. Un jardín. Pequeñito, en macetas y latas viejas, pero vivo. Lo único vivo que queda, y lo cuida Gala.',
        'Y detrás de Abril van tres gatos. En fila. Se paran cuando ella se para y andan cuando ella anda, y ninguno le hace caso a nadie más.',
      ],
      acotacion:
        'Las dos son druidas, pero de cosas distintas: a Gala le hacen caso las plantas y a Abril los animales, sobre todo los gatos. Hazlas hablar a la vez, interrumpiéndose y terminándose las frases. Y que se peguen a Luca: son las únicas de la isla más o menos de su edad, y para él eso vale más que todo el resto del episodio.',
      loQueVen: [
        'Un jardín diminuto en macetas, latas y botas viejas, escondido detrás de las rocas.',
        'Gala pone la oreja en una maceta, escucha, y luego la riega. Sabe cuál tiene sed.',
        'Tres gatos siguiendo a Abril a todas partes, y ella hablándoles como si le contestaran. Le contestan.',
        'El cuaderno de Gala: dibujos de plantas, de nubes, de pájaros, apuntando qué día pasó cada cosa.',
        'Y en la última página, un dibujo repasado tantas veces que ha agujereado el papel: el dragón volando bajito sobre el mar, una ola que sube, y el dragón saliendo disparado hacia arriba, torcido, con la boca abierta.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Qué está pasando en ese dibujo? ¿Por qué lo habrá repasado tanto?' },
        { para: 'luca', texto: 'Hay tres gatos. ¿Cuál acaricias tú primero?' },
      ],
      tiradas: [
        {
          quien: 'Paula',
          que: 'Entender qué le pasó al dragón en el dibujo de Gala',
          exito:
            'Lo ve claro: una ola le salpicó y salió huyendo. El agua del mar le hace daño. Gala asiente con la cabeza tan fuerte que casi se marea.',
          fallo:
            'Se queda a medias. Entonces Abril coge en brazos a un gato viejo y tuerto, se lo pone a Paula en la cara y dice: «¡Cuéntaselo tú, que estabas allí!». El gato maúlla dos veces. Abril traduce: «Dice que el agua le hizo pupa».',
          nota:
            'La pista sale con 4+ y con 1-3. Con el fallo sale además el gato tuerto, que es mejor. Si Luca quiere hablar con los gatos, que hable: Abril traduce lo que haga falta.',
        },
      ],
      siSeTuerce: [
        '«Luca, riega tú una planta. Gala te dice cuál tiene sed.»',
        '«Sir Luca, ¿cómo hace el gato? Pregúntale tú qué vio.»',
      ],
      presenta: 'gemelas',
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
        { para: 'mesa', texto: 'Gala y Abril están aquí. ¿Les pedís ayuda? ¿A cuál de las dos?' },
      ],
      tiradas: [
        {
          quien: 'Los dos, por turnos',
          que: 'Ganar al guardián del faro: necesitáis 4 aciertos entre los dos',
          exito: 'Un acierto. Retrocede un escalón. Y otro. Se está quedando sin faro por detrás.',
          fallo:
            'Os da un palazo al tarro y se escapan tres o cuatro voces sueltas por la ventana. Abajo, en el pueblo, tres personas se ponen a hablar de golpe y se echan a llorar de la emoción.',
          nota:
            'Cuatro aciertos, no tres: es el último combate antes del final. Si alguien se acuerda de que el kobold le tiene miedo al mar y propone empujarlo hacia la ventana o mojarlo, dale la victoria directamente: eso es lo que quieres que aprendan hoy.\n\nY Gala y Abril han subido con vosotros. Si se lo pedís, una vez cada una: GALA hace crecer enredaderas por la escalera y el kobold se enreda (su siguiente ataque falla). ABRIL le lanza un gato a la cara (cuenta como un acierto, sin dado). Que sean ellos los que se acuerden de pedírselo.',
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
        'Gala y Abril suben corriendo las escaleras del faro. Lo primero que dicen con voz, después de tanto tiempo, lo dicen las dos a la vez y no se entiende nada. Lo repiten. Sigue sin entenderse. A la tercera sale: «¡GRACIAS!».',
        'Y detrás de ellas suben los tres gatos, maullando todos a la vez. Ellos también se habían quedado sin voz.',
      ],
      acotacion:
        'Momento de fiesta. Que Luca pegue la cuarta pegatina. Y si quieren quedarse un rato en el pueblo hablando con la gente, déjalos: se lo han ganado, y de ahí saldrán ideas para el final.',
      loQueVen: [
        'Voces por todas partes. Gente abrazándose. Alguien cantando fatal.',
        'Los pescadores dando la vuelta a las barcas: mañana vuelven a salir a pescar.',
        'Gala y Abril hablando a la vez, pisándose, sin ponerse de acuerdo en nada.',
        'Vuestro barco, en la otra punta de la isla, con la vela hinchada. Ya casi está listo.',
        'Y arriba, en la montaña, el humo se ha parado. Ella os ha oído.',
      ],
      preguntar: [
        { para: 'luca', texto: '¿Qué es lo primero que les dices a Gala y Abril ahora que pueden contestarte?' },
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
        'Abril ya está llenando uno de agua de mar sin que nadie se lo haya pedido, y se está poniendo perdida.',
        'Y Gala, muy seria, saca del jardín una maceta pequeñita con un brote verde y os la pone en las manos.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Cómo vais a subir agua del mar hasta lo alto de la montaña?' },
        { para: 'luca', texto: '¿Cuánta agua puedes llevar tú? ¿Y quién te ayuda?' },
        { para: 'mesa', texto: 'Mañana subimos. ¿Qué os lleváis?' },
      ],
      tiradas: [],
      pistaDelDragon:
        'SU PUNTO DÉBIL: el AGUA DEL MAR. Una ola le dio en la cara y no ha vuelto a bajar. Por eso el pueblo vive pegado al agua. — Que se lleven odres llenos: es el arma del episodio 5.\n\nY que NO se dejen la maceta de Gala. Dice que la planten arriba del todo, «donde no crece nada». Es la única cosa viva que se lleva a la montaña, y el rosal del final sale de ahí.',
      siSeTuerce: [
        '«Sir Luca, coge tú un odre y llénalo de agua del mar. ¡Hasta arriba!»',
        '«Luca, ¿pesa mucho? ¡A ver cuánto aguantas!»',
        '«Luca, lleva tú la maceta de Gala. Con mucho cuidado, que es muy importante.»',
      ],
      presenta: 'ferran',
    },
  ],
}
