import { Question } from '../../types';

export const MODULE_G_QUESTIONS: Question[] = [
  {
    id: 'Q-MOD-G-01',
    topicId: 'MOD-G',
    learningObjective: 'Definir el acto de enunciación según Émile Benveniste.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'Según Émile Benveniste (referencia teórica obligatoria en la cátedra de Seminario), ¿qué es la enunciación?',
    options: [
      { id: 'opt-a', text: 'La puesta en funcionamiento de la lengua por un acto individual de utilización.' },
      { id: 'opt-b', text: 'La lista de oraciones que aparecen en una página de internet.' },
      { id: 'opt-c', text: 'La traducción literal de palabras del latín al griego.' },
      { id: 'opt-d', text: 'El sonido acústico que emite un parlante averiado.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Benveniste define la enunciación como el acto individual en el que el locutor se apropia del aparato formal de la lengua y la pone en funcionamiento para enunciar un mensaje dirigido a un alocutario en un contexto espacio-temporal concreto.',
    distractorExplanations: {
      'opt-b': 'Ese es el producto terminado observable (el enunciado), no el acto enunciativo de producción.',
      'opt-c': 'No se refiere a operaciones de traducción filológica entre lenguas clásicas.',
      'opt-d': 'El fenómeno de la enunciación es lingüístico y discursivo, no un defecto técnico de hardware sonoro.'
    },
    hint: 'La enunciación es el "acto vivo" de apropiarse de la lengua para decir algo.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 24; Benveniste (1986); Resumen P1, p. 20',
    tags: ['enunciacion', 'benveniste', 'aparato formal'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-G-02',
    topicId: 'MOD-G',
    learningObjective: 'Identificar deícticos temporales y su dependencia del contexto situacional.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el enunciado médico "El paciente ingresó descompensado ayer, pero hoy ya responde a los estímulos verbales", ¿qué función cumplen los términos "ayer" y "hoy"?',
    options: [
      { id: 'opt-a', text: 'Son conectores adversativos de causa.' },
      { id: 'opt-b', text: 'Son deícticos temporales cuyo significado exacto depende del momento específico en que se produce el acto de enunciación.' },
      { id: 'opt-c', text: 'Son figuras poéticas de aliteración.' },
      { id: 'opt-d', text: 'Son paratextos icónicos impresos al margen.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Los deícticos temporales (*hoy, ayer, mañana, ahora*) anclan el enunciado en el tiempo del emisor. Si leemos "ayer" sin saber qué día fue escrita la nota de evolución médica, no podemos determinar a qué fecha real del calendario corresponde.',
    distractorExplanations: {
      'opt-a': '"Ayer" y "hoy" son adverbios temporales deícticos, no nexos conjuntivos adversativos.',
      'opt-c': 'La aliteración es la repetición de sonidos consonánticos en poesía.',
      'opt-d': 'Forman parte del cuerpo del enunciado lingüístico, no de ilustraciones paratextuales.'
    },
    hint: 'Si no sabés qué día se escribió la frase, no podés saber qué fecha fue "ayer" o "hoy".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 25; Resumen P1, p. 21; Kerbrat-Orecchioni (1993)',
    tags: ['deicticos temporales', 'anclaje contextual', 'marcas enunciativas'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-G-03',
    topicId: 'MOD-G',
    learningObjective: 'Reconocer subjetivemas axiológicos y afectivos.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé el fragmento: "El desalmado laboratorio incrementó de modo escandaloso el precio del medicamento oncológico, provocando una angustia desgarradora en las familias afectadas". ¿Qué palabras funcionan como subjetivemas según Kerbrat-Orecchioni?',
    options: [
      { id: 'opt-a', text: '"Precio", "medicamento" y "familias".' },
      { id: 'opt-b', text: '"De", "el", "del" y "en".' },
      { id: 'opt-c', text: '"Desalmado", "escandaloso", "angustia" y "desgarradora".' },
      { id: 'opt-d', text: '"Oncológico" y "laboratorio".' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Los subjetivemas son términos (adjetivos, sustantivos, verbos, adverbios) que cargan una evaluación axiológica (juicio ético/moral: *desalmado, escandaloso*) o afectiva/emocional (*angustia, desgarradora*), revelando la presencia valorativa del enunciador en su discurso.',
    distractorExplanations: {
      'opt-a': 'Son sustantivos comunes descriptivos neutros del ámbito farmacológico y social.',
      'opt-b': 'Son preposiciones y artículos gramaticales sin carga subjetiva evaluativa.',
      'opt-d': 'Son términos técnicos especializados propios del campo biomédico.'
    },
    hint: 'Buscá las palabras que transmiten bronca, indignación y dolor por parte de quien escribe.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 25-26; Kerbrat-Orecchioni (1993); Resumen P1, p. 21',
    tags: ['subjetivemas', 'evaluacion axiologica', 'subjetividad discursiva'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-G-04',
    topicId: 'MOD-G',
    learningObjective: 'Identificar recursos de despersonalización y efecto de objetividad en la ciencia.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Cuál de los siguientes enunciados logra con mayor eficacia un "efecto de objetividad" o despersonalización propio de los artículos científicos?',
    options: [
      { id: 'opt-a', text: '"A mí me parece que la muestra de sangre estaba re contaminada".' },
      { id: 'opt-b', text: '"Sentimos un profundo orgullo cuando logramos descubrir la nueva bacteria en nuestro hermoso laboratorio".' },
      { id: 'opt-c', text: '"Crean en nosotros: los resultados salieron perfectos y nadie puede dudarlo".' },
      { id: 'opt-d', text: '"Se recolectaron 150 muestras biológicas y se procesaron mediante la técnica de PCR en tiempo real".' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El efecto de objetividad se construye borrando las huellas explícitas del sujeto enunciador mediante construcciones pasivas con "se" (*se recolectaron, se procesaron*), ausencia de deícticos de primera persona y foco en el procedimiento experimental.',
    distractorExplanations: {
      'opt-a': 'Presenta primera persona del singular ("A mí me parece") y coloquialismo ("re contaminada").',
      'opt-b': 'Carga subjetivemas afectivos ("profundo orgullo", "hermoso") y primera persona del plural ("sentimos").',
      'opt-c': 'Emplea apelación directa imperativa con subjetividad marcada y sin rigor metodológico.'
    },
    hint: 'Buscá la frase que oculta al "yo" y describe el experimento en tercera persona impersonal ("Se hizo tal cosa...").',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 26; Resumen P1, p. 21',
    tags: ['efecto de objetividad', 'despersonalizacion', 'impersonal con se'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-G-05',
    topicId: 'MOD-G',
    learningObjective: 'Definir el concepto de polifonía enunciativa según Mijaíl Bajtín y Oswald Ducrot.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el análisis del discurso universitario, ¿qué se entiende por "polifonía enunciativa"?',
    options: [
      { id: 'opt-a', text: 'La presencia de múltiples voces, puntos de vista y enunciadores ajenos convocados dentro de un mismo discurso, donde el autor dialoga, confronta o cita a otros hablantes.' },
      { id: 'opt-b', text: 'Cantar en coro a cuatro voces en la inauguración del ciclo lectivo de la universidad.' },
      { id: 'opt-c', text: 'El ruido ambiental producido por el tráfico en la rotonda de San Justo.' },
      { id: 'opt-d', text: 'El uso simultáneo de cinco micrófonos en una conferencia médica.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La polifonía (concepto acuñado por Bajtín en la literatura y formalizado por Oswald Ducrot en la lingüística) describe cómo un enunciado nunca es unívoco o aislado, sino que en su interior resuenan diversas voces y discursos previos que el enunciador orquesta.',
    distractorExplanations: {
      'opt-b': 'Confunde el concepto discursivo con la polifonía musical coral.',
      'opt-c': 'El ruido exterior acústico no constituye polifonía enunciativa textual.',
      'opt-d': 'La cantidad de dispositivos de amplificación sonora no altera la estructura semántico-discursiva del texto.'
    },
    hint: 'La palabra viene de "poli" (muchas) y "fonía" (voces): muchas voces hablando dentro de un mismo texto.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 53-56; Bajtín (1982); Ducrot (1984); Resumen P1, pp. 21-22; Resumen P2, p. 12',
    tags: ['polifonia enunciativa', 'ducrot', 'voces en el texto'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-G-06',
    topicId: 'MOD-G',
    learningObjective: 'Diferenciar discurso directo de discurso indirecto.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Considerá estas dos formas de discurso referido:\n1. La ministra declaró: "No permitiremos que falten insumos básicos en los hospitales bonaerenses".\n2. La ministra declaró que no permitirían que faltaran insumos básicos en los hospitales bonaerenses.\n¿Cómo se clasifican formalmente 1 y 2?',
    options: [
      { id: 'opt-a', text: '1 es discurso indirecto y 2 es discurso directo.' },
      { id: 'opt-b', text: '1 es discurso directo y 2 es discurso indirecto.' },
      { id: 'opt-c', text: 'Ambos son discursos directos libres sin autor.' },
      { id: 'opt-d', text: 'Ninguno es discurso referido; son oraciones pasivas sin sujeto.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El discurso directo (1) conserva la cita literal de la voz ajena, enmarcada por dos puntos, comillas y con sus propios deícticos ("No permitiremos"). El discurso indirecto (2) subordina la voz ajena mediante la conjunción "que", adaptando pronombres y correlación de tiempos verbales a la perspectiva del enunciador citante.',
    distractorExplanations: {
      'opt-a': 'Invierte las definiciones gramaticales canónicas de ambos discursos referidos.',
      'opt-c': 'El discurso directo libre carece de verbos introductores y comillas (típico de monólogos novelescos).',
      'opt-d': 'Ambos presentan explícitamente el verbo de decir "declaró" y atribuyen palabras a la ministra.'
    },
    hint: 'Fijate en las comillas y los dos puntos en el primero, y en la palabra "que" en el segundo.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 53-55; Resumen P1, p. 22; Resumen P2, p. 12',
    tags: ['discurso directo', 'discurso indirecto', 'discurso referido'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-G-07',
    topicId: 'MOD-G',
    learningObjective: 'Analizar la carga semántica de los verbos de decir introductores.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un análisis de polifonía, no es lo mismo escribir "El laboratorio afirmó que su fármaco es seguro" que "El laboratorio pretendió sostener que su fármaco es seguro" o "El laboratorio admitió que su fármaco tiene efectos adversos". ¿Por qué la elección del verbo introductor es crucial?',
    options: [
      { id: 'opt-a', text: 'Porque los verbos que empiezan con la letra "p" están prohibidos en la medicina.' },
      { id: 'opt-b', text: 'Porque la gramática solo permite usar el verbo "decir" y ningún otro verbo derivado.' },
      { id: 'opt-c', text: 'Porque el verbo introductor (verbo de decir) no es neutro: orienta ideológicamente la lectura, señalando si el enunciador convalida la voz citada, duda de su veracidad o expone una confesión forzada.' },
      { id: 'opt-d', text: 'Porque cambia el número de hojas que debe imprimir el estudiante.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Los verbos de reporte (*afirmar, admitir, confesar, pretender, denunciar, argumentar*) conllevan presupuestos y modalidades: "admitió" presupone que algo perjudicial era ocultado y fue reconocido; "pretendió" descalifica la pretensión de verdad.',
    distractorExplanations: {
      'opt-a': 'No existen prohibiciones alfabéticas en el vocabulario médico.',
      'opt-b': 'El manual de UNLaM (p. 67) incluye una lista de más de veinte verbos introductores precisos para informes académicos.',
      'opt-d': 'El número de páginas no se ve alterado por la elección de un verbo en un período oracional.'
    },
    hint: 'Pensá en la enorme diferencia entre decir "el sospechoso confesó" vs. "el sospechoso denunció".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 67; Resumen P1, p. 22',
    tags: ['verbos de decir', 'verbos introductores', 'modalizacion discursiva'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-G-08',
    topicId: 'MOD-G',
    learningObjective: 'Evitar atribuciones erróneas al analizar la polifonía de un texto fuente.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'En un examen de ingreso, el texto de Teun van Dijk afirma: "Los diarios conservadores sostienen que los inmigrantes son los principales responsables de la delincuencia urbana; sin embargo, las estadísticas judiciales desmienten categóricamente ese prejuicio xenófobo". Un alumno escribe en su respuesta de parcial: "Van Dijk afirma que los inmigrantes causan la delincuencia urbana". ¿Qué error grave de lectura cometió el alumno?',
    options: [
      { id: 'opt-a', text: 'Error en la acentuación de la palabra "urbana".' },
      { id: 'opt-b', text: 'Falta de paratextos en la hoja de examen.' },
      { id: 'opt-c', text: 'El alumno acertó plenamente porque van Dijk coincide con los diarios conservadores.' },
      { id: 'opt-d', text: 'Atribución errónea por confusión polifónica: le atribuyó al autor (van Dijk) una postura ajena que el autor citaba únicamente para desmentirla y condenarla como prejuicio xenófobo.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Este es el error polifónico más castigado en la corrección de parciales en UNLaM: el alumno lee superficialmente y atribuye al enunciador principal una voz ajena que en realidad fue introducida como contraargumento a refutar.',
    distractorExplanations: {
      'opt-a': '"Urbana" es palabra grave terminada en vocal; no lleva tilde gráfica.',
      'opt-b': 'La falla es de comprensión discursiva y atribución de voces, no de diseño paratextual.',
      'opt-c': 'Van Dijk desmiente explícitamente esa tesis y la cataloga como "prejuicio xenófobo".'
    },
    hint: 'Fijate en quién dijo qué: ¿lo dijo van Dijk o lo dijeron los diarios a los que van Dijk está criticando?',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 53-56; Modelo de Examen van Dijk, pp. 37-38',
    tags: ['atribucion erronea', 'polifonia', 'error de parcial frecuente'],
    estimatedSeconds: 55
  },
  {
    id: 'Q-MOD-G-09',
    topicId: 'MOD-G',
    learningObjective: 'Reconocer enunciados marcados y no marcados.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Según la teoría de la enunciación, un "enunciado marcado" es aquel que:',
    options: [
      { id: 'opt-a', text: 'Presenta huellas visibles y explícitas de la subjetividad del enunciador (deícticos personales de 1ª o 2ª persona, subjetivemas valorativos, adverbios modales).' },
      { id: 'opt-b', text: 'Fue subrayado con fibrón resaltador fluorescente por el estudiante.' },
      { id: 'opt-c', text: 'Contiene un sello de tinta del decano de la universidad.' },
      { id: 'opt-d', text: 'Está escrito exclusivamente en un pizarrón de tiza.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'En lingüística de la enunciación, un enunciado está "marcado" cuando contiene marcas enunciativas que anclan el discurso en el sujeto de la enunciación y revelan su actitud subjetiva hacia lo dicho.',
    distractorExplanations: {
      'opt-b': 'Confunde el concepto teórico de marca lingüística con el acto material de resaltar con fibrón.',
      'opt-c': 'Los sellos institucionales son paratextos de autenticación física, no marcas enunciativas del enunciado.',
      'opt-d': 'El soporte material del aula no define el estatus lingüístico marcado o no marcado del enunciado.'
    },
    hint: 'Enunciado marcado = tiene "marcas" o huellas visibles del sujeto que habla.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 24; Resumen P1, p. 20',
    tags: ['enunciado marcado', 'marcas enunciativas', 'subjetividad'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-G-10',
    topicId: 'MOD-G',
    learningObjective: 'Identificar deícticos espaciales y su funcionamiento.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el enunciado emitido en la sala de guardias: "Coloquen al paciente en esta camilla de aquí, no en aquella de allá", ¿qué términos operan como deícticos espaciales?',
    options: [
      { id: 'opt-a', text: '"Paciente" y "guardias".' },
      { id: 'opt-b', text: '"Esta", "aquí", "aquella" y "allá".' },
      { id: 'opt-c', text: '"Coloquen" y "no".' },
      { id: 'opt-d', text: '"Camilla" y "sala".' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Los demostrativos (*esta/aquella*) y los adverbios de lugar (*aquí/allá*) son deícticos espaciales: señalan la proximidad o lejanía de los objetos en relación con el centro deíctico (el lugar donde se encuentra el cuerpo del enunciador al hablar).',
    distractorExplanations: {
      'opt-a': 'Son sustantivos comunes con significado referencial pleno no deíctico.',
      'opt-c': '"Coloquen" es un verbo conjugado y "no" es un adverbio de negación.',
      'opt-d': 'Son sustantivos comunes del ámbito hospitalario.'
    },
    hint: 'Son las palabras que señalan cercanía o lejanía respecto del que está hablando.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 25; Resumen P1, p. 21',
    tags: ['deicticos espaciales', 'demostrativos', 'aqui y alla'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-G-11',
    topicId: 'MOD-G',
    learningObjective: 'Reconocer la nominalización como recurso despersonalizador.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'En lugar de escribir "Los científicos descubrieron la penicilina en 1928", un informe redacta: "El descubrimiento de la penicilina en 1928 transformó la medicina moderna". ¿Qué recurso gramatical se empleó al transformar el verbo "descubrieron" en el sustantivo "descubrimiento" y qué efecto discursivo genera?',
    options: [
      { id: 'opt-a', text: 'Metáfora astronómica.' },
      { id: 'opt-b', text: 'Elipsis de la letra p inicial.' },
      { id: 'opt-c', text: 'Nominalización; transforma una acción con sujetos humanos en un concepto/sustantivo abstracto independiente, favoreciendo el efecto de objetividad y la condensación de información.' },
      { id: 'opt-d', text: 'Cita directa de discurso ajeno.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La nominalización es un procedimiento morfosintáctico central en la escritura científica: convierte procesos verbales en sustantivos (*descubrir -> descubrimiento, aislar -> aislamiento*), permitiendo focalizar en el fenómeno abstracto y condensar las oraciones.',
    distractorExplanations: {
      'opt-a': 'No hay ninguna analogía ni metáfora celeste.',
      'opt-b': 'La letra "p" está presente y escrita normalmente.',
      'opt-d': 'No se cita la voz de un tercero entre comillas.'
    },
    hint: 'Convertir un verbo en sustantivo se llama "nominalización" (de "nombre" o sustantivo).',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 26; Halliday (1993); Resumen P1, p. 21',
    tags: ['nominalizacion', 'efecto de objetividad', 'estilo cientifico'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-G-12',
    topicId: 'MOD-G',
    learningObjective: 'Identificar el uso de comillas de distanciamiento irónico o metalingüístico.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un artículo sobre bioética aparece la frase: Los presuntos "beneficios curativos" del agua energizada carecen de toda base científica. En este contexto, ¿cuál es el propósito de las comillas?',
    options: [
      { id: 'opt-a', text: 'Indicar que el autor adhiere plenamente a esa terapia y la promueve en la universidad.' },
      { id: 'opt-b', text: 'Indicar que la palabra "curativos" pertenece a una lengua extranjera no traducida.' },
      { id: 'opt-c', text: 'Señalar un error de tipeo en el teclado.' },
      { id: 'opt-d', text: 'Marcar polifonía y distancia enunciativa irónica o escéptica, señalando que la categoría de "beneficios" es una pretensión engañosa sostenida por terceros que el autor rechaza categóricamente.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Las comillas de distanciamiento (o comillas irónicas) son un recurso polifónico: convocan el término ajeno para deslegitimarlo, alertando al lector de que el enunciador no se responsabiliza de la veracidad del concepto encomillado.',
    distractorExplanations: {
      'opt-a': 'El autor no avala el agua energizada; al contrario, afirma que carece de base científica.',
      'opt-b': 'Las palabras encomilladas están en castellano común.',
      'opt-c': 'Las comillas responden a una deliberada estrategia de modalización discursiva.'
    },
    hint: 'Las comillas dicen sin palabras: "así lo llaman ellos, pero para mí es mentira".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 53; Resumen P1, p. 22',
    tags: ['comillas de distanciamiento', 'ironia', 'polifonia'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-G-13',
    topicId: 'MOD-G',
    learningObjective: 'Reconocer modalidades de enunciación y modalidades de enunciado.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'Considerá las dos oraciones:\n1. "¿Se lavaron las manos antes de ingresar a la sala de partos?"\n2. "Es indispensable que todo el personal se lave las manos antes de ingresar a la sala de partos".\n¿Qué tipo de modalidad predomina en cada una según la teoría enunciativa?',
    options: [
      { id: 'opt-a', text: '1 expresa modalidad de enunciación interrogativa (establece una relación dialógica con el alocutario); 2 expresa modalidad de enunciado apreciativa/deóntica (evalúa la obligatoriedad de la acción).' },
      { id: 'opt-b', text: 'Ambas son oraciones poéticas sin ninguna intención comunicativa real.' },
      { id: 'opt-c', text: '1 es un paratexto icónico y 2 es un conector concesivo.' },
      { id: 'opt-d', text: 'Ninguna tiene sujeto gramatical.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La modalidad de enunciación refiere a la relación emisor-receptor (asertiva, interrogativa, imperativa). La modalidad de enunciado refleja el juicio del enunciador sobre el contenido de lo dicho (certeza, posibilidad, obligación: *es indispensable*).',
    distractorExplanations: {
      'opt-b': 'Son enunciados prototípicos de la práctica sanitaria cotidiana, no versos líricos.',
      'opt-c': 'Ninguna de las dos frases es una ilustración visual ni un nexo de enlace concesivo.',
      'opt-d': 'Tienen sujetos gramaticales definidos (tácito "ustedes" en la 1; "todo el personal" en la 2).'
    },
    hint: 'La 1 es una pregunta (modalidad de enunciación); la 2 marca una obligación obligatoria (modalidad de enunciado).',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 25; Kerbrat-Orecchioni (1993); Resumen P1, p. 21',
    tags: ['modalidades', 'deontica', 'modalidad de enunciacion'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-G-14',
    topicId: 'MOD-G',
    learningObjective: 'Identificar deícticos de persona en plural inclusivo vs exclusivo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En una clase universitaria, la profesora de Seminario dice a los ingresantes: "Hoy analizaremos juntos el modelo de examen oficial de la UNLaM". El pronombre y morfema verbal de primera persona del plural ("analizaremos", "juntos") funciona como:',
    options: [
      { id: 'opt-a', text: 'Un "nosotros" de modestia que excluye absolutamente a los alumnos de la sala.' },
      { id: 'opt-b', text: 'Un "nosotros" inclusivo, que abarca conjuntamente a la docente (emisora) y a los estudiantes (receptores) en una comunidad de aprendizaje compartida.' },
      { id: 'opt-c', text: 'Un deíctico espacial que indica la distancia en metros entre los bancos.' },
      { id: 'opt-d', text: 'Un error gramatical porque los docentes deben hablar siempre en latín.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El "nosotros inclusivo" suma al emisor y al receptor (*yo + ustedes*), construyendo cercanía pedagógica y compromiso conjunto. Se diferencia del "nosotros exclusivo" (*yo + ellos, sin ustedes*).',
    distractorExplanations: {
      'opt-a': 'El "nosotros de modestia" o mayestático sustituye al "yo" individual, pero la palabra "juntos" ratifica aquí la inclusión comunitaria de los alumnos.',
      'opt-c': 'Es un deíctico personal deíctico, no espacial de distancia física.',
      'opt-d': 'Las clases se imparten en castellano normativo estándar.'
    },
    hint: 'La palabra clave es "juntos": incluye tanto a la profe como a los estudiantes.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 25; Resumen P1, p. 20',
    tags: ['nosotros inclusivo', 'deicticos de persona', 'escena pedagogica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-G-15',
    topicId: 'MOD-G',
    learningObjective: 'Reconocer el discurso directo introducido sin guion de diálogo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé el siguiente fragmento de una noticia:\nEl presidente del Colegio Médico calificó de "inadmisible e irresponsable" la falta de insumos anestésicos en los centros de salud.\n¿Cómo se analiza este pasaje en términos polifónicos?',
    options: [
      { id: 'opt-a', text: 'Es un plagio que debe ser denunciado en tribunales.' },
      { id: 'opt-b', text: 'Es una elipsis por sustitución por cero de todas las comas.' },
      { id: 'opt-c', text: 'Es un islote textual (o cita integrada directa parcial), donde se insertan entre comillas las palabras literales exactas del enunciador citado dentro de la trama sintáctica del narrador.' },
      { id: 'opt-d', text: 'Es un texto sin polifonía porque no hay dos personas hablando en un escenario.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El "islote textual" o cita integrada es una forma híbrida de discurso referido: el texto cita entre comillas palabras textuales clave (*"inadmisible e irresponsable"*) integradas sintácticamente en la oración subordinada indirecta.',
    distractorExplanations: {
      'opt-a': 'Al atribuir la autoría con el verbo "calificó", no hay plagio alguno sino cita periodística legítima.',
      'opt-b': 'No se omite ninguna coma necesaria.',
      'opt-d': 'Hay polifonía plena: la voz del periodista reproduce las palabras valorativas del presidente del Colegio.'
    },
    hint: 'Fijate en cómo las palabras encomilladas se mezclan dentro de la propia oración del redactor.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 54; Resumen P1, p. 22',
    tags: ['islote textual', 'cita integrada', 'polifonia'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-G-16',
    topicId: 'MOD-G',
    learningObjective: 'Identificar adverbios modalizadores de certeza o duda.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el enunciado "Indudablemente, la detección temprana del cáncer de mama incrementa la sobrevida de las pacientes", el término "Indudablemente" opera como:',
    options: [
      { id: 'opt-a', text: 'Un deíctico temporal que indica que el estudio se realizó ayer por la tarde.' },
      { id: 'opt-b', text: 'Un conector adversativo que contradice a los médicos.' },
      { id: 'opt-c', text: 'Una figura de hipérbole poética.' },
      { id: 'opt-d', text: 'Un modalizador oracional de certeza epistémica absoluta que refuerza la convicción asertiva del enunciador.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Los modalizadores epistémicos (*indudablemente, ciertamente, sin duda*) expresan el grado de adhesión y certidumbre que el enunciador manifiesta respecto de la verdad de su proposición.',
    distractorExplanations: {
      'opt-a': 'No refiere al tiempo cronológico del calendario.',
      'opt-b': 'No establece oposición ni contraste contraargumentativo.',
      'opt-c': 'Es una afirmación científica fundada, no una exageración literaria desmedida.'
    },
    hint: '"Indudablemente" señala que no cabe ninguna duda sobre lo que se afirma.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 25; Resumen P1, p. 21',
    tags: ['modalizadores', 'certeza epistemica', 'enunciacion'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-G-17',
    topicId: 'MOD-G',
    learningObjective: 'Reconocer la polifonía encubierta o alusión intertextual.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'Un texto de salud afirma: "En este hospital, como en el lema de mayo de 1810, el pueblo quiere saber de qué se trata cuando le niegan un turno". ¿Qué fenómeno polifónico se observa?',
    options: [
      { id: 'opt-a', text: 'Intertextualidad y memoria discursiva que evoca una frase histórica fundacional argentina para resemantizarla en una demanda ciudadana contemporánea de acceso a la salud.' },
      { id: 'opt-b', text: 'Error cronológico que confunde a Cornelio Saavedra con un enfermero de guardia.' },
      { id: 'opt-c', text: 'Uso de un conector consecutivo de reformulación.' },
      { id: 'opt-d', text: 'Definición anatómica del sistema cardiovascular.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La polifonía no solo se manifiesta en citas con nombre y apellido: la intertextualidad alude a enunciados cristalizados en la memoria discursiva colectiva (*"el pueblo quiere saber de qué se trata"*) para dar fuerza retórica a una nueva situación.',
    distractorExplanations: {
      'opt-b': 'No hay confusión de personajes; es una analogía política discursiva deliberada.',
      'opt-c': 'No hay conectores consecutivos en la frase citada.',
      'opt-d': 'El texto trata sobre gestión hospitalaria y derechos cívicos, no sobre anatomía biológica.'
    },
    hint: 'La frase "el pueblo quiere saber de qué se trata" viaja desde la Revolución de Mayo hasta el hospital de hoy.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 1, p. 24; Bajtín (1982); Resumen P1, p. 21',
    tags: ['intertextualidad', 'memoria discursiva', 'polifonia historica'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-G-18',
    topicId: 'MOD-G',
    learningObjective: 'Identificar la voz pasiva como estrategia despersonalizadora.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé los dos enunciados:\n1. "Nosotros aislamos la bacteria patógena en el cultivo número cuatro".\n2. "La bacteria patógena fue aislada en el cultivo número cuatro".\n¿Por qué en los textos biomédicos se prefiere habitualmente la formulación número 2?',
    options: [
      { id: 'opt-a', text: 'Porque la voz pasiva gasta menos tinta en la impresora.' },
      { id: 'opt-b', text: 'Porque la voz pasiva perifrástica ("fue aislada") desplaza al sujeto agente humano a un segundo plano o lo elide, colocando el foco informativo en el objeto del descubrimiento y generando un efecto de objetividad científica.' },
      { id: 'opt-c', text: 'Porque la primera persona del plural está prohibida penalmente por la Constitución Nacional.' },
      { id: 'opt-d', text: 'Porque la oración 1 no tiene predicado gramatical.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La voz pasiva (junto con la pasiva con "se") es el recurso por antonomasia de despersonalización en la prosa académica: permite enunciar el hecho científico focalizando en el objeto estudiado y no en el ego individual del investigador.',
    distractorExplanations: {
      'opt-a': 'El consumo de tinta es irrelevante para los criterios del registro científico.',
      'opt-c': 'No existen prohibiciones penales gramaticales en la legislación constitucional.',
      'opt-d': 'La oración 1 tiene predicado verbal completo ("aislamos la bacteria...").'
    },
    hint: 'La pasiva pone adelante a la bacteria y esconde quién fue el que la aisló.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 26; Resumen P1, p. 21',
    tags: ['voz pasiva', 'despersonalizacion', 'registro cientifico'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-G-19',
    topicId: 'MOD-G',
    learningObjective: 'Analizar la distorsión del sentido en el pasaje a discurso indirecto.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'El jefe de terapia intensiva afirmó: "Es probable que el paciente presente una leve mejoría en las próximas 48 horas". Si un periodista publica: "El jefe de terapia aseguró que el paciente se curará en dos días", ¿qué alteración enunciativa grave se produjo?',
    options: [
      { id: 'opt-a', text: 'Se cometió una falta ortográfica al escribir "días" con tilde.' },
      { id: 'opt-b', text: 'Se transformó un deíctico espacial en un deíctico afectivo.' },
      { id: 'opt-c', text: 'Se modificó la modalidad del enunciado: se reemplazó una estimación de probabilidad cautelosa ("es probable", "leve mejoría") por una certeza categórica infundada ("aseguró que se curará"), tergiversando el sentido y la prudencia científica del emisor original.' },
      { id: 'opt-d', text: 'No se produjo ninguna alteración; ambas frases dicen exactamente lo mismo.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'En el pasaje de discurso directo a indirecto, alterar los modalizadores (de probabilidad cauta a certeza apodíctica) o los términos médicos constituye una manipulación o distorsión discursiva que la lectura crítica académica enseña a desenmascarar.',
    distractorExplanations: {
      'opt-a': '"Días" lleva tilde obligatoria por hiato acentual; está bien escrita.',
      'opt-b': 'No intervienen deícticos espaciales en la discrepancia analizada.',
      'opt-d': 'Decir que algo "es probable que mejore levemente" es radicalmente diferente a asegurar que "se curará".'
    },
    hint: 'Fijate en cómo el periodista cambió "es probable que haya una leve mejoría" por "aseguró que se curará".',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 53-56; Resumen P1, p. 22',
    tags: ['manipulacion polifonica', 'discurso indirecto', 'modalizacion'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-G-20',
    topicId: 'MOD-G',
    learningObjective: 'Identificar deícticos personales en enunciados de parcial.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En la corrección de un examen parcial, la docente señala como fallo: "Evitar expresiones como: Para mí que el autor piensa tal cosa". ¿Por qué se desaconseja el deíctico personal de primera persona singular ("Para mí") en la resolución de consignas teóricas universitarias?',
    options: [
      { id: 'opt-a', text: 'Porque el pronombre "mí" solo puede usarse en canciones de cumbia.' },
      { id: 'opt-b', text: 'Porque los parciales deben escribirse siempre en tercera persona del plural en tiempo futuro.' },
      { id: 'opt-c', text: 'Porque la palabra "autor" solo puede ir acompañada por verbos en inglés.' },
      { id: 'opt-d', text: 'Porque debilita el rigor de la fundamentación académica, reduciendo un análisis textual respaldado en evidencias teóricas a una mera opinión subjetiva o creencia personal no contrastada.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El ethos académico exige fundamentar las respuestas en el texto fuente y en los conceptos de la cátedra. Expresiones como "para mí" o "yo creo" reemplazan la argumentación fundada por una declaración subjetiva egocéntrica inapropiada para un examen.',
    distractorExplanations: {
      'opt-a': 'El pronombre tónico "mí" es una forma estándar de la gramática del español en cualquier género.',
      'opt-b': 'No existe tal restricción de tiempo verbal futuro en los parciales.',
      'opt-c': 'La materia se dicta y rinde en lengua castellana.'
    },
    hint: 'En la universidad no te piden lo que "te parece a vos", sino lo que podés demostrar con la teoría y el texto.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 60; Resumen P1, p. 23; Resumen P2, p. 14',
    tags: ['ethos academico', 'para mi', 'despersonalizacion', 'respuesta de parcial'],
    estimatedSeconds: 45
  }
];
