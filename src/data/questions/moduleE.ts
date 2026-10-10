import { Question } from '../../types';

export const MODULE_E_QUESTIONS: Question[] = [
  {
    id: 'Q-MOD-E-01',
    topicId: 'MOD-E',
    learningObjective: 'Definir el concepto de género discursivo según Mijaíl Bajtín.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'Según la teoría de Mijaíl Bajtín adoptada por la cátedra de Seminario, ¿qué es un género discursivo?',
    options: [
      { id: 'opt-a', text: 'Tipos relativamente estables de enunciados que se elaboran en cada esfera de la actividad humana, caracterizados por una temática, un estilo verbal y una estructura compositiva compartidos.' },
      { id: 'opt-b', text: 'Una lista fija de palabras aprobadas por la Real Academia Española para escribir poesía.' },
      { id: 'opt-c', text: 'Una clasificación biológica de los seres vivos según su género y especie celular.' },
      { id: 'opt-d', text: 'La diferencia gramatical obligatoria entre sustantivos masculinos y femeninos.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Bajtín define los géneros discursivos como "tipos relativamente estables de enunciados": cada ámbito de la sociedad (la medicina, la academia, el periodismo, la vida cotidiana) crea sus propias formas de comunicación con contenido temático, estilo y estructura compartidos.',
    distractorExplanations: {
      'opt-b': 'No es una lista léxica normativa de la RAE; es un fenómeno sociodiscursivo vivo.',
      'opt-c': 'Confunde el género discursivo lingüístico con el género taxonómico en biología médica.',
      'opt-d': 'Confunde el género discursivo con el género gramatical morfológico de las palabras.'
    },
    hint: 'Recordá la frase célebre de Bajtín: "tipos relativamente estables de enunciados en cada esfera humana".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 11-12; Bajtín (1982); Resumen P1, p. 11',
    tags: ['bajtin', 'generos discursivos', 'definicion canonica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-02',
    topicId: 'MOD-E',
    learningObjective: 'Diferenciar con precisión entre género discursivo y secuencia textual.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Cuál es la diferencia conceptual central entre un género discursivo y una secuencia textual según la cátedra?',
    options: [
      { id: 'opt-a', text: 'No existe ninguna diferencia; las palabras "género" y "secuencia" son sinónimos absolutos.' },
      { id: 'opt-b', text: 'El género discursivo es la clase de texto histórico-socialmente situada (ej. editorial periodística, artículo científico, folleto), mientras que la secuencia textual es la unidad compositiva menor y abstracta de organización interna (ej. secuencia explicativa, argumentativa, narrativa) que puede combinarse dentro de un género.' },
      { id: 'opt-c', text: 'El género es un párrafo corto y la secuencia es una página completa.' },
      { id: 'opt-d', text: 'Los géneros se usan en la oralidad y las secuencias solo se usan en la matemática.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Esta es una de las distinciones más evaluadas en UNLaM: el género es la manifestación sociocultural completa (un folleto, una noticia, un paper); la secuencia (según Adam) es la estructura prototípica de organización del contenido (explicar, narrar, argumentar, describir, dialogar, instruir).',
    distractorExplanations: {
      'opt-a': 'Confundirlos es uno de los errores conceptuales más frecuentes y sancionados en los parciales.',
      'opt-c': 'La extensión no define la naturaleza de ninguno de los dos conceptos.',
      'opt-d': 'Ambos operan tanto en discursos orales como escritos en el ámbito de las ciencias y la sociedad.'
    },
    hint: 'El género es la "obra o formato social" (ej. una receta, un artículo); la secuencia es el "modo de armar el bloque" (ej. instruir, argumentar).',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 27-29; Ciapuscio (1994); Resumen P1, pp. 11-12; Resumen P2, pp. 6-7',
    tags: ['genero vs secuencia', 'distincion teorica', 'adam y bajtin'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-E-03',
    topicId: 'MOD-E',
    learningObjective: 'Reconocer los rasgos externos e internos que permiten identificar un género discursivo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Para reconocer a qué género pertenece un texto, la cátedra propone analizar sus rasgos externos e internos. ¿Cuáles son rasgos externos característicos?',
    options: [
      { id: 'opt-a', text: 'La hipótesis personal del autor, las figuras retóricas y los sentimientos íntimos del corrector.' },
      { id: 'opt-b', text: 'El precio de las fotocopias en el centro de estudiantes.' },
      { id: 'opt-c', text: 'El soporte material, los paratextos, el formato editorial, la tipografía y el canal de circulación.' },
      { id: 'opt-d', text: 'La cantidad de verbos conjugados en pretérito pluscuamperfecto del subjuntivo.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Los rasgos externos son aquellos que se perciben en la superficie material e institucional del texto antes de adentrarse en su sintaxis profunda: paratextos (títulos, autoría, fecha), soporte (pantalla, papel impreso), diagramación y ámbito de publicación.',
    distractorExplanations: {
      'opt-a': 'La hipótesis y figuras corresponden a la dimensión interna discursiva y argumentativa.',
      'opt-b': 'El costo de fotocopiado es un aspecto logístico ajeno a los rasgos discursivos del género.',
      'opt-d': 'El tiempo verbal es un rasgo morfosintáctico interno del estilo lingüístico.'
    },
    hint: 'Lo "externo" es lo que ves a simple vista en el formato, el diseño y los datos de publicación.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 23; Resumen P1, p. 12; Resumen P2, p. 6',
    tags: ['rasgos externos', 'rasgos internos', 'reconocimiento de generos'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-04',
    topicId: 'MOD-E',
    learningObjective: 'Identificar las seis secuencias textuales prototípicas según Jean-Michel Adam.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuáles son las seis secuencias textuales prototípicas reconocidas en el marco teórico de la cátedra?',
    options: [
      { id: 'opt-a', text: 'Médica, quirúrgica, pediátrica, bioquímica, farmacológica y odontológica.' },
      { id: 'opt-b', text: 'Sujeto, verbo, predicado, circunstancial, objeto directo y aposición.' },
      { id: 'opt-c', text: 'Fantasiosa, trágica, cómica, romántica, policial y documental.' },
      { id: 'opt-d', text: 'Descriptiva, narrativa, explicativa, argumentativa, dialogal e instruccional.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El lingüista Jean-Michel Adam (adoptado por Ciapuscio y la cátedra de UNLaM) postula seis secuencias textuales prototípicas: descriptiva, narrativa, explicativa/expositiva, argumentativa, dialogal y directiva/instruccional.',
    distractorExplanations: {
      'opt-a': 'Son especialidades de las ciencias de la salud, no tipologías lingüísticas textuales.',
      'opt-b': 'Son componentes sintácticos de la oración gramatical.',
      'opt-c': 'Son tonos o subgéneros de la narrativa literaria o cinematográfica.'
    },
    hint: 'Recordá las seis formas de organizar un texto: describir, narrar, explicar, argumentar, conversar y dar instrucciones.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 28-32; Ciapuscio (1994); Resumen P1, pp. 12-14',
    tags: ['secuencias textuales', 'adam', 'clasificacion'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-E-05',
    topicId: 'MOD-E',
    learningObjective: 'Reconocer la secuencia textual dominante o englobante.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un artículo de opinión en un diario nacional sobre el financiamiento de los hospitales públicos comienza relatando la historia de Don Ramón, un jubilado que esperó seis horas en una guardia (secuencia narrativa breve), y describe las malas condiciones edilicias (secuencia descriptiva). A continuación, el autor sostiene que es urgente una reforma tributaria progresiva para la salud y desarrolla tres argumentos basados en datos económicos para refutar a la oposición. ¿Cuál es la secuencia dominante o englobante del texto?',
    options: [
      { id: 'opt-a', text: 'Secuencia argumentativa, porque el propósito rector de todo el texto es persuadir al lector y defender la tesis de la reforma tributaria, subordinando la anécdota y la descripción como evidencias auxiliares.' },
      { id: 'opt-b', text: 'Secuencia narrativa, porque empieza con la historia del jubilado.' },
      { id: 'opt-c', text: 'Secuencia instruccional, porque enseña cómo construir un hospital con ladrillos.' },
      { id: 'opt-d', text: 'Secuencia dialogal, porque Don Ramón habló con la enfermera.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La secuencia dominante o englobante es aquella que impone el propósito discursivo global al que se subordinan las demás secuencias. El relato de Don Ramón y la descripción son secuencias secundarias o incrustadas que funcionan como argumentos en apoyo de la tesis principal.',
    distractorExplanations: {
      'opt-b': 'El hecho de que un texto empiece narrando no convierte al texto en un cuento; la narración está al servicio de la argumentación.',
      'opt-c': 'No se ofrecen instrucciones técnicas de edificación.',
      'opt-d': 'El texto no está estructurado en turnos de habla de diálogo teatral o conversacional.'
    },
    hint: 'Preguntate: ¿para qué contó el autor la anécdota de Don Ramón? ¿Para entretener o para convencer de su postura?',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 29; Resumen P1, p. 12; Resumen P2, p. 7',
    tags: ['secuencia dominante', 'secuencia englobante', 'argumentacion'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-E-06',
    topicId: 'MOD-E',
    learningObjective: 'Identificar las fases de la secuencia explicativa prototípica.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Según el Manual de la UNLaM y el resumen del usuario, la estructura general de una secuencia explicativa consta típicamente de:',
    options: [
      { id: 'opt-a', text: 'Introducción del héroe -> Lucha con el monstruo -> Boda real.' },
      { id: 'opt-b', text: 'Presentación del tema / fase de cuestionamiento (¿por qué o cómo ocurre un fenómeno?) -> Fase resolutiva (desarrollo de la explicación causal y analítica) -> Conclusión / síntesis del conocimiento.' },
      { id: 'opt-c', text: 'Ataque personal al rival -> Insultos -> Victoria verbal.' },
      { id: 'opt-d', text: 'Lista de compras -> Pago en caja -> Entrega del ticket.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La secuencia explicativa parte de un interrogante cognitivo explícito o implícito (fase de cuestionamiento: ¿por qué se produce la fiebre?), despliega los mecanismos causales y descriptivos que resuelven la duda (fase resolutiva) y cierra recapitulando el saber compartido (fase conclusiva).',
    distractorExplanations: {
      'opt-a': 'Esa es la estructura del cuento de hadas o mito heroico clásico.',
      'opt-c': 'Es una falacia ad hominem o disputa violenta que carece de rigor pedagógico.',
      'opt-d': 'Es una transacción comercial cotidiana ajena a la tipología textual explicativa.'
    },
    hint: 'La explicación siempre responde a una pregunta o problema de conocimiento: ¿por qué o cómo sucede tal cosa?',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 29; Resumen P1, p. 15; Adam (1992)',
    tags: ['secuencia explicativa', 'estructura', 'fase resolutiva'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-07',
    topicId: 'MOD-E',
    learningObjective: 'Reconocer los rasgos de la secuencia argumentativa.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Cuál es la finalidad discursiva primordial de una secuencia argumentativa?',
    options: [
      { id: 'opt-a', text: 'Describir detalladamente la forma geométrica de los glóbulos rojos.' },
      { id: 'opt-b', text: 'Dar una orden militar indiscutible que debe cumplirse sin pensar.' },
      { id: 'opt-c', text: 'Convencer, persuadir o lograr la adhesión del receptor hacia una tesis o punto de vista sostenido por el enunciador, aportando razones fundamentadas.' },
      { id: 'opt-d', text: 'Narrar cronológicamente lo que comió el médico en el almuerzo.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'A diferencia de la explicación (que busca hacer comprender un saber que se da por establecido), la argumentación busca incidir en las convicciones del interlocutor sobre un tema problemático o debatible, fundamentando una postura mediante argumentos.',
    distractorExplanations: {
      'opt-a': 'Describir formas anatómicas corresponde a la secuencia descriptiva.',
      'opt-b': 'Imponer mandatos directos corresponde a la secuencia instruccional o directiva.',
      'opt-d': 'Relatar sucesos temporales pasados corresponde a la secuencia narrativa.'
    },
    hint: 'Argumentar es buscar que el otro coincida con tu postura dándole razones sólidas.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 29; Resumen P1, p. 16; Resumen P2, p. 7',
    tags: ['secuencia argumentativa', 'tesis', 'persuasion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-08',
    topicId: 'MOD-E',
    learningObjective: 'Identificar la secuencia descriptiva y sus operaciones.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En un manual de anatomía leemos: "El corazón es un órgano hueco, de forma cónica, ubicado en el mediastino medio. Presenta cuatro cavidades: dos aurículas superiores de paredes delgadas y dos ventrículos inferiores de paredes gruesas". Este fragmento responde prototípicamente a una:',
    options: [
      { id: 'opt-a', text: 'Secuencia narrativa de suspenso policial.' },
      { id: 'opt-b', text: 'Secuencia argumentativa en contra de la cardiología.' },
      { id: 'opt-c', text: 'Secuencia dialogal entre dos pacientes.' },
      { id: 'opt-d', text: 'Secuencia descriptiva, porque da cuenta de las propiedades, partes, ubicación y rasgos constitutivos de un objeto en el espacio.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La secuencia descriptiva detalla el estado de las cosas, características anatómicas, partes, formas y propiedades en una dimensión espacial, suspendiendo la progresión temporal de acciones.',
    distractorExplanations: {
      'opt-a': 'No hay trama de intriga ni transformación temporal de sucesos.',
      'opt-b': 'No se defiende ninguna tesis polémica; se expone la anatomía del órgano.',
      'opt-c': 'No hay alternancia de turnos de habla de interlocutores.'
    },
    hint: 'Fijate en cómo enumera partes, formas, paredes y cavidades.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 30; Resumen P1, p. 13',
    tags: ['secuencia descriptiva', 'anatomia', 'propiedades'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-E-09',
    topicId: 'MOD-E',
    learningObjective: 'Reconocer los tres momentos de la secuencia narrativa clásica.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'Según el resumen aportado por el estudiante (P1 p. 13; P2 p. 4), la secuencia narrativa se compone fundamentalmente de tres momentos en el tiempo:',
    options: [
      { id: 'opt-a', text: 'Iniciación / estado inicial -> Complicación / nudo -> Resolución / desenlace.' },
      { id: 'opt-b', text: 'Tesis -> Antítesis -> Síntesis.' },
      { id: 'opt-c', text: 'Pregunta -> Definición -> Ejemplo.' },
      { id: 'opt-d', text: 'Sujeto -> Verbo -> Predicado.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La secuencia narrativa organiza una serie de acciones cronológicamente: presenta un estado de cosas inicial (iniciación), sobreviene un quiebre o conflicto (complicación) y culmina con el restablecimiento de un nuevo equilibrio (resolución).',
    distractorExplanations: {
      'opt-b': 'Esa es la tríada de la dialéctica hegeliana o filosófica.',
      'opt-c': 'Es una secuencia de estrategias didácticas explicativas.',
      'opt-d': 'Es el orden canónico de la sintaxis oracional.'
    },
    hint: 'Pensá en cómo empieza una historia, qué problema surge en el medio y cómo se resuelve al final.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 13; Resumen P2, p. 4; Adam (1992)',
    tags: ['secuencia narrativa', 'complicacion', 'resolucion'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-E-10',
    topicId: 'MOD-E',
    learningObjective: 'Identificar la secuencia dialogal en textos sanitarios.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé el fragmento:\n— Doctor, siento una puntada en el pecho desde ayer.\n— ¿Se irradia hacia el brazo izquierdo o la mandíbula?\n— No, duele cuando respiro hondo únicamente.\n¿A qué secuencia textual corresponde este intercambio?',
    options: [
      { id: 'opt-a', text: 'Secuencia descriptiva pura sin personas involucradas.' },
      { id: 'opt-b', text: 'Secuencia dialogal, organizada en turnos de habla alternados entre interlocutores.' },
      { id: 'opt-c', text: 'Secuencia instruccional de armado de electrocardiógrafos.' },
      { id: 'opt-d', text: 'Secuencia monológica de artículo de divulgación.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La secuencia dialogal se estructura en la alternancia interactiva de turnos de habla (marcada tipográficamente por rayas de diálogo o nombres de emisores), característica de entrevistas clínicas, interrogatorios o consultas asistenciales.',
    distractorExplanations: {
      'opt-a': 'Hay dos personas interactuando en tiempo real con preguntas y respuestas.',
      'opt-c': 'No hay un manual de instrucciones de armado técnico.',
      'opt-d': 'El monólogo carece de alternancia entre emisor y receptor.'
    },
    hint: 'Fijate en las rayas de diálogo y en la alternancia de turnos entre el médico y el paciente.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 31; Resumen P1, p. 14',
    tags: ['secuencia dialogal', 'entrevista clinica', 'turnos de habla'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-E-11',
    topicId: 'MOD-E',
    learningObjective: 'Reconocer los rasgos de los géneros académicos según el manual de UNLaM.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el Manual de la UNLaM (pp. 33-38) se clasifican los géneros académicos según sus productores en: producidos por expertos (docentes e investigadores) y producidos por no expertos (alumnos). ¿Cuál de los siguientes es un género prototípico producido por los alumnos?',
    options: [
      { id: 'opt-a', text: 'El artículo científico de arbitraje internacional (paper).' },
      { id: 'opt-b', text: 'El programa analítico de la materia aprobado por el Consejo Superior.' },
      { id: 'opt-c', text: 'La respuesta de examen parcial y el apunte de clase.' },
      { id: 'opt-d', text: 'El manual universitario de cátedra.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El manual y los resúmenes diferencian claramente los géneros producidos por los estudiantes (parciales, apuntes, resúmenes, informes de lectura descriptivos) de aquellos producidos por los docentes y científicos expertos (papers, manuales, conferencias, programas curriculares).',
    distractorExplanations: {
      'opt-a': 'El paper es producido por investigadores y sometido a referato de pares expertos.',
      'opt-b': 'El programa es redactado por la cátedra y aprobado por autoridades académicas.',
      'opt-d': 'El manual universitario es escrito por docentes expertos para la formación de los alumnos.'
    },
    hint: 'Buscá los textos que escribe el alumno para estudiar o ser evaluado en la universidad.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 33-38; Resumen P1, p. 13; Resumen P2, p. 6',
    tags: ['generos academicos', 'generos del alumno', 'expertos y no expertos'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-12',
    topicId: 'MOD-E',
    learningObjective: 'Identificar la estructura de un artículo científico o paper.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'El artículo científico académico (paper) suele seguir la estructura canónica internacional IMRyD. ¿Qué significan estas siglas?',
    options: [
      { id: 'opt-a', text: 'Ideas, Memoria, Razonamiento y Dedicación.' },
      { id: 'opt-b', text: 'Información, Medicina, Resonancia y Diagnóstico.' },
      { id: 'opt-c', text: 'Ilustración, Margen, Renglones y Dibujos.' },
      { id: 'opt-d', text: 'Introducción, Métodos, Resultados y Discusión.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La estructura IMRyD (Introducción, Métodos, Resultados y Discusión) es el estándar formal de la comunidad científica para organizar la comunicación de hallazgos empíricos y experimentales.',
    distractorExplanations: {
      'opt-a': 'Son virtudes cognitivas abstractas, no secciones del género paper.',
      'opt-b': 'Mezcla conceptos médicos sin responder a la estructura del género discursivo.',
      'opt-c': 'Alude a aspectos de maquetación gráfica editorial elemental.'
    },
    hint: 'Es la estructura que va desde plantear el problema hasta discutir los hallazgos del experimento.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 33-35',
    tags: ['paper cientifico', 'imryd', 'estructura del genero'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-13',
    topicId: 'MOD-E',
    learningObjective: 'Reconocer el género Informe de Lectura Descriptivo (ILD) en UNLaM.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: '¿Por qué el Informe de Lectura Descriptivo (ILD) evaluado en la UNLaM se define formalmente como un género expositivo-explicativo y no como una columna de opinión?',
    options: [
      { id: 'opt-a', text: 'Porque el objetivo del ILD es dar cuenta de manera fidedigna, rigurosa y objetiva del texto fuente leído, reconstruyendo su tesis, tema, partes y estrategias sin deformarlo con juicios valorativos personales del alumno.' },
      { id: 'opt-b', text: 'Porque los alumnos de primer año tienen prohibido pensar por sí mismos.' },
      { id: 'opt-c', text: 'Porque el ILD debe rimar en todos sus párrafos.' },
      { id: 'opt-d', text: 'Porque se escribe exclusivamente en primera persona del singular ("yo opino que el autor se equivocó").' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El ILD es un género evaluativo que mide la comprensión lectora: el estudiante debe demostrar que entendió a fondo el texto fuente, describiendo sus núcleos explicativos y argumentativos con fidelidad conceptual, reservando la opinión fundada para otra consigna específica si el parcial la solicita por separado.',
    distractorExplanations: {
      'opt-b': 'La universidad fomenta el pensamiento crítico, pero exige primero comprender fielmente el texto leído antes de juzgarlo.',
      'opt-c': 'El ILD es un texto académico formal en prosa sobria, no una poesía rimada.',
      'opt-d': 'El ILD exige registro formal objetivo, generalmente en tercera persona o despersonalizado.'
    },
    hint: 'La palabra "descriptivo" indica que el alumno describe lo que el autor dice, sin mezclar su propia opinión.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, pp. 63-67; Resumen P1, p. 23',
    tags: ['informe de lectura descriptivo', 'ild', 'generos academicos'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-E-14',
    topicId: 'MOD-E',
    learningObjective: 'Identificar la secuencia instruccional en prospectos y protocolos sanitarios.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'El prospecto de un antibiótico indica: "Disolver el polvo en 50 ml de agua hervida fría. Agitar enérgicamente durante un minuto antes de administrar. Conservar en heladera entre 2 °C y 8 °C". ¿Qué secuencia textual predomina y qué rasgos lingüísticos la caracterizan?',
    options: [
      { id: 'opt-a', text: 'Secuencia argumentativa con subjetivemas afectivos.' },
      { id: 'opt-b', text: 'Secuencia directiva o instruccional, caracterizada por verbos en infinitivo o imperativo que guían paso a paso la conducta del receptor.' },
      { id: 'opt-c', text: 'Secuencia narrativa con inicio, nudo y desenlace trágico.' },
      { id: 'opt-d', text: 'Secuencia descriptiva de los sentimientos del farmacéutico.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La secuencia instruccional orienta una acción concreta: emplea sintaxis directiva (infinitivos como *disolver, agitar, conservar*), oraciones directas, orden cronológico y precisión modal para asegurar el cumplimiento del procedimiento.',
    distractorExplanations: {
      'opt-a': 'No busca convencer de una idea política ni expresa emociones personales.',
      'opt-c': 'No relata una historia de ficción.',
      'opt-d': 'No describe la interioridad psicológica de ningún personaje.'
    },
    hint: 'Fijate en cómo los verbos dan órdenes o instrucciones paso a paso: "Disolver...", "Agitar...", "Conservar...".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 32; Resumen P1, p. 14',
    tags: ['secuencia instruccional', 'prospecto', 'infinitivo'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-E-15',
    topicId: 'MOD-E',
    learningObjective: 'Reconocer cómo coexisten diferentes secuencias en un mismo género discursivo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Por qué se sostiene que los textos reales son "heterogéneos" respecto de las secuencias textuales?',
    options: [
      { id: 'opt-a', text: 'Porque los textos reales son escritos por varias personas que se pelean entre sí.' },
      { id: 'opt-b', text: 'Porque los libros cambian de idioma en cada página.' },
      { id: 'opt-c', text: 'Porque un texto casi nunca está compuesto por una sola secuencia pura, sino que combina varias (ej. explica una enfermedad, describe un síntoma, narra un caso clínico y argumenta a favor de una terapia), articuladas bajo una secuencia englobante.' },
      { id: 'opt-d', text: 'Porque la heterogeneidad significa que el texto no tiene coherencia ni autor.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Jean-Michel Adam subraya que los textos reales son multifacéticos o heterogéneos: un artículo médico puede incluir fragmentos narrativos, tablas descriptivas y tramos explicativos, pero todos colaboran hacia el objetivo dominante fijado por la secuencia englobante.',
    distractorExplanations: {
      'opt-a': 'La heterogeneidad secuencial es estructural y estilística, no producto de disputas personales.',
      'opt-b': 'El idioma del texto permanece constante.',
      'opt-d': 'La heterogeneidad secuencial no vulnera la coherencia global del texto.'
    },
    hint: 'Pensá en un texto como un plato de comida que tiene varios ingredientes combinados armónicamente.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 28; Ciapuscio (1994); Resumen P1, p. 12',
    tags: ['heterogeneidad secuencial', 'secuencias incrustadas', 'adam'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-16',
    topicId: 'MOD-E',
    learningObjective: 'Identificar la hipótesis o tesis en la secuencia argumentativa.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el análisis de un texto argumentativo de Seminario, la "tesis" o "hipótesis" del autor es:',
    options: [
      { id: 'opt-a', text: 'El título del artículo impreso en letras negritas.' },
      { id: 'opt-b', text: 'El último párrafo donde se indican los agradecimientos a la familia.' },
      { id: 'opt-c', text: 'La definición de diccionario de la primera palabra del texto.' },
      { id: 'opt-d', text: 'La postura, opinión fundamentada o punto de vista central que el argumentador busca sostener y defender frente a una problemática o controversia.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La tesis o hipótesis es el núcleo asertivo de la argumentación: la proposición central sobre la cual el autor toma partido y que vertebra todos los argumentos, concesiones y refutaciones desplegados.',
    distractorExplanations: {
      'opt-a': 'El título puede aludir al tema general, pero no necesariamente enuncia la tesis completa.',
      'opt-b': 'Los agradecimientos son un paratexto de cortesía institucional.',
      'opt-c': 'Una definición léxica neutra no es una toma de postura polémica propia de una tesis.'
    },
    hint: 'La tesis responde a: "¿Qué postura defiende el autor ante el debate planteado?".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 29; Resumen P1, p. 16; Resumen P2, p. 7',
    tags: ['tesis', 'hipotesis argumentativa', 'punto de vista'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-17',
    topicId: 'MOD-E',
    learningObjective: 'Distinguir un artículo de divulgación científica de un paper especializado.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Cuál es la diferencia discursiva primordial entre un artículo de investigación científica (paper) y un artículo de divulgación científica publicado en una revista de interés general?',
    options: [
      { id: 'opt-a', text: 'El paper se dirige a una comunidad de pares especialistas y usa registro altamente formal y técnico; la divulgación traduce y recrea ese saber para un público masivo no especialista mediante analogías, ejemplos y lenguaje accesible.' },
      { id: 'opt-b', text: 'El paper miente y la divulgación dice la verdad.' },
      { id: 'opt-c', text: 'La divulgación científica se escribe exclusivamente en verso poético.' },
      { id: 'opt-d', text: 'El paper solo puede ser leído por personas mayores de 80 años.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El género de divulgación científica realiza una transposición discursiva: reformula el conocimiento hermético producido por la ciencia experta para hacerlo inteligible a la ciudadanía, modificando el destinatario modelo, el estilo y las estrategias explicativas.',
    distractorExplanations: {
      'opt-b': 'Ambos géneros se basan en evidencia científica fidedigna; difiere su esfera de circulación y destinatario.',
      'opt-c': 'La divulgación es prosa explicativa y descriptiva accesible, no métrica lírica.',
      'opt-d': 'Los artículos de investigación están abiertos a toda la comunidad científica y estudiantil sin restricciones de edad.'
    },
    hint: 'Pensá en a quién le habla cada uno: ¿a otros científicos en un congreso o a la gente en el quiosco de diarios?',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 33-35; Resumen P1, p. 11',
    tags: ['divulgacion cientifica', 'paper', 'destinatario y adecuacion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-18',
    topicId: 'MOD-E',
    learningObjective: 'Reconocer el examen parcial como género evaluativo universitario.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el marco de los géneros académicos, el examen parcial escrito se caracteriza por:',
    options: [
      { id: 'opt-a', text: 'Ser un intercambio voluntario donde el alumno enseña temas nuevos que el docente desconoce por completo.' },
      { id: 'opt-b', text: 'Ser un género asimétrico de acreditación de saberes donde el estudiante debe demostrar su dominio conceptual y su competencia comunicativa respondiendo con precisión a consignas predeterminadas en un tiempo limitado.' },
      { id: 'opt-c', text: 'Ser una carta personal informal entre amigos que se reúnen a tomar café.' },
      { id: 'opt-d', text: 'Un texto que solo contiene paratextos sin cuerpo principal.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El parcial es un género evaluativo prototípico: en una situación asimétrica institucional, el alumno produce textos (explicativos, argumentativos o descriptivos) con el propósito pragmático de demostrar ante el docente que domina los contenidos del programa.',
    distractorExplanations: {
      'opt-a': 'El docente ya conoce los contenidos; evalúa si el estudiante los ha incorporado y sabe expresarlos.',
      'opt-c': 'El parcial se inscribe en el ámbito formal institucional universitario, no en la confidencia epistolar informal.',
      'opt-d': 'El parcial requiere desarrollo verbal exhaustivo en las respuestas formuladas por el alumno.'
    },
    hint: 'El parcial sirve para certificar si el alumno entendió la materia y sabe responder a las consignas.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 37; Resumen P1, p. 23; Resumen P2, p. 14',
    tags: ['examen parcial', 'generos evaluativos', 'acreditacion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-19',
    topicId: 'MOD-E',
    learningObjective: 'Identificar la secuencia explicativa causal en biomedicina.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé el siguiente párrafo:\n"Cuando una bacteria entra en contacto reiterado con dosis subletales de un antibiótico, las cepas portadoras de mutaciones resistentes sobreviven. Debido a que estas bacterias proliferan sin competencia biológica, la resistencia se disemina en la población hospitalaria".\n¿Qué tipo de explicación se despliega de forma dominante?',
    options: [
      { id: 'opt-a', text: 'Metáfora mitológica fantástica.' },
      { id: 'opt-b', text: 'Secuencia dialogal de comedia teatral.' },
      { id: 'opt-c', text: 'Explicación causal (causa-efecto), estructurada a partir de factores que desencadenan un resultado biológico verificable.' },
      { id: 'opt-d', text: 'Instrucción de armado de microscopios ópticos.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El fragmento conecta causas (contacto con dosis subletales) con sus consecuencias biológicas (supervivencia selectiva y diseminación), articuladas por nexos como "Debido a que", prototípicos de la explicación causal en ciencias.',
    distractorExplanations: {
      'opt-a': 'Describe un mecanismo científico real de selección natural, no una leyenda mitológica.',
      'opt-b': 'No hay diálogo cómico ni personajes de ficción.',
      'opt-d': 'No ofrece instrucciones técnicas de montaje de instrumental óptico.'
    },
    hint: 'Fijate en cómo explica el mecanismo: qué causa produce qué consecuencia biológica.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 2, p. 50; Resumen P1, p. 19',
    tags: ['explicacion causal', 'causa-efecto', 'resistencia bacteriana'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-E-20',
    topicId: 'MOD-E',
    learningObjective: 'Evaluar la adecuación del género al propósito comunicativo.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'El director de un hospital desea sensibilizar a los vecinos de un barrio vulnerable sobre la importancia de vacunar a los recién nacidos. Si para lograr este propósito decide publicar un artículo científico de 25 páginas con fórmulas químicas en una revista médica de Inglaterra, ¿por qué su decisión discursiva es gravemente inadecuada?',
    options: [
      { id: 'opt-a', text: 'Porque las revistas inglesas prohíben hablar sobre vacunas de niños.' },
      { id: 'opt-b', text: 'Porque los hospitales no tienen directores en Argentina.' },
      { id: 'opt-c', text: 'Porque los recién nacidos saben leer papers en inglés perfectamente.' },
      { id: 'opt-d', text: 'Porque el género elegido (paper en inglés) no es accesible a la esfera comunitaria barrial; debió optar por un género divulgativo y preventivo (como un folleto ilustrado o una charla comunitaria) con registro accesible y en el idioma local.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La eficacia discursiva reside en elegir el género discursivo acorde con los interlocutores reales y la meta comunitaria. Un paper en lengua extranjera es idóneo para la comunidad científica global, pero completamente inútil para la sensibilización barrial.',
    distractorExplanations: {
      'opt-a': 'Las revistas biomédicas internacionales publican frecuentemente ensayos pediátricos.',
      'opt-b': 'Los hospitales cuentan con dirección médica institucional formal.',
      'opt-c': 'Es una opción ridícula e imposible en el desarrollo biológico humano.'
    },
    hint: 'Pensá en quiénes son los destinatarios (los vecinos) y qué formato de texto necesitan para enterarse.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 1, pp. 24-27; Resumen P1, p. 10',
    tags: ['adecuacion de genero', 'comunidad receptora', 'comunicacion comunitaria'],
    estimatedSeconds: 50
  }
];
