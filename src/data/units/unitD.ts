import { DidacticUnit } from '../../types';

export const UNIT_D: DidacticUnit = {
  id: 'unit-d',
  topicId: 'MOD-D',
  order: 4,
  title: 'Enunciado, Discurso y Adecuación',
  subtitle: 'La práctica social del lenguaje, los registros comunicativos y la construcción del ethos académico',
  estimatedMinutes: 8,
  learningObjectives: [
    'Diferenciar teóricamente el enunciado (producto concreto observable) del discurso (práctica social situada).',
    'Reconocer los factores de adecuación: propósito, canal, tema, destinatario y simetría entre interlocutores.',
    'Identificar los distintos tipos de corrección (gramatical, léxica, ortográfica, estilística y sociocultural).',
    'Comprender la función del ethos académico y distinguir entre comunidad discursiva, académica y científica.'
  ],
  sourceRefs: [
    { text: 'Manual del Curso de Ingreso UNLaM 2022 (Módulo 1: Enunciación y Variedades de lenguaje, pp. 24-27)', status: 'oficial_historica', ref: 'Manual UNLaM 2022' },
    { text: 'Resumen de Seminario del usuario (Módulo 3: Texto, Enunciado y Discurso, pp. 8-11)', status: 'resumen_usuario', ref: 'Resumen P1' },
    { text: 'Benveniste, E. (1986). Problemas de lingüística general / Maingueneau, D. (2002). Análisis de textos de comunicación.', status: 'externa_verificada', ref: 'Benveniste & Maingueneau' }
  ],
  clearDefinition: 'El enunciado es la unidad mínima concreta de comunicación producto del acto de enunciación. El discurso es la práctica social amplia del lenguaje vinculada a instituciones, ideologías y esferas de la actividad humana. Para interactuar eficazmente en una comunidad, el hablante debe desarrollar adecuación comunicativa (adaptar registro, canal y léxico al destinatario y propósito) y conciencia retórica, construyendo un ethos académico: la imagen discursiva de un estudiante reflexivo, riguroso y honesto que fundamenta sus aseveraciones con rigor disciplinar.',
  everydayExplanation: 'Pensá en cómo te vestís: no vas a rendir un final universitario en traje de baño con ojotas, ni vas a jugar al fútbol con saco y corbata. La lengua funciona igual: nadie escribe una respuesta de examen de ingreso con abreviaturas de WhatsApp ("xq los bichos se murieron al toque"), ni le habla a un amigo en el recreo usando oraciones subordinadas pasivas del siglo XIX. La adecuación es saber ponerse la "ropa lingüística" correcta para cada ocasión.',
  analogy: {
    metaphor: 'El registro como el dial de una radio y el ethos como la voz del locutor que transmite seriedad y confianza.',
    explanation: 'Sintonizar la frecuencia adecuada según quién te escucha es la adecuación. El ethos es cómo te perciben: si hablás con serenidad, términos precisos y datos contrastados, el oyente confía en vos; si hablás a los gritos con vaguedades y sin pruebas, nadie se toma en serio lo que decís.',
    caveat: 'Construir un ethos académico riguroso no significa usar palabras difíciles sin sentido para impresionar, sino expresarse con claridad, precisión conceptual y honestidad intelectual.'
  },
  microStory: {
    title: 'El mail a la cátedra y el cambio de registro',
    vignettes: [
      {
        index: 1,
        speaker: 'Lucas',
        dialogue: 'Mía, le mandé un mail al titular de la cátedra para pedirle que me pase a la comisión de la mañana. Le puse: "Hola profe, pasame a la mañana que a la noche se me re complica con el bondi, dale gracias abrazo".',
        sceneDescription: 'Lucas muestra la pantalla de su teléfono orgulloso en uno de los bancos del patio.',
        altText: 'Lucas le muestra el mensaje informal que le envió por correo al profesor titular.'
      },
      {
        index: 2,
        speaker: 'Mía',
        dialogue: '¡No, Lucas, por favor! ¡Eso es un chat informal con amigos! Estás hablándole a una autoridad institucional en un canal escrito formal. Hay una asimetría de roles y tenés que cuidar la adecuación.',
        sceneDescription: 'Mía se lleva las manos a la cabeza con expresión de espanto pedagógico.',
        altText: 'Mía se agarra la cabeza sorprendida por el tono inadecuado del mensaje de Lucas.'
      },
      {
        index: 3,
        speaker: 'Prof. Valeria',
        dialogue: 'Mía tiene toda la razón, Lucas. En la universidad ustedes están ingresando a una nueva comunidad discursiva: la comunidad académica. Tienen que construir un ethos de estudiantes universitarios.',
        sceneDescription: 'La Prof. Valeria se suma a la conversación y les muestra una plantilla de correo formal académico.',
        altText: 'La Prof. Valeria les explica el concepto de comunidad discursiva y cómo redactar un correo formal.'
      },
      {
        index: 4,
        speaker: 'Lucas',
        dialogue: '¿Y cómo tendría que haberlo escrito, profe?',
        sceneDescription: 'Lucas saca una lapicera dispuesto a tomar nota en su cuaderno.',
        altText: 'Lucas atento pregunta cómo redactar adecuadamente la solicitud institucional.'
      },
      {
        index: 5,
        speaker: 'Prof. Valeria',
        dialogue: '"Estimado Profesor Dr. Martínez: Me dirijo a usted con el fin de solicitar un cambio de comisión por motivos laborales y de transporte público. Adjunto constancia y saludo cordialmente". Claro, preciso, respetuoso y adecuado al canal.',
        sceneDescription: 'Mía y Lucas asienten, entendiendo cómo el lenguaje abre puertas institucionales.',
        altText: 'Los ingresantes comprenden la redacción adecuada para una solicitud universitaria formal.'
      }
    ]
  },
  workedExamples: [
    {
      id: 'ex-d-01',
      title: 'Contraste de adecuación: Registro coloquial vs. Registro académico',
      contextType: 'caso_didactico_simulado',
      sourceNote: 'Comparación didáctica basada en ejercicios de reescritura del Manual UNLaM Módulo 1, p. 27.',
      text: 'Texto Inadecuado en Parcial: "El médico de la salita se re asustó porque vio que la gente tenía una bocha de granitos raros y dijo que era una peste mortal sin saber bien qué onda".\nTexto Reescrito Adecuado: "El profesional de atención primaria advirtió un incremento inusual de erupciones cutáneas atípicas en la población asistida. Ante dicho cuadro clínico, emitió un alerta epidemiológico preventivo para determinar con precisión el agente etiológico responsable".',
      annotations: [
        { term: 'El médico de la salita -> El profesional de atención primaria', explanation: 'Sustitución de expresión coloquial informal por denominación institucional técnica disciplinar precisa.' },
        { term: 'se re asustó -> advirtió un incremento inusual', explanation: 'Eliminación del subjetivema coloquial emotivo en favor de un verbo observacional objetivo y riguroso.' },
        { term: 'una bocha de granitos raros -> erupciones cutáneas atípicas', explanation: 'Reemplazo de cuantificador vago e hiperbólico por sintagma técnico dermatológico con propiedad léxica.' },
        { term: 'era una peste mortal sin saber bien qué onda -> alerta epidemiológico preventivo para determinar el agente etiológico', explanation: 'Construcción de un ethos reflexivo que describe el protocolo sanitario formal en lugar de dramatismo barrial descontrolado.' }
      ],
      analysisTakeaway: 'La adecuación académica no oculta las ideas: las formula con rigor científico, sobriedad sintáctica y vocabulario específico de la esfera de las ciencias de la salud.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Creer que usar palabras difíciles o arcaicas innecesarias ("nosocomio", "galeno", "fallecido occiso") mejora el texto.',
      correction: 'El registro académico universitario privilegia la claridad, la precisión y la concisión moderna estándar ("hospital", "médico"). Los rebuscamientos vacíos oscurecen el texto.',
      whyItHappens: 'Por confundir la formalidad académica con la pedantería barroca o el lenguaje policial antiguo.',
      howToSpotIt: 'Si la palabra suena a un expediente de hace ochenta años y hay un término claro contemporáneo, elegí siempre el término claro.'
    },
    {
      mistake: 'Incurrir en pleonasmos o redundancias léxicas viciosas ("hemorragia de sangre", "subir arriba", "autopsia de un cadáver").',
      correction: 'Eliminar el término redundante que ya está contenido en el significado del primero: "hemorragia", "subir", "autopsia".',
      whyItHappens: 'Por hablar con inercia sin reflexionar sobre el significado etimológico de los términos médicos.',
      howToSpotIt: 'Preguntate: ¿puede haber una "hemorragia" que no sea de sangre? No; por ende, "de sangre" sobra.'
    }
  ],
  pocketSummary: {
    coreConcept: 'Enunciado = hecho concreto de decir. Discurso = práctica social del lenguaje. Adecuación = adaptar propósito, canal, registro y destinatario. Ethos académico = imagen de rigor, objetividad y fundamento en el texto.',
    quickRecognitionClue: 'Adecuación: ¿el tono coincide con el lugar y las personas? Comunidades: la científica investiga y crea ciencia; la académica enseña y aprende en la facultad.',
    fatalTrapToAvoid: 'Escribir un parcial como si le estuvieras mandando un audio de WhatsApp a tu amigo.'
  },
  flashcards: [
    { id: 'fc-d-01', front: '¿Qué es la adecuación textual?', back: 'La propiedad por la cual un texto se adapta convenientemente al tema, al canal empleado, al propósito comunicativo, al destinatario previsto y a la relación social entre interlocutores.', category: 'Propiedades del texto' },
    { id: 'fc-d-02', front: '¿Qué es el "ethos académico"?', back: 'La imagen de emisor riguroso, objetivo, reflexivo e informado que el estudiante construye y proyecta en su propio texto mediante elecciones léxicas, sintácticas y argumentativas fundadas.', category: 'Ethos' },
    { id: 'fc-d-03', front: '¿Qué diferencia a la comunidad científica de la académica?', back: 'La científica se orienta a producir y validar conocimiento nuevo mediante investigación y papers entre pares. La académica se orienta a la enseñanza, transmisión y apropiación reflexiva de ese saber en el ámbito formativo superior.', category: 'Comunidades discursivas' },
    { id: 'fc-d-04', front: '¿Cuáles son los parámetros de corrección lingüística?', back: 'Corrección gramatical (morfosintaxis), léxica (propiedad de términos), ortográfica (tildes y grafías), estilística (ritmo sin cacofonías) y sociocultural (respeto contextual).', category: 'Corrección' }
  ],
  guidedExerciseId: 'Q-MOD-D-01',
  independentExerciseId: 'Q-MOD-D-02',
  activeRecallExerciseId: 'Q-MOD-D-06'
};
