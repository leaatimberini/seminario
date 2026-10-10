import { Question } from '../../types';

export const MODULE_C_QUESTIONS: Question[] = [
  {
    id: 'Q-MOD-C-01',
    topicId: 'MOD-C',
    learningObjective: 'Distinguir la naturaleza semántica de la coherencia frente a la naturaleza gramatical/superficial de la cohesión.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuál es la diferencia fundamental entre coherencia y cohesión según la cátedra de Seminario?',
    options: [
      { id: 'opt-a', text: 'La coherencia se vincula con el significado global y la unidad de sentido (plano semántico), mientras que la cohesión se manifiesta en las relaciones gramaticales y léxicas explícitas entre oraciones y palabras (plano sintáctico/superficial).' },
      { id: 'opt-b', text: 'La coherencia se aplica únicamente a los poemas y la cohesión a los libros de texto médicos.' },
      { id: 'opt-c', text: 'Son sinónimos exactos que significan que el texto está impreso con tinta negra.' },
      { id: 'opt-d', text: 'La cohesión es el tema principal de un texto y la coherencia es el uso de mayúsculas.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La coherencia es una propiedad semántica profunda (garantiza que el texto sea percibido como un todo con sentido unitario y no contradictorio). La cohesión es la trama visible de recursos lingüísticos (conectores, pronombres, elipsis, sinónimos) que articulan las partes.',
    distractorExplanations: {
      'opt-b': 'Ambas propiedades son inherentes a todo tipo de texto formal en cualquier disciplina.',
      'opt-c': 'No son sinónimos; atienden a niveles diferentes del análisis textual (sentido vs. enlaces formales).',
      'opt-d': 'Confunde las definiciones conceptuales de ambas propiedades.'
    },
    hint: 'La coherencia está en la mente del lector (sentido del todo); la cohesión está en las palabras del texto (enlaces visibles).',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, pp. 68-71; Resumen P1, pp. 3-5; Gregorio de Mac (1992)',
    tags: ['coherencia', 'cohesion', 'propiedades textuales'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-02',
    topicId: 'MOD-C',
    learningObjective: 'Identificar el mecanismo cohesivo de referencia pronominal y resolver su referente.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé la siguiente oración: "La Organización Mundial de la Salud emitió una nueva directiva sanitaria. Esta busca frenar la propagación de bacterias resistentes en hospitales". ¿A qué elemento remite el pronombre demostrativo "Esta"?',
    options: [
      { id: 'opt-a', text: 'A "bacterias resistentes".' },
      { id: 'opt-b', text: 'A "nueva directiva sanitaria".' },
      { id: 'opt-c', text: 'A "hospitales".' },
      { id: 'opt-d', text: 'A "propagación".' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El pronombre demostrativo femenino singular "Esta" funciona anafóricamente remitiendo al sintagma nominal antecedente más próximo con concordancia de género y número: "una nueva directiva sanitaria" (es la directiva la que busca frenar la propagación).',
    distractorExplanations: {
      'opt-a': '"Bacterias resistentes" es plural; no concuerda con "Esta".',
      'opt-c': '"Hospitales" es masculino plural.',
      'opt-d': 'El sujeto de la acción es la directiva emitida por el organismo.'
    },
    hint: 'Buscá la concordancia en femenino singular y fijate qué es lo que "busca frenar" las bacterias.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Resumen P1, p. 5; Manual UNLaM Módulo 3, p. 69',
    tags: ['referencia pronominal', 'demostrativo', 'resolucion de referente'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-03',
    topicId: 'MOD-C',
    learningObjective: 'Reconocer el procedimiento cohesivo de elipsis (sustitución por cero).',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el enunciado "El suero fisiológico hidrata al paciente deshidratado; la solución de Ringer lactato, también", ¿qué procedimiento cohesivo se utilizó tras la coma?',
    options: [
      { id: 'opt-a', text: 'Conector de causa-consecuencia.' },
      { id: 'opt-b', text: 'Reiteración léxica por palabra general.' },
      { id: 'opt-c', text: 'Elipsis verbal (omisión de "hidrata al paciente deshidratado" para evitar repetición innecesaria).' },
      { id: 'opt-d', text: 'Uso de comillas de distancia irónica.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La elipsis es la "sustitución por cero": la omisión deliberada de un término o construcción sintáctica que ya fue explicitada y que el lector repone sin esfuerzo por el contexto inmediato, agilizando el texto y marcándose típicamente con una coma elíptica.',
    distractorExplanations: {
      'opt-a': 'No hay un conector de causa en la segunda cláusula.',
      'opt-b': 'No se sustituyó por una palabra general como "cosa" o "problema", sino que se suprimió el verbo.',
      'opt-d': 'No se emplearon comillas en la frase analizada.'
    },
    hint: 'La coma reemplaza a una palabra que ya se dijo para no decirla dos veces.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 6; Manual UNLaM Módulo 3, p. 69',
    tags: ['elipsis', 'sustitucion por cero', 'coma eliptica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-04',
    topicId: 'MOD-C',
    learningObjective: 'Clasificar conectores lógicos según su relación de significado.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el fragmento "El tratamiento mostró excelentes resultados in vitro; sin embargo, los ensayos clínicos en humanos aún no arrojaron datos concluyentes", el conector "sin embargo" establece una relación de:',
    options: [
      { id: 'opt-a', text: 'Causa originaria.' },
      { id: 'opt-b', text: 'Adición acumulativa.' },
      { id: 'opt-c', text: 'Orden cronológico temporal.' },
      { id: 'opt-d', text: 'Oposición, contraste o contraargumentación (adversativo).' }
    ],
    correctAnswer: 'opt-d',
    explanation: '"Sin embargo" es un conector adversativo o contraargumentativo: introduce una restricción o contraste que limita la expectativa generada por la proposición anterior (el éxito in vitro contrasta con la falta de certeza en humanos).',
    distractorExplanations: {
      'opt-a': 'Los conectores causales son "porque", "dado que", "ya que", etc.',
      'opt-b': 'Los conectores aditivos son "además", "asimismo", "también", "y".',
      'opt-c': 'Los conectores temporales son "luego", "posteriormente", "mientras tanto".'
    },
    hint: 'El conector opone dos ideas: una positiva y una limitación que viene después.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 7, pp. 101-102; Resumen P1, p. 6',
    tags: ['conectores', 'adversativo', 'contraste'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-C-05',
    topicId: 'MOD-C',
    learningObjective: 'Diferenciar conector de causa de conector de consecuencia.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Considerá las dos oraciones siguientes:\n1. "El índice de vacunación cayó; por lo tanto, aumentaron los casos de sarampión".\n2. "Aumentaron los casos de sarampión porque cayó el índice de vacunación".\n¿Cuál es la función precisa de "por lo tanto" y "porque"?',
    options: [
      { id: 'opt-a', text: '"Por lo tanto" es un conector consecutivo (introduce el efecto/resultado), mientras que "porque" es un conector causal (introduce el motivo/causa originaria).' },
      { id: 'opt-b', text: '"Por lo tanto" introduce la causa y "porque" introduce la consecuencia.' },
      { id: 'opt-c', text: 'Ambos son conectores concesivos intercambiables sin variación sintáctica.' },
      { id: 'opt-d', text: 'Ninguno es conector; son adjetivos calificativos de las enfermedades.' }
    ],
    correctAnswer: 'opt-a',
    explanation: '"Por lo tanto" encabeza la consecuencia (el efecto derivado de la caída de vacunación). "Porque" encabeza la causa (la razón que explica el aumento del sarampión). Distinguir causa de consecuencia es uno de los puntos clave evaluados en los parciales de Seminario.',
    distractorExplanations: {
      'opt-b': 'Invierte las funciones lógicas de ambos conectores.',
      'opt-c': 'Los conectores concesivos son "a pesar de que", "si bien", "aunque".',
      'opt-d': 'Ambos son conectores lógicos textuales, no adjetivos.'
    },
    hint: 'Preguntate: ¿cuál introduce el "por qué pasó" y cuál introduce el "qué pasó como resultado"?',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 7, p. 101; Resumen P1, pp. 18-19',
    tags: ['conectores causales', 'conectores consecutivos', 'relacion logica'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-C-06',
    topicId: 'MOD-C',
    learningObjective: 'Identificar mecanismos de reiteración léxica (sinonimia y palabra general).',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé el fragmento: "El Ministerio detectó una epidemia de dengue en la región norte. Para combatir este fenómeno, las autoridades implementaron operativos de descacharrado". ¿Qué procedimientos de cohesión léxica se emplearon para no repetir "epidemia de dengue"?',
    options: [
      { id: 'opt-a', text: 'Elipsis total del sujeto.' },
      { id: 'opt-b', text: 'Sustitución por una palabra general ("fenómeno") acompañada por el demostrativo "este".' },
      { id: 'opt-c', text: 'Rima asonante poética.' },
      { id: 'opt-d', text: 'Uso de un conector temporal de simultaneidad.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Las palabras generales (o hiperónimos amplios como *hecho, fenómeno, problema, situación*) condensan y retoman un concepto complejo previo sin repetirlo textualmente, asegurando la cohesión léxica.',
    distractorExplanations: {
      'opt-a': 'El referente está presente y nombrado mediante el sintagma "este fenómeno"; no fue omitido.',
      'opt-c': 'La rima es un recurso poético ajeno a la cohesión en prosa informativa.',
      'opt-d': 'No se empleó un conector temporal en esa posición.'
    },
    hint: '"Fenómeno" es una palabra abarcadora y general que engloba a "epidemia de dengue".',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 5; Manual UNLaM Módulo 3, p. 70',
    tags: ['reiteracion lexica', 'palabra general', 'cohesion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-07',
    topicId: 'MOD-C',
    learningObjective: 'Reconocer el valor cohesivo del campo semántico y la colocación léxica.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un párrafo aparecen los términos: "quirófano", "anestesia", "cirujano", "incisión", "sutura" y "postoperatorio". ¿Qué fenómeno lingüístico asegura la cohesión léxica de este pasaje?',
    options: [
      { id: 'opt-a', text: 'La elipsis por cero de todos los pronombres demostrativos.' },
      { id: 'opt-b', text: 'La inclusión de conectores adversativos encubiertos.' },
      { id: 'opt-c', text: 'La copresencia de términos pertenecientes al mismo campo semántico o colocación temática de la cirugía hospitalaria.' },
      { id: 'opt-d', text: 'La presencia de enunciados marcados con deícticos espaciales de lejanía.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El campo semántico o red léxico-asociativa reúne vocablos que coocurren habitualmente en una misma esfera de la actividad humana, creando un entramado temático sólido que facilita la comprensión del lector.',
    distractorExplanations: {
      'opt-a': 'Las palabras están explícitas; no hay elipsis generalizada.',
      'opt-b': 'No hay conectores adversativos en la lista de términos citados.',
      'opt-d': 'No se mencionan deícticos espaciales como "allí" o "allá".'
    },
    hint: 'Son palabras que naturalmente van juntas cuando se habla de una operación médica.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 5; Manual UNLaM Módulo 3, p. 70',
    tags: ['campo semantico', 'colocacion', 'cohesion lexica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-08',
    topicId: 'MOD-C',
    learningObjective: 'Detectar problemas de ruptura de coherencia local en un texto.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé el siguiente texto de un estudiante:\n"La hipertensión arterial es una enfermedad silenciosa que daña los vasos sanguíneos. Las ballenas francas australes migran hacia las costas de Puerto Madryn durante la primavera. Por lo tanto, los pacientes deben reducir el consumo de sodio".\n¿Qué falla textual presenta este fragmento?',
    options: [
      { id: 'opt-a', text: 'Errores ortográficos de acentuación en las palabras esdrújulas.' },
      { id: 'opt-b', text: 'Uso excesivo de paratextos icónicos no verbales.' },
      { id: 'opt-c', text: 'Demasiada reiteración léxica de la palabra "ballenas".' },
      { id: 'opt-d', text: 'Falta total de coherencia local e incoherencia global por inserción de una proposición ajena al campo temático y falso nexo causal ("Por lo tanto").' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El texto rompe el principio de coherencia: introduce una oración sobre ballenas que no guarda ninguna relación semántica con la hipertensión ni con la ingesta de sodio, y utiliza un conector consecutivo injustificable lógicamente.',
    distractorExplanations: {
      'opt-a': 'Las palabras están bien acentuadas formalmente ("hipertensión", "sanguíneos"); el problema es semántico.',
      'opt-b': 'No hay paratextos icónicos en el fragmento.',
      'opt-c': '"Ballenas" aparece una sola vez; la falla es temática, no de repetición cuantitativa.'
    },
    hint: 'Fijate en qué tiene que ver la oración del medio con la salud y con el conector del final.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 3, p. 68; Resumen P1, pp. 3-4',
    tags: ['incoherencia', 'ruptura tematica', 'coherencia local'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-C-09',
    topicId: 'MOD-C',
    learningObjective: 'Identificar conectores reformuladores o explicativos.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el enunciado "La encefalitis espongiforme es una patología neurodegenerativa transmisible; es decir, destruye progresivamente el tejido cerebral del huésped", ¿qué función discursiva cumple la locución "es decir"?',
    options: [
      { id: 'opt-a', text: 'Reformulación o paráfrasis explicativa (aclara y amplía con términos más accesibles lo dicho previamente).' },
      { id: 'opt-b', text: 'Concesión ante una objeción del rival.' },
      { id: 'opt-c', text: 'Cierre conclusivo definitivo de todo el libro.' },
      { id: 'opt-d', text: 'Adición de un nuevo dato estadístico no relacionado.' }
    ],
    correctAnswer: 'opt-a',
    explanation: '"Es decir" (al igual que *o sea, en otras palabras, dicho de otro modo*) es el conector reformulador por excelencia: reexpresa un concepto técnico previo para hacerlo comprensible al receptor sin modificar el contenido básico.',
    distractorExplanations: {
      'opt-b': 'Los conectores concesivos son "a pesar de", "si bien", etc.',
      'opt-c': 'Los conectores conclusivos son "en conclusión", "en suma", "para finalizar".',
      'opt-d': 'No agrega un dato nuevo; explica y reexpresa el mismo fenómeno.'
    },
    hint: 'Sirve para decir lo mismo pero de una manera más clara o comprensible.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 7, p. 102; Resumen P1, p. 15',
    tags: ['conectores reformuladores', 'es decir', 'estrategias explicativas'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-C-10',
    topicId: 'MOD-C',
    learningObjective: 'Reconocer conectores de concesión y su función argumentativa.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En la frase "Si bien la tasa de contagios disminuyó en el último trimestre, las autoridades sanitarias no descartan una segunda ola epidémica", ¿qué relación lógica introduce la locución "Si bien"?',
    options: [
      { id: 'opt-a', text: 'Condición matemática indispensable.' },
      { id: 'opt-b', text: 'Concesión: admite un hecho verdadero (la disminución de contagios), pero sin que este impida la validez de la afirmación principal (no descartar la segunda ola).' },
      { id: 'opt-c', text: 'Comparación estética de belleza poética.' },
      { id: 'opt-d', text: 'Causa originaria de la primera ola.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Los conectores concesivos (*si bien, aunque, aun cuando, a pesar de que*) admiten un obstáculo o dato real, pero señalan que dicho obstáculo no es suficiente para anular la conclusión o postura principal del enunciador.',
    distractorExplanations: {
      'opt-a': 'El condicional estricto usa "si" solo (*si llueve, no voy*); "si bien" es concesivo.',
      'opt-c': 'No compara la belleza de dos cosas; sopesa dos hechos epidemiológicos.',
      'opt-d': 'No explica la causa de la ola anterior.'
    },
    hint: '"Si bien" equivale a "aunque" o "a pesar de que".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 7, p. 102; Resumen P1, p. 6',
    tags: ['conectores concesivos', 'si bien', 'argumentacion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-11',
    topicId: 'MOD-C',
    learningObjective: 'Identificar ambigüedad por referencia pronominal defectuosa.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'Leé el siguiente enunciado: "El médico examinó al paciente con el estetoscopio cuando este se descompensó". ¿Por qué este enunciado presenta un problema de cohesión referencial según los estándares universitarios?',
    options: [
      { id: 'opt-a', text: 'Porque el pronombre "este" no existe en la lengua castellana.' },
      { id: 'opt-b', text: 'Porque los médicos no pueden usar estetoscopios en oraciones subordinadas.' },
      { id: 'opt-c', text: 'Porque genera ambigüedad sintáctica: si bien "este" gramaticalmente suele apuntar al último antecedente masculino ("estetoscopio"), el sentido exige que refiera al "paciente", obligando al lector a un reanálisis forzado que entorpece la claridad comunicativa.' },
      { id: 'opt-d', text: 'Porque falta un punto y coma después de la palabra "descompensó".' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La referencia ambigua es un defecto de cohesión frecuente: al haber tres sustantivos masculinos singulares cercanos (*médico, paciente, estetoscopio*), el uso de "este" sin reformulación precisa puede inducir a confusión sintáctica momentánea.',
    distractorExplanations: {
      'opt-a': '"Este" es un pronombre demostrativo clásico del español.',
      'opt-b': 'Es una regla absurda sin asidero gramatical ni clínico.',
      'opt-d': 'El final de una oración completa lleva punto final, no punto y coma.'
    },
    hint: 'Fijate cuántos sustantivos masculinos compiten antes del pronombre "este".',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 3, p. 69; Criterios Pedagógicos UNLaM',
    tags: ['ambiguedad referencial', 'cohesion', 'claridad textual'],
    estimatedSeconds: 55
  },
  {
    id: 'Q-MOD-C-12',
    topicId: 'MOD-C',
    learningObjective: 'Reconocer la función de conectores de ordenación u organizadores discursivos.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En un texto metodológico que describe un ensayo farmacológico encontramos: "En primer lugar, se seleccionó la muestra. En segundo término, se administró el placebo. Finalmente, se analizaron los biomarcadores". ¿Qué función cumplen las expresiones subrayadas?',
    options: [
      { id: 'opt-a', text: 'Adverbios de duda o vacilación.' },
      { id: 'opt-b', text: 'Deícticos afectivos subjetivos.' },
      { id: 'opt-c', text: 'Figuras retóricas de metáfora y personificación.' },
      { id: 'opt-d', text: 'Conectores de orden o distribución del discurso, que pautan la secuencia temporal o lógica de las partes del texto.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Los conectores de orden (*en primer lugar, por una parte, a continuación, finalmente*) guían la navegación del texto estructurando la sucesión ordenada de ideas o fases procedimentales.',
    distractorExplanations: {
      'opt-a': 'No expresan duda; marcan orden con absoluta certeza.',
      'opt-b': 'No expresan afecto personal del emisor.',
      'opt-c': 'No son metáforas poéticas; son nexos de organización discursiva.'
    },
    hint: 'Son los conectores que ordenan los pasos de una enumeración.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 7, p. 102; Resumen P1, p. 6',
    tags: ['conectores de orden', 'organizacion textual', 'secuenciacion'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-C-13',
    topicId: 'MOD-C',
    learningObjective: 'Identificar catáfora como procedimiento de anticipación referencial.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'En el enunciado "El director hospitalario anunció lo siguiente: ningún servicio suspenderá las guardias pasivas", el pronombre "lo siguiente" opera como:',
    options: [
      { id: 'opt-a', text: 'Catáfora, porque anticipa una información que será enunciada a continuación en el texto.' },
      { id: 'opt-b', text: 'Anáfora, porque remite a una frase que se dijo diez páginas atrás.' },
      { id: 'opt-c', text: 'Elipsis de un adjetivo calificativo.' },
      { id: 'opt-d', text: 'Conector consecutivo de cierre definitivo.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La catáfora es el procedimiento referencial inverso a la anáfora: un elemento lingüístico apunta hacia adelante, anunciando un referente que se explicitará inmediatamente después.',
    distractorExplanations: {
      'opt-b': 'La anáfora refiere hacia atrás (al antecedente ya mencionado).',
      'opt-c': 'No hay elipsis; el anuncio está expresado en plenitud.',
      'opt-d': 'No es un conector de cierre, sino una estructura referencial anunciativa.'
    },
    hint: 'Anáfora mira hacia atrás; catáfora mira hacia adelante.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 3, p. 69; Gregorio de Mac (1992)',
    tags: ['catafora', 'referencia hacia adelante', 'cohesion gramatical'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-C-14',
    topicId: 'MOD-C',
    learningObjective: 'Reconocer el uso de la coma en la elipsis gramatical según el manual de UNLaM.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Por qué en la oración "Los médicos de guardia atienden las urgencias; los enfermeros, los controles de signos vitales" es obligatorio colocar una coma después de "enfermeros"?',
    options: [
      { id: 'opt-a', text: 'Porque separa un sujeto largo de su verbo.' },
      { id: 'opt-b', text: 'Porque es una coma elíptica que reemplaza y señala la omisión del verbo "atienden".' },
      { id: 'opt-c', text: 'Porque antes de la palabra "los" siempre se debe escribir una coma obligatoriamente.' },
      { id: 'opt-d', text: 'Para indicar que el autor tomó aire para respirar en la lectura.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La norma de puntuación enseña que la coma elíptica se utiliza para marcar la supresión de un verbo previamente expresado en la cláusula anterior, evitando la repetición viciosa y asegurando la cohesión.',
    distractorExplanations: {
      'opt-a': 'La gramática prohíbe taxativamente separar el sujeto de su propio verbo con una coma simple.',
      'opt-c': 'No existe tal regla en la ortografía de la lengua española.',
      'opt-d': 'La puntuación responde a la estructura sintáctico-semántica, no a pausas pulmonares aleatorias.'
    },
    hint: 'Mirá qué verbo falta en la segunda parte y qué signo ocupa su lugar.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 2, p. 90 (Puntuación: La coma elíptica)',
    tags: ['coma eliptica', 'normativa', 'elipsis'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-15',
    topicId: 'MOD-C',
    learningObjective: 'Diferenciar hiperónimo de hipónimo en la cohesión léxica.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En la secuencia "La farmacia central recibió antibióticos, analgésicos y antihistamínicos. Estos fármacos serán distribuidos en las salas de internación", ¿qué relación semántica existe entre "antibióticos, analgésicos y antihistamínicos" y la palabra "fármacos"?',
    options: [
      { id: 'opt-a', text: '"Fármacos" es un hipónimo y los tres remedios son antónimos excluyentes.' },
      { id: 'opt-b', text: 'Son parónimos que se escriben de manera idéntica.' },
      { id: 'opt-c', text: '"Fármacos" es el hiperónimo (término más abarcador e incluyente) y las tres clases de remedios son sus hipónimos específicos.' },
      { id: 'opt-d', text: 'No guardan ninguna relación léxica en el idioma español.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El hiperónimo (*fármacos*) es una palabra de mayor extensión semántica que engloba a sus hipónimos (*antibióticos, analgésicos, etc.*). Este recurso cohesivo permite generalizar e integrar la información evitando listas reiterativas.',
    distractorExplanations: {
      'opt-a': 'Invierte la relación jerárquica de hiperonimia e hiponimia.',
      'opt-b': 'Los parónimos son palabras parecidas fonéticamente con significados distintos (*afecto/efecto*).',
      'opt-d': 'Pertenecen a una estricta taxonomía semántica de la farmacología.'
    },
    hint: 'El hiperónimo es la categoría superior; los hipónimos son los miembros de esa categoría.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 5; Manual UNLaM Módulo 3, p. 70',
    tags: ['hiperonimo', 'hiponimo', 'cohesion lexica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-16',
    topicId: 'MOD-C',
    learningObjective: 'Identificar conectores de adición acumulativa y su correcto uso.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Cuál de los siguientes grupos está compuesto exclusivamente por conectores de adición?',
    options: [
      { id: 'opt-a', text: 'Sin embargo, no obstante, por el contrario.' },
      { id: 'opt-b', text: 'Porque, puesto que, ya que, dado que.' },
      { id: 'opt-c', text: 'Por lo tanto, en consecuencia, de ahí que.' },
      { id: 'opt-d', text: 'Además, asimismo, también, por otra parte.' }
    ],
    correctAnswer: 'opt-d',
    explanation: '"Además", "asimismo", "también" y "por otra parte" son conectores aditivos: suman información que refuerza o amplía la idea anterior en la misma dirección argumentativa.',
    distractorExplanations: {
      'opt-a': 'Son conectores adversativos o contraargumentativos.',
      'opt-b': 'Son conectores causales.',
      'opt-c': 'Son conectores consecutivos.'
    },
    hint: 'Pensá en qué conectores sirven para sumar o agregar elementos a una lista o argumento.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 7, p. 101; Resumen P1, p. 6',
    tags: ['conectores aditivos', 'clasificacion', 'cohesion'],
    estimatedSeconds: 35
  },
  {
    id: 'Q-MOD-C-17',
    topicId: 'MOD-C',
    learningObjective: 'Reconocer el valor cohesivo de los determinantes posesivos.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En la frase "El cirujano evaluó la tomografía del paciente antes de comenzar su intervención quirúrgica", ¿de quién es la intervención quirúrgica?',
    options: [
      { id: 'opt-a', text: 'Del cirujano, que es el sujeto agente que ejecuta la acción médica indicada por el posesivo "su".' },
      { id: 'opt-b', text: 'Del paciente, porque es el dueño del cuerpo operado.' },
      { id: 'opt-c', text: 'De la máquina de tomografía que tomó las imágenes.' },
      { id: 'opt-d', text: 'Del fabricante de los guantes de látex.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El posesivo "su" remite semántica y funcionalmente al sujeto de la acción principal ("El cirujano"), quien lleva a cabo la intervención. Sin embargo, en la redacción académica se recomienda vigilar estos posesivos para evitar anfibologías.',
    distractorExplanations: {
      'opt-b': 'El paciente es quien recibe la intervención, no quien la ejecuta técnicamente.',
      'opt-c': 'La máquina realiza el diagnóstico por imágenes, no la intervención quirúrgica.',
      'opt-d': 'Es una opción absurda e inconexa con el sentido de la oración.'
    },
    hint: 'Fijate quién es el profesional que realiza la acción de operar.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 3, p. 69; Resumen P1, p. 5',
    tags: ['referencia posesiva', 'cohesion', 'sujeto agente'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-18',
    topicId: 'MOD-C',
    learningObjective: 'Identificar conectores de causa en posición intermedia.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el enunciado "El quirófano fue clausurado preventivamente puesto que se detectó una filtración en el conducto de esterilización", ¿qué conector se utilizó y qué indica?',
    options: [
      { id: 'opt-a', text: '"Preventivamente", e introduce una duda metodológica.' },
      { id: 'opt-b', text: '"Puesto que", e introduce la causa o motivo de la clausura preventiva.' },
      { id: 'opt-c', text: '"Fue clausurado", e indica un conector de tiempo pasado.' },
      { id: 'opt-d', text: '"En el conducto", e indica un deíctico personal de cortesía.' }
    ],
    correctAnswer: 'opt-b',
    explanation: '"Puesto que" es una locución conjuntiva causal equivalente a "ya que" o "debido a que": introduce el factor generador o causa de la acción descrita en la proposición principal.',
    distractorExplanations: {
      'opt-a': '"Preventivamente" es un adverbio modal, no un conector lógico.',
      'opt-c': '"Fue clausurado" es la frase verbal en voz pasiva.',
      'opt-d': '"En el conducto" es un complemento circunstancial de lugar, no un deíctico de cortesía.'
    },
    hint: 'Buscá la frase que responde a la pregunta "¿Por qué fue clausurado?".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 7, p. 101; Resumen P1, p. 6',
    tags: ['conectores causales', 'puesto que', 'sintaxis'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-C-19',
    topicId: 'MOD-C',
    learningObjective: 'Reconocer la función cohesiva del punto y coma.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿En cuál de los siguientes casos es normativamente apropiado el uso del punto y coma según el manual de Seminario?',
    options: [
      { id: 'opt-a', text: 'Para separar los títulos de los libros de su autor en la tapa de una novela.' },
      { id: 'opt-b', text: 'Para indicar el final absoluto de un texto completo.' },
      { id: 'opt-c', text: 'Para separar miembros de un período oracional extenso que ya contienen comas internas, o antes de conectores adversativos largos como "sin embargo" o "por el contrario".' },
      { id: 'opt-d', text: 'Entre el sustantivo y su artículo determinado obligatoriamente.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El punto y coma indica una pausa mayor que la coma y menor que el punto. Es indispensable para separar proposiciones yuxtapuestas complejas que contienen comas internas, o delante de conectores adversativos y consecutivos en oraciones de cierta extensión.',
    distractorExplanations: {
      'opt-a': 'En las tapas no se emplea punto y coma para separar autor y título.',
      'opt-b': 'El final absoluto de un texto se marca con punto final.',
      'opt-d': 'No se coloca ningún signo de puntuación entre el artículo y su sustantivo.'
    },
    hint: 'El punto y coma jerarquiza la oración cuando ya usamos varias comas adentro.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 2, p. 91 (El punto y coma)',
    tags: ['punto y coma', 'normativa de puntuacion', 'cohesion'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-C-20',
    topicId: 'MOD-C',
    learningObjective: 'Evaluar cómo la reiteración viciosa daña la calidad del texto académico.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un estudiante escribe: "La vacuna es segura. La vacuna fue probada en laboratorios. La vacuna previene el contagio y la vacuna salva vidas". ¿Cómo debería reescribirse este pasaje aplicando recursos de cohesión?',
    options: [
      { id: 'opt-a', text: 'Dejarlo exactamente así porque repetir la misma palabra diez veces demuestra firmeza de carácter.' },
      { id: 'opt-b', text: 'Eliminar todas las palabras y colocar únicamente un dibujo de una jeringa.' },
      { id: 'opt-c', text: 'Cambiar el idioma a latín para que suene más médico.' },
      { id: 'opt-d', text: 'Reescribirlo empleando elipsis, pronombres y sinonimia: "La vacuna es segura; fue probada en laboratorios rigurosos. Este inoculante previene el contagio y, en consecuencia, salva vidas".' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La reescritura adecuada sustituye la repetición monótona mediante elipsis del sujeto en la segunda cláusula (*fue probada*), el hiperónimo/sinónimo contextual (*este inoculante*) y un conector consecutivo pertinente (*en consecuencia*).',
    distractorExplanations: {
      'opt-a': 'La repetición léxica innecesaria empobrece el estilo y es severamente penalizada en la corrección académica.',
      'opt-b': 'La producción académica exige desarrollo verbal discursivo, no lenguaje meramente pictográfico.',
      'opt-c': 'El examen de Seminario evalúa la producción en lengua castellana estándar académica.'
    },
    hint: 'Fijate en la opción que varía el vocabulario sin perder el significado original.',
    sourceStatus: 'resumen_usuario',
    sourceRef: 'Resumen P1, p. 5; Manual UNLaM Módulo 3, p. 70',
    tags: ['reiteracion viciosa', 'reescritura', 'recursos cohesivos'],
    estimatedSeconds: 50
  }
];
