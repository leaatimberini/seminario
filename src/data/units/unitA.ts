import { DidacticUnit } from '../../types';

export const UNIT_A: DidacticUnit = {
  id: 'unit-a',
  topicId: 'MOD-A',
  order: 1,
  title: 'El Proceso de Lectura',
  subtitle: 'Las 4 etapas cognitivas: de la exploración paratextual a la reconstrucción activa',
  estimatedMinutes: 7,
  learningObjectives: [
    'Reconocer las 4 etapas del proceso de lectura: paratextos, lectura global, lectura analítica y poslectura.',
    'Formular y contrastar hipótesis predictivas a partir de elementos paratextuales.',
    'Diferenciar la visión panorámica global del análisis jerárquico párrafo a párrafo.',
    'Aplicar técnicas eficaces de subrayado selectivo, notas marginales y síntesis poslectura.'
  ],
  sourceRefs: [
    { text: 'Manual del Curso de Ingreso UNLaM 2022 (Módulo 2: La lectura de géneros académicos, pp. 41-48)', status: 'oficial_historica', ref: 'Manual UNLaM 2022' },
    { text: 'Resumen de Seminario aportado por el usuario (Módulo 1: La lectura es un proceso, pp. 1-2)', status: 'resumen_usuario', ref: 'Resumen P1' },
    { text: 'Arnoux, E. (1996). Talleres de lectura y escritura. Buenos Aires: UBA.CBC.', status: 'externa_verificada', ref: 'Arnoux (1996)' }
  ],
  clearDefinition: 'La lectura académica no es una recepción pasiva de información ni un acto lineal instantáneo, sino un proceso cognitivo complejo y estratégico articulado en cuatro etapas sucesivas: 1) Lectura de paratextos (exploración del entorno textual y formulación de hipótesis), 2) Lectura global (recorrido integral sin pausas para captar el sentido general y el tema central), 3) Lectura analítica (descomposición reflexiva párrafo por párrafo con subrayado jerárquico y notas marginales) y 4) Poslectura (reconstrucción y consolidación activa mediante esquemas, resúmenes o respuestas a cuestionarios).',
  everydayExplanation: 'Pensá en cuando entrás por primera vez a un hospital grande: primero mirás la cartelería en la puerta para saber dónde está la guardia (paratextos); después caminás por el pasillo central para ubicarte espacialmente sin entrar en cada consultorio (lectura global); luego vas al consultorio específico y escuchás con atención cada indicación médica anotando las dosis (lectura analítica); y al salir le mandás un audio a tu familia explicándole exactamente qué te dijo el médico y qué remedios tenés que tomar (poslectura).',
  analogy: {
    metaphor: 'El proceso de lectura como una exploración con dron y lupa.',
    explanation: 'Primero mirás el mapa satelital del terreno (paratexto); luego hacés un vuelo panorámico con el dron sobre todo el bosque para ver su tamaño y relieve (lectura global); después bajás a tierra con la lupa a examinar cada árbol y sendero particular (lectura analítica); y finalmente dibujás tu propio plano de expedición (poslectura).',
    caveat: 'A diferencia de un bosque que es estático, el sentido de un texto no está simplemente "escondido": es construido activamente por la interacción entre tus conocimientos previos y las pistas verbales del autor.'
  },
  microStory: {
    title: 'Mía frente al paper de epidemiología',
    vignettes: [
      {
        index: 1,
        speaker: 'Lucas',
        dialogue: '¡Mía, no llego! Este texto sobre dengue tiene 14 páginas. Ya arranqué a resaltar con amarillo desde la primera línea porque todo me parece importante.',
        sceneDescription: 'Lucas y Mía están sentados en una mesa del patio de la UNLaM. Lucas tiene la primera hoja completamente cubierta de resaltador fluorescente.',
        altText: 'Lucas muestra su apunte totalmente pintado de amarillo mientras Mía lo mira preocupada con una pila de fotocopias.'
      },
      {
        index: 2,
        speaker: 'Mía',
        dialogue: 'Pará, Lucas. La profe Valeria nos dijo que si resaltás todo en la primera pasada, no estás jerarquizando nada. Primero miremos los paratextos: mirá el título, el gráfico del Ministerio y el resumen.',
        sceneDescription: 'Mía señala con el dedo el título en negrita y el abstract bilingüe de la primera página del texto.',
        altText: 'Mía le señala a Lucas los paratextos en la primera página: título, filiación institucional y resumen.'
      },
      {
        index: 3,
        speaker: 'Prof. Valeria',
        dialogue: 'Exacto, Mía. Al leer el título "Transmisión vectorial y factores socioambientales del dengue", ¿qué hipótesis pueden plantear antes de leer el cuerpo?',
        sceneDescription: 'La Prof. Valeria se acerca a la mesa del grupo de estudio con un mate y una carpeta de apuntes de la cátedra.',
        altText: 'La Prof. Valeria se suma a la mesa sonriendo y orienta a los ingresantes con una pregunta sobre hipótesis de lectura.'
      },
      {
        index: 4,
        speaker: 'Lucas',
        dialogue: 'Que no va a hablar solo del mosquito biológico, sino de las condiciones de agua potable y vivienda de la población.',
        sceneDescription: 'A Lucas se le iluminan los ojos al relacionar el paratexto con la realidad social del conurbano.',
        altText: 'Lucas gesticula entusiasmado al comprender cómo el paratexto orienta la lectura del texto.'
      },
      {
        index: 5,
        speaker: 'Prof. Valeria',
        dialogue: '¡Excelente hipótesis! Ahora hagan la lectura global corrida para confirmarla sin tocar el resaltador. Recién en la tercera pasada descomponen los párrafos y toman notas al margen.',
        sceneDescription: 'Mía guarda el resaltador en la cartuchera y empieza a leer el texto de corrido de principio a fin.',
        altText: 'Mía y Lucas guardan los resaltadores y leen concentrados el artículo completo sin detenerse.'
      }
    ]
  },
  workedExamples: [
    {
      id: 'ex-a-01',
      title: 'Análisis de un fragmento sobre resistencia a los antimicrobianos',
      contextType: 'caso_didactico_simulado',
      sourceNote: 'Simulación didáctica basada en lineamientos del Boletín Epidemiológico Nacional.',
      text: 'Resistencia bacteriana: una amenaza creciente en las unidades de terapia intensiva. Dra. Silvia Fernández (Servicio de Infectología, Hospital Evita de La Matanza, 2024). Resumen: La diseminación de bacilos gramnegativos multirresistentes compromete la eficacia de los tratamientos de primera línea. En este trabajo se evalúan 340 aislamientos clínicos y se constata que el uso previo indiscriminado de cefalosporinas de tercera generación constituyó el principal factor de riesgo independiente (OR = 3,4; p < 0,01).',
      annotations: [
        { term: 'Título y Subtítulo', explanation: 'Paratexto verbal que fija el tema central (resistencia bacteriana), el enfoque problemático ("amenaza creciente") y el ámbito espacial ("terapia intensiva").' },
        { term: 'Dra. Silvia Fernández (Hospital Evita)', explanation: 'Paratexto de autoría y filiación institucional local que legitima la voz técnica del enunciador y sitúa el contexto geográfico de producción.' },
        { term: 'Resumen (Abstract)', explanation: 'Paratexto de anticipación global que expone en miniatura el problema, el corpus analizado (340 muestras) y la conclusión empírica central.' }
      ],
      analysisTakeaway: 'Antes de leer el cuerpo del artículo, la lectura paratextual ya le permitió al estudiante saber: 1) qué tema se trata, 2) desde qué perspectiva médica se aborda, 3) quién lo respalda y 4) cuál es la conclusión probable. La hipótesis de lectura está armada sólidamente para guiar la lectura analítica.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Subrayar oraciones completas durante la primera lectura del texto.',
      correction: 'Hacer una lectura global completa primero sin subrayar. El resaltador solo se usa en la lectura analítica (etapa 3), marcando palabras clave e ideas núcleo.',
      whyItHappens: 'Por ansiedad de estudiar rápido y temor a dejar afuera conceptos que luego aparezcan en el parcial.',
      howToSpotIt: 'Si tu hoja parece pintada con rodillo y al mirarla de lejos no se distingue qué es lo principal de lo secundario, estás subrayando antes de comprender el todo.'
    },
    {
      mistake: 'Tratar las hipótesis previas como verdades inamovibles o forzar el texto para que coincida con lo que creías.',
      correction: 'Aceptar que las hipótesis son conjeturas provisorias: el texto puede confirmar lo que pensabas, pero también puede rectificarlo o refutarlo por completo.',
      whyItHappens: 'Por sesgo de confirmación: nos cuesta abandonar la primera idea que nos hicimos a partir del título.',
      howToSpotIt: 'Si el autor afirma lo contrario de lo que vos supusiste y concluís que "el autor se equivocó", estás forzando tu hipótesis sobre el texto.'
    }
  ],
  pocketSummary: {
    coreConcept: 'La lectura es un proceso en 4 etapas: Paratextos (hipótesis) -> Lectura global (sentido total) -> Lectura analítica (párrafos, notas y subrayado selectivo) -> Poslectura (síntesis y esquemas).',
    quickRecognitionClue: 'Cada etapa tiene su herramienta: en la 1 mirás títulos/fuentes; en la 2 no usás lápiz; en la 3 usás lápiz y notas al margen; en la 4 armás tu propio cuadro o resumen.',
    fatalTrapToAvoid: 'Subrayar en la primera lectura o saltar directo al resumen sin haber hecho lectura global.'
  },
  flashcards: [
    { id: 'fc-a-01', front: '¿Cuáles son las 4 etapas del proceso de lectura?', back: '1. Lectura de paratextos (prelectura e hipótesis)\n2. Lectura global (sentido general y tema)\n3. Lectura analítica (párrafo por párrafo, subrayado, notas marginales)\n4. Poslectura (reconstrucción, resumen, cuadros)', category: 'Proceso de lectura' },
    { id: 'fc-a-02', front: '¿Qué es una hipótesis de lectura y cuándo se formula?', back: 'Es una anticipación predictiva sobre el contenido, enfoque o género del texto formulada en la primera etapa a partir de los paratextos. Se verifica o refuta durante la lectura.', category: 'Hipótesis' },
    { id: 'fc-a-03', front: '¿Por qué no se debe subrayar en la lectura global?', back: 'Porque en la primera pasada aún no conocés la jerarquía de las ideas ni el plan global del autor. Subrayar antes de tiempo lleva a resaltar datos accesorios.', category: 'Técnicas de estudio' },
    { id: 'fc-a-04', front: '¿Qué función cumplen las notas marginales en la lectura analítica?', back: 'Sintetizan en el margen el subtema o la función discursiva de cada párrafo (ej. "definición", "ejemplo", "objeción"), sirviendo de guía rápida para la poslectura.', category: 'Lectura analítica' }
  ],
  guidedExerciseId: 'Q-MOD-A-01',
  independentExerciseId: 'Q-MOD-A-03',
  activeRecallExerciseId: 'Q-MOD-A-07'
};
