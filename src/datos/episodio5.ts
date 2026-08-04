import type { Episodio } from './tipos'

// Episodio 5. El final.
//
// Dos avisos antes de dirigirlo:
//
// 1. Aquí es donde se ve al dragón por primera vez. La escena 3 lleva
//    `presenta: 'dragon'`, así que su carta se destapa sola en el iPad. No la
//    dejes tocar antes de esa escena.
//
// 2. La quinta canción NO está en ningún tarro. Es la que le falta a ella.
//    Se gana dándosela, no quitándosela. Todo el episodio 3 existe para que
//    esto se entienda, así que si Paula propone perdonarla antes de tiempo:
//    déjala. Ganar así también es ganar. De hecho es la mejor manera.

export const episodio5: Episodio = {
  numero: 5,
  titulo: 'La Canción que le Faltaba',
  duracionObjetivo: '40-50 min',
  cancion: 'La Canción del Corazón',
  escenas: [
    {
      id: 'ep5-e1',
      titulo: 'La subida',
      duracion: '5 min',
      leerEnVozAlta: [
        'Salís del pueblo de madrugada, con los odres llenos de agua de mar a la espalda. Pesan un montón.',
        'Y no vais solos. Detrás van Gala y Abril con los tres gatos. Detrás de ellas, el viejo Ferran. Y detrás, todo el pueblo. Nadie dice nada, pero os siguen hasta el pie de la montaña.',
        'Allí se paran. Ellos no pueden subir más. Capitán Migas se posa en el hombro de Luca y Doña Pluma en el de Paula. Ellos sí suben.',
      ],
      acotacion:
        'Empieza el último episodio como lo que es: una despedida. El pueblo entero acompañándoos hasta el pie de la montaña y quedándose ahí mirando. No corras esta escena aunque no pase nada en ella.',
      loQueVen: [
        'Un camino de piedras que sube en zigzag, cada vez más caliente.',
        'Los odres de agua salpicando en la espalda a cada paso.',
        'Y la maceta de Gala, con su brote verde, que hay que llevar sin volcarla.',
        'El pueblo entero al pie de la montaña, mirando hacia arriba sin moverse.',
        'Cuanto más subís, menos plantas hay. Arriba del todo no queda ni una.',
        'Y desde una curva, por fin: la boca de la cueva. Enorme. Y de dentro sale luz dorada.',
      ],
      preguntar: [
        { para: 'luca', texto: '¿Vas delante o detrás? ¿Llevas el escudo preparado ya?' },
        { para: 'paula', texto: 'Es tu última oportunidad de decidirlo: ¿qué vas a hacer cuando la veas?' },
      ],
      tiradas: [
        {
          quien: 'Los dos, ayudándose',
          que: 'Subir sin que se derrame el agua de los odres',
          exito: 'Llegáis arriba con los odres llenos hasta el borde. Perfecto.',
          fallo:
            'Se derrama la mitad de uno. Todavía queda de sobra, pero ahora hay que apuntar bien: solo tendréis una oportunidad de mojarla.',
          nota: 'El 1-3 no os quita el arma, solo os da una sola oportunidad de usarla. Sube la tensión sin romper nada.',
        },
      ],
      siSeTuerce: [
        '«Sir Luca, ve tú delante con el escudo. ¡Abre camino!»',
        '«Luca, ¿pesa el odre? Enséñame cómo lo llevas.»',
      ],
    },

    {
      id: 'ep5-e2',
      titulo: 'La cueva de las monedas',
      duracion: '6 min',
      leerEnVozAlta: [
        'Entráis. Y la cueva es tan grande como una iglesia, y está llena hasta arriba de monedas de oro. Millones. Montañas de monedas.',
        'Pero no son monedas normales. Coged una y acercáosla a la oreja.',
        'Dentro hay una canción. Muy bajita, sonando sola, dando vueltas dentro del oro sin poder salir. Y en cada moneda hay una distinta. En todas. Millones de canciones encerradas.',
        'Esto no es un tesoro de un dragón rico. Esto es lo que junta alguien que tiene mucho miedo de quedarse en silencio.',
      ],
      acotacion:
        'Que cojan monedas y se las pongan en la oreja de verdad (una moneda de mentira, un botón, lo que tengas). Y que tú hagas la cancioncilla bajita. Esta escena es para que se les quite las ganas de pelear.',
      loQueVen: [
        'Montañas de monedas de oro que llegan hasta el techo.',
        'Cada moneda con una canción distinta sonando dentro, muy bajito.',
        'Un hueco en el suelo, en el centro, con forma de dragón dormido.',
        'En las paredes, más dibujos rascados con la uña: el mismo pájaro de siempre.',
        'Y al fondo, en la oscuridad, dos ojos amarillos que se abren y os miran.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Cuántas canciones crees que hay aquí? ¿De dónde las habrá sacado todas?' },
        { para: 'luca', texto: '¿Te guardas una moneda en el bolsillo? ¿Cuál?' },
      ],
      tiradas: [],
      siSeTuerce: [
        '«Luca, coge una moneda y escucha. ¿Qué canción suena en la tuya?»',
        '«Sir Luca, cuenta las monedas. ¡Todas!»',
      ],
    },

    {
      id: 'ep5-e3',
      titulo: 'Flamarada',
      duracion: '6 min',
      leerEnVozAlta: [
        'Y entonces se levanta. Y es enorme. Tan grande que tenéis que echar la cabeza para atrás del todo para verle la cara.',
        'Escamas rojas, como sabíais. Alas que tocan las dos paredes de la cueva. Humo saliéndole de la nariz a cada respiración.',
        'Os mira. Y dice, con una voz que hace temblar las monedas: «Vosotros. Los que me han estado quitando cosas.»',
        'Y luego, más bajito, casi como si le doliera: «¿Por qué me lo quitáis todo? Si no os hacía nada. Solo las escuchaba.»',
      ],
      acotacion:
        'Este es el momento que llevan cuatro episodios esperando: hazlo grande. Ponte de pie si hace falta. Pero la última frase dila bajito y triste, porque de eso va el final. Ahora ya pueden destapar su carta en el iPad.',
      loQueVen: [
        'Un dragón rojo gigantesco, con las alas rozando las dos paredes.',
        'Tiene los ojos amarillos, y están rojos por los bordes de no dormir.',
        'Está flaquísima. Se le marcan las costillas debajo de las escamas.',
        'Alrededor del cuello, atada con un cordel viejo, lleva una pluma. Una sola. Muy vieja y muy cuidada.',
        'No ataca. De momento solo os mira, esperando a ver qué hacéis vosotros.',
      ],
      preguntar: [
        { para: 'paula', texto: 'Te está preguntando de verdad. ¿Qué le contestas?' },
        { para: 'luca', texto: '¿Te pones delante con el escudo o te quedas quieto?' },
        { para: 'mesa', texto: '¿Vais a pelear con ella, o vais a intentar otra cosa?' },
      ],
      tiradas: [],
      pistaDelDragon:
        'Lleva al cuello una pluma vieja atada con un cordel: es del pájaro que le cantaba. La guarda desde entonces. Si alguien se fija en la pluma, dales toda la información: es la llave del final.',
      siSeTuerce: [
        '«Sir Luca, ¡el escudo! ¡Ponte delante de tu hermana!»',
        '«Luca, haz tú la voz del dragón. ¿Cómo habla un dragón enorme?»',
      ],
      presenta: 'dragon',
    },

    {
      id: 'ep5-e4',
      titulo: 'El combate',
      duracion: '10 min',
      leerEnVozAlta: [
        'Flamarada coge aire. Mucho aire. Toda la cueva se queda sin aire de golpe.',
        '«No me las vais a quitar. Son mías. Son lo único que tengo.»',
        'Y os echa fuego.',
      ],
      acotacion:
        'El combate tiene tres partes y cada una la gana una cosa que se han ganado ellos. No lo lleves con dados sueltos: lleva las tres partes en orden. Y en cada una, di en voz alta qué canción están usando, para que se note que todo lo de estos días servía para algo.',
      loQueVen: [
        'Una bocanada de fuego que llena la cueva entera.',
        'Las monedas del suelo se ponen al rojo vivo y suenan todas a la vez.',
        'Flamarada no se mueve del sitio: pelea protegiendo el montón de oro, no atacándoos.',
        'Cada vez que respira, la pluma del cuello se le mueve.',
        'Fuera de la cueva, abajo del todo, se oye al pueblo entero cantando. No se han ido.',
      ],
      preguntar: [
        { para: 'luca', texto: '¡El fuego viene hacia vosotros! ¿Qué haces AHORA?' },
        { para: 'paula', texto: '¿Cuándo usas el agua del mar? Tú decides el momento.' },
      ],
      tiradas: [
        {
          quien: 'Luca',
          que: 'PRIMERA PARTE — Aguantar el fuego con el Escudo de Sant Jordi',
          exito: 'El fuego se parte en dos contra el escudo y pasa por los lados sin tocaros. Ni un pelo quemado.',
          fallo:
            'Igual: nada de dados. Si Luca pone el escudo delante, aguanta. Es su escudo y este es su momento.',
          nota:
            'ÉXITO AUTOMÁTICO si Luca se levanta y pone el escudo. Aquí no se tira. Y mientras aguanta, la Canción del Mar que llevan encima apaga las llamas que caen al suelo.',
        },
        {
          quien: 'Los dos',
          que: 'SEGUNDA PARTE — Mojarla con el agua del mar',
          exito:
            'El agua le da de lleno. Flamarada grita, se echa atrás y se le apaga el fuego de dentro: ya no puede escupir más. Se queda temblando.',
          fallo:
            'El agua le cae al lado y salpica poco. Pero ese poco basta para que retroceda hasta el fondo, asustada. Volved a intentarlo: nadie os lo impide.',
          nota:
            'Si en la subida se derramó un odre, solo tienen un intento. Si no, los que hagan falta. La Canción del Viento les ayuda a lanzarla más lejos.',
        },
        {
          quien: 'Paula',
          que: 'TERCERA PARTE — El Grito de Plata',
          exito:
            'Paula canta la nota. Y Flamarada, que es la criatura más grande de la isla, se queda quieta del todo y se le doblan las patas. Cae de rodillas sobre las monedas.',
          fallo: 'No hay fallo: el Grito de Plata nunca falla. Nunca ha fallado.',
          nota:
            'Sin dado. Si Paula ya lo gastó antes en este episodio, dáselo igual: hoy es el último día y se lo ha ganado. Y cuando cae, NO la rematéis. Pasad a la escena siguiente.',
        },
      ],
      siSeTuerce: [
        '«¡LUCA, EL ESCUDO! ¡AHORA!»',
        '«Sir Luca, tira tú el agua. ¡Con las dos manos, todo de golpe!»',
        '«Luca, haz tú el rugido de Flamarada cuando le cae el agua.»',
      ],
    },

    {
      id: 'ep5-e5',
      titulo: 'La canción que le faltaba',
      duracion: '6 min',
      leerEnVozAlta: [
        'Flamarada está de rodillas encima de su oro, mojada, sin fuego y sin fuerzas. Podríais hacer lo que quisierais.',
        'Y entonces, de todas las monedas de la cueva, empiezan a salir las canciones. Todas a la vez. Se escapan por la boca de la cueva y bajan volando hacia la isla, miles de lucecitas, como una lluvia al revés.',
        'Ella las ve marchar. No intenta pararlas. Solo dice: «Ya está. Ya me he quedado sola otra vez.»',
        'Y aquí falta una canción, la quinta. Pero no está en ninguna moneda. Nunca lo estuvo.',
        'Paula: la Canción del Corazón es la que ella no tiene. La única manera de conseguirla es dársela. ¿Se la cantas?',
      ],
      acotacion:
        'Este es EL momento. Pregúntaselo de verdad y espera. Si Paula canta —lo que sea, lo que se le ocurra, una nana, lo que canten en el coche— déjala cantar entera sin interrumpir. Si le da vergüenza, que la cante Luca. Si no canta ninguno, que tarareen. Cualquier cosa vale. Lo que no vale es que te la cantes tú.',
      loQueVen: [
        'Miles de lucecitas saliendo de la cueva y bajando hacia la isla.',
        'Flamarada de rodillas, mirándolas irse sin moverse.',
        'La cueva vacía por primera vez en muchísimos años. Y en silencio.',
        'La pluma vieja colgando de su cuello.',
        'Y abajo, en toda la isla, todo el mundo cantando a la vez: el pueblo, los pájaros, el mar.',
      ],
      preguntar: [
        { para: 'paula', texto: '¿Qué le cantas? Cántalo de verdad, entero.' },
        { para: 'luca', texto: '¿Le das tú la pluma blanca de Doña Pluma?' },
      ],
      tiradas: [],
      pistaDelDragon:
        'La quinta canción no se rescata: se regala. Es la única del juego que no estaba encerrada en ningún sitio.',
      siSeTuerce: [
        '«Sir Luca, canta tú con ella. Los dos juntos.»',
        '«Luca, dale la pluma. Acércate y dásela en la mano.»',
      ],
      rescataCancion: 5,
    },

    {
      id: 'ep5-e6',
      titulo: 'El rosal',
      duracion: '5 min',
      leerEnVozAlta: [
        'Flamarada escucha la canción entera sin moverse. Y cuando acaba, hace una cosa que no ha hecho nunca: intenta repetirla.',
        'Le sale fatal. Espantosa. Es un dragón: los dragones no saben cantar. Pero la está cantando.',
        'Y entonces se le cae una lágrima, una sola, del tamaño de un puño.',
        'Y cae justo dentro de la maceta que os dio Gala. En el brote verde que habéis subido con tanto cuidado hasta aquí arriba.',
        'Del brote sale un rosal. Y crece, y crece, y sale de la maceta y se agarra a la piedra, y sube por las paredes de la cueva y se escapa por la boca hacia fuera, cargado de rosas rojas, hasta que se ve desde toda la isla.',
      ],
      acotacion:
        'Que se note que el rosal no sale de la nada: sale de lo que les dieron dos niñas de cinco años el día anterior. Sí, es Sant Jordi. Sí, es agosto. Les va a dar exactamente igual. Cierra despacio y deja que cada uno coja su rosa: si tienes una rosa de verdad preparada para dársela al acabar, mejor que mejor.',
      loQueVen: [
        'Un rosal enorme creciendo de la piedra, cargado de rosas rojas.',
        'Flamarada cantando fatal, feliz, sin parar.',
        'Desde el pueblo, abajo, todo el mundo señalando hacia la montaña florida.',
        'Vuestro barco en la playa, con la vela hinchada y crujiendo: ya puede navegar.',
        'Y a la entrada de la cueva, dos rosas que se han doblado hacia vosotros, una para cada uno.',
      ],
      preguntar: [
        { para: 'luca', texto: 'Coge tu rosa. ¿Para quién te la vas a llevar?' },
        { para: 'paula', texto: '¿Os vais con el barco o os quedáis un rato más en la isla?' },
        { para: 'mesa', texto: 'Se acabó la aventura. ¿Qué es lo que más os ha gustado de todo?' },
      ],
      tiradas: [],
      pistaDelDragon:
        'FIN. Flamarada se queda en la isla, cantando fatal, y ya no está sola. El barco vuelve a navegar porque vuelve a haber canciones. Y cada uno se lleva una rosa. — Si preguntan si volverán a verla: sí, siempre que quieran.',
      siSeTuerce: [
        '«Sir Luca, coge tu rosa. Es tuya, te la has ganado.»',
        'Si Luca ya se ha ido a jugar a otra cosa: perfecto. Ha aguantado cinco episodios. Cierra con Paula.',
      ],
    },
  ],
}
