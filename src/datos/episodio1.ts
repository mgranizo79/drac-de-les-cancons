import type { Episodio } from './tipos'

export const episodio1: Episodio = {
  numero: 1,
  titulo: 'El Barco sin Canción',
  duracionObjetivo: '25-30 min',
  cancion: 'La Canción del Mar',
  escenas: [
    {
      id: 'ep1-e1',
      titulo: 'El silencio',
      duracion: '3 min',
      leerEnVozAlta: [
        'Abrís los ojos. Vuestro barco está encallado en una playa de arena blanca. Hace muchísimo calor. Y hay algo raro… escuchad.',
        'No se oye nada. Ni pájaros, ni olas, ni viento. Alguien se ha llevado todos los sonidos de esta isla.',
      ],
      acotacion:
        'Entre las dos frases, quédate callado tres segundos. En serio: cuenta hasta tres. El silencio es la escena.',
      loQueVen: [
        'Arena blanca que quema al pisarla. Es mediodía.',
        'El barco está torcido, medio hundido en la arena. La vela cuelga sin moverse.',
        'No hay viento. La bandera del barco está quieta como si fuera de madera.',
        'Hay huellas de pájaro en la arena, pero ningún pájaro.',
        'A lo lejos, una montaña. Encima de la montaña, algo de humo.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Qué es lo primero que quieres mirar?' },
        { para: 'luca', texto: '¿Sacas tu espada o tu escudo?' },
      ],
      tiradas: [],
      siSeTuerce: [
        '«Sir Luca, ¡ve corriendo a la puerta y mira si viene el dragón!»',
        '«Luca, necesito que hagas tú el ruido del mar. ¿Cómo hace el mar?»',
      ],
      desbloquea: 'playa',
    },

    {
      id: 'ep1-e2',
      titulo: 'La gaviota que no puede cantar',
      duracion: '5 min',
      leerEnVozAlta: [
        'De repente aterriza delante de vosotros una gaviota gordísima. Os mira. Abre el pico para decir algo…',
        '…y no le sale nada. Nada de nada. Se enfada muchísimo.',
      ],
      acotacion:
        'Haz la gaviota en voz muda y exagerada: abre la boca sin sonido, da pataditas, señala con el brazo. Esta escena existe para que Luca se ría.',
      loQueVen: [
        'Una gaviota enorme y gorda, con cara de muy pocos amigos.',
        'Abre y cierra el pico sin parar. No sale ni un sonido.',
        'Da pataditas en la arena. Está furiosa.',
        'Cuando se calma, señala con el ala hacia una cueva en el acantilado.',
        'Se llama Capitán Migas. (Si preguntan cómo lo sabéis: lo lleva escrito en una chapa.)',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Cómo convences a la gaviota de que os guíe?' },
        { para: 'luca', texto: '¿Le das algo de comer? ¿Qué le das?' },
      ],
      tiradas: [
        {
          quien: 'Paula',
          que: 'Convencer a la gaviota de que os guíe',
          exito: 'Os acompaña. Va delante, dando saltitos, muy digna.',
          fallo:
            'Os guía… pero al sitio equivocado primero. Os lleva a un cangrejo enorme que tampoco hace ruido. Y luego ya sí, a la cueva.',
          nota: 'El 1-3 aquí es más divertido que el éxito. No lo escondas.',
        },
      ],
      siSeTuerce: [
        '«Luca, ¡haz tú de gaviota enfadada! Enséñanos cómo se enfada.»',
        '«Sir Luca, ponle nombre a la gaviota. ¿Cómo se llama?»',
      ],
    },

    {
      id: 'ep1-e3',
      titulo: 'El puente de cuerdas',
      duracion: '7 min',
      leerEnVozAlta: [
        'Llegáis a un barranco muy profundo. Lo cruza un puente de cuerdas viejo, que se mueve solo aunque no haya viento.',
        'Tocáis las tablas del puente… y están calientes. Están quemadas. Algo muy grande y muy caliente pasó volando por aquí.',
        'Luca, ponte el escudo delante. ¡Sant Jordi, protégelos!',
      ],
      acotacion:
        'La tercera frase se la dices a Luca directamente. Que se levante. Que ponga el cojín delante. Que grite. Si lo hace: éxito automático, sin dado. Esta escena es suya.',
      loQueVen: [
        'Un barranco tan hondo que no se ve el fondo.',
        'Un puente de cuerdas que cruje. Le faltan tablas.',
        'Tres tablas del medio están negras, quemadas. Todavía humean un poco.',
        'Las piedras de alrededor siguen calientes al tocarlas.',
        'No hay marcas de garras ni de patas: lo que pasó por aquí venía volando.',
      ],
      preguntar: [
        { para: 'luca', texto: '¿Pones el escudo delante para proteger a tu hermana?' },
        { para: 'paula', texto: '¿Cruzas corriendo o poquito a poco?' },
      ],
      tiradas: [
        {
          quien: 'Paula',
          que: 'Cruzar el puente sin que se rompa una tabla',
          exito: 'Cruza. El puente aguanta. Se oye crujir pero aguanta.',
          fallo:
            'Cruza igual, pero se le cae la mochila al barranco y pierde algo gracioso: la merienda, un zapato, el gorro.',
          nota: 'Si Luca pone el escudo delante, esta tirada la pasan seguro. Nadie se cae nunca.',
        },
      ],
      pistaDelDragon:
        'La madera está quemada y las piedras siguen calientes. FUEGO. Este dragón escupe fuego.',
      siSeTuerce: [
        '«Coge el escudo, ¡rápido!»',
        '«Luca, necesito que hagas el ruido del dragón. ¡Fuerte!»',
        '«Sir Luca, ¡tira tú el dado de Paula!»',
      ],
      desbloquea: 'puente',
    },

    {
      id: 'ep1-e4',
      titulo: 'El kobold ladrón',
      duracion: '7 min',
      leerEnVozAlta: [
        'Dentro de la cueva hay un bicho pequeño, escamoso y verde, con cara de lagarto y muy mal genio. Es un kobold, y trabaja para el dragón.',
        'Lleva un tarro de cristal apretado contra el pecho. Y dentro del tarro se oye, muy bajito, muy bajito… el ruido de las olas del mar.',
      ],
      acotacion:
        'Paula sabrá perfectamente qué es un kobold. Para y deja que se lo explique ella a Luca. Es su momento: no se lo quites.',
      loQueVen: [
        'Un bicho verde del tamaño de un perro pequeño. Escamas, cuernecitos, ojos amarillos.',
        'Aprieta contra el pecho un tarro de cristal con tapa de madera.',
        'Dentro del tarro hay una luz azul que se mueve como el agua.',
        'Lleva colgada al cuello una escama roja muy grande, atada con un cordel.',
        'Está más asustado que enfadado. Pero no piensa soltar el tarro.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Qué le cantas? Cántalo de verdad si quieres.' },
        { para: 'luca', texto: '¡Dale un espadazo! ¿Cómo lo haces?' },
      ],
      tiradas: [
        {
          quien: 'Los dos, por turnos',
          que: 'Combate: necesitáis 3 aciertos entre los dos',
          exito: 'Un acierto. El kobold retrocede un paso y chilla.',
          fallo:
            'El kobold os roba una palabra. Durante el resto de la escena no podéis decirla. Elige una absurda: «sí», «agua», «mamá».',
          nota:
            'El Grito de Plata de Paula acaba con él AL INSTANTE, sin tirar. Recuérdaselo si se atasca. Luca puede gastar una ficha de Valentía para acertar seguro.',
        },
      ],
      pistaDelDragon:
        'Al huir grita: «¡Se lo diré a mi AMA! ¡SE LO DIRÉ A MI AMA!» — el dragón es HEMBRA. Y la escama que lleva al cuello es ROJA.',
      siSeTuerce: [
        '«Luca, ¡tira tú el dado de Paula!»',
        '«Sir Luca, ¡el kobold viene hacia ti! ¡Pon el escudo!»',
        '«Luca, haz tú el chillido del kobold cuando se escapa.»',
      ],
      desbloquea: 'cueva',
    },

    {
      id: 'ep1-e5',
      titulo: 'La Canción del Mar',
      duracion: '3 min',
      leerEnVozAlta: [
        'Abrís el tarro. Sale una luz azul que sube, da una vuelta por encima de vuestras cabezas y se tira al mar de cabeza.',
        'Y de golpe: vuelven las olas. Se oye el agua otra vez. La isla ya no está del todo callada.',
        'Habéis recuperado la primera canción. Quedan cuatro. Y desde lo alto de la montaña, algo enorme os está mirando.',
        'Paula: fuego, escamas rojas, y es hembra. ¿Qué dragón crees que es?',
      ],
      acotacion:
        'La última frase es el momento de Paula. Pregúntaselo en serio, esperando de verdad la respuesta. Si dice DRAGÓN ROJO, dale ya el dado extra para el próximo episodio. Si dice otra cosa, NO la corrijas: «Puede ser. Mañana buscamos más pistas.»',
      loQueVen: [
        'Una luz azul con forma de ola que se mueve sola.',
        'El mar vuelve a sonar. Es lo primero que se oye en toda la isla.',
        'La gaviota abre el pico… y sigue sin salirle nada. Todavía no le toca.',
        'Arriba, en la montaña, dos puntos amarillos que no estaban antes. Os están mirando.',
        'El tarro vacío se queda frío de repente.',
      ],
      preguntar: [
        { para: 'paula', texto: 'Fuego, escamas rojas, es hembra… ¿qué dragón crees que es?' },
        { para: 'luca', texto: '¿Qué quieres hacer mañana en la isla?' },
        { para: 'mesa', texto: 'Que cada uno diga una cosa que quiere hacer mañana. Eso es el Episodio 2.' },
      ],
      tiradas: [],
      pistaDelDragon:
        'Resumen del episodio: FUEGO + ESCAMA ROJA + ES HEMBRA. Si acierta «dragón rojo», el grupo gana un dado extra permanente.',
      siSeTuerce: [
        '«Sir Luca, ¡abre tú el tarro! Ábrelo con las dos manos.»',
        'Si Luca ya se ha ido a jugar a otra cosa: sigue con Paula cinco minutos y cerrad. Que el episodio termine corto es mucho mejor que estirarlo.',
      ],
      rescataCancion: 1,
    },
  ],
}
