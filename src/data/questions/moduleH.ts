import { Question } from '../../types';

export const MODULE_H_QUESTIONS: Question[] = [
  {
    id: 'Q-MOD-H-01',
    topicId: 'MOD-H',
    learningObjective: 'Reconocer las tres fases recursivas del proceso de escritura según la teoría cognitiva.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'Según el modelo cognitivo de escritura adoptado por la cátedra de Seminario (Flower y Hayes, Cassany), el proceso de composición escrita consta de tres momentos recursivos e interactivos:',
    options: [
      { id: 'opt-a', text: 'Planificación -> Puesta en texto (redacción) -> Revisión.' },
      { id: 'opt-b', text: 'Impresión -> Encuadernación -> Venta.' },
      { id: 'opt-c', text: 'Dictado -> Copia mecánica -> Memorización.' },
      { id: 'opt-d', text: 'Subrayado -> Borrado -> Descarte.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El proceso de escritura académica no es una inspiración lineal instantánea: implica 1) planificar (generar ideas, definir destinatario y propósito, armar un esquema), 2) poner en texto (redactar párrafos con coherencia y cohesión) y 3) revisar (leer críticamente, corregir y ajustar). Estas etapas son recursivas (se vuelve a planificar mientras se redacta o revisa).',
    distractorExplanations: {
      'opt-b': 'Son fases industriales de la imprenta editorial, no procesos cognitivos del escritor.',
      'opt-c': 'El dictado y la copia mecánica son prácticas pasivas opuestas a la producción reflexiva universitaria.',
      'opt-d': 'No representan las etapas de composición de un texto propio.'
    },
    hint: 'Pensá en qué hacés antes de escribir (plan), mientras redactás (puesta en texto) y al terminar (revisar).',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, pp. 59-60; Cassany (1995); Resumen P1, p. 20; Resumen P2, p. 10',
    tags: ['proceso de escritura', 'planificacion', 'puesta en texto', 'revision'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-H-02',
    topicId: 'MOD-H',
    learningObjective: 'Comprender el concepto de autonomía semántica en la respuesta de parcial.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el Seminario de la UNLaM se exige que toda respuesta de parcial sea "autónoma". ¿Qué significa este requisito indispensable?',
    options: [
      { id: 'opt-a', text: 'Que el estudiante puede escribir lo que quiera sin respetar el programa de la materia.' },
      { id: 'opt-b', text: 'Que la respuesta debe incorporar los términos de la consigna en su formulación inicial, de modo tal que cualquier lector pueda comprender qué se está respondiendo sin necesidad de tener la hoja de preguntas delante.' },
      { id: 'opt-c', text: 'Que el examen debe ser corregido por una computadora sin intervención de docentes.' },
      { id: 'opt-d', text: 'Que la respuesta debe ocupar obligatoriamente tres carillas completas.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La autonomía semántica es un pilar evaluativo de la cátedra: una respuesta no puede comenzar abruptamente con "Porque..." o "Sí, tiene marcas...". Debe iniciar contextualmente: "El texto de Teun van Dijk presenta marcas enunciativas subjetivas tales como...", volviéndose autosuficiente.',
    distractorExplanations: {
      'opt-a': 'La respuesta debe ceñirse estrictamente a los contenidos y conceptos de la cátedra.',
      'opt-c': 'La corrección la realizan los profesores de la comisión; la autonomía es una propiedad del texto del alumno.',
      'opt-d': 'La autonomía depende de la autosuficiencia del sentido, no de la cantidad de carillas.'
    },
    hint: 'Una respuesta autónoma se entiende perfectamente sola, sin mirar la pregunta que le dio origen.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, pp. 60-61; Resumen P1, p. 23; Resumen P2, p. 14',
    tags: ['respuesta autonoma', 'parcial', 'criterio de evaluacion'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-H-03',
    topicId: 'MOD-H',
    learningObjective: 'Identificar el inicio erróneo no autónomo de una respuesta de examen.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'Ante la consigna: "¿Qué secuencias textuales secundarias utiliza el autor en el segundo párrafo para respaldar su tesis?", ¿cuál de los siguientes inicios es defectuoso por carecer de autonomía semántica?',
    options: [
      { id: 'opt-a', text: '"En el segundo párrafo del artículo analizado, el autor introduce dos secuencias secundarias: una narrativa y otra descriptiva, con el fin de..."' },
      { id: 'opt-b', text: '"Para respaldar su postura, el emisor despliega en el segundo párrafo una secuencia descriptiva..."' },
      { id: 'opt-c', text: '"Porque usa la descriptiva y la narrativa para que la gente le crea".' },
      { id: 'opt-d', text: '"Las secuencias secundarias empleadas por el autor en el párrafo en cuestión consisten en..."' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Comenzar una respuesta de parcial con "Porque..." es el error prototípico de falta de autonomía: depende gramaticalmente de la pregunta exterior y utiliza un registro coloquial descuidado ("para que la gente le crea").',
    distractorExplanations: {
      'opt-a': 'Es un inicio modelo impecable: contextualiza párrafo, autor y objeto pedido.',
      'opt-b': 'Posee plena autonomía sintáctica y léxico adecuado.',
      'opt-d': 'Reutiliza los términos de la consigna garantizando claridad y autosuficiencia semántica.'
    },
    hint: 'Nunca empieces una respuesta de parcial formal con la palabra "Porque...".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 60; Resumen P1, p. 23',
    tags: ['error no autonomo', 'inicio de parcial', 'consigna'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-H-04',
    topicId: 'MOD-H',
    learningObjective: 'Comprender las macrorreglas del resumen según Teun van Dijk.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En la teoría del resumen de Teun van Dijk trabajada en la cátedra, ¿cuáles son las cuatro macrorreglas para reducir la información de un texto fuente?',
    options: [
      { id: 'opt-a', text: 'Copiar, Pegar, Resaltar y Borrar.' },
      { id: 'opt-b', text: 'Introducción, Nudo, Desenlace y Moraleja.' },
      { id: 'opt-c', text: 'Acentuación, Puntuación, Concordancia y Deixis.' },
      { id: 'opt-d', text: 'Supresión (omisión), Selección, Generalización e Integración (construcción).' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Van Dijk definió las macrorreglas que operan sobre las proposiciones de un texto: supresión (eliminar detalles accesorios o redundantes), selección (conservar proposiciones que son condición de otras), generalización (sustituir varios conceptos por su hiperónimo) e integración (reemplazar una secuencia de acciones por un concepto global).',
    distractorExplanations: {
      'opt-a': 'Copiar y pegar literalmente es la antítesis de un resumen académico universitario.',
      'opt-b': 'Son las partes canónicas de la narración de ficción.',
      'opt-c': 'Son aspectos de la normativa morfosintáctica y enunciativa.'
    },
    hint: 'Recordá las cuatro operaciones mentales: tachar lo accesorio, elegir lo clave, agrupar bajo un concepto mayor e integrar en una idea global.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 61; van Dijk (1980); Resumen P1, p. 23; Resumen P2, p. 13',
    tags: ['macrorreglas', 'teun van dijk', 'resumen academico'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-H-05',
    topicId: 'MOD-H',
    learningObjective: 'Aplicar la macrorregla de generalización en un texto de salud.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'El texto fuente dice: "El hospital incorporó ecógrafos, tomógrafos de última generación, equipos de resonancia magnética y aparatos de rayos X digitales". Al elaborar un resumen académico, ¿cómo se aplica correctamente la macrorregla de generalización?',
    options: [
      { id: 'opt-a', text: 'Sustituyendo la enumeración por un hiperónimo conceptual abarcador: "El hospital incorporó equipamiento avanzado de diagnóstico por imágenes".' },
      { id: 'opt-b', text: 'Copiando la lista completa de aparatos con sus marcas comerciales.' },
      { id: 'opt-c', text: 'Eliminando toda la oración porque los aparatos no son importantes.' },
      { id: 'opt-d', text: 'Reemplazando la frase por: "El hospital compró muchas cosas lindas".' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La generalización reemplaza una serie de hipónimos específicos por un hiperónimo que subsume sus rasgos esenciales (*equipamiento de diagnóstico por imágenes*), condensando la información sin perder precisión técnica.',
    distractorExplanations: {
      'opt-b': 'No reduce la información; conserva la lista detallada innecesariamente.',
      'opt-c': 'La adquisición de tecnología de diagnóstico es un dato sustantivo que no debe borrarse por completo.',
      'opt-d': 'Usa un registro informal vago ("cosas lindas") impropio del resumen académico.'
    },
    hint: 'Buscá la frase que resume todos esos aparatos bajo su categoría médica general.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 61; Resumen P1, p. 23',
    tags: ['generalizacion', 'macrorreglas', 'diagnostico por imagenes'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-06',
    topicId: 'MOD-H',
    learningObjective: 'Reconocer la estructura de tres partes de una respuesta de examen de desarrollo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Según las pautas de escritura de parcial del Manual UNLaM (p. 60) y el resumen P1 (p. 23), una respuesta de desarrollo completa debe organizarse en:',
    options: [
      { id: 'opt-a', text: 'Una lista desordenada de ítems con viñetas sin verbos conjugados.' },
      { id: 'opt-b', text: 'Introducción (enmarque y reformulación autónoma de la pregunta) -> Desarrollo (explicación conceptual, citas o evidencias del texto fuente) -> Conclusión (cierre sintético que responde formalmente a la consigna).' },
      { id: 'opt-c', text: 'Tres carillas de definiciones copiadas del diccionario sin relación con el texto.' },
      { id: 'opt-d', text: 'Un párrafo único sin ningún punto y seguido.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Una respuesta de parcial es un texto en miniatura: debe poseer apertura o introducción que plantea el tema y la postura, cuerpo o desarrollo con los argumentos y ejemplos, y un cierre o conclusión que redondea la demostración.',
    distractorExplanations: {
      'opt-a': 'Las listas sin desarrollo en prosa cohesionada son severamente penalizadas en parciales universitarios.',
      'opt-c': 'Copiar el diccionario desconoce la consigna y el texto fuente evaluado.',
      'opt-d': 'Un bloque macizo sin puntuación interna evidencia problemas graves de organización textual.'
    },
    hint: 'Pensá en la estructura clásica de tres partes: entrada, desarrollo de pruebas y remate.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 60; Resumen P1, p. 23',
    tags: ['estructura de parcial', 'introduccion desarrollo conclusion', 'composicion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-07',
    topicId: 'MOD-H',
    learningObjective: 'Distinguir la operación discursiva "Justificar" frente a "Definir".',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Si una consigna de examen dice: "Justifique por qué el texto analizado se inscribe en el género artículo de divulgación científica", ¿qué debe hacer el alumno?',
    options: [
      { id: 'opt-a', text: 'Limitarse a copiar la definición teórica de qué es un artículo de divulgación sin mencionar el texto del examen.' },
      { id: 'opt-b', text: 'Pedirle disculpas al autor por haber clasificado su texto.' },
      { id: 'opt-c', text: 'Aportar razones, evidencias y rasgos textuales concretos extraídos del texto fuente (paratextos, destinatario, léxico accesible, analogías) que demuestren de manera fundada por qué pertenece a ese género.' },
      { id: 'opt-d', text: 'Escribir que el texto le pareció muy interesante y entretenido.' }
    ],
    correctAnswer: 'opt-c',
    explanation: '"Justificar" exige probar con argumentos y evidencias por qué una afirmación es válida. No alcanza con definir el concepto abstracto: hay que conectar la teoría con las marcas específicas del texto bajo examen.',
    distractorExplanations: {
      'opt-a': 'Eso responde a la operación "definir", no a "justificar".',
      'opt-b': 'Confunde el sentido de "justificar" discursivo con dar explicaciones exculpatorias personales.',
      'opt-d': 'Una apreciación afectiva ("me pareció entretenido") no es una justificación académica.'
    },
    hint: 'Justificar = dar los porqués respaldados en pruebas concretas del texto que leíste.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 60; Resumen P2, p. 15',
    tags: ['operaciones discursivas', 'justificar', 'consignas de examen'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-08',
    topicId: 'MOD-H',
    learningObjective: 'Comprender la operación discursiva "Comparar".',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Cuando una consigna solicita "Compare la posición del autor A con la del autor B respecto del aborto legal", la operación discursiva exige:',
    options: [
      { id: 'opt-a', text: 'Escribir el resumen del autor A en una hoja y el del autor B en otra sin relacionarlos jamás.' },
      { id: 'opt-b', text: 'Declarar cuál de los dos autores le cae más simpático al alumno.' },
      { id: 'opt-c', text: 'Copiar la fecha de nacimiento de ambos escritores.' },
      { id: 'opt-d', text: 'Establecer puntos de convergencia (semejanzas) y de divergencia (diferencias o contrastes) entre ambas posturas, articulándolas mediante criterios o ejes temáticos comunes.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Comparar implica confrontar dos objetos bajo categorías comunes: identificar en qué coinciden, en qué discrepan y cuáles son los argumentos distintivos que cada uno sostiene frente al nudo problemático.',
    distractorExplanations: {
      'opt-a': 'Yuxtaponer dos resúmenes aislados sin cruce comparativo no satisface la operación solicitada.',
      'opt-b': 'La simpatía personal es irrelevante para el análisis comparativo riguroso.',
      'opt-c': 'Las fechas biográficas secundarias no dan cuenta de la confrontación teórica.'
    },
    hint: 'Comparar es poner frente a frente para señalar semejanzas y diferencias.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 60; Resumen P2, p. 15',
    tags: ['comparar', 'operaciones discursivas', 'ejes de contraste'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-09',
    topicId: 'MOD-H',
    learningObjective: 'Identificar la estructura de un Informe de Lectura Descriptivo (ILD) en UNLaM.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'Según el modelo de enseñanza del Manual de la UNLaM (pp. 63-67), ¿cuál es la estructura canónica de un Informe de Lectura Descriptivo (ILD)?',
    options: [
      { id: 'opt-a', text: 'Encabezado / presentación institucional -> Introducción (referencia al texto fuente, autor, tema central y género) -> Cuerpo o desarrollo descriptivo (análisis por partes de subtemas, tesis y estrategias con verbos introductores) -> Conclusión / cierre.' },
      { id: 'opt-b', text: 'Carátula con fotos a color -> Índice de 20 páginas -> Epígrafe sin texto.' },
      { id: 'opt-c', text: 'Un solo párrafo largo de opinión personal sobre lo injusta que es la vida.' },
      { id: 'opt-d', text: 'Copia exacta de las primeras diez líneas del texto fuente entre signos de interrogación.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El ILD posee un formato estandarizado: 1) encabezado con datos del alumno e institución, 2) presentación del texto fuente y su emisor, 3) cuerpo descriptivo articulado con verbos introductores precisos (*el autor plantea, sostiene, ejemplifica*), y 4) conclusión integradora.',
    distractorExplanations: {
      'opt-b': 'El ILD es un informe breve de examen (aprox. 20 líneas en parcial), no un libro con álbum fotográfico.',
      'opt-c': 'El ILD es descriptivo-explicativo, no un ensayo subjetivo de catarsis emocional.',
      'opt-d': 'El plagio literal directo anula la evaluación del informe.'
    },
    hint: 'Pensá en cómo se presenta un informe formal: datos arriba, presentación del texto, cuerpo de análisis y cierre.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, pp. 63-67; Resumen P1, p. 23',
    tags: ['informe de lectura descriptivo', 'ild', 'estructura formal'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-H-10',
    topicId: 'MOD-H',
    learningObjective: 'Reconocer el género apunte de clase y sus particularidades.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuáles son las características distintivas del apunte de clase como género académico producido por el estudiante?',
    options: [
      { id: 'opt-a', text: 'Es un género de circulación pública internacional que se vende en librerías encuadernado.' },
      { id: 'opt-b', text: 'Es un género de registro personal, inmediato y selectivo, que utiliza abreviaturas, jerarquía gráfica y esquemas para capturar las ideas nucleares del dictado docente.' },
      { id: 'opt-c', text: 'Es un documento oficial que reemplaza el título secundario del alumno.' },
      { id: 'opt-d', text: 'Es un texto que debe ser corregido por la Real Academia Española antes de guardarlo en la mochila.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El apunte es un género privado de trabajo intelectual: producido al ritmo de la oralidad del profesor, requiere selección activa, condensación en tiempo real y recursos nemotécnicos personales.',
    distractorExplanations: {
      'opt-a': 'No es un libro comercial editado; es un instrumento privado de estudio del estudiante.',
      'opt-c': 'No posee validez legal acreditativa de títulos educativos.',
      'opt-d': 'Al ser de uso íntimo y rápido, no está sujeto a formalidades editoriales externas inmediatas.'
    },
    hint: 'Son las notas que tomás rápido en tu cuaderno mientras el profe habla en el aula.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 38; Resumen P1, p. 23; Resumen P2, p. 13',
    tags: ['apunte de clase', 'generos del alumno', 'registro selectivo'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-H-11',
    topicId: 'MOD-H',
    learningObjective: 'Identificar el error común de "resumir copiando parches de oraciones".',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un estudiante elabora un resumen recortando y pegando textualmente la primera oración de cada párrafo del artículo fuente, uniendo los pedazos con comas. ¿Por qué la cátedra reprueba esta práctica?',
    options: [
      { id: 'opt-a', text: 'Porque los resúmenes deben escribirse obligatoriamente con letras mayúsculas góticas.' },
      { id: 'opt-b', text: 'Porque la cátedra exige que los resúmenes sean más largos que el texto original.' },
      { id: 'opt-c', text: 'Porque eso es un "collage" mecánico que carece de cohesión interna propia, no evidencia comprensión lectora ni reelaboración cognitiva y frecuentemente distorsiona la coherencia global del texto.' },
      { id: 'opt-d', text: 'Porque cortar frases con tijera desafila las tijeras del aula.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El resumen universitario no es un mosaico de citas descontextualizadas: exige procesar la jerarquía de ideas y redactar un nuevo texto autónomo, coherente y cohesionado con la propia voz del estudiante reformulador.',
    distractorExplanations: {
      'opt-a': 'La tipografía gótica es una fantasía cómica sin relación con la normativa universitaria.',
      'opt-b': 'Por definición esencial, un resumen siempre es más breve y condensado que el texto fuente.',
      'opt-d': 'El término "recortar" se usa aquí en sentido figurado de copia y pega digital o manuscrito.'
    },
    hint: 'Resumir no es recortar pedacitos sueltos; es entender y reescribir con tus propias palabras bien enlazadas.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 61; Resumen P1, p. 23; Resumen P2, p. 13',
    tags: ['resumen academico', 'error frecuente', 'collage textual'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-12',
    topicId: 'MOD-H',
    learningObjective: 'Reconocer la operación discursiva "Caracterizar".',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En una consigna de parcial: "Caracterice el modelo de atención médica comunitaria propuesto por el autor", el verbo rector "Caracterice" le pide al estudiante:',
    options: [
      { id: 'opt-a', text: 'Inventar una historia de ficción sobre un médico que atiende en una nave espacial.' },
      { id: 'opt-b', text: 'Decir únicamente si el modelo le parece bueno o malo en una sola palabra.' },
      { id: 'opt-c', text: 'Buscar la foto del autor en internet.' },
      { id: 'opt-d', text: 'Enunciar los rasgos distintivos, propiedades particulares y atributos específicos que definen y singularizan a dicho modelo según el texto fuente.' }
    ],
    correctAnswer: 'opt-d',
    explanation: '"Caracterizar" consiste en señalar los rasgos, propiedades o notas definitorias que individualizan un fenómeno o concepto (*cómo es, qué elementos lo integran, qué particularidades presenta*).',
    distractorExplanations: {
      'opt-a': 'No solicita invención narrativa de ficción.',
      'opt-b': 'Una calificación monosilábica sin descripción no constituye caracterización analítica.',
      'opt-c': 'Buscar imágenes externas desatiende la operación textual pedida sobre el texto fuente.'
    },
    hint: 'Caracterizar es describir los rasgos propios y distintivos de algo.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 60; Resumen P2, p. 15',
    tags: ['caracterizar', 'operaciones discursivas', 'rasgos distintivos'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-13',
    topicId: 'MOD-H',
    learningObjective: 'Comprender la importancia de la revisión en el proceso de escritura.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Por qué la fase de revisión no debe limitarse a corregir únicamente las faltas de ortografía superficiales?',
    options: [
      { id: 'opt-a', text: 'Porque revisar implica también verificar si se respondió cabalmente a lo solicitado en la consigna, si la organización de las ideas es coherente, si los párrafos están bien cohesionados y si el registro es adecuado.' },
      { id: 'opt-b', text: 'Porque las faltas de ortografía no le importan a ningún docente universitario.' },
      { id: 'opt-c', text: 'Porque en la revisión se debe borrar todo lo escrito y empezar de cero cada vez.' },
      { id: 'opt-d', text: 'Porque revisar solo sirve para cambiar el color de la birome.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La revisión experta opera en múltiples niveles: macroestructural (¿responde al objetivo?, ¿es coherente?), microestructural (¿los conectores son precisos?) y normativo formal (ortografía y puntuación).',
    distractorExplanations: {
      'opt-b': 'La ortografía es evaluada y penalizada con rigor en los exámenes de ingreso.',
      'opt-c': 'La revisión ajusta y pule el texto; no implica destruir el trabajo ya realizado si la base es válida.',
      'opt-d': 'El color del útil de escritura es irrelevante para los criterios discursivos.'
    },
    hint: 'Revisar es mirar el cuadro completo: si respondiste lo que te pidieron, si se entiende y si no hay faltas.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, pp. 59-60; Cassany (1995)',
    tags: ['revision', 'proceso de escritura', 'evaluacion global'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-H-14',
    topicId: 'MOD-H',
    learningObjective: 'Reconocer el uso de verbos introductores precisos en el ILD.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En la redacción del cuerpo de un Informe de Lectura Descriptivo, ¿cuál de las siguientes opciones demuestra mayor madurez en el uso de verbos introductores de citas y paráfrasis?',
    options: [
      { id: 'opt-a', text: '"El autor dice una cosa en la página uno, después dice otra cosa en la página dos y al final dice que la salud es importante".' },
      { id: 'opt-b', text: '"El investigador plantea inicialmente la crisis sanitaria, fundamenta su tesis mediante estadísticas epidemiológicas, refuta las objeciones presupuestarias y, finalmente, concluye instando a una reforma del sistema".' },
      { id: 'opt-c', text: '"El texto tira datos que están re piolas para la cursada".' },
      { id: 'opt-d', text: '"El escritor escribió lo que sus manos escribieron".' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La opción b recurre a verbos introductores conceptualmente diferenciados (*plantea, fundamenta, refuta, concluye*), mostrando con precisión las operaciones retóricas del autor, en lugar del uso empobrecido y repetitivo de "dice".',
    distractorExplanations: {
      'opt-a': 'Repite monótonamente el verbo genérico "dice", denotando pobreza de recursos léxico-discursivos.',
      'opt-c': 'Emplea léxico vulgar inadmisible en un informe académico.',
      'opt-d': 'Presenta una tautología sin contenido informativo.'
    },
    hint: 'Buscá los verbos que explican qué acción discursiva hace el autor: plantea, fundamenta, refuta...',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 67 (Listado de verbos introductores para informes)',
    tags: ['verbos introductores', 'ild', 'precision discursiva'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-15',
    topicId: 'MOD-H',
    learningObjective: 'Identificar la operación discursiva "Reformular".',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Si una consigna dice: "Reformule la siguiente definición técnica para que sea comprensible a un paciente sin formación médica", ¿qué se espera que realice el estudiante?',
    options: [
      { id: 'opt-a', text: 'Copiar la misma frase técnica entre signos de admiración.' },
      { id: 'opt-b', text: 'Traducir la frase al idioma francés.' },
      { id: 'opt-c', text: 'Reexpresar el contenido con un vocabulario más cotidiano y accesible, manteniendo la fidelidad al significado clínico original sin incurrir en errores conceptuales ni infantilizaciones.' },
      { id: 'opt-d', text: 'Inventar una enfermedad nueva.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La reformulación orientada al paciente exige una adecuada competencia de transposición didáctica: adaptar el registro a un destinatario no lego, preservando con exactitud el sentido médico.',
    distractorExplanations: {
      'opt-a': 'Copiar lo mismo no resuelve la falta de accesibilidad comunicativa.',
      'opt-b': 'El paciente habla español; traducirlo a otra lengua extranjera agrava la incomprensión.',
      'opt-d': 'El estudiante debe trabajar sobre el concepto dado, no fantasear patologías ficticias.'
    },
    hint: 'Explicárselo a alguien común sin perder la verdad médica de lo que tiene.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 60; Resumen P2, p. 15',
    tags: ['reformular', 'operaciones discursivas', 'adecuacion al paciente'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-16',
    topicId: 'MOD-H',
    learningObjective: 'Reconocer el valor de la planificación previa en el examen parcial cronometrado.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Mía dispone de 90 minutos para completar su examen final de Seminario (que incluye lectura comprensiva, análisis de marcas y redacción de un ILD de 20 líneas). ¿Por qué dedicar 5 minutos a planificar el texto antes de redactar el ILD le ahorra tiempo en lugar de perderlo?',
    options: [
      { id: 'opt-a', text: 'Porque planificar hace que el reloj del examen se detenga mágicamente.' },
      { id: 'opt-b', text: 'Porque los docentes premian con 10 puntos a los alumnos que miran el techo 5 minutos.' },
      { id: 'opt-c', text: 'Porque no hay nada que escribir en los primeros minutos de un examen.' },
      { id: 'opt-d', text: 'Porque un esquema previo de ideas organiza el orden de los párrafos, evita bloqueos en blanco, previene olvidos de argumentos clave y reduce drásticamente la necesidad de tachar y reescribir sobre la marcha.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La planificación es una inversión de eficacia cognitiva: tener un mapa de qué va en la introducción, qué en el cuerpo y qué en el cierre permite redactar de manera fluida y enfocada, evitando el desorden textual.',
    distractorExplanations: {
      'opt-a': 'El tiempo del examen corre de manera inexorable y constante.',
      'opt-b': 'La evaluación se basa en el texto producido en la hoja, no en conductas corporales pasivas.',
      'opt-c': 'Los primeros minutos son cruciales para leer atentamente la consigna y el texto fuente.'
    },
    hint: 'Tener un plan te permite escribir sin dudar en cada renglón sobre qué decir después.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 59; Cassany (1995)',
    tags: ['planificacion', 'gestion del tiempo', 'estrategias de examen'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-17',
    topicId: 'MOD-H',
    learningObjective: 'Identificar la macrorregla de integración o construcción en un resumen.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'El texto original detalla: "El equipo médico solicitó el consentimiento informado, esterilizó el instrumental, administró la anestesia raquídea, realizó una incisión limpia en el abdomen y extrajo el feto sano". En el resumen del alumno se lee: "El equipo médico llevó a cabo una cesárea programada exitosa". ¿Qué macrorregla de Van Dijk se aplicó?',
    options: [
      { id: 'opt-a', text: 'Macrorregla de integración o construcción, donde una secuencia de acciones preparatorias y constitutivas se reemplaza por un concepto global que las contiene lógicamente.' },
      { id: 'opt-b', text: 'Macrorregla de supresión de la palabra "feto".' },
      { id: 'opt-c', text: 'Error de plagio por omitir el instrumental.' },
      { id: 'opt-d', text: 'Metáfora literaria del nacimiento.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La integración o construcción condensa un conjunto de eventos o condiciones (*pedir consentimiento, anestesiar, incidir, extraer*) bajo un macroconcepto que el saber del mundo presupone articulado en esa acción mayor (*llevar a cabo una cesárea*).',
    distractorExplanations: {
      'opt-b': 'No es mera supresión aislada; hay sustitución por un término integrador que engloba el suceso.',
      'opt-c': 'Es una correcta síntesis conceptual en un resumen, no plagio.',
      'opt-d': 'No es metáfora; es el nombre quirúrgico formal del procedimiento.'
    },
    hint: 'Todas esas acciones particulares juntas forman lo que conocemos como una "cesárea".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 61; van Dijk (1980)',
    tags: ['integracion', 'construccion', 'macrorreglas'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-H-18',
    topicId: 'MOD-H',
    learningObjective: 'Reconocer cómo responder consignas de opción justificada en parciales.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el modelo de examen de Seminario suele pedirse: "Elija la opción correcta y justifique su elección a partir de elementos del texto". Si un estudiante marca la opción correcta pero no escribe ninguna justificación, ¿cómo suele ponderarse su puntaje según el criterio de la cátedra?',
    options: [
      { id: 'opt-a', text: 'Obtiene el 100% del puntaje porque lo importante es adivinar la letra correcta.' },
      { id: 'opt-b', text: 'Pierde la mayor parte o la totalidad del puntaje de la consigna, porque en la universidad lo que se acredita no es el azar de marcar una cruz, sino la capacidad reflexiva y argumentativa de fundamentar la elección.' },
      { id: 'opt-c', text: 'El docente le suma puntos extra por ahorrarle tiempo de lectura.' },
      { id: 'opt-d', text: 'Se anula todo el examen de todas las materias del año.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La consigna explícita de "justificar" es indivisible: marcar la opción sin fundamentar demuestra incapacidad o falta de voluntad probatoria, por lo que la cátedra no convalida la respuesta o asigna puntaje residual.',
    distractorExplanations: {
      'opt-a': 'La universidad evalúa fundamentación reflexiva, no azar de quiniela o adivinación.',
      'opt-c': 'Los docentes exigen desarrollo analítico; omitir la justificación es penalizado.',
      'opt-d': 'Solo afecta el puntaje asignado a esa consigna específica en la grilla de evaluación.'
    },
    hint: 'En la facu, acertar la letra sin explicar por qué no vale casi nada.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 57; Modelo de Examen, p. 38',
    tags: ['justificacion obligatoria', 'consignas de parcial', 'criterios de evaluacion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-H-19',
    topicId: 'MOD-H',
    learningObjective: 'Identificar la operación discursiva "Clasificar".',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'Cuando una consigna solicita "Clasifique los conectores señalados en el párrafo 3", el estudiante debe:',
    options: [
      { id: 'opt-a', text: 'Contar cuántas letras tiene cada conector con una regla escolar.' },
      { id: 'opt-b', text: 'Escribirlos de mayor a menor según el tamaño de la tipografía.' },
      { id: 'opt-c', text: 'Agruparlos y categorizarlos según su función y relación semántica lógica (ej. aditivos, adversativos, causales, consecutivos, temporales).' },
      { id: 'opt-d', text: 'Inventar conectores en un idioma imaginario.' }
    ],
    correctAnswer: 'opt-c',
    explanation: '"Clasificar" consiste en ordenar elementos en clases o categorías preestablecidas con base en criterios teóricos precisos (en este caso, la tipología de relaciones lógicas que establecen los conectores).',
    distractorExplanations: {
      'opt-a': 'La cantidad de letras no define la clasificación lingüística funcional.',
      'opt-b': 'El tamaño de la tipografía es un rasgo paratextual tipográfico ajeno a la clasificación sintáctica.',
      'opt-d': 'Se trabaja sobre el corpus de conectores normativos de la lengua española.'
    },
    hint: 'Clasificar = poner cada cosa en su casillero teórico correspondiente.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 60; Anexo 7, pp. 101-102; Resumen P2, p. 15',
    tags: ['clasificar', 'operaciones discursivas', 'conectores'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-H-20',
    topicId: 'MOD-H',
    learningObjective: 'Evaluar la coherencia y cohesión en la producción de una opinión fundamentada.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'La Parte B del examen de Seminario pide: "Escriba una opinión fundada sobre la propuesta del autor (extensión aprox. 15 líneas)". ¿Cuál de las siguientes propuestas cumple con los requerimientos del género académico?',
    options: [
      { id: 'opt-a', text: 'Un texto que dice "A mí me da igual lo que diga el autor porque la medicina no sirve" y deja diez renglones en blanco.' },
      { id: 'opt-b', text: 'Un poema de cuatro estrofas con rima consonante sobre la primavera.' },
      { id: 'opt-c', text: 'Una copia literal exacta del primer párrafo del autor sin agregar ninguna palabra propia.' },
      { id: 'opt-d', text: 'Un texto que enuncia con claridad su postura en la primera oración, desarrolla dos argumentos sólidos basados en evidencias sanitarias o lecturas de la cursada, utiliza conectores lógicos variados y concluye reafirmando su tesis con registro formal.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Una opinión académica o fundada en la universidad no es un desahogo caprichoso: es un texto argumentativo breve pero riguroso, dotado de tesis propia, argumentos apoyados en saberes disciplinares y corrección formal.',
    distractorExplanations: {
      'opt-a': 'Muestra indiferencia, carece de fundamentación, es informal y está incompleto.',
      'opt-b': 'El género solicitado es prosa argumentativa académica, no lírica poética.',
      'opt-c': 'Copiar al autor no responde a la consigna de producir una opinión personal fundada.'
    },
    hint: 'Tesis clara, argumentos sólidos con datos, conectores variados y registro formal.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, pp. 61-63; Examen de van Dijk Parte B, p. 38',
    tags: ['opinion fundada', 'argumentacion personal', 'criterios de correccion'],
    estimatedSeconds: 50
  }
];
