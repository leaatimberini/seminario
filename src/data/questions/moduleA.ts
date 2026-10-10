import { Question } from '../../types';

export const MODULE_A_QUESTIONS: Question[] = [
  {
    id: 'Q-MOD-A-01',
    topicId: 'MOD-A',
    learningObjective: 'Reconocer la función de la lectura de paratextos en la formulación de hipótesis previas.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'Antes de leer un artículo sobre prevención de la tuberculosis en un hospital público, Mía observa el título, la filiación de los autores y el año de publicación en una revista médica. Según la cátedra, ¿cuál es el objetivo principal de esta etapa de prelectura?',
    options: [
      { id: 'opt-a', text: 'Activar conocimientos previos y formular hipótesis de lectura que orienten la comprensión.' },
      { id: 'opt-b', text: 'Memorizar los nombres de los autores para citarlos en el examen final.' },
      { id: 'opt-c', text: 'Subrayar las oraciones principales antes de realizar la lectura completa.' },
      { id: 'opt-d', text: 'Redactar directamente un resumen sin necesidad de leer el cuerpo del texto.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La primera etapa del proceso de lectura es la lectura de paratextos, cuyo propósito pedagógico es contextualizar el texto, activar los esquemas de conocimiento previo y permitir al lector plantear hipótesis iniciales sobre el tema, enfoque y género.',
    distractorExplanations: {
      'opt-b': 'Memorizar datos aislados no constituye el propósito formativo de la lectura paratextual.',
      'opt-c': 'El subrayado corresponde a la tercera etapa (lectura analítica), nunca a la prelectura.',
      'opt-d': 'El resumen pertenece a la etapa de poslectura, una vez comprendido el texto en su totalidad.'
    },
    hint: 'Pensá en qué le permite al lector anticipar el contenido a partir de los elementos que rodean al texto.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM 2022, Módulo 2, p. 42; Resumen P1, p. 1',
    tags: ['paratexto', 'proceso de lectura', 'hipotesis'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-A-02',
    topicId: 'MOD-A',
    learningObjective: 'Distinguir la función de la lectura global frente a la lectura analítica.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuál es la conducta recomendada durante la etapa de lectura global de un texto académico?',
    options: [
      { id: 'opt-a', text: 'Detenerse en cada palabra desconocida y buscarla de inmediato en el diccionario médico.' },
      { id: 'opt-b', text: 'Realizar una lectura completa y continuada para construir el sentido general y captar el tema central.' },
      { id: 'opt-c', text: 'Subrayar con resaltador amarillo todas las definiciones formales.' },
      { id: 'opt-d', text: 'Escribir notas al pie criticando los argumentos del autor antes de finalizar el texto.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'En la lectura global, el lector realiza una lectura integral sin interrupciones para obtener una visión panorámica del texto y captar su tema central y estructura general.',
    distractorExplanations: {
      'opt-a': 'Detenerse compulsivamente fragmenta la lectura e impide captar la coherencia global del texto.',
      'opt-c': 'El subrayado se reserva para la lectura analítica (tercera etapa).',
      'opt-d': 'La evaluación crítica exhaustiva requiere haber comprendido primero la totalidad del texto.'
    },
    hint: 'La palabra "global" alude a la totalidad del sentido, no al análisis fragmentario.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM 2022, Módulo 2, p. 42; Resumen P1, p. 2',
    tags: ['lectura global', 'tema central', 'etapas'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-A-03',
    topicId: 'MOD-A',
    learningObjective: 'Identificar las operaciones cognitivas propias de la lectura analítica.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Durante la tercera etapa del proceso de lectura (lectura analítica), el estudiante debe:',
    options: [
      { id: 'opt-a', text: 'Omitir los párrafos que contengan citas de autoridad para ganar velocidad.' },
      { id: 'opt-b', text: 'Diseñar la carátula y el índice de un futuro informe de lectura.' },
      { id: 'opt-c', text: 'Leer párrafo por párrafo, identificar subtemas, realizar subrayado jerárquico y notas marginales.' },
      { id: 'opt-d', text: 'Corregir la puntuación y las faltas de ortografía del autor del texto.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La lectura analítica descompone el texto párrafo a párrafo: examina cómo progresa la información, destaca núcleos temáticos mediante el subrayado y anota al margen síntesis o preguntas guía.',
    distractorExplanations: {
      'opt-a': 'Las citas de autoridad son claves para comprender la polifonía y argumentación del texto.',
      'opt-b': 'El diseño de un informe es una tarea de producción posterior (poslectura o escritura).',
      'opt-d': 'El lector universitario analiza el sentido del texto, no actúa como corrector de estilo del autor.'
    },
    hint: 'Analizar significa descomponer un todo en sus partes constitutivas.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 2; Manual UNLaM Módulo 2, p. 43',
    tags: ['lectura analitica', 'notas marginales', 'subrayado'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-A-04',
    topicId: 'MOD-A',
    learningObjective: 'Reconocer las actividades pedagógicas de la fase de poslectura.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuál de las siguientes tareas corresponde genuinamente a la etapa de poslectura o actividad posterior a la lectura?',
    options: [
      { id: 'opt-a', text: 'Mirar las fotos del artículo antes de comenzar a leer el primer párrafo.' },
      { id: 'opt-b', text: 'Predecir el tema del texto únicamente a partir del título.' },
      { id: 'opt-c', text: 'Hacer una lectura veloz diagonal sin fijar conceptos clave.' },
      { id: 'opt-d', text: 'Reconstruir el contenido mediante un resumen, cuadro sinóptico, mapa conceptual o cuestionario.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La poslectura es la etapa de consolidación y procesamiento activo: el lector reorganiza lo aprendido mediante síntesis, cuadros comparativos, esquemas o respuestas a consignas.',
    distractorExplanations: {
      'opt-a': 'Mirar imágenes y fotos previamente es prelectura de paratextos icónicos.',
      'opt-b': 'Predecir el tema a partir del título es formulación de hipótesis en la etapa inicial.',
      'opt-c': 'Una lectura diagonal apresurada no constituye una técnica de sistematización poslectura.'
    },
    hint: 'Pensá en qué herramientas te permiten sintetizar lo que acabás de estudiar.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 2; Manual UNLaM 2022, p. 44',
    tags: ['poslectura', 'resumen', 'cuadro sinoptico'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-A-05',
    topicId: 'MOD-A',
    learningObjective: 'Comprender el carácter dinámico de las hipótesis de lectura.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Al leer el título "El mito del colesterol bueno", Lucas formula la hipótesis de que el autor demostrará que el colesterol HDL no protege la salud cardiovascular. A medida que avanza en el texto, descubre que el autor en realidad defiende que el HDL sí protege, pero cuestiona los fármacos que intentan elevarlo artificialmente. ¿Qué operación cognitiva debe realizar Lucas?',
    options: [
      { id: 'opt-a', text: 'Reajustar y reformular su hipótesis inicial contrastándola con las evidencias del texto.' },
      { id: 'opt-b', text: 'Abandonar la lectura porque el texto contiene una contradicción insalvable.' },
      { id: 'opt-c', text: 'Forzar la interpretación del texto para que coincida con lo que él pensó al leer el título.' },
      { id: 'opt-d', text: 'Tachar el título del autor y reemplazarlo por uno más explícito.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Las hipótesis de lectura son conjeturas provisorias: a lo largo de la lectura global y analítica el lector competente las corrobora, rectifica o refuta en función de lo efectivamente enunciado por el autor.',
    distractorExplanations: {
      'opt-b': 'Que el texto refute una expectativa del lector no implica que el texto esté mal escrito.',
      'opt-c': 'Forzar la interpretación es una falla grave de comprensión lectora (sesgo de confirmación).',
      'opt-d': 'El lector no altera el texto fuente; reconstruye reflexivamente el sentido construido por el autor.'
    },
    hint: 'Las hipótesis no son verdades cerradas: se confirman o se refutan.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM 2022, Módulo 2, p. 43; Arnoux (1996)',
    tags: ['hipotesis', 'refutacion', 'comprension'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-A-06',
    topicId: 'MOD-A',
    learningObjective: 'Diferenciar información explícita de información implícita.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un folleto universitario afirma: "Ante el rebrote invernal, el vacunatorio reabrió sus puertas en horario extendido". ¿Qué información implícita (presupuesto) se desprende necesariamente de este enunciado?',
    options: [
      { id: 'opt-a', text: 'Que la vacuna aplicada es gratuita y obligatoria por ley nacional.' },
      { id: 'opt-b', text: 'Que el vacunatorio estuvo cerrado o funcionaba en horario reducido antes de esta medida.' },
      { id: 'opt-c', text: 'Que ningún estudiante asiste a clases durante el invierno.' },
      { id: 'opt-d', text: 'Que el virus invernal fue erradicado por completo en La Matanza.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El prefijo "re-" en "reabrió" y la precisión "horario extendido" activan el presupuesto implícito de que previamente las puertas no estaban abiertas o atendían en una franja menor. La información implícita se recupera por deducción lógica a partir de indicios del texto.',
    distractorExplanations: {
      'opt-a': 'El texto no menciona la gratuidad ni el marco legal de la vacuna.',
      'opt-c': 'Es una generalización infundada que no guarda relación con el enunciado.',
      'opt-d': 'Al contrario, el enunciado habla de un "rebrote", lo que niega la erradicación.'
    },
    hint: 'Fijate en lo que presupone el verbo "reabrir".',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 2, p. 46; Criterios Pedagógicos UNLaM',
    tags: ['informacion implicita', 'presupuesto', 'lectura critica'],
    estimatedSeconds: 55
  },
  {
    id: 'Q-MOD-A-07',
    topicId: 'MOD-A',
    learningObjective: 'Identificar el orden correcto de las etapas del proceso de lectura según la cátedra de UNLaM.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuál es la secuencia cronológica y pedagógica correcta de las 4 etapas del proceso de lectura descritas en el material de Seminario?',
    options: [
      { id: 'opt-a', text: '1. Lectura analítica -> 2. Lectura global -> 3. Resumen -> 4. Paratextos' },
      { id: 'opt-b', text: '1. Resumen -> 2. Preguntas de parcial -> 3. Lectura rápida -> 4. Paratextos' },
      { id: 'opt-c', text: '1. Lectura de paratextos -> 2. Lectura global -> 3. Lectura analítica -> 4. Actividad posterior (poslectura)' },
      { id: 'opt-d', text: '1. Lectura global -> 2. Subrayado total -> 3. Corrección ortográfica -> 4. Memorización' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Tanto el manual oficial histórico de la UNLaM como el resumen de cátedra establecen las cuatro etapas: 1. Lectura de paratextos (hipótesis), 2. Lectura global (sentido general), 3. Lectura analítica (párrafo a párrafo, subrayado, notas) y 4. Poslectura (resumen, esquemas, cuestionarios).',
    distractorExplanations: {
      'opt-a': 'No se puede analizar en detalle antes de tener la visión de conjunto (lectura global).',
      'opt-b': 'El resumen no puede anteceder a la lectura comprensiva del texto.',
      'opt-d': 'El subrayado total es una mala práctica y la memorización pasiva se opone al enfoque de la materia.'
    },
    hint: 'Se va de lo exterior y general hacia el análisis minucioso y la síntesis final.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, pp. 1-2; Manual UNLaM Módulo 2, p. 42',
    tags: ['etapas de lectura', 'secuencia', 'metodologia'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-A-08',
    topicId: 'MOD-A',
    learningObjective: 'Identificar la técnica adecuada de notas marginales en la lectura analítica.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Al realizar notas marginales durante la lectura analítica de un texto de divulgación científica, lo más adecuado es:',
    options: [
      { id: 'opt-a', text: 'Copiar palabra por palabra la primera oración de cada párrafo.' },
      { id: 'opt-b', text: 'Dibujar signos de admiración en todos los renglones para recordar que el texto es importante.' },
      { id: 'opt-c', text: 'Escribir la biografía completa del autor al costado del margen izquierdo.' },
      { id: 'opt-d', text: 'Sintetizar con palabras clave o frases breves el subtema o la función discursiva de cada párrafo (ej. "definición de endemia", "ejemplo de transmisión").' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Las notas marginales eficaces sintetizan el núcleo conceptual del párrafo o identifican su estrategia discursiva, funcionando como una guía rápida para la posterior reconstrucción del texto.',
    distractorExplanations: {
      'opt-a': 'Copiar literalmente es redundante y no evidencia procesamiento cognitivo.',
      'opt-b': 'Llenar de signos sin categorización no ayuda a organizar el contenido ni a jerarquizarlo.',
      'opt-c': 'La biografía del autor no es una nota marginal sobre el contenido del párrafo.'
    },
    hint: 'La nota marginal debe responder a la pregunta: "¿De qué trata este párrafo o qué hace aquí el autor?".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 44',
    tags: ['notas marginales', 'lectura analitica', 'estrategias'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-A-09',
    topicId: 'MOD-A',
    learningObjective: 'Detectar errores habituales en la técnica de subrayado.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuál de las siguientes acciones representa el error más común y desaconsejado en el subrayado según la cátedra?',
    options: [
      { id: 'opt-a', text: 'Subrayar casi todo el párrafo en la primera lectura por temor a que algo importante quede afuera.' },
      { id: 'opt-b', text: 'Subrayar únicamente ideas principales y palabras clave luego de entender el párrafo.' },
      { id: 'opt-c', text: 'Subrayar en una segunda lectura analítica y no en la primera lectura global.' },
      { id: 'opt-d', text: 'Usar doble línea o corchetes para diferenciar conceptos nucleares de ejemplos.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El "subrayado continuo" en la primera lectura anula la función de la técnica: si todo está marcado, nada está jerarquizado. El subrayado debe ser selectivo y realizarse en la lectura analítica.',
    distractorExplanations: {
      'opt-b': 'Subrayar ideas clave después de entender el párrafo es precisamente la práctica recomendada.',
      'opt-c': 'Esperar a la lectura analítica es correcto; evita marcar datos accesorios.',
      'opt-d': 'Emplear códigos gráficos diferenciados ayuda a distinguir ideas de ejemplos.'
    },
    hint: 'Cuando todo está resaltado, el resaltador pierde todo su poder de jerarquización.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 2; Manual UNLaM Módulo 2, p. 43',
    tags: ['subrayado', 'error frecuente', 'lectura analitica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-A-10',
    topicId: 'MOD-A',
    learningObjective: 'Reconocer el rol de los paratextos en la identificación del género discursivo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un texto presenta: título con términos especializados, resumen (abstract) en español e inglés, palabras clave, filiación institucional de los autores con correo electrónico, y una sección final titulada "Referencias bibliográficas" en formato APA. A partir de estos paratextos, ¿qué hipótesis de género es la más sólida?',
    options: [
      { id: 'opt-a', text: 'Es un folleto publicitario destinado a pacientes de una sala de espera.' },
      { id: 'opt-b', text: 'Es un artículo científico o paper académico publicado en una revista especializada.' },
      { id: 'opt-c', text: 'Es una crónica policial de un periódico de tirada masiva.' },
      { id: 'opt-d', text: 'Es un apunte informal tomado por un estudiante durante una clase teórica.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Los paratextos observados (abstract bilingüe, keywords, filiación académica, bibliografía formal estandarizada) son rasgos externos prototípicos del artículo científico o paper académico.',
    distractorExplanations: {
      'opt-a': 'Un folleto publicitario usa lenguaje accesible, imágenes llamativas y llamadas de acción simples, no abstracts bilingües.',
      'opt-c': 'Una crónica policial tiene fecha periodística, volanta, copete y fotos de sucesos, no citas APA.',
      'opt-d': 'El apunte de clase es un texto manuscrito o digital rápido con abreviaturas personales.'
    },
    hint: 'El resumen en dos idiomas y la lista de referencias al final son marcas inconfundibles de las publicaciones de investigación.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM 2022, Módulo 1, pp. 33-35; Módulo 2, p. 42',
    tags: ['genero academico', 'articulo cientifico', 'paratextos'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-A-11',
    topicId: 'MOD-A',
    learningObjective: 'Comprender cómo manejar vocabulario especializado durante la lectura.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En su primera lectura de un informe sobre epidemiología, Mía se encuentra con el término "zoonosis". Según las pautas de lectura académica, ¿qué estrategia es la más conveniente?',
    options: [
      { id: 'opt-a', text: 'Suspender definitivamente la lectura porque no se puede entender el texto si se ignora una palabra.' },
      { id: 'opt-b', text: 'Saltear todo el párrafo y asumir que los términos médicos no entran en el examen de Seminario.' },
      { id: 'opt-c', text: 'Intentar inferir el significado por el contexto inmediato o cotexto (ej. si menciona transmisión animal a humano); si la duda persiste e impide entender el tema central, consultar un glosario o diccionario especializado.' },
      { id: 'opt-d', text: 'Inventar una definición cualquiera para terminar de leer más rápido.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El lector competente utiliza primero el cotexto para inferir el significado de voces técnicas. Si la palabra es un concepto nuclear que condiciona la comprensión global, se recurre a fuentes lexicográficas o glosarios.',
    distractorExplanations: {
      'opt-a': 'Detenerse por completo ante cada vocablo impide consolidar la comprensión global.',
      'opt-b': 'En Seminario se analizan textos de salud; entender la función del término en el texto es parte del análisis discursivo.',
      'opt-d': 'Adivinar sin comprobación induce a errores graves de interpretación de la tesis del autor.'
    },
    hint: 'Mirá cómo el propio texto suele dar pistas antes de salir a buscarlo afuera.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 2; Manual UNLaM Módulo 2, p. 44',
    tags: ['estrategias de lectura', 'cotexto', 'vocabulario'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-A-12',
    topicId: 'MOD-A',
    learningObjective: 'Evaluar el propósito de la lectura crítica en el ámbito universitario.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: '¿Por qué la cátedra de Seminario de la UNLaM enfatiza la "lectura crítica" por sobre la mera decodificación literal?',
    options: [
      { id: 'opt-a', text: 'Porque el objetivo de la universidad es que los alumnos rechacen todos los textos escritos por autores extranjeros.' },
      { id: 'opt-b', text: 'Porque la lectura crítica permite memorizar más rápido el orden de los capítulos.' },
      { id: 'opt-c', text: 'Porque leer críticamente consiste en marcar con tinta roja los párrafos con los que el estudiante no coincide moralmente.' },
      { id: 'opt-d', text: 'Porque el estudiante universitario debe detectar la perspectiva ideológica, los intereses en juego, las voces convocadas y los argumentos del autor, sin asumir los textos como verdades neutras.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La lectura crítica (vinculada al Análisis Crítico del Discurso de Teun van Dijk trabajado en la cátedra) implica interrogar la intencionalidad, el contexto sociopolítico de producción, la polifonía y las representaciones ideológicas vehiculizadas por el discurso.',
    distractorExplanations: {
      'opt-a': 'La nacionalidad de los autores no guarda relación con el rigor del análisis discursivo.',
      'opt-b': 'La lectura crítica no es una técnica nemotécnica de memorización pasiva.',
      'opt-c': 'La crítica académica no es desaprobación moral impulsiva, sino análisis sistemático de argumentos y evidencias.'
    },
    hint: 'Pensá en qué significa cuestionar la supuesta "neutralidad" de los discursos sociales.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM 2022, Módulo 2, pp. 46-48 (ACD de van Dijk)',
    tags: ['lectura critica', 'analisis del discurso', 'ideologia'],
    estimatedSeconds: 55
  },
  {
    id: 'Q-MOD-A-13',
    topicId: 'MOD-A',
    learningObjective: 'Identificar paratextos de autoría y legitimidad académica.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Al pie de página de un texto sobre ensayos clínicos aparece la siguiente nota: "Financiado parcialmente por Laboratorios BioFarma S.A.". ¿Qué relevancia tiene este paratexto para una lectura crítica?',
    options: [
      { id: 'opt-a', text: 'Es un indicio fundamental sobre el contexto de producción y los posibles conflictos de interés que orientan la argumentación del emisor.' },
      { id: 'opt-b', text: 'Ninguna; las notas al pie son paratextos prescindibles que no deben leerse.' },
      { id: 'opt-c', text: 'Invalida automáticamente todos los datos estadísticos sin necesidad de leerlos.' },
      { id: 'opt-d', text: 'Indica que el texto fue escrito por los pacientes del ensayo clínico.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Las notas de financiamiento o filiación institucional son paratextos verbales decisivos: aportan información sobre el enunciador y el contexto situacional, permitiendo calibrar la objetividad o posibles sesgos del discurso.',
    distractorExplanations: {
      'opt-b': 'Las notas al pie a menudo contienen información contextual indispensable.',
      'opt-c': 'Una lectura crítica evalúa la evidencia con rigor metodológico, no descarta en bloque por prejuicio previo.',
      'opt-d': 'El financiador no es el paciente; es el actor corporativo que solventa la investigación.'
    },
    hint: 'Fijate en quién financia y qué intereses podrían estar presentes en el texto.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 43; Resumen P1, p. 8',
    tags: ['paratexto', 'lectura critica', 'enunciador'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-A-14',
    topicId: 'MOD-A',
    learningObjective: 'Reconocer el valor del esquema o mapa conceptual como herramienta de poslectura.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Por qué un mapa conceptual es una herramienta de poslectura más potente que la relectura pasiva y reiterada del texto?',
    options: [
      { id: 'opt-a', text: 'Porque reemplaza la necesidad de hacer el examen final en la universidad.' },
      { id: 'opt-b', text: 'Porque obliga al estudiante a jerarquizar conceptos, identificar relaciones lógicas y sintetizar activamente la información.' },
      { id: 'opt-c', text: 'Porque permite incluir dibujos y emoticones sin necesidad de usar palabras precisas.' },
      { id: 'opt-d', text: 'Porque garantiza que el estudiante apruebe el curso de ingreso de manera automática.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Elaborar un esquema conceptual exige recuperación activa (*active recall*) y procesamiento profundo: el alumno debe decidir qué ideas son supraordinadas, cuáles son dependientes y qué conectores lógicos las unen.',
    distractorExplanations: {
      'opt-a': 'Ninguna herramienta exime de rendir las instancias formales de evaluación.',
      'opt-c': 'Un mapa conceptual universitario exige precisión terminológica en sus nodos conceptuales.',
      'opt-d': 'Ninguna técnica promete aprobación mágica; facilitan el estudio genuino.'
    },
    hint: 'Pensá en qué esfuerzo mental hacés cuando tenés que organizar ideas en flechas y cuadros.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 2; Criterios Pedagógicos UNLaM',
    tags: ['poslectura', 'mapa conceptual', 'jerarquizacion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-A-15',
    topicId: 'MOD-A',
    learningObjective: 'Distinguir entre tema central y subtemas en un texto extenso.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un texto de 6 páginas, el párrafo inicial plantea la crisis de cobertura en la atención primaria de la salud en el conurbano bonaerense. Los párrafos siguientes analizan: 1) infraestructura hospitalaria, 2) retención de profesionales y 3) suministro de medicamentos. ¿Cuál es la relación estructural entre estos elementos?',
    options: [
      { id: 'opt-a', text: 'La infraestructura hospitalaria es el tema central y la atención primaria es un subtema aislado.' },
      { id: 'opt-b', text: 'El texto carece de coherencia porque aborda cuatro materias de carreras distintas.' },
      { id: 'opt-c', text: 'La atención primaria es el tema central (coherencia global), y la infraestructura, retención médica y medicamentos son subtemas que aseguran la coherencia local.' },
      { id: 'opt-d', text: 'Los tres puntos de desarrollo no guardan ninguna vinculación temática entre sí.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El tema central engloba a todo el texto garantizando su coherencia global. Los aspectos específicos abordados en los párrafos son subtemas articulados que aportan coherencia local a cada segmento.',
    distractorExplanations: {
      'opt-a': 'La infraestructura es solo una de las tres dimensiones subordinadas a la problemática mayor.',
      'opt-b': 'Al contrario: los subtemas son derivaciones lógicas del tema central planteado.',
      'opt-d': 'Todos los puntos integran el campo problemático del sistema de atención primaria.'
    },
    hint: 'Diferenciá el paraguas general (tema) de las partes que lo componen (subtemas).',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, pp. 3-4; Manual UNLaM Módulo 3, p. 68',
    tags: ['coherencia global', 'tema central', 'subtemas'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-A-16',
    topicId: 'MOD-A',
    learningObjective: 'Analizar la función de los epígrafes y fuentes al pie de gráficos e infografías.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un artículo sobre dengue, debajo de un gráfico de barras aparece el texto: "Fuente: Boletín Epidemiológico Nacional, Ministerio de Salud de la Nación, SE 12, 2024". ¿Qué función cumple este paratexto icónico-verbal?',
    options: [
      { id: 'opt-a', text: 'Es un elemento decorativo para que el gráfico no termine de forma abrupta.' },
      { id: 'opt-b', text: 'Advierte al lector que no debe mirar las barras del gráfico si no es médico graduado.' },
      { id: 'opt-c', text: 'Indica el nombre de la imprenta que imprimió el papel del boletín.' },
      { id: 'opt-d', text: 'Atribuye los datos a una fuente institucional oficial verificable, otorgando respaldo empírico a las afirmaciones del artículo.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Los paratextos de fuente y epígrafe explicitan el origen empírico de la información estadística, permitiendo al lector evaluar su validez, rigor y vigencia temporal.',
    distractorExplanations: {
      'opt-a': 'Los paratextos en textos académicos nunca son simple decoración.',
      'opt-b': 'El boletín epidemiológico es de acceso público y está diseñado para ser consultado y comprendido.',
      'opt-c': 'El Ministerio de Salud es el organismo emisor y productor de los datos, no una empresa de artes gráficas.'
    },
    hint: 'Fijate qué credibilidad le da al dato saber de qué organismo proviene.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 2, p. 43; Resumen P1, p. 7',
    tags: ['paratextos iconicos', 'fuente', 'graficos'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-A-17',
    topicId: 'MOD-A',
    learningObjective: 'Reconocer cómo se comprueba una hipótesis de lectura.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Durante la poslectura, un estudiante revisa la hipótesis que formuló antes de empezar a leer. ¿Cuál de los siguientes pasos demuestra una adecuada actitud académica?',
    options: [
      { id: 'opt-a', text: 'Explicar con citas o referencias precisas del texto en qué aspectos su hipótesis se confirmó y en cuáles debió ser modificada.' },
      { id: 'opt-b', text: 'Borrar su hipótesis inicial si no acertó, para que el docente crea que nunca se equivocó.' },
      { id: 'opt-c', text: 'Sostener que el texto está mal redactado porque no coincidió con lo que él imaginó al leer el título.' },
      { id: 'opt-d', text: 'No realizar ninguna comparación porque las hipótesis previas no tienen relación con el texto leído.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El contraste de hipótesis es un ejercicio metacognitivo: el estudiante fundamenta con evidencias del texto la confirmación, ajuste o refutación de sus anticipaciones de lectura.',
    distractorExplanations: {
      'opt-b': 'Equivocarse en la anticipación inicial no es un error punible; es parte natural del proceso hermenéutico.',
      'opt-c': 'Descalificar al autor por no ajustarse a prejuicios del lector denota inmadurez lectora.',
      'opt-d': 'El contraste es el objetivo mismo de haber formulado la hipótesis en la primera etapa.'
    },
    hint: 'La fundamentación basada en evidencias del texto es la clave de toda respuesta académica.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 43; Resumen P1, p. 1',
    tags: ['hipotesis', 'verificacion', 'metacognicion'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-A-18',
    topicId: 'MOD-A',
    learningObjective: 'Integrar las etapas del proceso de lectura en una situación práctica de estudio.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'Mía tiene que preparar para la próxima clase el capítulo "Salud comunitaria y determinantes sociales" (15 páginas). Dispone de 45 minutos. ¿Cuál es el plan de trabajo más eficiente y pedagógicamente fundado?',
    options: [
      { id: 'opt-a', text: 'Empezar a escribir el resumen directamente en la página 1 sin leer el resto del texto.' },
      { id: 'opt-b', text: 'Dedicar 5 minutos a paratextos e hipótesis, 15 minutos a lectura global continuada, 20 minutos a lectura analítica por párrafos con subrayado y 5 minutos a un esquema de síntesis.' },
      { id: 'opt-c', text: 'Leer 40 minutos en voz alta sin detenerse y 5 minutos buscando palabras difíciles en internet.' },
      { id: 'opt-d', text: 'Subrayar con 5 colores distintos cada renglón durante los 45 minutos sin tomar notas.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Esta distribución respeta la secuencia integral de las 4 etapas del proceso de lectura (paratextos -> lectura global -> lectura analítica -> poslectura), asegurando comprensión panorámica, descomposición analítica y consolidación sintética.',
    distractorExplanations: {
      'opt-a': 'Resumir a ciegas produce textos incoherentes y fragmentarios que no captan la idea global.',
      'opt-c': 'La lectura en voz alta continua no garantiza el análisis de ideas principales ni la síntesis poslectura.',
      'opt-d': 'El uso compulsivo de colores sin estrategia de jerarquización satura la atención sin generar aprendizaje.'
    },
    hint: 'Fijate cuál opción equilibra armónicamente las 4 etapas del proceso descritas en el manual.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 41-45; Resumen P1, pp. 1-2',
    tags: ['plan de lectura', 'gestion del tiempo', 'proceso integral'],
    estimatedSeconds: 55
  }
];
