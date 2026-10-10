import { DidacticUnit } from '../../types';

export const UNIT_I: DidacticUnit = {
  id: 'unit-i',
  topicId: 'MOD-I',
  order: 9,
  title: 'Normativa Textual y Herramientas Gramaticales',
  subtitle: 'Puntuación estratégica, acentuación diacrítica, concordancia y los usos correctos e incorrectos del gerundio',
  estimatedMinutes: 8,
  learningObjectives: [
    'Aplicar con precisión las normas de puntuación: punto y seguido, punto y aparte, coma de inciso, coma elíptica y vocativa.',
    'Evitar la coma entre sujeto y verbo ("coma asesina") y dominar el uso del punto y coma y los dos puntos.',
    'Resolver casos de acentuación ortográfica: hiato acentual, tilde diacrítica en monosílabos e interrogativos indirectos.',
    'Identificar y corregir los usos incorrectos del gerundio (de posterioridad y especificativo) y errores de concordancia impersonal.'
  ],
  sourceRefs: [
    { text: 'Manual del Curso de Ingreso UNLaM 2022 (Anexos normativos: Citas pp. 87-88; Puntuación pp. 89-93; Acentuación pp. 94-98; Gerundio pp. 99-100; Concordancia p. 100; Conectores pp. 101-102)', status: 'oficial_historica', ref: 'Manual UNLaM 2022' },
    { text: 'Resumen de Seminario del usuario (Normas y conectores)', status: 'resumen_usuario', ref: 'Resumen P1 y P2' },
    { text: 'Real Academia Española (RAE). Diccionario panhispánico de dudas y Ortografía de la lengua española (2010).', status: 'externa_verificada', ref: 'RAE & ASALE' }
  ],
  clearDefinition: 'La normativa textual no es una colección de reglas caprichosas para memorizar, sino el sistema de convenciones ortográficas, sintácticas y puntuarias que garantiza la inteligibilidad, la fluidez y la precisión del discurso académico. En los exámenes de la UNLaM, los docentes penalizan de forma estricta faltas sistemáticas en: puntuación (separar indebidamente sujeto y verbo, omitir la coma elíptica o de inciso), acentuación (ignorar hiatos o confundir tildes diacríticas como "de/dé", "el/él", "cómo/como"), discordancias en verbos impersonales ("hubieron" en vez de "hubo") y el vicio extendido del gerundio de posterioridad ("ingresó al hospital falleciendo después" en vez de "...y falleció después").',
  everydayExplanation: 'Pensá en las señales de tránsito y en las reglas de bioseguridad en un quirófano: no podés dejar una pinza sucia en cualquier lado ni doblar a la izquierda donde hay una flecha de contramano. En la escritura, la puntuación son los semáforos y los frenos: una coma mal puesta puede cambiar el sentido de una prescripción médica (no es lo mismo "No, administrar morfina" que "No administrar morfina"). Y el gerundio de posterioridad es como querer poner el vendaje antes de que el paciente se haga la herida: choca contra la línea temporal lógica de los hechos.',
  analogy: {
    metaphor: 'La normativa como la esterilización y calibración del instrumental quirúrgico.',
    explanation: 'Podés tener una idea brillante y ser un cirujano talentoso, pero si el bisturí está oxidado o desafilado, la operación fracasa por infección. En el parcial, tu pensamiento puede ser lúcido, pero si tu texto está lleno de faltas de concordancia, oraciones cortadas sin puntuación y gerundios deformados, el docente no puede acreditar tu competencia discursiva universitaria.',
    caveat: 'Tener una ortografía perfecta no garantiza por sí sola que el contenido sea profundo, pero tener mala normativa arruina incluso a la mejor de las ideas.'
  },
  microStory: {
    title: 'La cacería de errores antes de entregar la hoja',
    vignettes: [
      {
        index: 1,
        speaker: 'Lucas',
        dialogue: 'Mía, me sobran 7 minutos en el simulacro de examen. Ya escribí todo. Mirá esta frase que puse en la conclusión: "El paciente ingresó descompensado, falleciendo horas después; hubieron muchos problemas porque los médicos no sabían como actuar". ¿Entrego ya?',
        sceneDescription: 'Lucas guarda la cartuchera listo para levantarse del banco del aula.',
        altText: 'Lucas apurado por entregar le muestra su conclusión con múltiples faltas normativas a Mía.'
      },
      {
        index: 2,
        speaker: 'Mía',
        dialogue: '¡¡Sentate ya mismo, Lucas!! ¡Esa sola oración tiene tres faltas que la cátedra te tacha con rojo furioso! 1) Usaste un gerundio de posterioridad ("falleciendo después"), 2) pusiste "hubieron" en plural existencial, y 3) no le pusiste tilde al interrogativo indirecto "cómo".',
        sceneDescription: 'Mía lo agarra del brazo con urgencia pedagógica y le abre el Anexo del Manual de UNLaM.',
        altText: 'Mía le señala los tres errores normativos graves en el Anexo del Manual Oficial.'
      },
      {
        index: 3,
        speaker: 'Prof. Valeria',
        dialogue: 'Mía te salvó el parcial, Lucas. El Anexo 5 del Manual de Seminario dice explícitamente: el gerundio solo se usa para acciones simultáneas o inmediatamente anteriores. Si la muerte ocurrió horas después, ¡la acción es posterior! Tenés que decir: "...y falleció horas después".',
        sceneDescription: 'La Prof. Valeria se acerca sonriendo y asiente ante la lucidez de Mía.',
        altText: 'La docente explica la regla del gerundio de posterioridad del Anexo 5 del manual.'
      },
      {
        index: 4,
        speaker: 'Lucas',
        dialogue: '¿Y con "hubieron"? Siempre escucho a la gente decir "hubieron problemas"...',
        sceneDescription: 'Lucas abre los ojos sorprendido y agarra la goma de borrar.',
        altText: 'Lucas pregunta con curiosidad por qué "hubieron" es un error en español.'
      },
      {
        index: 5,
        speaker: 'Prof. Valeria',
        dialogue: 'En la calle se escucha, pero en la universidad no: el verbo "haber" que significa existir es impersonal y va SIEMPRE en singular: "hubo muchos problemas". Y "cómo" lleva tilde diacrítica porque introduce una pregunta indirecta: no sabían de qué modo actuar. Corregilo y recién ahí entregás.',
        sceneDescription: 'Lucas borra concentrado, reescribe impecable y entrega su hoja con una sonrisa de alivio.',
        altText: 'Lucas corrige los tres fallos y entrega su examen con normativa académica perfecta.'
      }
    ]
  },
  workedExamples: [
    {
      id: 'ex-i-01',
      title: 'Taller de Corrección Normativa Quirúrgica de un Párrafo Clínico',
      contextType: 'caso_didactico_simulado',
      sourceNote: 'Fragmento con fallas frecuentes diseñado para ejercitar los Anexos 2, 3, 5 y 6 del Manual UNLaM.',
      text: 'Texto con Errores Graves:\n"El equipo de cirujanos, ingresó al quirófano a las 8 hs. iniciando la cirugía inmediatamente. Hubieron complicaciones respiratorias en el paciente y el anestesista no supo como resolverlo, falleciendo el sujeto minutos mas tarde".\n\nTexto Corregido con Criterio Académico:\n"El equipo de cirujanos ingresó al quirófano a las 8 hs. e inició la cirugía inmediatamente (1). Hubo complicaciones respiratorias en el paciente y el anestesista no supo cómo resolverlas (2), por lo que el sujeto falleció minutos más tarde (3)".',
      annotations: [
        { term: '(1) Eliminación de coma entre sujeto y verbo + gerundio de posterioridad', explanation: 'Se suprimió la coma incorrecta entre "El equipo de cirujanos" y su verbo "ingresó". Se reemplazó "iniciando" por la coordinación conjugada "e inició".' },
        { term: '(2) Hubo (singular impersonal) + concordancia de pronombre + tilde en cómo', explanation: '"Hubieron" corregido a "Hubo" (existencia impersonal). "Resolverlo" corregido a "resolverlas" (concuerda con las complicaciones en plural). Tilde diacrítica en "cómo" interrogativo indirecto.' },
        { term: '(3) Reemplazo de gerundio de posterioridad + tilde en más', explanation: '"Falleciendo... más tarde" corregido a "...por lo que el sujeto falleció minutos más tarde" (verbo en pasado para la acción posterior). Tilde en "más" adverbio de cantidad.' }
      ],
      analysisTakeaway: 'Un párrafo que parecía confuso y descuidado se transforma en un texto quirúrgicamente limpio, preciso y riguroso aplicando cuatro reglas normativas básicas de la cátedra.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Usar gerundio de posterioridad: "El móvil de emergencias chocó contra un árbol, volcando metros más adelante".',
      correction: 'Reescribir con verbo conjugado o conector consecutivo: "El móvil de emergencias chocó contra un árbol y volcó metros más adelante".',
      whyItHappens: 'Por un vicio estilístico muy extendido en el periodismo sensacionalista y en los partes policiales rápidos.',
      howToSpotIt: 'Preguntate: ¿la acción del "-ando/-iendo" ocurrió DESPUÉS del primer verbo? Si pasó después, el gerundio está mal usado.'
    },
    {
      mistake: 'Escribir "hubieron muchos heridos" o "hacen tres días que no duermo".',
      correction: 'Usar siempre la tercera persona del singular en verbos impersonales existenciales y temporales: "hubo muchos heridos", "hace tres días".',
      whyItHappens: 'Por hacer concordar el verbo por atracción fonética con el objeto directo plural que viene después.',
      howToSpotIt: 'Cuando el verbo "haber" signifique que algo existe o está ahí, recordá la alarma: NUNCA LLEVA LETRA N AL FINAL (hubo, había, hay).'
    }
  ],
  pocketSummary: {
    coreConcept: 'Normativa = herramientas de precisión textual. Puntuación: jamás coma entre sujeto y verbo; coma obligatoria en vocativo, inciso y elipsis. Acentuación: hiato siempre lleva tilde (pa-ís, bio-lo-gí-a); tilde diacrítica en pronombres e interrogativos. Gerundio: solo para simultaneidad o anterioridad; prohibido para hechos posteriores.',
    quickRecognitionClue: 'Gerundio de posterioridad: "...falleciendo horas después" (ERROR) -> "...y falleció horas después" (CORRECTO). Haber impersonal: "hubieron" (ERROR) -> "hubo" (CORRECTO). Coma asesina: "El médico, operó" (ERROR) -> "El médico operó" (CORRECTO).',
    fatalTrapToAvoid: 'Perder puntos en el parcial por escribir "hubieron", poner comas entre sujeto y predicado o usar gerundios para acciones posteriores.'
  },
  flashcards: [
    { id: 'fc-i-01', front: '¿Por qué es incorrecto el llamado "gerundio de posterioridad"?', back: 'Porque en español el gerundio solo puede expresar acciones simultáneas a la del verbo principal o inmediatamente anteriores. Nunca puede expresar una consecuencia o acción que ocurre después en el tiempo (ej. incorrecto: "chocó muriendo luego"; correcto: "chocó y murió luego").', category: 'Gerundio' },
    { id: 'fc-i-02', front: '¿Por qué nunca debe colocarse una coma entre el sujeto y el verbo?', back: 'Porque rompe la unidad sintáctica básica de la oración (salvo que en el medio haya un inciso explicativo cerrado entre dos comas). La regla prohíbe taxativamente la "coma asesina" solitaria entre el sujeto y su predicado.', category: 'Puntuación' },
    { id: 'fc-i-03', front: '¿Por qué se dice "hubo muchas personas" y no "hubieron"?', back: 'Porque el verbo haber con sentido existencial es impersonal (carece de sujeto). "Muchas personas" es el objeto directo. Al no tener sujeto plural con el cual concordar, el verbo permanece congelado en tercera persona del singular.', category: 'Concordancia' },
    { id: 'fc-i-04', front: '¿Qué es el hiato acentual dierético?', back: 'La separación de dos vocales contiguas (una abierta átona y una cerrada tónica: i, u) en sílabas distintas. La vocal cerrada tónica lleva tilde obligatoria siempre para romper el diptongo (ej. cirugía, país, epidemiología).', category: 'Acentuación' }
  ],
  guidedExerciseId: 'Q-MOD-I-01',
  independentExerciseId: 'Q-MOD-I-02',
  activeRecallExerciseId: 'Q-MOD-I-06'
};
