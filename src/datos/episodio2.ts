import type { Episodio } from './tipos'

// Episodio 2. La pista es el NOMBRE del dragón: Flamarada.
// Ojo: aquí todavía no se ve al dragón. Nadie lo ha visto, y eso se mantiene
// hasta el final. Por eso ninguna escena lleva `presenta: 'dragon'`.

export const episodio2: Episodio = {
  numero: 2,
  titulo: 'El Molino Parado',
  duracionObjetivo: '25-30 min',
  cancion: 'La Canción del Viento',
  escenas: [
    {
      id: 'ep2-e1',
      titulo: 'El mar suena, el aire no',
      duracion: '3 min',
      leerEnVozAlta: [
        'Os despierta un ruido que ayer no estaba: el mar. Las olas van y vienen, y hacen ruido de olas. Lo conseguisteis.',
        'Pero mirad la bandera del barco. Cuelga como si fuera de madera. No se mueve ni un pelo. En toda la isla no hay ni una hoja que se mueva.',
        'Y encima de una roca hay una gaviota gorda esperándoos con cara de «llegáis tarde».',
      ],
      acotacion:
        'Empieza recordándoles la victoria de ayer: que se note que lo que hacen sirve para algo. Si tienen el tracker en la pared, que Luca pegue la pegatina de la canción 1 ahora.',
      loQueVen: [
        'El mar suena otra vez. Es lo único que suena.',
        'La vela del barco cuelga muerta. Sin viento no podéis salir de la isla.',
        'Hace un calor pegajoso, del que hace cuando no corre nada de aire.',
        'El humo de la montaña sube recto como un palo. Ni se tuerce.',
        'Capitán Migas señala con el ala hacia arriba, hacia el bosque.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Por dónde crees que hay que ir a buscar el viento?' },
        { para: 'luca', texto: 'Hoy, ¿qué llevas preparado: la espada o el escudo?' },
      ],
      tiradas: [],
      siSeTuerce: [
        '«Luca, sopla tú muy fuerte. ¿Ves? Ni así se mueve la bandera.»',
        '«Sir Luca, ve a la ventana y mira si se mueven los árboles de fuera.»',
      ],
    },

    {
      id: 'ep2-e2',
      titulo: 'El bosque de las hojas quietas',
      duracion: '5 min',
      leerEnVozAlta: [
        'Subís por un camino de piedras y llegáis a un bosque. Y aquí pasa algo muy raro.',
        'Las hojas están quietas. Todas. Como si alguien hubiera puesto el bosque en pausa. Podéis pasar la mano por delante de una hoja y no se mueve.',
      ],
      acotacion:
        'Si preguntan por qué no se mueven aunque las toquen: no lo expliques. «No lo sabéis todavía» es una respuesta perfectamente buena y les pica la curiosidad.',
      loQueVen: [
        'Árboles altísimos con las hojas paradas en el aire.',
        'Una telaraña tiesa como un dibujo, con la araña dentro esperando.',
        'Semillas de esas que vuelan, colgadas en el aire, quietas, a media altura.',
        'Plumas de gaviota en el suelo señalando todas hacia el mismo lado.',
        'Se oye un zumbido bajito, muy lejos, como el de una nevera.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Seguimos las plumas o el zumbido?' },
        { para: 'luca', texto: '¿Coges una semilla de las que están flotando? ¿Qué hace en tu mano?' },
      ],
      tiradas: [
        {
          quien: 'Paula',
          que: 'Encontrar de dónde viene el zumbido',
          exito: 'Lo encuentra a la primera. El bosque se abre y aparece un molino de viento viejísimo.',
          fallo:
            'Dais una vuelta de más y acabáis en un claro lleno de calcetines colgados de las ramas, quietos en el aire. Nadie sabe de quién son. Luego ya sí, encontráis el molino.',
          nota: 'Lo de los calcetines es tontería pura y por eso funciona. Si sale el 1-3, no te lo saltes.',
        },
      ],
      siSeTuerce: [
        '«Luca, haz tú el zumbido. Más fuerte. Así es como suena.»',
        '«Sir Luca, ve delante y aparta las ramas con el escudo.»',
      ],
    },

    {
      id: 'ep2-e3',
      titulo: 'El molino parado',
      duracion: '7 min',
      leerEnVozAlta: [
        'En medio del bosque hay un molino de viento. Viejo, torcido, con las aspas paradas.',
        'De dentro sale el zumbido. Y las aspas están atadas con una cuerda gordísima, con un nudo que no ha hecho ninguna persona: es un nudo con demasiadas vueltas, hecho por unas manos muy pequeñas.',
        'Sir Luca: esto es tuyo. Coge la cuerda y tira. ¡Tira fuerte!',
      ],
      acotacion:
        'La última frase se la dices a Luca directamente, y que tire de algo de verdad: una cuerda, una toalla, tu brazo. Si tira: éxito automático, sin dado. Esta escena es suya, igual que el puente lo fue en el episodio 1.',
      loQueVen: [
        'Un molino de madera gris, más alto que una casa.',
        'Cuatro aspas atadas con una cuerda muy gorda y un nudo enorme.',
        'La puerta está entreabierta. Dentro se ve luz de vela.',
        'Alrededor del molino, huellas pequeñas de tres dedos. Muchas. Van y vienen.',
        'En la pared alguien ha marcado rayas con tiza, como llevando una cuenta.',
      ],
      preguntar: [
        { para: 'luca', texto: '¿Tiras de la cuerda o cortas el nudo con la espada?' },
        { para: 'paula', texto: '¿Qué crees que están contando con esas rayas de la pared?' },
      ],
      tiradas: [
        {
          quien: 'Los dos, ayudándose',
          que: 'Soltar el nudo y liberar las aspas',
          exito: 'El nudo cede. Las aspas se sueltan… pero no giran. Todavía no hay viento que las mueva.',
          fallo:
            'La cuerda se rompe de golpe y los dos acabáis sentados en el suelo. No pasa nada, pero el ruido lo ha oído todo el mundo. Quien esté dentro del molino ya sabe que estáis aquí.',
          nota:
            'Si os ayudáis tiráis los dos dados y os quedáis el mejor. Y si Luca ha tirado de la cuerda de verdad, esto ya está superado: no hace falta ni tirar.',
        },
      ],
      siSeTuerce: [
        '«Coge la cuerda, ¡rápido! ¡Tira, tira, tira!»',
        '«Luca, haz tú de aspa del molino: da vueltas con los brazos.»',
      ],
    },

    {
      id: 'ep2-e4',
      titulo: 'El kobold del cuaderno',
      duracion: '8 min',
      leerEnVozAlta: [
        'Dentro del molino hay otro kobold. Este lleva unas gafitas torcidas y está subido a una pila de libros.',
        'Tiene delante un cuaderno gordísimo y va apuntando cosas con un lápiz mordido. A su lado hay un tarro de cristal que se mueve solo, dando botes, porque dentro hay algo que quiere salir. Y suena como cuando abres la ventanilla del coche en la autopista.',
        'Al veros, esconde el cuaderno detrás de la espalda. Muy mal disimulado.',
      ],
      acotacion:
        'Este kobold no es valiente: es un oficinista. Hazlo nervioso y protestón. Lo que de verdad le importa no es el tarro, es el cuaderno: que se note que lo protege más a él que a nada.',
      loQueVen: [
        'Un kobold pequeño con gafas, lleno de manchas de tinta hasta los codos.',
        'Un tarro que da botes él solo. Dentro se ve algo blanco moviéndose muy deprisa.',
        'Un cuaderno enorme lleno de listas y de rayas, con muchas páginas dobladas.',
        'Estanterías con tarros vacíos, todos etiquetados y esperando.',
        'Una vela encendida cuya llama está completamente quieta, como pintada.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Hablas con él, le cantas, o directamente Rayo de Luna?' },
        { para: 'luca', texto: '¿Le pides el tarro por favor o se lo quitas?' },
      ],
      tiradas: [
        {
          quien: 'Los dos, por turnos',
          que: 'Quitarle el tarro: necesitáis 3 aciertos entre los dos',
          exito: 'Un acierto. El kobold retrocede y se le caen las gafas.',
          fallo:
            'El kobold os tacha del cuaderno. Durante el resto de la escena, quien haya fallado no puede decir su propio nombre: hay que llamarle de otra manera.',
          nota:
            'Si Paula falla con el Rayo de Luna, el rebote enciende una vela de la estantería y el kobold se pone a apagarla a manotazos: turno perdido para él. El Grito de Plata acaba con él al instante, y las fichas de Valentía de Luca valen como acierto automático.',
        },
      ],
      pistaDelDragon:
        'Al huir se deja el cuaderno. En la primera página, con letras grandes y muy repasadas, pone: «CANCIONES PARA MI AMA FLAMARADA». Ya sabéis cómo se llama.',
      siSeTuerce: [
        '«Luca, ¡el kobold se escapa! ¡Corre a la puerta y córtale el paso!»',
        '«Sir Luca, haz tú de kobold enfadado con gafas. ¿Cómo se le caen?»',
        '«Luca, tira tú el dado de Paula.»',
      ],
      presenta: 'kobold',
    },

    {
      id: 'ep2-e5',
      titulo: 'La Canción del Viento',
      duracion: '4 min',
      leerEnVozAlta: [
        'Abrís el tarro. Sale un remolino blanco que os da tres vueltas alrededor, os despeina a los dos y sube hacia arriba.',
        'Y de golpe el bosque entero se pone en marcha. Todas las hojas a la vez. La telaraña se dobla, las semillas salen volando, y las aspas del molino empiezan a girar.',
        'Desde aquí se ve el barco, allá abajo en la playa. Y su bandera se está moviendo.',
        'Paula: ya sabes su nombre. Se llama Flamarada. Escupe fuego, tiene las escamas rojas y es una dragona. ¿Qué dragón crees que es?',
      ],
      acotacion:
        'Si en el episodio 1 no acertó el tipo de dragón, esta es su segunda oportunidad: ahora tiene el nombre y tres pistas. Si dice dragón rojo, dale el dado extra ya. Y que Luca pegue la segunda pegatina del tracker.',
      loQueVen: [
        'Un remolino de aire blanco que se ve durante dos segundos y desaparece.',
        'El bosque entero moviéndose a la vez. Hace muchísimo ruido después de tanto silencio.',
        'Las aspas del molino girando solas, cada vez más rápido.',
        'La bandera del barco, abajo en la playa, ondeando.',
        'Y arriba, en la montaña, el humo ya no sube recto: ahora se tuerce con el viento.',
      ],
      preguntar: [
        { para: 'paula', texto: 'Flamarada… ¿qué crees que significa ese nombre?' },
        { para: 'luca', texto: '¿Qué se te ha despeinado con el viento?' },
        { para: 'mesa', texto: 'Quedan tres canciones. ¿Cuál queréis buscar mañana?' },
      ],
      tiradas: [],
      pistaDelDragon:
        'Resumen: se llama FLAMARADA, escupe fuego, tiene escamas rojas y es hembra. Con esto, «dragón rojo» ya debería caer.',
      siSeTuerce: [
        '«Sir Luca, abre tú el tarro. Con las dos manos y muy fuerte.»',
        '«Luca, haz tú el viento. Sopla como si fueras un huracán.»',
      ],
      rescataCancion: 2,
    },
  ],
}
