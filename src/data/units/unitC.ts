import { DidacticUnit } from '../../types';

export const UNIT_C: DidacticUnit = {
  id: 'unit-c',
  topicId: 'MOD-C',
  order: 3,
  title: 'Coherencia y Cohesión Textual',
  subtitle: 'La unidad semántica de sentido y los hilos lingüísticos que enlazan las oraciones',
  estimatedMinutes: 8,
  learningObjectives: [
    'Distinguir con precisión el plano semántico de la coherencia frente al plano morfosintáctico y léxico de la cohesión.',
    'Diferenciar la coherencia global (tema central común) de la coherencia local (articulación armónica de subtemas en párrafos).',
    'Identificar y aplicar procedimientos de cohesión gramatical: referencia pronominal (anáfora y catáfora) y elipsis (sustitución por cero).',
    'Clasificar y emplear adecuadamente la tabla de conectores lógicos y procedimientos de cohesión léxica (sinonimia, hiperonimia, palabra general).'
  ],
  sourceRefs: [
    { text: 'Manual del Curso de Ingreso UNLaM 2022 (Módulo 3: pp. 68-71; Anexo 7 de Conectores: pp. 101-102)', status: 'oficial_historica', ref: 'Manual UNLaM 2022' },
    { text: 'Resumen de Seminario del usuario (Módulo 2: Coherencia y Cohesión, pp. 3-7)', status: 'resumen_usuario', ref: 'Resumen P1' },
    { text: 'Gregorio de Mac, M. I. y de Rebola de Welti, M. C. (1992). Coherencia y cohesión en el texto. Buenos Aires: Plus Ultra.', status: 'externa_verificada', ref: 'Gregorio de Mac & Rebola' }
  ],
  clearDefinition: 'La coherencia y la cohesión son las dos propiedades inherentes esenciales que transforman una serie de palabras en un texto. La coherencia es una propiedad de naturaleza semántica que hace que el texto sea percibido como una unidad de sentido global (con un tema común y no contradictorio) y local (con progresión fluida entre subtemas). La cohesión es la trama visible interoracional de relaciones gramaticales y léxicas explícitas (referencia, elipsis, conectores lógicos, reiteración léxica y colocación) que articulan la superficie del texto para guiar la lectura.',
  everydayExplanation: 'Pensá en un collar de perlas: la coherencia es el collar terminado que tiene armonía estética y sirve para ponerse en el cuello (sentido unitario completo); la cohesión es el hilo resistente invisible o visible que pasa por dentro de cada perla uniéndolas una tras otra. Si cortás el hilo, las perlas ruedan sueltas por el piso (falta de cohesión). Y si ensartás una perla, una tuerca oxidada y una cáscara de banana, el hilo está entero pero el collar no tiene ningún sentido (falta de coherencia).',
  analogy: {
    metaphor: 'La coherencia como los huesos y órganos de un cuerpo; la cohesión como los tendones y ligamentos que articulan las articulaciones.',
    explanation: 'Un cuerpo coherente tiene cabeza, tronco y extremidades en su lugar biológico correspondiente. Los ligamentos y tendones (cohesión) son los conectores y referencias que aseguran que al mover un brazo, el resto del cuerpo responda sin dislocarse.',
    caveat: 'A diferencia de la anatomía fija, en el lenguaje podés tener un texto gramaticalmente muy cohesionado con conectores formales pero totalmente incoherente en su sentido lógico si mezcla temas disparatados.'
  },
  microStory: {
    title: 'El parcial de Lucas y el misterio del pronombre perdido',
    vignettes: [
      {
        index: 1,
        speaker: 'Lucas',
        dialogue: 'Mía, la profe me puso "incoherencia local y referencia ambigua" en esta respuesta sobre farmacología. Escribí: "El médico recetó el sedante al paciente cuando este se desmayó". ¿Qué tiene de malo?',
        sceneDescription: 'Lucas le muestra el examen corregido con birome roja a Mía mientras toman un café en el buffet de la UNLaM.',
        altText: 'Lucas desconcertado le enseña a Mía una corrección docente en su hoja de examen.'
      },
      {
        index: 2,
        speaker: 'Mía',
        dialogue: '¡Mirá el pronombre "este", Lucas! "Este" busca el antecedente masculino más cercano. Gramaticalmente apunta al "sedante", pero por sentido común médico te referís al "paciente", ¡y el médico también es masculino! Creaste una confusión referencial bárbara.',
        sceneDescription: 'Mía se ríe con ternura y marca con lápiz los tres sustantivos masculinos que compiten por el mismo pronombre.',
        altText: 'Mía le explica a Lucas cómo el pronombre "este" confunde al lector entre médico, sedante y paciente.'
      },
      {
        index: 3,
        speaker: 'Prof. Valeria',
        dialogue: 'Exactamente, chicos. La referencia pronominal tiene que ser cristalina. ¿Y qué me dicen del conector que usaste en el párrafo siguiente? Pusiste: "Había paro de colectivos; además, no pude llegar a la guardia".',
        sceneDescription: 'La Prof. Valeria se sienta en la mesa con el examen de Lucas y señala el conector aditivo.',
        altText: 'La docente señala el error de conector aditivo en lugar de conector consecutivo.'
      },
      {
        index: 4,
        speaker: 'Lucas',
        dialogue: '¡Uy, claro! No fue una suma de cosas independientes... ¡El paro fue la causa y no poder llegar fue la consecuencia! Tenía que poner "por lo tanto" o "en consecuencia".',
        sceneDescription: 'Lucas se agarra la cabeza al comprender la diferencia lógica entre adición y consecuencia.',
        altText: 'Lucas comprende que usó un conector de suma cuando debía usar uno de consecuencia.'
      },
      {
        index: 5,
        speaker: 'Prof. Valeria',
        dialogue: '¡Tal cual! El conector no es un adorno: es el signo de tránsito que le avisa al lector qué relación lógica viene después: si sumás, si contrastás, si explicás la causa o si sacás la consecuencia.',
        sceneDescription: 'Mía y Lucas anotan la tabla de conectores en sus cuadernos de repaso.',
        altText: 'Los estudiantes completan la tabla de conectores lógicos de la cátedra.'
      }
    ]
  },
  workedExamples: [
    {
      id: 'ex-c-01',
      title: 'Análisis de recursos cohesivos en un texto sobre hipertensión',
      contextType: 'caso_didactico_simulado',
      sourceNote: 'Fragmento didáctico diseñado según el modelo de ejercitación de cohesión del Manual UNLaM Módulo 3, p. 70.',
      text: 'La hipertensión arterial constituye uno de los principales factores de riesgo cardiovascular en adultos mayores. Esta afección daña progresivamente los vasos sanguíneos; en consecuencia, incrementa la probabilidad de accidentes cerebrovasculares. Los cardiólogos recomiendan controles periódicos de presión; los médicos clínicos, [elipsis] dietas con bajo contenido sódico. Sin embargo, muchos pacientes suspenden la medicación porque no experimentan dolor físico inmediato.',
      annotations: [
        { term: 'Esta afección', explanation: 'Referencia anafórica demostrativa combinada con palabra general ("afección") que retoma el antecedente "La hipertensión arterial" sin repetirlo literalmente.' },
        { term: '; en consecuencia,', explanation: 'Conector consecutivo que introduce el efecto o resultado directo del daño vascular previo.' },
        { term: '[elipsis verbal marcada con coma]', explanation: 'Elipsis de "recomiendan" tras "los médicos clínicos," (sustitución por cero mediante coma elíptica para evitar redundancia).' },
        { term: 'Sin embargo,', explanation: 'Conector adversativo o contraargumentativo que introduce un contraste con la recomendación médica preventiva.' },
        { term: 'porque', explanation: 'Conector causal que introduce la razón o motivo subjetivo por el cual los pacientes suspenden el tratamiento.' }
      ],
      analysisTakeaway: 'El texto presenta una sólida cohesión interoracional: ningún conector es ambiguo, las referencias retoman antecedentes claros, la elipsis agiliza la lectura y el tema central ("hipertensión y adherencia terapéutica") mantiene una coherencia global ininterrumpida.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Confundir conectores causales con consecutivos (ej. usar "por lo tanto" para introducir la causa o "porque" para la consecuencia).',
      correction: '"Porque", "ya que" y "puesto que" introducen la causa (el motivo previo). "Por lo tanto", "en consecuencia" y "de ahí que" introducen el efecto (lo que resulta de esa causa).',
      whyItHappens: 'Por leer rápido sin detenerse a pensar cuál es el hecho originario y cuál es el resultado.',
      howToSpotIt: 'Preguntate: ¿esta parte explica el "por qué pasó" o el "qué ocurrió después como resultado"?'
    },
    {
      mistake: 'Omitir la coma elíptica cuando se suprime un verbo en la segunda cláusula.',
      correction: 'Cuando elidís un verbo ya expresado, es normativamente obligatorio colocar una coma en su lugar: "Los cirujanos operan en quirófano; los pediatras, en consultorio".',
      whyItHappens: 'Por desconocimiento de la regla de puntuación de la coma elíptica.',
      howToSpotIt: 'Fijate si en la segunda oración falta el verbo principal: si falta y no pusiste coma, hay un error de puntuación y cohesión.'
    }
  ],
  pocketSummary: {
    coreConcept: 'Coherencia = sentido semántico unitario (global: tema central; local: armonía de párrafos). Cohesión = enlaces formales explícitos (referencia pronominal, elipsis, conectores lógicos y reiteración léxica).',
    quickRecognitionClue: 'Referencia: pronombres que apuntan a una palabra anterior. Elipsis: palabras borradas que se sobreentienden con coma. Conectores: nexos que marcan causa, efecto, contraste o suma.',
    fatalTrapToAvoid: 'Usar "y" o "además" cuando en realidad hay una relación de causa-efecto o de contraste entre las dos oraciones.'
  },
  flashcards: [
    { id: 'fc-c-01', front: '¿Cuál es la diferencia entre coherencia y cohesión?', back: 'La coherencia es semántica (sentido global y local del texto como totalidad comprensible). La cohesión es gramatical y léxica (los enlaces explícitos entre palabras y oraciones: pronombres, elipsis, conectores).', category: 'Propiedades del texto' },
    { id: 'fc-c-02', front: '¿Qué es la referencia anafórica?', back: 'Un procedimiento de cohesión por el cual un pronombre u elemento lingüístico remite a un término mencionado previamente en el texto para evitar su repetición (ej. "La bacteria mutó; esta resistió al fármaco").', category: 'Referencia' },
    { id: 'fc-c-03', front: '¿Qué es la elipsis o "sustitución por cero"?', back: 'La omisión voluntaria de una palabra o construcción que ya fue dicha y que el lector repone sin dificultad por el contexto. En el caso del verbo elidido, se marca con coma elíptica.', category: 'Elipsis' },
    { id: 'fc-c-04', front: '¿Qué relación lógica introducen "sin embargo" y "no obstante"?', back: 'Relación de oposición, contraste o contraargumentación (conectores adversativos que limitan una idea previa).', category: 'Conectores' }
  ],
  guidedExerciseId: 'Q-MOD-C-01',
  independentExerciseId: 'Q-MOD-C-02',
  activeRecallExerciseId: 'Q-MOD-C-03'
};
