import { DidacticUnit } from '../../types';

export const UNIT_B: DidacticUnit = {
  id: 'unit-b',
  topicId: 'MOD-B',
  order: 2,
  title: 'Texto, Contexto y Paratexto',
  subtitle: 'La unidad semántico-discursiva, los 6 factores situacionales y el umbral paratextual',
  estimatedMinutes: 8,
  learningObjectives: [
    'Comprender la definición de texto como unidad semántico-discursiva dotada de coherencia y cohesión.',
    'Identificar los seis componentes del contexto de situación: emisor, receptor, mensaje, espacio, tiempo y relación social.',
    'Clasificar paratextos verbales e icónicos según la tipología institucional de la UNLaM.',
    'Reconocer cómo las coordenadas espaciotemporales e institucionales determinan el sentido de un discurso de salud.'
  ],
  sourceRefs: [
    { text: 'Manual del Curso de Ingreso UNLaM 2022 (Módulo 1: pp. 11-13; Módulo 2: pp. 42-45)', status: 'oficial_historica', ref: 'Manual UNLaM 2022' },
    { text: 'Resumen de Seminario del usuario (Módulo 2: Texto, Contexto y Paratexto, pp. 2-8)', status: 'resumen_usuario', ref: 'Resumen P1' },
    { text: 'Genette, G. (1987). Seuils. París: Éditions du Seuil / Halliday, M. A. K. (1976). Cohesion in English.', status: 'externa_verificada', ref: 'Genette & Halliday' }
  ],
  clearDefinition: 'Un texto es una unidad semántico-discursiva: contiene un componente verbal articulado en una unidad de sentido pleno y extensión variable que circula en intercambios sociales reglamentados. Para ser comprendido, requiere ser analizado en su contexto de situación (emisor, receptor, mensaje, espacio, tiempo y relación entre interlocutores) y a través de sus paratextos: elementos verbales (título, autor, notas, bibliografía) e icónicos (gráficos, fotos, infografías) que enmarcan el texto principal y orientan su recepción.',
  everydayExplanation: 'Imaginate un cartel en una sala de espera que dice simplemente "SILENCIO". No es una palabra suelta de diccionario: es un texto completo. ¿Por qué se entiende? Por el contexto de situación: el emisor es el hospital, el receptor es el paciente que espera, el mensaje es la orden de guardar compostura acústica, el espacio es una sala médica, el tiempo es la actualidad, y la relación es institucional asimétrica (la autoridad médica regula la conducta de los visitantes para cuidar el reposo de los internados).',
  analogy: {
    metaphor: 'El texto como un cuadro, el contexto como la sala de museo y el paratexto como el marco y la placa explicativa.',
    explanation: 'La pintura misma es el texto (la obra con sentido). El marco dorado y la pequeña placa con el nombre del artista, año y técnica son los paratextos (te dicen quién lo hizo y cómo mirarlo). La sala del museo, su iluminación y las normas de visita son el contexto de situación.',
    caveat: 'A diferencia de un cuadro estático colgado en una pared, el texto circula en la vida social y su sentido puede transformarse si cambia el contexto histórico o la relación entre los hablantes.'
  },
  microStory: {
    title: 'El cartel de la salita y el folleto ministerial',
    vignettes: [
      {
        index: 1,
        speaker: 'Lucas',
        dialogue: 'Che, Mía, en el práctico nos piden analizar un cartel que dice "Lavado de manos obligatorio antes de ingresar al box 3". ¿Esto cuenta como texto? ¡Tiene solo 11 palabras!',
        sceneDescription: 'Lucas mira su fotocopia con cara de desconcierto mientras sostiene una birome mordida en la biblioteca de la UNLaM.',
        altText: 'Lucas le muestra a Mía la fotocopia del ejercicio dudando sobre si una frase corta es un texto.'
      },
      {
        index: 2,
        speaker: 'Mía',
        dialogue: '¡Claro que es un texto, Lucas! La extensión es variable: puede ser una palabra sola como "Peligro" o un libro de 500 páginas. Lo que importa es que tenga unidad de sentido y funcione en una situación comunicativa real.',
        sceneDescription: 'Mía abre su cuaderno y le muestra el apunte donde anotó la definición de texto de la cátedra.',
        altText: 'Mía le señala en su cuaderno los apuntes sobre unidad semántico-discursiva y extensión variable.'
      },
      {
        index: 3,
        speaker: 'Prof. Valeria',
        dialogue: 'Muy bien, Mía. Y fíjense en los paratextos del cartel: arriba tiene el logo del Municipio de La Matanza y abajo una ilustración de los 6 pasos del lavado con jabón. ¿Qué tipo de paratexto es cada uno?',
        sceneDescription: 'La Prof. Valeria se sienta en la cabecera de la mesa y señala el membrete institucional y el diagrama gráfico.',
        altText: 'La docente señala el logo municipal y el esquema de lavado de manos en el cartel.'
      },
      {
        index: 4,
        speaker: 'Lucas',
        dialogue: 'El logo y el texto son paratextos verbales y gráficos, y el dibujo de las manos con el jabón es un paratexto icónico que ayuda a entender la técnica sin leer todo.',
        sceneDescription: 'Lucas sonríe al darse cuenta de la complementariedad entre lo lingüístico y lo visual.',
        altText: 'Lucas clasifica con seguridad los paratextos verbales e icónicos del cartel sanitario.'
      },
      {
        index: 5,
        speaker: 'Prof. Valeria',
        dialogue: '¡Exacto! Y el contexto de situación le da su fuerza: no es un dibujo decorativo para un museo de arte; es una orden sanitaria en una terapia intensiva donde está en juego la vida.',
        sceneDescription: 'Los tres asienten, listos para resolver las consignas del práctico.',
        altText: 'El grupo de estudio comprende cómo el contexto institucional otorga sentido al texto.'
      }
    ]
  },
  workedExamples: [
    {
      id: 'ex-b-01',
      title: 'Análisis de un folleto de vacunación antigripal',
      contextType: 'caso_didactico_simulado',
      sourceNote: 'Campaña didáctica simulada de la Secretaría de Salud Pública de La Matanza.',
      text: 'Secretaría de Salud Pública — Municipio de La Matanza. Campaña de Invierno 2024. ¡Cuidá a los tuyos! Si tenés más de 65 años o factores de riesgo, acercate al Centro de Salud más cercano. La vacuna antigripal es gratuita, segura y previene complicaciones respiratorias graves. Días y horarios: Lunes a viernes de 8 a 17 hs. [Foto de abuelo sonriente con su nieto y mapa con ubicaciones de los CAPS].',
      annotations: [
        { term: 'Secretaría de Salud Pública (Emisor)', explanation: 'Organismo público de salud con autoridad sanitaria que actúa como emisor institucional oficial.' },
        { term: '¡Cuidá a los tuyos! (Destinatario previsto y apelación)', explanation: 'Destinatario modelo: vecinos de la comunidad local; relación asimétrica de cuidado pero con apelación afectiva comunitaria ("a los tuyos").' },
        { term: 'Gratuita, segura y previene (Mensaje / Tema)', explanation: 'Núcleo semántico del mensaje: promoción de inmunización y erradicación del miedo a los efectos adversos.' },
        { term: 'Campaña de Invierno 2024 / CAPS de La Matanza (Tiempo y Espacio)', explanation: 'Coordenadas temporales (estación invernal de circulación viral) y espaciales (distrito matancero y sus centros barriales de atención primaria).' },
        { term: 'Foto y Mapa de CAPS (Paratextos icónicos)', explanation: 'La foto apela a la protección intergeneracional; el mapa ofrece localización espacial operativa directa.' }
      ],
      analysisTakeaway: 'El texto no se reduce a sus palabras: su sentido pleno surge de la conjunción entre sus 6 factores situacionales (quién emite, a quién le habla, de qué, cuándo, dónde y qué relación busca) y sus paratextos verbales e icónicos.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Creer que si un texto es breve o tiene pocas palabras no califica como "texto".',
      correction: 'El texto no se define por los renglones que ocupa, sino por su autonomía semántico-discursiva: un cartel de "Urgencias" en una puerta es un texto completo y eficaz.',
      whyItHappens: 'Por la idea escolar tradicional de que los textos deben ser redacciones largas de varias páginas.',
      howToSpotIt: 'Preguntate: ¿transmite un mensaje con sentido pleno en su ámbito de uso? Si la respuesta es sí, es un texto.'
    },
    {
      mistake: 'Clasificar un título o un epígrafe como paratexto icónico porque está impreso con letras grandes o colores.',
      correction: 'Si está compuesto por palabras y lenguaje alfabético, es un paratexto verbal (gráfico). Los paratextos icónicos son exclusivamente imágenes, gráficos, fotografías, dibujos o diagramas.',
      whyItHappens: 'Por confundir el diseño visual de la tipografía con la naturaleza de la imagen no lingüística.',
      howToSpotIt: 'Si se lee con palabras, es verbal. Si se interpreta como imagen visual no alfabética, es icónico.'
    }
  ],
  pocketSummary: {
    coreConcept: 'Texto = unidad semántico-discursiva de extensión variable. Contexto = emisor, receptor, tema, espacio, tiempo y relación social. Paratextos = umbral verbal (títulos, autores, notas) e icónico (imágenes, gráficos).',
    quickRecognitionClue: 'Para el contexto preguntate: ¿quién habla, a quién, de qué, dónde, cuándo y con qué jerarquía? Para el paratexto: ¿palabras periféricas (verbal) o figuras visuales (icónico)?',
    fatalTrapToAvoid: 'Olvidar que el sentido de una frase cambia según las coordenadas de espacio, tiempo y relación entre los interlocutores.'
  },
  flashcards: [
    { id: 'fc-b-01', front: '¿Cuál es la definición de texto según la cátedra de Seminario?', back: 'Unidad semántico-discursiva con sentido pleno y extensión variable que circula en intercambios sociales reglamentados por coherencia y cohesión.', category: 'Teoría textual' },
    { id: 'fc-b-02', front: '¿Cuáles son los 6 elementos del contexto de situación?', back: '1. Emisor (quién produce)\n2. Receptor/destinatario (a quién se dirige)\n3. Mensaje/tema (de qué trata)\n4. Espacio (dónde ocurre)\n5. Tiempo (cuándo ocurre)\n6. Relación entre interlocutores (simétrica o asimétrica)', category: 'Contexto de situación' },
    { id: 'fc-b-03', front: '¿Qué diferencia a los paratextos verbales de los icónicos?', back: 'Los verbales están compuestos por texto lingüístico (título, autor, notas al pie, índice, bibliografía). Los icónicos son elementos visuales no alfabéticos (fotografías, mapas, esquemas anatómicos, gráficos de barras).', category: 'Paratextos' },
    { id: 'fc-b-04', front: '¿Qué es una relación asimétrica entre interlocutores?', back: 'Un vínculo donde los participantes tienen roles sociales, institucionales o de poder desiguales (ej. médico jefe y residente, profesor y alumno, autoridad judicial y ciudadano).', category: 'Pragmática' }
  ],
  guidedExerciseId: 'Q-MOD-B-01',
  independentExerciseId: 'Q-MOD-B-02',
  activeRecallExerciseId: 'Q-MOD-B-04'
};
