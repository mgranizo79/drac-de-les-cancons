import type { Episodio } from './tipos'

// Episodio 3. La pista es la más importante de la campaña: POR QUÉ robó las
// canciones. A partir de aquí Flamarada deja de ser un monstruo y pasa a ser
// alguien que hizo algo malo por un motivo que se entiende. El episodio 5
// depende de que esto cale, así que no lo corras.
//
// Seis escenas en vez de cinco: pidieron más.

export const episodio3: Episodio = {
  numero: 3,
  titulo: 'El Árbol de los Mil Nidos',
  duracionObjetivo: '30-40 min',
  cancion: 'La Canción de los Pájaros',
  escenas: [
    {
      id: 'ep3-e1',
      titulo: 'Los pájaros que no cantan',
      duracion: '4 min',
      leerEnVozAlta: [
        'Con el viento de vuelta, la isla ya suena a algo: hay olas, y hay ramas moviéndose. Pero falta una cosa.',
        'Mirad hacia arriba. Hay pájaros. Muchísimos. En todas las ramas, en todas las piedras, en el mástil de vuestro barco. Cientos.',
        'Y están todos completamente callados. Mirándoos. Esperando algo.',
      ],
      acotacion:
        'Aquí no hay peligro ninguno, es una escena para poner la piel de gallina. Baja la voz. Que la quietud dure. Capitán Migas está entre ellos y por primera vez no da pataditas: está serio.',
      loQueVen: [
        'Pájaros de todos los tamaños, quietos y en silencio, mirándoos a vosotros.',
        'Ninguno vuela. Ninguno se asusta cuando os acercáis.',
        'Capitán Migas se pone delante de todos, muy serio, y señala hacia el bosque de arriba.',
        'En el suelo hay plumas colocadas en fila, como un camino que alguien ha preparado.',
        'Cuando echáis a andar, todos los pájaros giran la cabeza a la vez para seguiros.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Por qué crees que están todos esperándoos a vosotros?' },
        { para: 'luca', texto: '¿Les dices algo? ¿Qué les dices?' },
      ],
      tiradas: [],
      siSeTuerce: [
        '«Luca, cuenta los pájaros. ¿Cuántos ves? ¡Cuéntalos en voz alta!»',
        '«Sir Luca, saluda tú a los pájaros. Con el escudo bien alto.»',
      ],
    },

    {
      id: 'ep3-e2',
      titulo: 'Doña Pluma',
      duracion: '6 min',
      leerEnVozAlta: [
        'El camino de plumas os lleva hasta un árbol gigantesco. Tan gordo que harían falta diez personas cogidas de la mano para rodearlo.',
        'Y está lleno de nidos. Cientos. Miles. Desde las raíces hasta la copa, tantos que casi no se ve la madera.',
        'De un nido de abajo del todo sale una urraca viejísima, con una pluma blanca en la cabeza. Os mira, abre el pico… y tampoco le sale nada. Pero no se enfada: se le pone cara de pena.',
      ],
      acotacion:
        'Se llama Doña Pluma y es la más vieja de la isla. Hazla despacio, con gestos lentos. Ella sabe cosas que nadie más sabe, pero no puede contarlas sin voz: ese es el motor del episodio entero.',
      loQueVen: [
        'Un árbol enorme cubierto de nidos, de arriba abajo.',
        'Una urraca vieja con una pluma blanca en la cabeza y los ojos muy despiertos.',
        'Todos los nidos están vacíos y limpios, como recogidos a propósito.',
        'Todos menos uno, arriba del todo: uno enorme, hecho con ramas quemadas.',
        'Doña Pluma señala ese nido de arriba y después se señala el pico cerrado.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Cómo hablas con alguien que no tiene voz?' },
        { para: 'luca', texto: '¿Subes al árbol a ver el nido grande? ¿Cómo subes?' },
      ],
      tiradas: [
        {
          quien: 'Paula',
          que: 'Entender qué os está intentando decir Doña Pluma',
          exito:
            'Lo pilla: la urraca quiere que subáis a ver el nido quemado de arriba. Y quiere ir con vosotros, en el hombro de Luca.',
          fallo:
            'Entiende justo lo contrario y os pasáis un rato buscando gusanos para ella, que os mira con cara de paciencia infinita. Luego ya sí.',
          nota: 'El fallo aquí es puro chiste. Doña Pluma es muy digna y aguanta el tipo.',
        },
      ],
      siSeTuerce: [
        '«Luca, haz tú de urraca vieja. ¿Cómo anda alguien muy viejo?»',
        '«Sir Luca, ¿te la pones en el hombro? ¡Cuidado, que pesa!»',
      ],
    },

    {
      id: 'ep3-e3',
      titulo: 'El nido quemado',
      duracion: '7 min',
      leerEnVozAlta: [
        'Subís hasta arriba del todo. Y ese nido no es un nido de pájaro: es del tamaño de una cama.',
        'Está hecho con ramas quemadas, todas negras. Y dentro no hay huevos. Hay dibujos. Cientos de dibujos rascados en la madera con una uña muy grande.',
        'Son dibujos de alguien que aprendía. Los primeros son garabatos. Los últimos, casi bonitos. Y todos son del mismo: un pájaro pequeño, cantando.',
      ],
      acotacion:
        'Deja que miren los dibujos un rato antes de seguir. Que Paula ate cabos sola si puede. Si pregunta quién los hizo, no lo digas: «¿Tú qué crees?».',
      loQueVen: [
        'Un nido enorme hecho con ramas quemadas, viejísimo.',
        'Cientos de dibujos rascados en la madera, del peor al mejor.',
        'En todos sale el mismo pájaro pequeño con el pico abierto, cantando.',
        'En un rincón, una sola escama roja, muy pequeña. De alguien que todavía estaba creciendo.',
        'El nido lleva muchísimo tiempo vacío. Hay polvo de años.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Quién crees que dibujó todo esto? ¿Y por qué siempre el mismo pájaro?' },
        { para: 'luca', texto: '¿Te sientas dentro del nido? ¡Cabéis los dos!' },
      ],
      tiradas: [
        {
          quien: 'Paula',
          que: 'Poner los dibujos en orden y entender qué cuentan',
          exito:
            'Los ordena y sale una historia: el pájaro cantando, el pájaro cantando, el pájaro cantando… y el último dibujo es el nido vacío, sin pájaro.',
          fallo:
            'Se le mezclan y la historia sale al revés, que es todavía más triste. Da igual: se entiende igual.',
          nota: 'Con 4+ o con 1-3 la información sale. Aquí la tirada es para que participe, no para bloquear nada.',
        },
      ],
      siSeTuerce: [
        '«Luca, ¿tú qué dibujarías aquí? Dibújalo con el dedo.»',
        '«Sir Luca, protege el nido con el escudo, que no se caiga nadie.»',
      ],
    },

    {
      id: 'ep3-e4',
      titulo: 'El kobold coleccionista',
      duracion: '8 min',
      leerEnVozAlta: [
        'Del tronco del árbol sale un kobold cargado con una red llena de tarros. Va tan cargado que anda torcido.',
        'Y estos tarros no están quietos: dentro hay lucecitas de colores que revolotean y chocan contra el cristal. Son los cantos de todos los pájaros de la isla, uno por tarro.',
        'Os ve. Se abraza a la red. Y dice una cosa rarísima: «¡No son para mí! ¡Son para que no esté sola!»',
      ],
      acotacion:
        'Esa última frase es la bisagra de toda la campaña. Dila despacio y no la expliques. Si Paula pregunta «¿quién no esté sola?», el kobold se tapa la boca con las dos manos porque ha hablado de más.',
      loQueVen: [
        'Un kobold pequeño cargado con una red de tarros, andando torcido.',
        'Dentro de cada tarro, una lucecita de un color distinto dando vueltas.',
        'Los tarros llevan etiquetas escritas con mucho cuidado: «mirlo», «gorrión», «gaviota grande y gorda».',
        'El kobold no os ataca: lo que hace es intentar escaparse con la red a cuestas.',
        'Cada vez que un tarro choca con otro, suena un pío bajito.',
      ],
      preguntar: [
        { para: 'paula', texto: '«¿Para que no esté sola quién?» Pregúntaselo tú.' },
        { para: 'luca', texto: '¿Le cortas el paso o le quitas la red?' },
      ],
      tiradas: [
        {
          quien: 'Los dos, por turnos',
          que: 'Quitarle la red: necesitáis 3 aciertos entre los dos',
          exito: 'Un acierto. Se le sueltan un par de tarros y los recoge a toda prisa.',
          fallo:
            'Se le cae un tarro y se rompe. Sale un canto de mirlo que da dos vueltas y se va volando. Uno menos que rescatar… pero el mirlo de aquella rama ya vuelve a cantar. Eso no es un fallo, es medio éxito.',
          nota:
            'Paula elige: cantar o Rayo de Luna. Luca puede gastar Valentía. Y ojo: si alguien propone hablar con él en vez de pelear, déjalo. Este kobold quiere que le convenzan.',
        },
      ],
      siSeTuerce: [
        '«Luca, ¡se escapa por la rama! ¡Corre y córtale el paso!»',
        '«Sir Luca, haz tú el pío del pájaro que se escapa del tarro.»',
        '«Luca, tira tú el dado de Paula.»',
      ],
      presenta: 'kobold',
    },

    {
      id: 'ep3-e5',
      titulo: 'La Canción de los Pájaros',
      duracion: '5 min',
      leerEnVozAlta: [
        'Abrís los tarros. Todos. Y de golpe salen cientos de lucecitas de colores que suben en espiral por el árbol.',
        'Y el árbol entero empieza a cantar. Mil pájaros a la vez, después de mucho tiempo callados. Hay que taparse los oídos y aun así os estáis riendo.',
        'Capitán Migas abre el pico… y le sale un graznido horroroso, feísimo, el peor sonido de toda la isla. Está tan contento que no para de repetirlo.',
      ],
      acotacion:
        'Este es el momento más alegre de toda la campaña: apróvechalo. Haz el graznido de Migas tú, lo más feo que puedas, unas cuantas veces. Y que Luca pegue la tercera pegatina del tracker.',
      loQueVen: [
        'Cientos de lucecitas de colores subiendo en espiral.',
        'El árbol entero cantando a la vez. Es ensordecedor y es precioso.',
        'Capitán Migas graznando como una puerta oxidada, feliz.',
        'Doña Pluma, en el hombro de Luca, sin cantar todavía. A ella le falta otra cosa.',
        'Abajo, en la playa, se oye a lo lejos vuestro barco crujir: le va volviendo la fuerza.',
      ],
      preguntar: [
        { para: 'luca', texto: '¡Haz tú el graznido de Migas! ¿Cómo suena?' },
        { para: 'paula', texto: '¿Por qué crees que Doña Pluma sigue sin cantar?' },
      ],
      tiradas: [],
      siSeTuerce: [
        '«Sir Luca, abre tú los tarros. ¡Todos, rápido!»',
        '«Luca, haz de pájaro y vuela por la habitación.»',
      ],
      rescataCancion: 3,
    },

    {
      id: 'ep3-e6',
      titulo: 'Lo que Doña Pluma tenía guardado',
      duracion: '5 min',
      leerEnVozAlta: [
        'Con el aire lleno de pájaros, Doña Pluma por fin abre el pico. Y lo que le sale no es un canto: es una voz de señora muy mayor, muy tranquila.',
        '«Yo la conocí cuando era pequeña», dice. «Vivía en ese nido. Y no sabía cantar: los dragones no saben, por mucho que lo intenten.»',
        '«Había un pájaro que subía cada noche a cantarle hasta que se dormía. Solo uno. Un día ese pájaro no volvió. Y ella se quedó sin su canción.»',
        '«Por eso las guarda. No las roba para tener más: las guarda para no quedarse nunca más sin ninguna. Está sola, y tiene miedo del silencio.»',
      ],
      acotacion:
        'Léelo entero sin parar y luego cállate. Deja el silencio. Es probable que Paula diga algo tipo «entonces no es mala». Si lo dice, no la corrijas: dale la razón. Ese es exactamente el descubrimiento del episodio, y es lo que hace que el final funcione.',
      loQueVen: [
        'Doña Pluma hablando con voz de abuela, sin prisa.',
        'Los pájaros de alrededor se han callado para escucharla.',
        'Arriba en la montaña, el humo sigue saliendo. Ahora ya sabéis que hay alguien ahí sola.',
        'Capitán Migas ha dejado de graznar y mira al suelo.',
        'Doña Pluma se va volando despacio, y al pasar deja caer una pluma blanca en las manos de Luca.',
      ],
      preguntar: [
        { para: 'paula', texto: 'Ahora que sabes por qué lo hizo, ¿qué quieres hacer con ella al final?' },
        { para: 'luca', texto: 'Te has quedado la pluma blanca. ¿Para qué la vas a usar?' },
        { para: 'mesa', texto: 'Quedan dos canciones. ¿Cuál buscamos mañana?' },
      ],
      tiradas: [],
      pistaDelDragon:
        'POR QUÉ LAS ROBÓ: Flamarada no sabe cantar y se quedó sin el único pájaro que le cantaba. Guarda las canciones para no quedarse nunca más en silencio. Está sola y tiene miedo. — Apunta lo que respondan a «¿qué quieres hacer con ella?»: el episodio 5 se monta con esa respuesta.',
      siSeTuerce: [
        '«Sir Luca, guarda tú la pluma blanca. Guárdala muy bien, que es importante.»',
        'Si Luca ya se ha ido, cierra con Paula: esta escena es sobre todo suya.',
      ],
    },
  ],
}
