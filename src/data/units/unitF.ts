import { DidacticUnit } from '../../types';

export const UNIT_F: DidacticUnit = {
  id: 'unit-f',
  topicId: 'MOD-F',
  order: 6,
  title: 'Estrategias Explicativas y Argumentativas',
  subtitle: 'Los recursos retóricos para hacer comprender un saber o para persuadir con evidencia',
  estimatedMinutes: 8,
  learningObjectives: [
    'Identificar las estrategias discursivas explicativas: definición, reformulación, ejemplo, comparación/analogía, narración y causalidad.',
    'Reconocer las estrategias argumentativas: cita de autoridad, pregunta retórica, concesión, desmentida y argumentos empíricos.',
    'Diferenciar con rigor epistemológico un argumento empírico contrastable de una apelación a la doxa o sentido común.',
    'Analizar la estructura de la demostración argumentativa: punto de partida, tesis/hipótesis, cuerpo de razones y conclusión.'
  ],
  sourceRefs: [
    { text: 'Manual del Curso de Ingreso UNLaM 2022 (Módulo 2: Uso de estrategias en la explicación y argumentación, pp. 49-53)', status: 'oficial_historica', ref: 'Manual UNLaM 2022' },
    { text: 'Resumen de Seminario del usuario (Módulo 5 y 6: Estrategias explicativas y argumentativas, pp. 15-19)', status: 'resumen_usuario', ref: 'Resumen P1' },
    { text: 'Arnoux, E. (1992). Elementos de semiología y análisis del discurso. Buenos Aires: Cursos Universitarios.', status: 'externa_verificada', ref: 'Arnoux (1992)' }
  ],
  clearDefinition: 'Las estrategias discursivas son procedimientos retóricos y lingüísticos deliberados que el enunciador despliega para alcanzar su meta comunicativa. En la explicación, buscan facilitar la asimilación cognitiva de un conocimiento que no se cuestiona (mediante definiciones, reformulaciones con "es decir", analogías, ejemplos y explicaciones causales). En la argumentación, buscan validar una tesis controvertida e influir en el juicio del receptor mediante pruebas: argumentos empíricos verificables, citas de autoridad legitimadas, concesiones dialécticas que absorben objeciones y desmentidas que refutan falacias.',
  everydayExplanation: 'Pensá en una consulta con un pediatra. Primero te explica la enfermedad de tu hijo: "Tiene bronquiolitis; es decir, una inflamación de los conductos más finitos de los pulmones por un virus (definición y reformulación). Imaginate una manguerita que se tapa con barro (analogía)". Ahí usó estrategias explicativas. Después el pediatra te argumenta por qué no debés darle antibióticos: "Si bien la fiebre asusta a la familia (concesión), un ensayo en 2.000 niños demostró que los antibióticos no curan los virus (argumento empírico) y la Sociedad Argentina de Pediatría desaconseja su uso (cita de autoridad)". Ahí usó estrategias argumentativas.',
  analogy: {
    metaphor: 'Las estrategias como la caja de herramientas de un cirujano.',
    explanation: 'El cirujano no usa el bisturí para suturar ni la gasa para cortar huesos; cada instrumento tiene una función precisa en la operación. En el texto ocurre lo mismo: cuando querés aclarar un concepto usás la reformulación; cuando querés probar un hecho usás la estadística empírica; cuando querés responder a una objeción usás la concesión.',
    caveat: 'A diferencia de las herramientas de metal que son rígidas, una misma estrategia (como el ejemplo o la narración) puede servir para explicar o para argumentar según la intención dominante de quien escribe.'
  },
  microStory: {
    title: 'Mía y el debate sobre los argumentos empíricos',
    vignettes: [
      {
        index: 1,
        speaker: 'Lucas',
        dialogue: 'Mía, en esta actividad sobre el tabaquismo puse como argumento de autoridad: "Todo el mundo sabe que fumar hace mal porque te lo dice tu abuela en la cocina". ¿Está bien fundamentado?',
        sceneDescription: 'Lucas sonríe confiado en la biblioteca Leopoldo Marechal de la UNLaM.',
        altText: 'Lucas le muestra a Mía su justificación basada en lo que dice su abuela.'
      },
      {
        index: 2,
        speaker: 'Mía',
        dialogue: '¡No, Lucas! Eso no es un argumento de autoridad; es un argumento de sentido común o creencia popular. En medicina universitaria necesitás argumentos empíricos o autoridad científica formal.',
        sceneDescription: 'Mía le muestra a Lucas un informe de la OMS con estadísticas epidemiológicas de cáncer pulmonar.',
        altText: 'Mía le enseña a Lucas un informe con gráficos estadísticos y porcentajes de la OMS.'
      },
      {
        index: 3,
        speaker: 'Prof. Valeria',
        dialogue: 'Brillante distinción, Mía. La abuela puede tener razón por experiencia de vida, pero en un parcial de ingreso evaluamos si saben distinguir una creencia popular de un dato empírico verificable.',
        sceneDescription: 'La Prof. Valeria se suma a la mesa con una fotocopia del modelo de examen de Teun van Dijk.',
        altText: 'La docente explica la diferencia epistemológica entre sentido común y evidencia empírica.'
      },
      {
        index: 4,
        speaker: 'Lucas',
        dialogue: 'O sea que si cito el estudio de The Lancet con 50.000 pacientes, ¿eso sí es un argumento empírico?',
        sceneDescription: 'Lucas tacha lo de la abuela y anota con entusiasmo los datos cuantitativos del estudio.',
        altText: 'Lucas anota los datos del estudio de The Lancet en su cuaderno de apuntes.'
      },
      {
        index: 5,
        speaker: 'Prof. Valeria',
        dialogue: '¡Exacto! Y si citás a la Organización Panamericana de la Salud, es argumento de autoridad legítima. Y si decís "Si bien dejar de fumar genera abstinencia, los beneficios cardíacos aparecen a las 48 horas", ¡hiciste una concesión perfecta!',
        sceneDescription: 'Lucas y Mía chocan los cinco, listos para clasificar cualquier estrategia discursiva en el examen.',
        altText: 'Los estudiantes festejan al dominar la clasificación de estrategias discursivas.'
      }
    ]
  },
  workedExamples: [
    {
      id: 'ex-f-01',
      title: 'Mapeo de estrategias en un texto sobre sedentarismo y salud cardiovascular',
      contextType: 'caso_didactico_simulado',
      sourceNote: 'Fragmento didáctico diseñado según el modelo pedagógico del Manual UNLaM Módulo 2, pp. 49-53.',
      text: 'El sedentarismo es la ausencia de actividad física regular de intensidad moderada en la rutina diaria (1). En otras palabras, implica permanecer más de ocho horas al día sentado o acostado sin gasto energético significativo (2). Las arterias se asemejan a cañerías hidráulicas: si el caudal de agua no fluye con vigor, las impurezas grasas se sedimentan en sus paredes internas (3). Si bien muchas personas aducen falta de tiempo libre debido a sus jornadas laborales (4), las estadísticas de la Sociedad Argentina de Cardiología revelan que apenas 30 minutos de caminata diaria disminuyen el infarto en un 35% (5). No es cierto que se requiera pagar un gimnasio costoso para proteger el corazón (6).',
      annotations: [
        { term: '(1) El sedentarismo es la ausencia...', explanation: 'Definición: delimita el concepto delimitando sus condiciones esenciales (ausencia de actividad moderada).' },
        { term: '(2) En otras palabras, implica...', explanation: 'Reformulación: aclara en lenguaje operativo cotidiano ("más de ocho horas sentado") la definición anterior.' },
        { term: '(3) Las arterias se asemejan a cañerías...', explanation: 'Comparación / Analogía: establece un paralelo con tuberías mecánicas para hacer comprensible la aterosclerosis.' },
        { term: '(4) Si bien muchas personas aducen...', explanation: 'Concesión: admite un obstáculo real de los pacientes (falta de tiempo por trabajo) para luego rebatirlo con la solución.' },
        { term: '(5) Estadísticas de la SAC (30 min / 35%)', explanation: 'Argumento empírico respaldado por voz de autoridad institucional experta que aporta cifras cuantitativas verificables.' },
        { term: '(6) No es cierto que se requiera...', explanation: 'Desmentida / Refutación: desarticula una objeción económica popular mostrando que la caminata es libre y gratuita.' }
      ],
      analysisTakeaway: 'Un texto de alta densidad didáctica no acumula oraciones al azar: encadena armónicamente estrategias explicativas para nivelar conceptos y estrategias argumentativas para convencer y movilizar la conducta preventiva.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Confundir concesión con darle la razón completa al adversario y contradecirse.',
      correction: 'La concesión es un movimiento táctico: reconocés solo una parte menor ("si bien es verdad que X...") para inmediatamente introducir con más fuerza tu postura principal ("...eso no anula que Y es prioritario").',
      whyItHappens: 'Por no dominar la estructura de los períodos oracionales concesivos con "si bien" o "a pesar de".',
      howToSpotIt: 'Fijate si después de conceder algo el texto dice "pero", "sin embargo" o reafirma la tesis central: si no lo hace, no es concesión; es capitulación.'
    },
    {
      mistake: 'Citar como argumento de autoridad a una persona famosa que no tiene competencia en el área científica.',
      correction: 'La autoridad legítima en el discurso académico exige prestigio y competencia reconocida en la disciplina tratada (médicos, investigadores, organismos de salud reconocidos). Citar a un actor sobre medicamentos es una falacia de autoridad.',
      whyItHappens: 'Por la influencia de la publicidad mediática comercial contemporánea.',
      howToSpotIt: 'Preguntate: ¿esta persona investigó el tema o tiene un título científico afín a la materia? Si no es así, no es autoridad académica.'
    }
  ],
  pocketSummary: {
    coreConcept: 'Estrategias explicativas = facilitan entender (definición, reformulación con "es decir", analogía, ejemplo, causalidad). Estrategias argumentativas = persuaden con razones (argumentos empíricos con datos, autoridad científica, concesión con "si bien", desmentida con "no es verdad que").',
    quickRecognitionClue: 'Definición: "es...". Reformulación: "es decir / o sea". Concesión: "si bien...". Desmentida: "no es cierto que... sino...". Empírico: números y estudios. Autoridad: científicos u organismos.',
    fatalTrapToAvoid: 'Presentar una frase que dice tu vecino como si fuera un "argumento empírico" de la ciencia.'
  },
  flashcards: [
    { id: 'fc-f-01', front: '¿Qué es la reformulación discursiva y qué conectores usa?', back: 'Procedimiento explicativo que aclara o reexpresa en términos más sencillos una idea previa. Usa conectores como "es decir", "en otras palabras", "o sea", "dicho de otro modo".', category: 'Estrategias explicativas' },
    { id: 'fc-f-02', front: '¿Qué diferencia a un argumento empírico de uno de sentido común?', back: 'El empírico se funda en observaciones verificables, datos cuantitativos, estadísticas y experimentación científica. El de sentido común se apoya en creencias populares tradicionales o doxa no contrastada.', category: 'Estrategias argumentativas' },
    { id: 'fc-f-03', front: '¿Cómo funciona la estrategia argumentativa de concesión?', back: 'Reconoce parcialmente la validez de un argumento u objeción contraria ("si bien...", "aunque...") para luego refutarlo o superarlo con mayor contundencia mediante la tesis principal.', category: 'Concesión' },
    { id: 'fc-f-04', front: '¿Qué es una pregunta retórica?', back: 'Un interrogante que no busca recabar información desconocida, sino guiar reflexivamente al receptor hacia una conclusión implícita evidente, reforzando la tesis del emisor.', category: 'Retórica' }
  ],
  guidedExerciseId: 'Q-MOD-F-01',
  independentExerciseId: 'Q-MOD-F-02',
  activeRecallExerciseId: 'Q-MOD-F-06'
};
