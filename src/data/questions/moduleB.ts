import { Question } from '../../types';

export const MODULE_B_QUESTIONS: Question[] = [
  {
    id: 'Q-MOD-B-01',
    topicId: 'MOD-B',
    learningObjective: 'Comprender la definición de texto como unidad semántico-discursiva.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'Según el marco teórico de la cátedra de Seminario, un texto se define esencialmente como:',
    options: [
      { id: 'opt-a', text: 'Una unidad semántico-discursiva con sentido pleno y extensión variable que circula en los intercambios sociales.' },
      { id: 'opt-b', text: 'Cualquier conjunto de palabras que tenga más de tres párrafos de longitud obligatoria.' },
      { id: 'opt-c', text: 'Una lista de oraciones gramaticalmente correctas aunque no guarden relación de sentido entre sí.' },
      { id: 'opt-d', text: 'Un documento impreso exclusivamente en soporte papel y encuadernado formalmente.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El texto es una unidad semántico-discursiva: posee un componente verbal y una unidad de sentido articulada, su extensión es variable (puede ser desde un cartel breve de "Silencio: hospital" hasta un libro entero) y está regido por coherencia y cohesión.',
    distractorExplanations: {
      'opt-b': 'La extensión de un texto no está fijada por una cantidad fija de renglones o párrafos; es variable.',
      'opt-c': 'Una suma de oraciones sin relación temática no constituye texto; carece de coherencia semántica.',
      'opt-d': 'El texto puede ser oral, digital o impreso; el soporte físico no restringe su naturaleza semántica.'
    },
    hint: 'Recordá la doble dimensión: significado comprensible ("semántico") y práctica comunicativa social ("discursiva").',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 11; Módulo 3, p. 68; Resumen P1, p. 2',
    tags: ['definicion de texto', 'unidad semantica', 'propiedades'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-B-02',
    topicId: 'MOD-B',
    learningObjective: 'Identificar los componentes fundamentales del contexto de situación.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Cuáles son los seis elementos que componen el contexto de situación para comprender el significado de un texto?',
    options: [
      { id: 'opt-a', text: 'Título, subtítulo, tipografía, margen, número de página e imprenta.' },
      { id: 'opt-b', text: 'Emisor, receptor, mensaje/tema, espacio, tiempo y relación entre interlocutores.' },
      { id: 'opt-c', text: 'Sujeto, predicado, verbo principal, objeto directo, objeto indirecto y circunstancial.' },
      { id: 'opt-d', text: 'Introducción, nudo, desenlace, moraleja, autor y bibliografía.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El contexto de situación (situacional) requiere atender a: quién emite (emisor), a quién se dirige (receptor), sobre qué versa (mensaje/tema), dónde ocurre (espacio), en qué momento histórico o circunstancial (tiempo) y qué vínculo social los une (relación entre interlocutores: simétrica o asimétrica).',
    distractorExplanations: {
      'opt-a': 'Esos son elementos del paratexto gráfico y editorial, no del contexto de situación.',
      'opt-c': 'Son funciones sintácticas de la oración simple, no elementos pragmáticos del contexto.',
      'opt-d': 'Son partes de la estructura canónica de la narración de ficción clásica.'
    },
    hint: 'Pensá en quién le habla a quién, de qué, dónde, cuándo y con qué grado de confianza o jerarquía.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 4; Manual UNLaM Módulo 1, p. 24',
    tags: ['contexto de situacion', 'elementos comunicativos', 'pragmatica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-B-03',
    topicId: 'MOD-B',
    learningObjective: 'Analizar la relación entre interlocutores en una interacción comunicativa.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un ateneo hospitalario, un médico jefe de servicio le dice a los residentes: "Colegas, revisemos los protocolos de triage ante la contingencia respiratoria". ¿Cómo se caracteriza la relación entre interlocutores en este contexto situacional?',
    options: [
      { id: 'opt-a', text: 'Es puramente informal y simétrica, semejante a una conversación de amigos en una fiesta de fin de semana.' },
      { id: 'opt-b', text: 'Es una relación hostil donde el receptor carece por completo de capacidad de comprensión discursiva.' },
      { id: 'opt-c', text: 'Es una relación institucional asimétrica en jerarquía, pero que utiliza el vocativo "colegas" para establecer un marco de cooperación académica y profesional simétrica en el plano disciplinar.' },
      { id: 'opt-d', text: 'No existe relación de interlocución porque los residentes no son emisores.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El contexto institucional hospitalario fija una jerarquía funcional (asimetría), pero el enunciador elige un tono de comunidad discursiva compartida ("colegas") para apelar a la responsabilidad técnica y el conocimiento mutuo.',
    distractorExplanations: {
      'opt-a': 'El ámbito hospitalario formal exige adecuación de registro profesional, no coloquial informal.',
      'opt-b': 'No hay hostilidad en la escena enunciativa planteada; hay apelación cooperativa.',
      'opt-d': 'Todo intercambio discursivo implica receptores activos que decodifican y actúan.'
    },
    hint: 'Observá la doble capa: jerarquía en el cargo pero pertenencia común a la misma profesión médica.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 24-27; Resumen P1, p. 4',
    tags: ['relacion entre interlocutores', 'contexto situacional', 'comunidad profesional'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-B-04',
    topicId: 'MOD-B',
    learningObjective: 'Distinguir paratextos verbales de paratextos icónicos.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuál de los siguientes pares contiene exclusivamente paratextos icónicos?',
    options: [
      { id: 'opt-a', text: 'Título y bibliografía.' },
      { id: 'opt-b', text: 'Epígrafe y notas al pie.' },
      { id: 'opt-c', text: 'Prólogo e índice temático.' },
      { id: 'opt-d', text: 'Fotografía clínica y gráfico estadístico de barras.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Los paratextos icónicos son elementos visuales no estrictamente lingüísticos, como imágenes, fotografías, dibujos, diagramas anatómicos y gráficos estadísticos. El título, notas, bibliografía e índice son paratextos verbales (gráficos lingüísticos).',
    distractorExplanations: {
      'opt-a': 'Tanto el título como la bibliografía están constituidos por palabras (paratextos verbales).',
      'opt-b': 'Los epígrafes y las notas al pie son paratextos verbales compuestos por texto escrito.',
      'opt-c': 'El prólogo y el índice son construcciones discursivas verbales organizativas.'
    },
    hint: 'Lo "icónico" remite a la imagen, la figura visual o la representación gráfica no alfabética.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 7; Resumen P2, p. 5; Manual UNLaM Módulo 2, p. 43',
    tags: ['paratexto iconico', 'paratexto verbal', 'clasificacion'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-B-05',
    topicId: 'MOD-B',
    learningObjective: 'Identificar la función del paratexto editorial y de autoría.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En la portada de un libro figura: "Manual de Bioética Clínica. Editorial Médica Panamericana, Buenos Aires, 2023. Prólogo del Dr. Alberto Cormillot". ¿Qué funciones cumplen estos paratextos verbales?',
    options: [
      { id: 'opt-a', text: 'Aportar datos de filiación, contexto temporal, sello editorial de legitimación y una voz de autoridad previa que avala la obra.' },
      { id: 'opt-b', text: 'Rellenar el espacio en blanco de la tapa para que la imprenta no gaste papel sobrante.' },
      { id: 'opt-c', text: 'Exigir al estudiante que memorize el precio de venta del libro en las librerías.' },
      { id: 'opt-d', text: 'Demostrar que el autor original no supo escribir el libro y necesitó ayuda para la tapa.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Los paratextos editoriales (sello, lugar, año) y de prólogo construyen el marco de legitimidad institucional del texto, señalando a qué comunidad discursiva pertenece y qué respaldo académico o profesional posee.',
    distractorExplanations: {
      'opt-b': 'Los paratextos cumplen propósitos comunicativos e institucionales precisos, no de relleno accidental.',
      'opt-c': 'El costo económico no forma parte de la función discursiva del paratexto académico.',
      'opt-d': 'El prólogo es un género paratextual clásico de presentación y aval crítico, no signo de incompetencia.'
    },
    hint: 'Fijate cómo la editorial prestigiosa y el prólogo de un profesional reconocido le dan respaldo al libro.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 42-43; Resumen P1, p. 8',
    tags: ['paratexto editorial', 'legitimacion', 'prologo'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-B-06',
    topicId: 'MOD-B',
    learningObjective: 'Reconocer el concepto de paratexto según la teoría de Genette adoptada por la cátedra.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Por qué se afirma que los paratextos "no forman parte del texto en sentido estricto, pero lo acompañan y condicionan su recepción"?',
    options: [
      { id: 'opt-a', text: 'Porque son páginas en blanco que se arrancan del libro antes de leer.' },
      { id: 'opt-b', text: 'Porque son elementos liminares (fronteras o umbrales) que guían, enmarcan y predisponen la lectura del texto principal.' },
      { id: 'opt-c', text: 'Porque solo tienen validez si el autor los lee en voz alta en un acto público.' },
      { id: 'opt-d', text: 'Porque contradicen siempre el contenido de los capítulos interiores.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Como enseñaba Gérard Genette (referencia de la cátedra), el paratexto es el "umbral del texto": un aparato de señales verbales e icónicas que dispone al lector, orienta su interpretación y asegura su circulación social.',
    distractorExplanations: {
      'opt-a': 'Los paratextos portan información semántica valiosa; no son hojas vacías desechables.',
      'opt-c': 'Su circulación es escrita, gráfica o digital sin requerir lectura pública obligatoria.',
      'opt-d': 'El paratexto busca articular y facilitar la comprensión del texto, no sabotearlo sistemáticamente.'
    },
    hint: 'Pensá en la metáfora del paratexto como la puerta o el vestíbulo de entrada a una casa.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 7; Genette (1987); Manual UNLaM Módulo 2, p. 42',
    tags: ['paratexto', 'umbral', 'recepcion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-B-07',
    topicId: 'MOD-B',
    learningObjective: 'Identificar cómo el espacio y el tiempo condicionan el sentido de un enunciado.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'El cartel "Uso obligatorio de barbijo quirúrgico" colocado en la entrada de un sanatorio en marzo de 2020 tiene un sentido discursivo muy diferente si se coloca en un comercio barrial en diciembre de 2025. ¿A qué dimensión del contexto de situación obedece este cambio de sentido?',
    options: [
      { id: 'opt-a', text: 'Únicamente a un cambio en la tipografía de las letras del cartel.' },
      { id: 'opt-b', text: 'A que en 2025 ya no existen los sanatorios ni los barbijos en ninguna parte del mundo.' },
      { id: 'opt-c', text: 'A las coordenadas espacio-temporales y a las condiciones sociohistóricas que regulan la validez y pertinencia del mensaje.' },
      { id: 'opt-d', text: 'A que los carteles pierden su cohesión gramatical cuando pasa más de un año.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El contexto situacional e histórico (marzo de 2020: emergencia pandémica global; espacio sanitario) otorga a la consigna un valor de norma sanitaria urgente. En otro espacio y tiempo, el mismo texto adquiere resonancias o interpretaciones distintas.',
    distractorExplanations: {
      'opt-a': 'La tipografía es un rasgo formal paratextual menor que no explica la vigencia epidemiológica.',
      'opt-b': 'Es una afirmación exagerada e irreal.',
      'opt-d': 'La cohesión es una propiedad formal de la lengua, no se degrada con el paso del tiempo cronológico.'
    },
    hint: 'Fijate en cómo el momento histórico de la pandemia le daba fuerza de ley sanitaria a ese cartel.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 1, p. 24; Resumen P1, p. 4',
    tags: ['espacio y tiempo', 'contexto historico', 'pragmatica'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-B-08',
    topicId: 'MOD-B',
    learningObjective: 'Reconocer el valor del índice y los subtítulos como paratextos de orientación.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Qué ventaja directa le brinda a un estudiante consultar el índice temático de un manual antes de estudiar un capítulo?',
    options: [
      { id: 'opt-a', text: 'Evita tener que estudiar para el examen parcial.' },
      { id: 'opt-b', text: 'Informa qué porcentaje de alumnos aprobaron la materia el año anterior.' },
      { id: 'opt-c', text: 'Indica el sueldo de los profesores que dictan la materia.' },
      { id: 'opt-d', text: 'Permite anticipar la estructura global de los contenidos, los ejes temáticos y la progresión del conocimiento planteada por la cátedra.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El índice es un paratexto verbal sumario que ofrece el mapa conceptual de la obra: explicita la jerarquía de unidades, temas y subtemas, facilitando el ordenamiento mental del alumno.',
    distractorExplanations: {
      'opt-a': 'El índice es una herramienta de estudio, no una dispensa de evaluación.',
      'opt-b': 'Las estadísticas de aprobación no se publican en el índice de un manual.',
      'opt-c': 'Los datos salariales son ajenos al objeto y función del índice pedagógico.'
    },
    hint: 'Pensá en el índice como el mapa de ruta de un viaje.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 42; Resumen P1, p. 8',
    tags: ['indice', 'paratexto verbal', 'mapa tematico'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-B-09',
    topicId: 'MOD-B',
    learningObjective: 'Diferenciar entre receptor real y destinatario previsto en el diseño textual.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'Un folleto de prevención del cáncer de piel emitido por el Ministerio de Salud está redactado con tipografía clara, frases cortas y metáforas simples. Si este folleto es leído por un médico oncólogo especialista en un congreso, ¿qué distinción discursiva se hace evidente?',
    options: [
      { id: 'opt-a', text: 'La diferencia entre el destinatario previsto o modelo (población general no especializada) y el receptor empírico o real circunstancial (el oncólogo).' },
      { id: 'opt-b', text: 'Que el folleto está mal escrito porque no contiene jerga bioquímica avanzada.' },
      { id: 'opt-c', text: 'Que el médico oncólogo no sabe leer textos de divulgación comunitaria.' },
      { id: 'opt-d', text: 'Que los folletos de salud no tienen ningún tipo de receptor.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Todo texto se diseña pensando en un "lector modelo" o destinatario previsto (aquí: la ciudadanía amplia). Un receptor real accidental (el oncólogo) puede leerlo, pero la adecuación textual responde a las necesidades del destinatario original.',
    distractorExplanations: {
      'opt-b': 'No está mal escrito; está perfectamente adecuado a su público meta.',
      'opt-c': 'El médico puede leerlo y comprenderlo sin dificultad, reconociendo su perfil pedagógico.',
      'opt-d': 'Todo folleto comunicativo está orientado a influir en un receptor social.'
    },
    hint: 'Distinguí a quién se le escribió el folleto de quién circunstancialmente lo tiene en sus manos.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 24; Eco (1979); Resumen P1, p. 4',
    tags: ['destinatario previsto', 'lector modelo', 'receptor real'],
    estimatedSeconds: 55
  },
  {
    id: 'Q-MOD-B-10',
    topicId: 'MOD-B',
    learningObjective: 'Identificar paratextos no verbales en publicaciones científicas.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un informe epidemiológico de la UNLaM sobre hipertensión en La Matanza se incluye una tabla con columnas: "Rango etario", "Muestra (n)", "Prevalencia (%)" y "Desvío estándar". ¿A qué categoría paratextual pertenece esta tabla?',
    options: [
      { id: 'opt-a', text: 'Paratexto puramente narrativo de ficción.' },
      { id: 'opt-b', text: 'Paratexto icónico-gráfico (o mixto) de sistematización cuantitativa de datos empíricos.' },
      { id: 'opt-c', text: 'Paratexto publicitario persuasivo.' },
      { id: 'opt-d', text: 'Nota marginal manuscrita del estudiante.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Las tablas numéricas son paratextos mixtos/icónicos de condensación de datos: organizan visualmente matrices de variables empíricas para permitir lectura comparativa rápida de evidencia científica.',
    distractorExplanations: {
      'opt-a': 'Una tabla epidemiológica no es una obra narrativa de ficción literaria.',
      'opt-c': 'No persigue fines comerciales ni de venta publicitaria.',
      'opt-d': 'Forma parte del diseño editorial del informe institucional impreso/digital.'
    },
    hint: 'La tabla combina organización visual de casillas con datos numéricos verificables.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 43; Resumen P1, p. 7',
    tags: ['tablas', 'paratexto mixto', 'datos cuantitativos'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-B-11',
    topicId: 'MOD-B',
    learningObjective: 'Reconocer el impacto del canal de comunicación en el registro discursivo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿De qué manera el canal (escrito formal vs. oral espontáneo) incide en las propiedades del texto?',
    options: [
      { id: 'opt-a', text: 'No incide en absoluto; la gente escribe exactamente igual que como habla en la calle.' },
      { id: 'opt-b', text: 'El canal escrito prohíbe el uso de puntos y comas.' },
      { id: 'opt-c', text: 'El canal escrito formal exige mayor planificación, respeto estricto a las normas ortográficas y cohesión explícita, mientras que la oralidad espontánea se apoya en gestos, entonación e inmediatez compartida.' },
      { id: 'opt-d', text: 'La oralidad es la única forma que posee coherencia global.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El canal de transmisión condiciona la adecuación: la escritura académica demanda diferimiento, rigor léxico, enlaces cohesivos y corrección ortográfica; la oralidad conversacional tolera titubeos, elipsis de situación y deícticos contextuales.',
    distractorExplanations: {
      'opt-a': 'Escribir como se habla informalmente es uno de los errores más penalizados en la universidad.',
      'opt-b': 'Al contrario: la puntuación es indispensable en el texto escrito.',
      'opt-d': 'Tanto la oralidad formal como la escritura pueden poseer coherencia global.'
    },
    hint: 'Pensá en la diferencia entre rendir un examen escrito y charlar en la parada del colectivo.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 27; Resumen P1, p. 10',
    tags: ['canal', 'adecuacion', 'oralidad y escritura'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-B-12',
    topicId: 'MOD-B',
    learningObjective: 'Identificar cómo el propósito comunicativo orienta la estructura textual.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un texto redactado por el Comité de Docencia e Investigación de un hospital tiene como propósito central "instruir a los enfermeros sobre los 5 pasos obligatorios para la colocación de un catéter venoso". ¿Qué rasgo estructural se espera encontrar dominantemente?',
    options: [
      { id: 'opt-a', text: 'Una discusión filosófica sobre el sentido de la vida con estrofas poéticas rimadas.' },
      { id: 'opt-b', text: 'Un relato ficcional de suspenso policial con giros inesperados.' },
      { id: 'opt-c', text: 'Una columna de opinión política criticando las elecciones de otro país.' },
      { id: 'opt-d', text: 'Una secuencia instruccional clara, ordenada cronológicamente con verbos en infinitivo o imperativo y pasos numerados.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El propósito comunicativo pragmático (guiar una acción procedimental clínica) exige una secuencia instruccional con jerarquía lógica de pasos, sintaxis precisa y léxico unívoco.',
    distractorExplanations: {
      'opt-a': 'La poesía no es un género adecuado para un protocolo de enfermería.',
      'opt-b': 'Un protocolo clínico requiere exactitud y orden, no intriga novelesca.',
      'opt-c': 'La opinión partidaria es ajena a la función técnica de un procedimiento asistencial.'
    },
    hint: 'Si el objetivo es enseñar a realizar una técnica paso a paso, la estructura debe ser directiva o instruccional.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 1, p. 32; Resumen P1, p. 14',
    tags: ['proposito comunicativo', 'secuencia instruccional', 'protocolo'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-B-13',
    topicId: 'MOD-B',
    learningObjective: 'Analizar la bibliografía como paratexto de honestidad intelectual y trazabilidad.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Por qué la sección de "Bibliografía" o "Referencias" al final de un texto universitario es considerada indispensable según la cátedra de Seminario?',
    options: [
      { id: 'opt-a', text: 'Porque garantiza la trazabilidad académica, demuestra en qué fuentes se apoya la investigación y evita el plagio intelectual.' },
      { id: 'opt-b', text: 'Porque es un requisito estético para que el libro pese más gramos.' },
      { id: 'opt-c', text: 'Porque permite que los alumnos vendan los libros citados en la puerta de la facultad.' },
      { id: 'opt-d', text: 'Porque la ley prohíbe escribir más de mil palabras sin citar a cinco autores franceses.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La bibliografía es el paratexto que acredita la genealogía del conocimiento producido: permite al lector verificar las afirmaciones, consultar los textos fuentes y asegura el respeto al derecho de autor y la honestidad científica.',
    distractorExplanations: {
      'opt-b': 'El peso físico del libro no tiene ninguna relación con el rigor científico.',
      'opt-c': 'La bibliografía es un recurso académico, no una lista comercial de venta.',
      'opt-d': 'No existen leyes absurdas sobre nacionalidades obligatorias de citas.'
    },
    hint: 'Pensá en qué te permite saber de dónde sacó el autor los datos que expone.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 43; Anexo 1, pp. 87-88',
    tags: ['bibliografia', 'trazabilidad', 'etica academica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-B-14',
    topicId: 'MOD-B',
    learningObjective: 'Reconocer el concepto de "entramado de factores" en la composición del texto.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'El resumen aportado por el usuario señala que la composición del texto "es un proceso complejo que deriva en un entramado efectivo de factores (reglas y símbolos) que pueden y deben ser reglamentados". ¿Qué implica esta afirmación?',
    options: [
      { id: 'opt-a', text: 'Que escribir bien es un don innato que no se puede enseñar ni aprender.' },
      { id: 'opt-b', text: 'Que el texto no es caótico ni espontáneo, sino un sistema regulado por normas morfosintácticas, convenciones discursivas de género y principios de coherencia y cohesión que se aprenden metódicamente.' },
      { id: 'opt-c', text: 'Que los textos médicos deben ser escritos en código Morse para que los pacientes no los entiendan.' },
      { id: 'opt-d', text: 'Que las oraciones deben rimar obligatoriamente entre sí para ser consideradas un texto.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La metáfora etimológica de "texto" (del latín *textus*, tejido o entramado) destaca que la producción textual es una arquitectura regida por convenciones que el ingresante universitario debe dominar de forma consciente.',
    distractorExplanations: {
      'opt-a': 'La escritura académica es una competencia sociodiscursiva adquirible, no una inspiración mística.',
      'opt-c': 'El lenguaje médico busca precisión comunicativa, no criptografía deliberada.',
      'opt-d': 'La rima es un recurso estético de la poesía métrica, no un requisito de la prosa académica.'
    },
    hint: 'La palabra "texto" viene de tejer: hilos que se entrelazan siguiendo patrones definidos.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 2; Manual UNLaM Módulo 3, p. 68',
    tags: ['texto como tejido', 'normas discursivas', 'escritura academica'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-B-15',
    topicId: 'MOD-B',
    learningObjective: 'Evaluar cómo los paratextos pueden desmentir una interpretación errónea.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un estudiante lee un fragmento titulado "La eugenesia como política de Estado: selección biológica del ciudadano". Creyendo que el autor apoya esa práctica, se indigna. Sin embargo, al mirar el subtítulo lee: "Un análisis histórico y crítico del horror totalitario en el siglo XX". ¿Qué revela este subtítulo paratextual?',
    options: [
      { id: 'opt-a', text: 'Que el subtítulo es un error de imprenta y debe ignorarse.' },
      { id: 'opt-b', text: 'Que el texto fue escrito por extraterrestres en el siglo XXI.' },
      { id: 'opt-c', text: 'Que el texto es un análisis crítico e historiográfico de condena al totalitarismo, no una defensa de la eugenesia.' },
      { id: 'opt-d', text: 'Que el estudiante debe denunciar penalmente al autor sin leer el resto.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El subtítulo explicita la posición valorativa y el encuadre epistemológico del autor ("análisis crítico del horror"), rectificando una interpretación literal o descontextualizada del título principal.',
    distractorExplanations: {
      'opt-a': 'El subtítulo es parte integral del diseño discursivo del autor.',
      'opt-b': 'Es una opción incoherente y ridícula.',
      'opt-d': 'La lectura crítica universitaria examina los textos con fundamento antes de juzgar apresuradamente.'
    },
    hint: 'Fijate en las palabras clave del subtítulo: "análisis crítico" y "horror".',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 42-43; Resumen P1, p. 7',
    tags: ['subtitulo', 'lectura critica', 'orientacion interpretativa'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-B-16',
    topicId: 'MOD-B',
    learningObjective: 'Identificar paratextos de llamada y glosario en textos formativos.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el margen derecho de un manual de ingreso aparece un recuadro sombreado titulado "Glosario", donde se define el término "Polifonía". ¿Cuál es el propósito didáctico de este paratexto?',
    options: [
      { id: 'opt-a', text: 'Tapar manchas de tinta que se produjeron durante la impresión del libro.' },
      { id: 'opt-b', text: 'Indicar los términos que el estudiante tiene prohibido usar en el examen.' },
      { id: 'opt-c', text: 'Mostrar qué palabras deben eliminarse de los resúmenes.' },
      { id: 'opt-d', text: 'Facilitar la comprensión inmediata de conceptos técnicos sin obligar al alumno a salir del texto para buscarlos.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El glosario paratextual es un andamiaje instruccional: ofrece definiciones operativas de vocabulario técnico en el momento justo para sostener la fluidez de la lectura.',
    distractorExplanations: {
      'opt-a': 'El diseño gráfico de manuales responde a criterios pedagógicos, no a cubrir defectos de imprenta.',
      'opt-b': 'Al contrario: los términos del glosario son precisamente los que el alumno debe incorporar activamente.',
      'opt-c': 'El glosario enseña conceptos clave, que son el núcleo de cualquier buen resumen.'
    },
    hint: 'Un glosario ayuda al lector que recién empieza a familiarizarse con la disciplina.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 8; Manual UNLaM Módulo 2, p. 43',
    tags: ['glosario', 'paratexto pedagogico', 'vocabulario tecnico'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-B-17',
    topicId: 'MOD-B',
    learningObjective: 'Analizar cómo las comillas funcionan como paratexto tipográfico o marca enunciativa.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En una nota sobre dietas milagro aparece la frase: Los supuestos "remedios infalibles" vendidos en redes sociales carecen de evidencia científica. ¿Qué función cumplen las comillas en este caso?',
    options: [
      { id: 'opt-a', text: 'Marcan distancia irónica o crítica respecto del término encomillado, señalando que el autor no convalida que sean realmente remedios ni infalibles.' },
      { id: 'opt-b', text: 'Indican que el autor aprueba y recomienda fervientemente la compra de esos productos.' },
      { id: 'opt-c', text: 'Señalan que la palabra está escrita en idioma alemán antiguo.' },
      { id: 'opt-d', text: 'Son un error ortográfico del redactor al presionar la tecla dos veces.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Las comillas de distancia o modalizadoras indican que el enunciador toma distancia semántica del vocablo ajeno, relativizando su veracidad o destacando su uso impropio o engañoso.',
    distractorExplanations: {
      'opt-b': 'Las comillas en este contexto cuestionan el concepto; no lo promueven.',
      'opt-c': 'Las palabras encomilladas están en perfecto español estándar.',
      'opt-d': 'Es un recurso de polifonía y enunciación sistemático en la escritura académica y periodística.'
    },
    hint: 'Pensá en el gesto de hacer comillas con los dedos al hablar cuando algo te parece sospechoso o falso.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 53; Resumen P1, p. 22',
    tags: ['comillas', 'distancia ironica', 'enunciacion'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-B-18',
    topicId: 'MOD-B',
    learningObjective: 'Reconocer la diferencia entre soporte digital y soporte analógico en la lectura de paratextos.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Al leer un artículo en la pantalla del celular en un portal de noticias médicas, aparecen hipervínculos azules subrayados, botones de compartir y fecha de "última actualización: hace 15 minutos". Estos elementos se definen como:',
    options: [
      { id: 'opt-a', text: 'Virus informáticos que impiden la lectura del texto.' },
      { id: 'opt-b', text: 'Paratextos digitales e hipertextuales propios del soporte electrónico que permiten navegación no lineal y actualización continua.' },
      { id: 'opt-c', text: 'Estrategias argumentativas de desmentida y concesión.' },
      { id: 'opt-d', text: 'Procedimientos de elipsis gramatical por sustitución por cero.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El soporte digital introduce paratextos específicos (hipervínculos, metadatos temporales dinámicos, widgets de interacción) que expanden el texto hacia una red hipertextual.',
    distractorExplanations: {
      'opt-a': 'Los hipervínculos legítimos y metadatos no son virus; son la estructura de la web.',
      'opt-c': 'No son estrategias argumentativas; son rasgos paratextuales del canal tecnológico.',
      'opt-d': 'La elipsis es un recurso de cohesión sintáctica dentro de la frase, no un botón digital.'
    },
    hint: 'Pensá en cómo cambia la página de un libro físico frente a una página web interactiva.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P2, p. 5; Manual UNLaM Módulo 1, p. 12',
    tags: ['soporte digital', 'hipertexto', 'paratexto electronico'],
    estimatedSeconds: 45
  }
];
