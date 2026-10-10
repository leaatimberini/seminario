import { Question } from '../../types';

export const MODULE_D_QUESTIONS: Question[] = [
  {
    id: 'Q-MOD-D-01',
    topicId: 'MOD-D',
    learningObjective: 'Distinguir los conceptos de enunciado y discurso según la cátedra de UNLaM.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En la teoría del lenguaje adoptada por la cátedra de Seminario (basada en Benveniste y Bajtín), ¿cómo se diferencian el enunciado y el discurso?',
    options: [
      { id: 'opt-a', text: 'El enunciado es la unidad mínima concreta de comunicación producida en una situación determinada; el discurso es la práctica social amplia del lenguaje vinculada a esferas institucionales y sociales de uso.' },
      { id: 'opt-b', text: 'El enunciado es una palabra suelta en el diccionario y el discurso es un discurso político televisado.' },
      { id: 'opt-c', text: 'El enunciado siempre es falso y el discurso siempre es verdadero y científico.' },
      { id: 'opt-d', text: 'Son conceptos antagónicos que no pueden convivir en un mismo análisis lingüístico.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El enunciado es el producto concreto de un acto de enunciación ("lo dicho" materialmente en un contexto). El discurso abarca la dimensión social, ideológica e institucional del uso de la lengua (el discurso médico, el discurso pedagógico, el discurso jurídico).',
    distractorExplanations: {
      'opt-b': 'Las palabras del diccionario son términos abstractos del sistema (lengua), no enunciados vivos.',
      'opt-c': 'La veracidad no define lingüísticamente a ninguna de estas categorías.',
      'opt-d': 'El análisis del discurso trabaja articuladamente con los enunciados como unidades observables de las prácticas discursivas.'
    },
    hint: 'Pensá en el enunciado como la frase concreta que alguien dijo, y el discurso como la práctica social más amplia a la que responde.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 24; Resumen P1, p. 9; Resumen P2, p. 3',
    tags: ['enunciado', 'discurso', 'analisis discursivo'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-D-02',
    topicId: 'MOD-D',
    learningObjective: 'Reconocer los factores que determinan la adecuación comunicativa.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'La propiedad textual de la adecuación evalúa fundamentalmente:',
    options: [
      { id: 'opt-a', text: 'Si el texto está escrito con tinta azul o negra en la hoja de examen.' },
      { id: 'opt-b', text: 'Si el texto se adapta de manera pertinente al propósito comunicativo, al tema tratado, al canal empleado y a la relación social con el destinatario.' },
      { id: 'opt-c', text: 'Si todas las oraciones del texto tienen exactamente diez sílabas métricas.' },
      { id: 'opt-d', text: 'Si el autor nació en la misma provincia que el lector.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Un texto es adecuado cuando el emisor selecciona el registro, el léxico, las fórmulas de tratamiento y la estructura apropiados para la situación comunicativa concreta en la que interactúa.',
    distractorExplanations: {
      'opt-a': 'El color de la tinta es un detalle material que no define la adecuación discursiva.',
      'opt-c': 'La métrica silábica corresponde a la preceptiva de la poesía clásica rimada.',
      'opt-d': 'El origen geográfico del autor no determina la adecuación del enunciado.'
    },
    hint: 'Adecuar es ajustar el lenguaje a quién me escucha, dónde estoy y qué quiero lograr.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 27; Resumen P1, p. 10; Cassany (1995)',
    tags: ['adecuacion', 'situacion comunicativa', 'registro'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-D-03',
    topicId: 'MOD-D',
    learningObjective: 'Identificar fallas de adecuación por choque de registro.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un alumno responde en una consigna formal de parcial: "El Dr. Malbrán la re pegó con su investigación porque los bichos se murieron al toque". ¿Qué problema de adecuación presenta esta respuesta?',
    options: [
      { id: 'opt-a', text: 'Problema de coherencia global porque Malbrán nunca fue médico en Argentina.' },
      { id: 'opt-b', text: 'Falla ortográfica porque la palabra "toque" se escribe obligatoriamente con k.' },
      { id: 'opt-c', text: 'Falta de adecuación por uso de registro informal/coloquial y vocabulario vulgar e impropio en un género académico evaluativo que exige registro formal y léxico disciplinar preciso.' },
      { id: 'opt-d', text: 'Uso indebido de la secuencia dialogal.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'En el género examen parcial, el empleo de giros coloquiales ("la re pegó", "los bichos", "al toque") denota una grave inadecuación al ámbito académico universitario, donde se espera: "El Dr. Malbrán obtuvo resultados concluyentes al erradicar oportunamente los microorganismos patógenos".',
    distractorExplanations: {
      'opt-a': 'Carlos Malbrán fue una figura fundacional de la medicina y bacteriología argentina.',
      'opt-b': '"Toque" se escribe con "qu" en castellano estándar; no es una falta ortográfica.',
      'opt-d': 'No hay un diálogo con interlocutores ficticios en la frase.'
    },
    hint: 'Fijate en qué palabras suenan a una charla de esquina y no a una respuesta en la universidad.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 1, p. 27; Resumen P1, p. 10',
    tags: ['choque de registro', 'registro formal', 'adecuacion academica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-D-04',
    topicId: 'MOD-D',
    learningObjective: 'Clasificar los tipos de corrección según el material de Seminario.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'El resumen aportado por el usuario señala que la corrección lingüística abarca diversos parámetros. Si un estudiante escribe "hicieron muchos calor y hubieron problemas", comete un error de corrección:',
    options: [
      { id: 'opt-a', text: 'Fonética, porque no se pronuncia bien la letra h muda.' },
      { id: 'opt-b', text: 'Estilística exclusivamente, porque la frase es demasiado breve.' },
      { id: 'opt-c', text: 'Sociocultural por emplear un dialecto de otro continente.' },
      { id: 'opt-d', text: 'Gramatical (morfosintáctica), por vulnerar las reglas de concordancia en verbos impersonales defectivos ("hizo mucho calor", "hubo problemas").' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El verbo "haber" en su uso impersonal existencial se conjuga únicamente en tercera persona singular ("hubo", no "hubieron"), al igual que "hacer" en fenómenos climáticos ("hizo calor"). Violar esta norma es un error gramatical o morfosintáctico.',
    distractorExplanations: {
      'opt-a': 'La "h" no se pronuncia en español estándar; la falla no es fonética.',
      'opt-b': 'La brevedad de una frase no es en sí misma un defecto estilístico.',
      'opt-c': 'El plural "hubieron" para el sentido impersonal es una incorrección extendida en muchas regiones, pero es sancionada por la gramática académica.'
    },
    hint: 'Pensá en qué regla de la conjugación y la concordancia de los verbos impersonales se está rompiendo.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 10; Manual UNLaM Anexo 6, p. 100',
    tags: ['correccion gramatical', 'verbos impersonales', 'concordancia'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-D-05',
    topicId: 'MOD-D',
    learningObjective: 'Comprender el concepto de conciencia retórica en la universidad.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿A qué se refiere la cátedra de Seminario cuando habla de "conciencia retórica" en el estudiante ingresante?',
    options: [
      { id: 'opt-a', text: 'Al conocimiento consciente de los tipos y géneros discursivos que circulan en la comunidad académica y de cómo adaptar la escritura a las expectativas de esa comunidad.' },
      { id: 'opt-b', text: 'A la capacidad de engañar al profesor mediante discursos poéticos sofisticados.' },
      { id: 'opt-c', text: 'A la obligación de hablar en voz muy alta durante los exámenes orales.' },
      { id: 'opt-d', text: 'A saber de memoria las figuras literarias del siglo de oro español.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La conciencia retórica es la competencia reflexiva que le permite al estudiante reconocer en qué ámbito discursivo está actuando, qué reglas rigen el género solicitado (un parcial, un informe, un resumen) y cómo proyectar un ethos adecuado.',
    distractorExplanations: {
      'opt-b': 'La retórica académica no es manipulación engañosa, sino eficacia comunicativa ética.',
      'opt-c': 'El volumen acústico de la voz no tiene relación con la conciencia retórica del texto.',
      'opt-d': 'No se trata de recitar figuras retóricas históricas aisladas, sino de comprender la acción discursiva situada.'
    },
    hint: 'Ser consciente de las reglas del juego discursivo en el que estás participando.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 11; Manual UNLaM Módulo 1, p. 24',
    tags: ['conciencia retorica', 'comunidad academica', 'competencia comunicativa'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-D-06',
    topicId: 'MOD-D',
    learningObjective: 'Reconocer el concepto de Ethos y Ethos Académico.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'En el análisis del discurso universitario, el "ethos académico" se define como:',
    options: [
      { id: 'opt-a', text: 'El certificado médico oficial que acredita que el estudiante no tiene fiebre.' },
      { id: 'opt-b', text: 'La imagen de emisor riguroso, objetivo, reflexivo e informado que el estudiante construye y proyecta en su propio texto a través de sus elecciones léxicas, sintácticas y argumentativas.' },
      { id: 'opt-c', text: 'Un tipo especial de conector causal utilizado exclusivamente en Grecia antigua.' },
      { id: 'opt-d', text: 'El código numérico que identifica a cada comisión en el sistema MIeL.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El ethos (noción retórica reelaborada por Maingueneau y trabajada por la cátedra) es la imagen que el enunciador proyecta de sí mismo en su decir. En la universidad, el alumno debe construir un ethos de estudiante riguroso que fundamenta con evidencia y no opina desde la ligereza.',
    distractorExplanations: {
      'opt-a': 'No es un certificado clínico ni un diagnóstico médico.',
      'opt-c': 'El ethos es una dimensión enunciativa de la imagen del sujeto discursivo, no una partícula gramatical.',
      'opt-d': 'El código del aula virtual es un identificador de software, no un concepto discursivo.'
    },
    hint: 'Tiene que ver con la imagen de persona seria, reflexiva y rigurosa que mostrás cuando escribís.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 26; Maingueneau (2002); Resumen P1, p. 11',
    tags: ['ethos academico', 'imagen del enunciador', 'retorica'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-D-07',
    topicId: 'MOD-D',
    learningObjective: 'Diferenciar entre comunidad discursiva, comunidad académica y comunidad científica.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Según la clasificación sistemática de comunidades desarrollada en el material de Seminario, ¿cuál es el propósito específico de la comunidad científica frente a la comunidad académica?',
    options: [
      { id: 'opt-a', text: 'La comunidad científica solo vende remedios comerciales y la académica solo toma asistencias de alumnos.' },
      { id: 'opt-b', text: 'No existe ninguna diferencia; son dos nombres distintos para el mismo edificio de la facultad.' },
      { id: 'opt-c', text: 'La comunidad científica tiene como fin producir, validar y hacer avanzar el conocimiento nuevo a través de la investigación rigurosa, mientras que la comunidad académica se orienta a la transmisión pedagógica, formación y apropiación de ese saber.' },
      { id: 'opt-d', text: 'La comunidad académica produce leyes penales y la científica produce obras teatrales.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La comunidad científica investiga, valida descubrimientos y debate paradigmas (mediante papers, congresos y ateneos). La comunidad académica es la esfera institucional educativa donde los expertos (docentes) guían a los ingresantes y aprendices en la asimilación crítica de esas disciplinas.',
    distractorExplanations: {
      'opt-a': 'Caricaturiza de manera banal funciones institucionales complejas.',
      'opt-b': 'Cumplen roles sociales diferenciados (creación/validación de ciencia vs. enseñanza y aprendizaje superior).',
      'opt-d': 'Las leyes corresponden a la comunidad jurídica/legislativa y el teatro al ámbito artístico.'
    },
    hint: 'Una crea y valida el conocimiento nuevo en laboratorios y publicaciones; la otra lo enseña en las aulas universitarias.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 11; Resumen P2, p. 3; Swales (1990)',
    tags: ['comunidad cientifica', 'comunidad academica', 'esferas discursivas'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-D-08',
    topicId: 'MOD-D',
    learningObjective: 'Reconocer los rasgos de un registro especializado o técnico.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuál de los siguientes enunciados se inscribe con mayor precisión en un registro especializado del campo de la salud?',
    options: [
      { id: 'opt-a', text: '"Al señor le dolía la panza muy fuerte y le pusimos una inyección que lo durmió rápido".' },
      { id: 'opt-b', text: '"Estaba re mal del estómago, pobre tipo, así que le clavamos un calmante".' },
      { id: 'opt-c', text: '"Los espíritus malignos invadieron el vientre del enfermo provocándole gran sufrimiento".' },
      { id: 'opt-d', text: '"El paciente presentó dolor abdominal agudo en fosa ilíaca derecha y se administró analgesia parenteral de rescate".' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La opción b emplea terminología anatómica y clínica unívoca (*dolor abdominal agudo, fosa ilíaca derecha, analgesia parenteral*), sintaxis objetiva y distancia profesional propia del registro médico técnico.',
    distractorExplanations: {
      'opt-a': 'Usa lenguaje cotidiano no técnico ("le dolía la panza", "lo durmió").',
      'opt-b': 'Emplea jerga barrial coloquial impropia de la historia clínica ("re mal", "le clavamos").',
      'opt-c': 'Presenta una explicación mágica/animista precientífica.'
    },
    hint: 'Buscá los términos anatómicos y médicos precisos que usaría un profesional de la salud en un informe clínico.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 1, p. 27; Resumen P1, p. 10',
    tags: ['registro especializado', 'precision lexica', 'lenguaje tecnico'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-D-09',
    topicId: 'MOD-D',
    learningObjective: 'Analizar la corrección sociocultural y el respeto a la diversidad en el discurso médico.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En una campaña hospitalaria dirigida a comunidades migrantes, un folleto redactado en castellano neutro formal sin tecnicismos y traducido al quechua busca atender a un parámetro de:',
    options: [
      { id: 'opt-a', text: 'Corrección sociocultural y adecuación a los destinatarios para garantizar el derecho efectivo a la salud y una comunicación intercultural inclusiva.' },
      { id: 'opt-b', text: 'Elipsis innecesaria de términos legales.' },
      { id: 'opt-c', text: 'Acentuación optativa de diptongos crecientes.' },
      { id: 'opt-d', text: 'Comprobación de que los médicos no hablan idiomas originarios.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La corrección sociocultural y la adecuación ética implican reconocer la diversidad lingüística y cultural de los receptores reales, adaptando el discurso sanitario para que sea comprendido y respetado en el marco de la salud comunitaria.',
    distractorExplanations: {
      'opt-b': 'No se trata de suprimir vocablos gramaticales, sino de adecuar culturalmente el mensaje.',
      'opt-c': 'La acentuación sigue las reglas ortográficas fijadas, no es un factor sociocultural de diseño folleto.',
      'opt-d': 'El objetivo es empoderar a la comunidad usuaria, no evaluar a los médicos.'
    },
    hint: 'Pensá en cómo la salud comunitaria se adapta para que la gente de distintas culturas entienda la prevención.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Resumen P1, p. 10; Criterios Pedagógicos UNLaM',
    tags: ['correccion sociocultural', 'salud comunitaria', 'interculturalidad'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-D-10',
    topicId: 'MOD-D',
    learningObjective: 'Reconocer el concepto de registro objetivo frente a registro subjetivo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Cuál de los siguientes fragmentos exhibe un registro marcadamente subjetivo?',
    options: [
      { id: 'opt-a', text: '"La muestra de 500 pacientes arrojó una incidencia de efectos secundarios inferior al 2%".' },
      { id: 'opt-b', text: '"Afortunadamente, los espantosos y crueles síntomas de la infección cedieron gracias al milagroso accionar del equipo médico".' },
      { id: 'opt-c', text: '"Se constató una disminución estadísticamente significativa de los títulos de anticuerpos séricos".' },
      { id: 'opt-d', text: '"La presión sistólica promedio registrada durante el ensayo fue de 125 mmHg".' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El fragmento b contiene subjetivemas afectivos y axiológicos (*afortunadamente, espantosos, crueles, milagroso*), que revelan la valoración y emoción del enunciador, distanciándose del registro objetivo.',
    distractorExplanations: {
      'opt-a': 'Presenta datos numéricos porcentuales descriptivos sin marcas valorativas personales.',
      'opt-c': 'Emplea construcción impersonal pasiva y terminología científica estándar.',
      'opt-d': 'Informa un valor cuantitativo de presión arterial sin adjetivación emotiva.'
    },
    hint: 'Buscá las palabras que expresan sentimientos personales o valoraciones morales del que escribe.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 24-27; Kerbrat-Orecchioni (1993); Resumen P1, p. 21',
    tags: ['registro subjetivo', 'subjetivemas', 'modalizacion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-D-11',
    topicId: 'MOD-D',
    learningObjective: 'Identificar la corrección estilística en la redacción académica.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Cuál de los siguientes párrafos incurre en un defecto de corrección estilística por cacofonía y monotonía?',
    options: [
      { id: 'opt-a', text: '"El fármaco administrado provocó una leve molestia localizada en la zona quirúrgica".' },
      { id: 'opt-b', text: '"Se observó una respuesta inflamatoria transitoria en el área intervenida".' },
      { id: 'opt-c', text: '"La administración de la medicación causó la sensación de irritación de la región de la operación".' },
      { id: 'opt-d', text: '"El paciente refirió incomodidad leve tras recibir la dosis indicada".' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La acumulación continuada de terminaciones en "-ción" genera una marcada cacofonía (repetición desagradable de sonidos) y pobreza de ritmo, que la corrección estilística académica enseña a reformular.',
    distractorExplanations: {
      'opt-a': 'Muestra una prosa equilibrada, variada y precisa.',
      'opt-b': 'Presenta un estilo despersonalizado técnico impecable.',
      'opt-d': 'Expone la situación clínica con claridad, fluidez y corrección formal.'
    },
    hint: 'Fijate en cuántas veces se repite el sonido "-ción" en una sola línea.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 10; Cassany (1995)',
    tags: ['correccion estilistica', 'cacofonia', 'estilo academico'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-D-12',
    topicId: 'MOD-D',
    learningObjective: 'Comprender el concepto de comunidad discursiva según Swales.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Según John Swales (teoría de comunidades discursivas citada en el material), para que un grupo humano sea considerado una "comunidad discursiva" se requiere que:',
    options: [
      { id: 'opt-a', text: 'Todos sus miembros vivan en el mismo barrio y tengan la misma edad.' },
      { id: 'opt-b', text: 'Usen el mismo uniforme y canten el himno nacional antes de reunirse.' },
      { id: 'opt-c', text: 'Publiquen videos diarios en redes sociales de entretenimiento.' },
      { id: 'opt-d', text: 'Compartan objetivos públicos comunes, mecanismos de comunicación e intercambio, géneros discursivos propios, un léxico especializado y un umbral de conocimientos compartidos.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Una comunidad discursiva se define por sus prácticas sociocomunicativas: metas compartidas, foros de intercambio (revistas, congresos), géneros tipificados (historias clínicas, informes de guardia) y un vocabulario específico que la distingue de otras esferas.',
    distractorExplanations: {
      'opt-a': 'Una comunidad discursiva puede ser global e intergeneracional (ej. la comunidad cardiológica mundial).',
      'opt-b': 'Los símbolos de vestimenta o himnos no definen la naturaleza discursiva de una comunidad.',
      'opt-c': 'Las redes sociales son canales posibles, pero no definen los criterios teóricos de Swales.'
    },
    hint: 'Pensá en los médicos o enfermeros: comparten metas sanitarias, usan palabras que solo ellos entienden y escriben informes con formatos fijos.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 11; Swales (1990); Manual UNLaM Módulo 1, p. 24',
    tags: ['comunidad discursiva', 'swales', 'practica social'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-D-13',
    topicId: 'MOD-D',
    learningObjective: 'Identificar la asimetría comunicativa en el ámbito asistencial.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En la consulta médica tradicional, la relación entre el profesional de la salud y el paciente suele ser descrita como asimétrica. ¿Qué factor discursivo explica principalmente esta asimetría?',
    options: [
      { id: 'opt-a', text: 'La distribución desigual del saber técnico específico, el poder institucional asignado al rol profesional y el control del turno de la palabra en la entrevista clínica.' },
      { id: 'opt-b', text: 'Que el médico tiene permiso para gritar y el paciente debe permanecer en silencio.' },
      { id: 'opt-c', text: 'La diferencia de estatura física entre ambos interlocutores.' },
      { id: 'opt-d', text: 'Que el paciente nunca sabe en qué año nació.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La asimetría discursiva radica en el capital simbólico y técnico: el médico domina el saber biomédico y conduce la interacción mediante el interrogatorio clínico, mientras el paciente ocupa la posición de demandante de cuidado.',
    distractorExplanations: {
      'opt-b': 'La ética médica prohíbe el maltrato verbal en cualquier circunstancia.',
      'opt-c': 'Los atributos corporales físicos no determinan las relaciones de poder discursivo.',
      'opt-d': 'Es una opción absurda y peyorativa.'
    },
    hint: 'El médico sabe qué preguntar, domina los términos científicos y firma las indicaciones.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 24; Resumen P1, p. 4',
    tags: ['asimetria discursiva', 'relacion medico-paciente', 'contexto institucional'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-D-14',
    topicId: 'MOD-D',
    learningObjective: 'Reconocer la diferencia entre lengua oral y lengua escrita en el aula universitaria.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Por qué no es suficiente "escribir como uno habla" al rendir un examen de ingreso a la universidad?',
    options: [
      { id: 'opt-a', text: 'Porque los docentes de la universidad no comprenden el idioma español hablado.' },
      { id: 'opt-b', text: 'Porque la escritura académica exige descontextualización, autonomía semántica, rigor conceptual y el empleo de conectores lógicos que en la oralidad espontánea suelen reponerse con la entonación y la mirada.' },
      { id: 'opt-c', text: 'Porque escribir exige usar obligatoriamente pluma y tinta china.' },
      { id: 'opt-d', text: 'Porque las palabras orales no tienen significado real.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La lengua escrita formal no cuenta con el soporte de la presencia física (gestos, deícticos señalados con el dedo, entonación). Por ende, debe construir su propio contexto autónomo con precisión léxica y enlaces cohesivos explícitos.',
    distractorExplanations: {
      'opt-a': 'Los profesores hablan el mismo idioma, pero evalúan el dominio del registro formal escrito.',
      'opt-c': 'El tipo de instrumento de escritura no altera las exigencias cognitivo-discursivas del registro.',
      'opt-d': 'El lenguaje oral posee pleno significado, pero responde a otra situación comunicativa.'
    },
    hint: 'Cuando escribís, quien te lee no está al lado tuyo para que le expliques con las manos qué quisiste decir.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 27; Módulo 3, p. 59; Resumen P2, p. 3',
    tags: ['oralidad y escritura', 'autonomia discursiva', 'registro formal'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-D-15',
    topicId: 'MOD-D',
    learningObjective: 'Detectar ambigüedad o impropiedad léxica.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un ingresante redacta: "El virus afectó a una cantidad exorbitante de gente en el nosocomio". ¿Qué sugerencia de corrección léxica académica formularía la cátedra de Seminario?',
    options: [
      { id: 'opt-a', text: 'Escribir toda la oración con mayúsculas sostenidas para enfatizar el miedo.' },
      { id: 'opt-b', text: 'Agregar la palabra "terrible" antes de virus para darle más dramatismo.' },
      { id: 'opt-c', text: 'Cambiar por: "El virus contagió a 230 pacientes internados en el hospital", sustituyendo la hipérbole imprecisa ("cantidad exorbitante") y el arcaísmo ("nosocomio") por datos cuantitativos o formulaciones precisas.' },
      { id: 'opt-d', text: 'Reemplazar "virus" por "microbio volador".' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El registro académico evita adjetivos hiperbólicos y vagos (*cantidad exorbitante*) y prefiere términos exactos o datos precisos, desaconsejando el uso de arcaísmos rebuscados cuando existe un término claro y estándar como *hospital*.',
    distractorExplanations: {
      'opt-a': 'Escribir en mayúsculas sostenidas es una incorrección de estilo y equivale a gritar en la web.',
      'opt-b': 'Añadir subjetivemas dramáticos acentúa la subjetividad inadecuada en un informe.',
      'opt-d': '"Microbio volador" es una frase infantil e imprecisa.'
    },
    hint: 'Buscá la opción que da datos concretos y usa el término más claro y exacto.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 1, p. 27; Resumen P1, p. 10',
    tags: ['impropiedad lexica', 'precision', 'hiperbole'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-D-16',
    topicId: 'MOD-D',
    learningObjective: 'Reconocer el concepto de escena enunciativa en la producción discursiva.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'En el Manual de UNLaM (p. 26) se aborda la "escena enunciativa" (Maingueneau). ¿Qué implica que un texto configure una escena enunciativa?',
    options: [
      { id: 'opt-a', text: 'Que el texto debe ser filmado por un director de cine en un set de televisión.' },
      { id: 'opt-b', text: 'Que el examen de ingreso se realiza sobre un escenario de teatro.' },
      { id: 'opt-c', text: 'Que el texto contiene acotaciones dramáticas entre paréntesis para los actores.' },
      { id: 'opt-d', text: 'Que todo texto instituye un marco particular donde define quién es el enunciador, qué rol le asigna a su destinatario y desde qué espacio simbólico o legitimidad le habla.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La escena enunciativa es el dispositivo escénico que el discurso despliega: por ejemplo, un texto de divulgación puede construir una escena de "docente que guía amigablemente a un aprendiz curioso", mientras un paper médico instaura una escena de "científico que debate con pares académicos".',
    distractorExplanations: {
      'opt-a': 'No alude a producción audiovisual cinematográfica, sino a un concepto teórico discursivo.',
      'opt-b': 'Es una interpretación literal disparatada de la palabra "escena".',
      'opt-c': 'No son acotaciones teatrales de guión dramático.'
    },
    hint: 'Pensá en el "papel" que asume quien escribe y el "papel" en el que ubica al que lee.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 26; Maingueneau (2002)',
    tags: ['escena enunciativa', 'maingueneau', 'enunciador y destinatario'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-D-17',
    topicId: 'MOD-D',
    learningObjective: 'Identificar cómo la relación de simetría condiciona las fórmulas de tratamiento.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Mía debe enviar un correo formal al titular de la cátedra solicitando una constancia de examen. ¿Cuál de los siguientes encabezados y tratamientos es el más adecuado a la relación institucional?',
    options: [
      { id: 'opt-a', text: '"Estimado Profesor Dr. Gómez: Me dirijo a usted con el fin de solicitarle respetuosamente..."' },
      { id: 'opt-b', text: '"Hola loco, haceme la segunda con la constancia que me la piden en el laburo".' },
      { id: 'opt-c', text: '"Queridísimo amigo del alma, ¿cómo andan las cosas en tu casa?"' },
      { id: 'opt-d', text: '"Oiga usted, le exijo que me mande el papel de inmediato".' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'En una interacción asimétrica formal (alumna dirigiéndose a una autoridad de cátedra), se emplea la fórmula de tratamiento de distanciamiento respetuoso ("usted", "Estimado Profesor"), cortesía atenuada y precisión en el objeto de la solicitud.',
    distractorExplanations: {
      'opt-b': 'Usa lunfardo y confianza extrema inadmisible en una solicitud académica formal.',
      'opt-c': 'Trata a la autoridad como a un amigo íntimo personal, desdibujando el marco institucional.',
      'opt-d': 'Muestra un tono imperativo descomedido que vulnera las pautas de cortesía comunitaria.'
    },
    hint: 'Buscá la fórmula de respeto institucional con tratamiento formal de "usted".',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 1, p. 27; Resumen P1, p. 10',
    tags: ['adecuacion', 'formulas de tratamiento', 'correo academico'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-D-18',
    topicId: 'MOD-D',
    learningObjective: 'Evaluar la corrección léxica frente a expresiones pleonásticas o redundantes.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un informe de laboratorio aparece la frase: "Se produjo una hemorragia de sangre en el paciente". ¿Qué observación lingüística corresponde según los parámetros de corrección léxica?',
    options: [
      { id: 'opt-a', text: 'Es perfectamente correcta porque existen hemorragias de agua.' },
      { id: 'opt-b', text: 'Presenta un pleonasmo vicioso o redundancia innecesaria, ya que el significado de "sangre" está contenido estrictamente en la definición etimológica y médica de "hemorragia".' },
      { id: 'opt-c', text: 'Debería decir "hemorragia sanguínea de glóbulos rojos" para mayor precisión.' },
      { id: 'opt-d', text: 'Es un ejemplo de elipsis de predicado.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La expresión "hemorragia de sangre" es redundante (pleonasmo): toda hemorragia es, por definición médica, el vertido o escape de sangre fuera del lecho vascular. La corrección léxica exige sobriedad y economía: "Se produjo una hemorragia en el paciente".',
    distractorExplanations: {
      'opt-a': 'Por definición clínica, una hemorragia solo puede ser de sangre.',
      'opt-c': 'Multiplica la redundancia viciosa inicial.',
      'opt-d': 'No hay elipsis; hay un exceso innecesario de palabras que reiteran el mismo significado.'
    },
    hint: 'La palabra "hemorragia" ya incluye en su significado a la sangre.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 10; Manual UNLaM Módulo 1, p. 27',
    tags: ['pleonasmo', 'redundancia', 'correccion lexica'],
    estimatedSeconds: 40
  }
];
