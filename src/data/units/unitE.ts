import { DidacticUnit } from '../../types';

export const UNIT_E: DidacticUnit = {
  id: 'unit-e',
  topicId: 'MOD-E',
  order: 5,
  title: 'Géneros Discursivos y Secuencias Textuales',
  subtitle: 'Las formas sociales de la comunicación (Bajtín) y los modos de organización interna (Adam)',
  estimatedMinutes: 8,
  learningObjectives: [
    'Definir género discursivo según Bajtín y diferenciarlo de la noción de secuencia textual según Adam.',
    'Identificar los rasgos externos e internos que permiten clasificar cualquier género.',
    'Reconocer las 6 secuencias textuales prototípicas: descriptiva, narrativa, explicativa, argumentativa, dialogal e instruccional.',
    'Analizar la articulación entre secuencia dominante o englobante y secuencias secundarias incrustadas en textos reales.'
  ],
  sourceRefs: [
    { text: 'Manual del Curso de Ingreso UNLaM 2022 (Módulo 1: Géneros discursivos y Secuencias textuales, pp. 11-38)', status: 'oficial_historica', ref: 'Manual UNLaM 2022' },
    { text: 'Resumen de Seminario del usuario (Módulo 4: Géneros discursivos y Secuencias, pp. 11-15)', status: 'resumen_usuario', ref: 'Resumen P1' },
    { text: 'Bajtín, M. (1982). Estética de la creación verbal / Ciapuscio, G. (1994). Tipos textuales / Adam, J.-M. (1992). Les textes: types et prototypes.', status: 'externa_verificada', ref: 'Bajtín, Ciapuscio & Adam' }
  ],
  clearDefinition: 'Un género discursivo (Bajtín) es un tipo relativamente estable de enunciado propio de una esfera social específica, definido por su tema, estilo verbal y estructura compositiva (ej. artículo científico, parcial, informe, folleto, noticia). Una secuencia textual (Adam) es una unidad estructural menor y abstracta de composición que organiza internamente fragmentos del texto (explicativa, argumentativa, descriptiva, narrativa, dialogal, instruccional). En un texto real coexisten varias secuencias en una trama heterogénea, subordinadas a una secuencia dominante o englobante que rige el propósito comunicativo global.',
  everydayExplanation: 'Pensá en los tipos de vehículos: una ambulancia, un colectivo y un auto particular son géneros diferentes (tienen funciones sociales distintas, sirenitas o timbres y asientos adaptados). Ahora bien, todos esos vehículos usan piezas comunes: un motor a combustión, ruedas de goma y frenos a disco. Esas piezas que se combinan adentro son las secuencias: podés tener una secuencia que frena (describe), una que acelera (narra) y una que dobla hacia un destino (argumenta). El género es el vehículo completo en la calle; las secuencias son los sistemas mecánicos que lo hacen funcionar por dentro.',
  analogy: {
    metaphor: 'El género como una casa construida en un barrio; las secuencias como las habitaciones que componen su interior.',
    explanation: 'Un hospital, una escuela y una casa de familia son géneros arquitectónicos diferentes. Pero adentro, el hospital tiene una sala de espera (secuencia dialogal), un quirófano con instrucciones (secuencia instruccional) y un cartel que explica los riesgos (secuencia explicativa). La función dominante del edificio engloba el uso de cada habitación particular.',
    caveat: 'A diferencia de las habitaciones con paredes rígidas de ladrillo, en el texto las secuencias se entrelazan de modo flexible y fluido.'
  },
  microStory: {
    title: 'La confusión de Lucas entre el artículo y la anécdota',
    vignettes: [
      {
        index: 1,
        speaker: 'Lucas',
        dialogue: 'Mía, en el simulacro de examen hay un texto sobre donación de órganos que arranca contando: "Eran las tres de la madrugada cuando el helicóptero aterrizó en el Hospital Garrahan...". Puse que el género es "Cuento policial".',
        sceneDescription: 'Lucas muestra su hoja con cara de estar convencido de su deducción literaria.',
        altText: 'Lucas le muestra a Mía su examen donde clasificó un editorial como cuento policial.'
      },
      {
        index: 2,
        speaker: 'Mía',
        dialogue: '¡No, Lucas! ¡Estás confundiendo una secuencia secundaria con el género discursivo! Mirá los paratextos: fue publicado en la sección de Opinión de un diario nacional y lo firma el presidente del INCUCAI.',
        sceneDescription: 'Mía abre el diario y le muestra el encabezado editorial con la firma del funcionario sanitario.',
        altText: 'Mía le señala a Lucas la sección de Opinión y la firma del titular del INCUCAI.'
      },
      {
        index: 3,
        speaker: 'Prof. Valeria',
        dialogue: 'Muy atenta, Mía. El género discursivo es un "artículo de opinión" o "columna editorial". ¿Y por qué el autor empezó contando esa escena del helicóptero?',
        sceneDescription: 'La Prof. Valeria se suma a la corrección con una tiza en mano cerca de la pizarra.',
        altText: 'La docente interroga sobre la función de la narración inicial dentro del texto de opinión.'
      },
      {
        index: 4,
        speaker: 'Lucas',
        dialogue: 'Para conmover al lector y mostrar la urgencia antes de defender su postura...',
        sceneDescription: 'A Lucas se le acomodan las ideas y empieza a sonreír.',
        altText: 'Lucas comprende que la historia sirve como argumento inicial emotivo.'
      },
      {
        index: 5,
        speaker: 'Prof. Valeria',
        dialogue: '¡Exacto! Esa historia es una secuencia narrativa incrustada como recurso argumentativo. Pero la secuencia dominante o englobante es argumentativa, porque el objetivo de todo el texto es convencer a la sociedad sobre la ley de trasplantes.',
        sceneDescription: 'Lucas tacha "cuento policial" y escribe con prolijidad: "Género: artículo de opinión; secuencia dominante: argumentativa".',
        altText: 'Lucas corrige su respuesta en el cuaderno clasificando correctamente el género y la secuencia.'
      }
    ]
  },
  workedExamples: [
    {
      id: 'ex-e-01',
      title: 'Identificación de secuencias en un fragmento de salud pública',
      contextType: 'caso_didactico_simulado',
      sourceNote: 'Fragmento didáctico diseñado según el modelo de examen de Seminario UNLaM.',
      text: 'La vacunación obligatoria: un pacto solidario indispensable. Por el Dr. Carlos Méndez (Diario La Nación, 15/06/2024).\nEn 1796, Edward Jenner observó que las ordeñadoras contagiadas con viruela vacuna quedaban protegidas de la mortífera viruela humana e inoculó al niño James Phipps (1). La vacuna es una preparación biológica que estimula el sistema inmunitario para generar anticuerpos protectores (2). Frente a quienes hoy esgrimen un individualismo irresponsable para rechazar la inmunización infantil, sostenemos categóricamente que vacunarse no es una opción privada: es un deber ético y cívico que protege a los más vulnerables (3).',
      annotations: [
        { term: '(1) En 1796, Jenner observó...', explanation: 'Secuencia narrativa secundaria: relata cronológicamente el hito histórico del descubrimiento para situar los antecedentes empíricos.' },
        { term: '(2) La vacuna es una preparación...', explanation: 'Secuencia explicativa secundaria: define con precisión biológica qué es el inmunógeno para nivelar el conocimiento del lector.' },
        { term: '(3) Frente a quienes hoy esgrimen... sostenemos categóricamente...', explanation: 'Secuencia argumentativa DOMINANTE/ENGLOBANTE: enuncia la tesis central y refuta la postura contraria, rigiendo el propósito del artículo.' },
        { term: 'Género discursivo: Artículo de opinión periodístico', explanation: 'Clase de texto socialmente reconocida, publicada en prensa masiva por un autor acreditado con toma de postura ético-política.' }
      ],
      analysisTakeaway: 'Distinguir entre género y secuencia es la clave del examen: el género es el artículo de opinión completo; la secuencia dominante es la argumentativa, mientras que la narrativa y la explicativa operan subordinadas como estrategias auxiliares.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Decir que el género de un texto es "secuencia argumentativa" o que la secuencia es "artículo periodístico".',
      correction: 'Mantener siempre separadas las dos categorías: el género es el formato social (editorial, noticia, informe, prospecto, parcial, paper); la secuencia es el modo de organización abstracta interna (argumentar, explicar, narrar, describir, instruir, dialogar).',
      whyItHappens: 'Por no internalizar la diferencia teórica entre Bajtín (géneros sociales) y Adam (secuencias prototípicas).',
      howToSpotIt: 'Preguntate: ¿esto se compra, se entrega o se publica en la sociedad? Si es así, es un género. ¿Esto es una forma de estructurar ideas en un párrafo? Entonces es una secuencia.'
    },
    {
      mistake: 'Clasificar un texto completo como "narrativo" solo porque contiene una anécdota o caso en el primer párrafo.',
      correction: 'Identificar cuál es el propósito final del autor: si la historia sirve para demostrar una tesis o ilustrar una ley general, la secuencia dominante es argumentativa o explicativa, y la narración es solo secundaria.',
      whyItHappens: 'Por dejarse llevar por la impresión superficial del arranque sin analizar la conclusión del texto.',
      howToSpotIt: 'Leé el final del texto: si concluye defendiendo una idea o sacando una conclusión general, la narración inicial era solo un anzuelo o ejemplo.'
    }
  ],
  pocketSummary: {
    coreConcept: 'Género (Bajtín) = tipo relativamente estable de enunciado en una esfera social (tema, estilo, estructura). Secuencia (Adam) = modo abstracto de armar el texto (6 tipos: explicativa, argumentativa, narrativa, descriptiva, dialogal, instruccional). Secuencia dominante = la que rige el propósito general.',
    quickRecognitionClue: 'Géneros: paper, parcial, folleto, noticia, informe. Secuencias: explicar (aclara un saber), argumentar (defiende una tesis), narrar (acciones en el tiempo), describir (partes en el espacio), instruir (da órdenes de acción), dialogar (turnos de habla).',
    fatalTrapToAvoid: 'Responder que un texto es "de género explicativo" en vez de "artículo con secuencia dominante explicativa".'
  },
  flashcards: [
    { id: 'fc-e-01', front: '¿Cómo define Mijaíl Bajtín a los géneros discursivos?', back: 'Tipos relativamente estables de enunciados elaborados en cada esfera de la actividad humana, caracterizados por una temática, un estilo verbal y una estructura compositiva compartidos.', category: 'Géneros discursivos' },
    { id: 'fc-e-02', front: '¿Cuáles son las 6 secuencias textuales prototípicas de Adam?', back: '1. Descriptiva\n2. Narrativa\n3. Explicativa\n4. Argumentativa\n5. Dialogal\n6. Instruccional (directiva)', category: 'Secuencias textuales' },
    { id: 'fc-e-03', front: '¿Qué es la secuencia dominante o englobante?', back: 'La secuencia estructural que impone el propósito discursivo rector de todo el texto, subordinando a las secuencias secundarias o incrustadas como recursos de apoyo.', category: 'Secuencias textuales' },
    { id: 'fc-e-04', front: '¿Qué diferencia a un género producido por expertos de uno por no expertos?', back: 'Los de expertos (docentes, investigadores) producen o enseñan saber validado (papers, manuales, programas). Los de no expertos (alumnos) acreditan aprendizaje y estudio (parciales, apuntes, resúmenes, informes de lectura).', category: 'Géneros académicos' }
  ],
  guidedExerciseId: 'Q-MOD-E-01',
  independentExerciseId: 'Q-MOD-E-02',
  activeRecallExerciseId: 'Q-MOD-E-04'
};
