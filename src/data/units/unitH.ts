import { DidacticUnit } from '../../types';

export const UNIT_H: DidacticUnit = {
  id: 'unit-h',
  topicId: 'MOD-H',
  order: 8,
  title: 'Escritura y Géneros Académicos del Estudiante',
  subtitle: 'El proceso recursivo de redacción, la respuesta de parcial autónoma y el Informe de Lectura Descriptivo (ILD)',
  estimatedMinutes: 8,
  learningObjectives: [
    'Comprender las tres fases del proceso de escritura: planificación, puesta en texto y revisión recursiva.',
    'Construir respuestas de parcial con estricta autonomía semántica y estructura en tres partes (introducción, desarrollo, cierre).',
    'Aplicar las macrorreglas de Teun van Dijk en la producción de resúmenes académicos cohesionados.',
    'Dominar la estructura y los verbos introductores del Informe de Lectura Descriptivo (ILD) evaluado en la UNLaM.'
  ],
  sourceRefs: [
    { text: 'Manual del Curso de Ingreso UNLaM 2022 (Módulo 3: Escritura de textos académicos, pp. 59-67; Modelo de examen van Dijk, pp. 37-38)', status: 'oficial_historica', ref: 'Manual UNLaM 2022' },
    { text: 'Resumen de Seminario del usuario (Módulo 7: La escritura; Módulo 9: Géneros académicos del alumno, pp. 20-24; P2 pp. 10-15)', status: 'resumen_usuario', ref: 'Resumen P1 y P2' },
    { text: 'Cassany, D. (1995). La cocina de la escritura / van Dijk, T. (1980). Estructuras y funciones del discurso.', status: 'externa_verificada', ref: 'Cassany & van Dijk' }
  ],
  clearDefinition: 'La escritura académica no es un don innato ni un vaciado mecánico de datos, sino un proceso cognitivo recursivo en tres fases: Planificación (definir objetivos, destinatario, lluvia de ideas y mapa textual), Puesta en texto (redactar oraciones y párrafos cohesionados) y Revisión (evaluar pertinencia, coherencia y normativa). Entre los géneros producidos por los estudiantes destacan: 1) el apunte de clase (registro privado y sintético), 2) el resumen (reducción rigurosa mediante macrorreglas de omisión, selección, generalización e integración), 3) la respuesta de parcial autónoma (que incorpora la pregunta al inicio, responde exactamente a la operación discursiva y organiza introducción, desarrollo y conclusión) y 4) el Informe de Lectura Descriptivo (ILD), género expositivo evaluativo que reconstruye de forma fidedigna y objetiva la arquitectura de un texto fuente mediante verbos introductores precisos.',
  everydayExplanation: 'Pensá en cómo un arquitecto levanta una casa: no empieza tirando ladrillos al azar en el pasto. Primero dibuja los planos de la vivienda y calcula los materiales (planificación); después levanta los cimientos, las paredes y el techo conectando los caños de agua y electricidad (puesta en texto con coherencia y cohesión); y al final pasa el inspector de obra verificando que no haya grietas ni pérdidas de gas antes de entregar la llave (revisión). En el examen de la facultad, escribir sin planificar es construir una pared torcida que se cae al primer viento.',
  analogy: {
    metaphor: 'La respuesta de parcial autónoma como un informe de laboratorio de análisis clínicos.',
    explanation: 'Cuando te entregan el resultado de un análisis de sangre, el bioquímico no escribe en un papelito suelto: "Sí, tiene 110". Pone un encabezado formal: "Paciente: Juan Pérez. Determinación: Glucemia en ayunas. Valor hallado: 110 mg/dL. Rango de referencia: 70-110 mg/dL. Conclusión: Parámetro dentro de límites normales". El informe es autónomo: no necesitás llamar al médico para saber qué te midieron. La respuesta de parcial en la UNLaM debe tener esa misma autosuficiencia: el docente debe entender todo sin mirar la hoja de preguntas.',
    caveat: 'A diferencia de los casilleros de un análisis clínico que son numéricos, en la respuesta de parcial debés desarrollar párrafos en prosa fluida con conectores y léxico académico.'
  },
  microStory: {
    title: 'Mía, Lucas y el ensayo del examen final de 90 minutos',
    vignettes: [
      {
        index: 1,
        speaker: 'Lucas',
        dialogue: '¡Terminé la Parte B del simulacro de examen! Nos pedían escribir un Informe de Lectura Descriptivo sobre el texto de racismo y discurso de Teun van Dijk. Escribí 15 líneas explicando que van Dijk me parece un genio total y que el racismo está mal.',
        sceneDescription: 'Lucas apoya la lapicera satisfecho tras terminar de escribir rápido en un aula de la UNLaM.',
        altText: 'Lucas le muestra a Mía su redacción de opinión creyendo que completó el Informe de Lectura Descriptivo.'
      },
      {
        index: 2,
        speaker: 'Mía',
        dialogue: '¡Ay, Lucas, nooo! ¡Escribiste una opinión personal! La consigna del ILD vale 5 puntos sobre 10 y es un informe DESCRIPTIVO. El manual dice clarito: el ILD no es para opinar; es para describir de manera neutra qué dice el autor, cuáles son sus partes y qué verbos introductores usa.',
        sceneDescription: 'Mía le abre la página 63 del Manual de la UNLaM donde está el modelo de ILD con su carátula y cuerpo analítico.',
        altText: 'Mía le enseña a Lucas la página del manual oficial con el formato del Informe de Lectura Descriptivo.'
      },
      {
        index: 3,
        speaker: 'Prof. Valeria',
        dialogue: 'Exactamente, Mía. Si opinás en el ILD, perdés el puntaje de la consigna. La opinión personal va recién en la consigna siguiente (el punto B.2, que vale 3 puntos). En el ILD tienen que presentar el texto fuente, señalar el tema y desglosar el desarrollo con verbos como "el autor sostiene", "ejemplifica", "concluye".',
        sceneDescription: 'La Prof. Valeria escribe en la pizarra la grilla de evaluación de la cátedra con los puntajes de cada parte.',
        altText: 'La docente anota en el pizarrón la estructura del examen de UNLaM: consigna teórica 2 pts, ILD 5 pts y opinión 3 pts.'
      },
      {
        index: 4,
        speaker: 'Lucas',
        dialogue: '¡Qué peligro! Estuve a punto de desaprobar por confundir un informe descriptivo con una opinión... ¿Y la respuesta teórica del punto 2 cómo tiene que empezar?',
        sceneDescription: 'Lucas mira su borrador y toma conciencia de los requerimientos de cada consigna.',
        altText: 'Lucas atento pregunta cómo iniciar la respuesta teórica de dos puntos.'
      },
      {
        index: 5,
        speaker: 'Mía',
        dialogue: '¡Con autonomía semántica! En vez de "Porque van Dijk usa marcas", tenés que poner: "En el texto \'Discurso y Racismo\', el autor Teun van Dijk presenta marcas enunciativas subjetivas tales como...", reutilizando la pregunta en la primera línea.',
        sceneDescription: 'Lucas reescribe su simulacro con una sonrisa: ahora tiene la fórmula exacta para sacar 10.',
        altText: 'Lucas reescribe su respuesta con autonomía y estructura su ILD siguiendo el modelo de la cátedra.'
      }
    ]
  },
  workedExamples: [
    {
      id: 'ex-h-01',
      title: 'Modelo de Respuesta de Parcial Autónoma (Puntaje Máximo: 2 Puntos)',
      contextType: 'caso_didactico_simulado',
      sourceNote: 'Basado en el modelo oficial de examen de Teun van Dijk, Manual UNLaM p. 38.',
      text: 'Consigna Oficial: "¿El texto de van Dijk tiene marcas enunciativas?, ¿cuáles son esas marcas? Fundamentar la respuesta con una cita del texto".\n\nRespuesta de Alumno Modelo:\nEl texto "Discurso y racismo", del lingüista Teun van Dijk, presenta marcas enunciativas explícitas que revelan la presencia del sujeto de la enunciación en su discurso (1). Entre estas marcas se destacan, en primer lugar, deícticos personales de primera persona del plural inclusivo con los que el autor involucra a la comunidad lectora en su razonamiento; por ejemplo, al afirmar en el cierre: "Con esto hemos planteado que el racismo es aprendido y no natural o innato" (2). Asimismo, el enunciador emplea subjetivemas axiológicos y afectivos de valoración negativa como "las formas más perjudiciales" y "racismo de las élites" para calificar las prácticas de dominación discursiva (3). En conclusión, la presencia de estos deícticos y juicios evaluativos demuestra que se trata de un enunciado marcado que combina el análisis discursivo con un explícito posicionamiento crítico y ético frente a la discriminación (4).',
      annotations: [
        { term: '(1) Apertura y Autonomía Semántica', explanation: 'La primera oración incorpora el título del texto, el autor y la pregunta planteada, resultando 100% autónoma y comprensible sin la hoja de consignas.' },
        { term: '(2) Desarrollo: Identificación precisa + Cita literal', explanation: 'Identifica la categoría conceptual (deíctico de primera persona plural) y la fundamenta con la cita literal entre comillas exigida por la consigna.' },
        { term: '(3) Desarrollo: Segunda marca enunciativa (subjetivemas)', explanation: 'Añade una segunda evidencia complementaria (subjetivemas axiológicos) demostrando solvencia teórica más allá de lo mínimo indispensable.' },
        { term: '(4) Cierre o Conclusión Sintética', explanation: 'Oración de remate encabezada por "En conclusión" que responde categóricamente al sentido epistemológico de la pregunta evaluada.' }
      ],
      analysisTakeaway: 'Esta respuesta obtiene el puntaje completo porque: 1) es semánticamente autónoma, 2) responde con exactitud a la operación discursiva, 3) cita el texto entre comillas, 4) articula introducción, desarrollo y conclusión y 5) mantiene registro formal y cohesión impecable.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Comenzar una respuesta de parcial con "Porque...", "Sí, tiene...", o pronombres vacíos.',
      correction: 'Incorporar siempre los términos de la consigna en la primera oración: "En relación con lo solicitado, el texto analizado de [Autor] presenta...".',
      whyItHappens: 'Por arrastrar vicios de la oralidad coloquial escolar donde el docente escucha la respuesta inmediata sin exigir autonomía escrita.',
      howToSpotIt: 'Tapá la hoja de preguntas con la mano y leé solo lo que escribiste: si no sabés qué te habían preguntado, tu respuesta no es autónoma.'
    },
    {
      mistake: 'Introducir opiniones personales en el Informe de Lectura Descriptivo (ILD).',
      correction: 'El ILD es un género estrictamente expositivo-descriptivo: debés reconstruir fielmente la tesis y partes del autor con verbos introductores neutros. Reservá la opinión para cuando la consigna lo pida explícitamente en el punto de opinión fundada.',
      whyItHappens: 'Por no diferenciar entre describir lo que otro dice y opinar sobre lo que a uno le parece.',
      howToSpotIt: 'Revisá si en tu ILD aparecen frases como "en mi opinión", "me pareció muy bueno", o "no estoy de acuerdo": si aparecen, borralas de inmediato.'
    }
  ],
  pocketSummary: {
    coreConcept: 'Escritura = proceso recursivo (planificar, redactar, revisar). Respuesta de parcial = autónoma (incorpora la pregunta) y con 3 partes (intro, desarrollo con citas, conclusión). Resumen = macrorreglas de Van Dijk (omisión, selección, generalización, integración). ILD = informe descriptivo objetivo de 20 líneas con verbos introductores sin opinar.',
    quickRecognitionClue: 'Parcial: ¿se entiende sin la pregunta? ILD: ¿describe al autor con "sostiene/plantea" sin poner "yo opino"? Resumen: ¿está reescrito con tus palabras o es un collage de frases cortadas?',
    fatalTrapToAvoid: 'Opinar en el ILD (te descuenta la mitad del examen) o arrancar una respuesta con "Porque..." sin nombrar el tema ni el autor.'
  },
  flashcards: [
    { id: 'fc-h-01', front: '¿Cuáles son las tres fases del proceso de escritura según Flower y Hayes?', back: '1. Planificación (definir metas, destinatario, ideas y esquema)\n2. Puesta en texto o redacción (desarrollo verbal de oraciones y párrafos)\n3. Revisión (evaluación crítica, ajuste de contenido y corrección normativa)', category: 'Proceso de escritura' },
    { id: 'fc-h-02', front: '¿Qué es la autonomía semántica en una respuesta de parcial?', back: 'La propiedad por la cual la respuesta incorpora los términos de la consigna desde su inicio, logrando que cualquier lector la comprenda de manera plena y autosuficiente sin necesidad de leer la hoja de preguntas.', category: 'Respuesta de parcial' },
    { id: 'fc-h-03', front: '¿Cuáles son las 4 macrorreglas del resumen según Teun van Dijk?', back: '1. Supresión u omisión (eliminar datos accesorios)\n2. Selección (conservar lo indispensable)\n3. Generalización (reemplazar por un hiperónimo)\n4. Integración o construcción (sustituir acciones por un concepto global)', category: 'Macrorreglas de resumen' },
    { id: 'fc-h-04', front: '¿Cuál es la función del Informe de Lectura Descriptivo (ILD) en UNLaM?', back: 'Es un género académico expositivo-descriptivo que da cuenta fidedigna, rigurosa y objetiva de la lectura de un texto fuente (tema, tesis, partes y estrategias) mediante verbos introductores precisos, sin incluir juicios valorativos ni opiniones del estudiante.', category: 'ILD' }
  ],
  guidedExerciseId: 'Q-MOD-H-01',
  independentExerciseId: 'Q-MOD-H-02',
  activeRecallExerciseId: 'Q-MOD-H-04'
};
