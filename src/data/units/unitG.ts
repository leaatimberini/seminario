import { DidacticUnit } from '../../types';

export const UNIT_G: DidacticUnit = {
  id: 'unit-g',
  topicId: 'MOD-G',
  order: 7,
  title: 'Enunciación y Polifonía Enunciativa',
  subtitle: 'Las huellas del sujeto en el discurso, los efectos de objetividad y la orquestación de voces ajenas',
  estimatedMinutes: 8,
  learningObjectives: [
    'Rastrear marcas enunciativas: deícticos personales, espaciales y temporales en el enunciado.',
    'Identificar subjetivemas axiológicos y afectivos, diferenciándolos del registro despersonalizado.',
    'Comprender los mecanismos de objetividad científica: pasivas con "se", tercera persona y nominalizaciones.',
    'Analizar la polifonía discursiva (Ducrot/Bajtín), distinguiendo discurso directo, indirecto y evitando atribuciones erróneas.'
  ],
  sourceRefs: [
    { text: 'Manual del Curso de Ingreso UNLaM 2022 (Módulo 1: pp. 24-26; Módulo 2: Citas, Enunciación y Polifonía, pp. 53-56)', status: 'oficial_historica', ref: 'Manual UNLaM 2022' },
    { text: 'Resumen de Seminario del usuario (Módulo 8: Enunciación y Polifonía, pp. 20-22)', status: 'resumen_usuario', ref: 'Resumen P1' },
    { text: 'Kerbrat-Orecchioni, C. (1993). La enunciación. De la subjetividad del lenguaje / Ducrot, O. (1984). El decir y lo dicho.', status: 'externa_verificada', ref: 'Kerbrat-Orecchioni & Ducrot' }
  ],
  clearDefinition: 'La enunciación es el acto individual mediante el cual el sujeto se apropia de la lengua para producir un enunciado (Benveniste). A través de ese acto, el enunciador deja huellas lingüísticas observables (marcas enunciativas): deícticos (anclajes de persona, espacio y tiempo) y subjetivemas (juicios axiológicos y afectivos), o bien borra deliberadamente esas huellas para producir un efecto de objetividad científica (impersonalidad con "se", pasivas y nominalizaciones). Asimismo, el discurso rara vez es monológico: la polifonía enunciativa (Ducrot/Bajtín) describe la inclusión de voces ajenas en el interior del propio texto mediante discurso directo (cita textual entre comillas) o discurso indirecto (subordinación con correlación verbal).',
  everydayExplanation: 'Pensá en cuando escuchás un rumor en los pasillos del hospital: "Me dijeron que el director renunció ayer a la tarde". El "me" y el "ayer" son marcas enunciativas (ancladas en tu persona y en tu tiempo). Cuando decís "me dijeron que...", estás trayendo una voz ajena adentro de tu frase: ¡eso es polifonía! No fuiste vos el que inventó la noticia; estás reportando lo que dijo otra voz. En los exámenes te evalúan si sabés darte cuenta de quién es la voz que habla en cada renglón.',
  analogy: {
    metaphor: 'El texto como un escenario teatral y el enunciador como el director de escena.',
    explanation: 'El autor es el director de escena: decide qué actores (voces ajenas) suben a las tablas, si los hace hablar con su voz original entre comillas (discurso directo) o si él mismo resume lo que dijeron (discurso indirecto), y qué postura toma frente a ellos: si les aplaude con respeto (cita de autoridad) o si los expone como villanos para desmentirlos.',
    caveat: 'A diferencia de una obra de teatro donde los actores tienen disfraces y rostros visibles, en el texto escrito las voces ajenas a veces se camuflan sutilmente en frases indirectas sin comillas, exigiendo una lectura analítica atenta para no confundir la voz del autor con la del personaje citado.'
  },
  microStory: {
    title: 'El error fatal con el texto de Teun van Dijk',
    vignettes: [
      {
        index: 1,
        speaker: 'Lucas',
        dialogue: '¡Terminé la pregunta del parcial sobre Teun van Dijk! La consigna decía "¿Qué sostiene van Dijk sobre las minorías?", y le puse: "Van Dijk afirma que las minorías son las culpables de la delincuencia urbana".',
        sceneDescription: 'Lucas sonríe satisfecho entregándole la hoja a Mía para que la revise.',
        altText: 'Lucas le muestra a Mía su respuesta del modelo de examen convencido de haber acertado.'
      },
      {
        index: 2,
        speaker: 'Mía',
        dialogue: '¡¡Nooo, Lucas, paruuá!! ¡Cometiste el error de atribución errónea! ¡Le atribuiste a van Dijk lo que dicen los medios de derecha a los que van Dijk está denunciando!',
        sceneDescription: 'Mía se agarra la cabeza con los ojos abiertos de par en par.',
        altText: 'Mía horrorizada le señala el párrafo del texto oficial donde van Dijk critica ese discurso racista.'
      },
      {
        index: 3,
        speaker: 'Prof. Valeria',
        dialogue: 'Mía tiene razón, Lucas. Teun van Dijk es un lingüista crítico del racismo. En ese párrafo él cita la voz de la prensa sensacionalista para mostrar cómo reproducen prejuicios xenófobos, ¡y después la desmiente con estadísticas!',
        sceneDescription: 'La Prof. Valeria abre el manual oficial en la página 37 y subraya el verbo "reproducen".',
        altText: 'La docente explica la polifonía del texto de van Dijk mostrando cómo el autor confronta con la voz racista.'
      },
      {
        index: 4,
        speaker: 'Lucas',
        dialogue: 'Uh... o sea que como vi la frase en el texto, creí que era la opinión de van Dijk... No me fijé quién la estaba diciendo...',
        sceneDescription: 'A Lucas se le cae la cara de vergüenza al ver la diferencia entre la voz del autor y la voz citada.',
        altText: 'Lucas comprende apesadumbrado cómo la falta de análisis polifónico le hizo reprobar la consigna.'
      },
      {
        index: 5,
        speaker: 'Prof. Valeria',
        dialogue: 'Tranquilo, Lucas: para eso practicamos acá. La regla de oro de la polifonía en Seminario es: "Nunca asumas que lo que está escrito es lo que piensa el autor; fijate si lo introduce para apoyarlo o para destruirlo con una refutación".',
        sceneDescription: 'Lucas agarra la goma de borrar con energía renovada y reescribe la respuesta con total autonomía.',
        altText: 'Lucas borra y redacta la respuesta correcta deslindando la postura de van Dijk de las voces citadas.'
      }
    ]
  },
  workedExamples: [
    {
      id: 'ex-g-01',
      title: 'Desglose de marcas enunciativas y polifonía en una noticia sobre dengue',
      contextType: 'caso_didactico_simulado',
      sourceNote: 'Fragmento didáctico diseñado según el modelo formal de evaluación de Seminario UNLaM.',
      text: 'El ministro de Salud de la provincia advirtió ayer en conferencia de prensa: "Estamos atravesando la peor epidemia de dengue de las últimas dos décadas en nuestro territorio". Sin embargo, fuentes gremionales del hospital señalaron que las autoridades provinciales subestiman la gravedad del colapso hospitalario y afirmaron que faltan reactivos básicos de laboratorio.',
      annotations: [
        { term: 'advirtió ayer (verbo de decir + deíctico temporal)', explanation: 'El verbo "advirtió" modaliza el acto de habla como señal de alarma; "ayer" es un deíctico temporal que ancla la conferencia en el día previo a la publicación de la noticia.' },
        { term: '"Estamos atravesando la peor epidemia..." (Discurso Directo)', explanation: 'Cita textual enmarcada por dos puntos y comillas. Contiene marcas del ministro: deícticos de 1ª persona plural inclusiva ("Estamos", "nuestro territorio") y subjetivema axiológico superlativo ("la peor epidemia").' },
        { term: 'Sin embargo (Conector adversativo)', explanation: 'Articula la transición hacia una voz disidente en la polifonía de la noticia.' },
        { term: 'fuentes gremiales señalaron que... y afirmaron que... (Discurso Indirecto)', explanation: 'Voz referida subordinada sin comillas. El periodista reproduce con sus propias palabras los reclamos de los trabajadores de la salud.' }
      ],
      analysisTakeaway: 'El texto es un mosaico polifónico: convoca dos voces en disputa (el ministro en discurso directo y los trabajadores en discurso indirecto), orquestadas por la voz neutra del cronista periodístico.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cometer "atribución errónea": afirmar que el autor sostiene una postura cuando en realidad estaba citando a su adversario para criticarlo.',
      correction: 'Identificar siempre los verbos introductores y los conectores adversativos: si el autor dice "ciertos grupos afirman X; sin embargo, las pruebas demuestran Y", la postura del autor es Y, no X.',
      whyItHappens: 'Por hacer lectura fragmentaria buscando palabras sueltas sin analizar la estructura argumentativa de refutación.',
      howToSpotIt: 'Preguntate: ¿el autor celebra esa frase o la destruye en la oración siguiente? Si la destruye, no es su pensamiento.'
    },
    {
      mistake: 'Creer que un artículo científico no tiene autor porque no dice "yo pienso".',
      correction: 'El autor está siempre presente, pero utiliza un "efecto de objetividad" (tercera persona, pasivas con "se", nominalizaciones) para construir un ethos de neutralidad metodológica.',
      whyItHappens: 'Por confundir la ausencia de marcas de primera persona con la inexistencia de un sujeto de la enunciación.',
      howToSpotIt: 'Identificá las elecciones léxicas y sintácticas: la decisión de escribir "se procedió a inocular" en vez de "yo inoculé" es una elección intencional del enunciador.'
    }
  ],
  pocketSummary: {
    coreConcept: 'Enunciación = acto de decir. Enunciado = lo dicho. Marcas enunciativas = deícticos (yo, aquí, hoy) y subjetivemas (juicios valorativos). Efecto de objetividad = impersonalidad con "se" y pasivas. Polifonía = voces ajenas citadas en discurso directo ("...") o indirecto (que...).',
    quickRecognitionClue: 'Discurso directo: dos puntos y comillas literales. Discurso indirecto: "afirmó que...". Subjetivemas: adjetivos o adverbios que expresan emoción o juicio moral.',
    fatalTrapToAvoid: 'El error de van Dijk: atribuirle al autor de un texto una idea racista o falsa que el autor citó justamente para refutarla.'
  },
  flashcards: [
    { id: 'fc-g-01', front: '¿Qué son los deícticos y qué tipos existen?', back: 'Palabras cuyo significado depende del contexto de la enunciación: personales (yo, nosotros, usted), espaciales (aquí, allí, este) y temporales (hoy, ayer, ahora, el mes pasado).', category: 'Marcas enunciativas' },
    { id: 'fc-g-02', front: '¿Qué es un subjetivema según Kerbrat-Orecchioni?', back: 'Un vocablo (sustantivo, adjetivo, verbo o adverbio) que porta una evaluación subjetiva del enunciador, sea afectiva (angustia, cariño) o axiológica/moral (desalmado, admirable).', category: 'Subjetividad' },
    { id: 'fc-g-03', front: '¿Cómo se construye el efecto de objetividad en los textos científicos?', back: 'Borrando las marcas explícitas del "yo" mediante: oraciones impersonales con "se" (se constató), voz pasiva (la muestra fue analizada), tercera persona gramatical y nominalizaciones.', category: 'Registro científico' },
    { id: 'fc-g-04', front: '¿Qué es el discurso directo frente al indirecto?', back: 'El directo reproduce las palabras ajenas de forma literal entre comillas con sus propios deícticos. El indirecto las subordina mediante la conjunción "que", adaptando tiempos verbales y pronombres.', category: 'Polifonía' }
  ],
  guidedExerciseId: 'Q-MOD-G-01',
  independentExerciseId: 'Q-MOD-G-06',
  activeRecallExerciseId: 'Q-MOD-G-08'
};
