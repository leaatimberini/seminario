import { Question } from '../../types';

export const MODULE_I_QUESTIONS: Question[] = [
  {
    id: 'Q-MOD-I-01',
    topicId: 'MOD-I',
    learningObjective: 'Identificar el uso incorrecto del gerundio de posterioridad según el manual de UNLaM.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el Anexo 5 del Manual de la UNLaM (p. 99) se enseña expresamente a evitar los usos incorrectos del gerundio. ¿Cuál de las siguientes oraciones incurre en el vicio del "gerundio de posterioridad"?',
    options: [
      { id: 'opt-a', text: '"El paciente llegó a la guardia a las diez de la mañana, siendo trasladado a terapia intensiva tres horas después".' },
      { id: 'opt-b', text: '"El médico auscultó los pulmones escuchando sibilancias bilaterales".' },
      { id: 'opt-c', text: '"Lavándose las manos con alcohol en gel, el cirujano redujo el riesgo de infección".' },
      { id: 'opt-d', text: '"Caminando hacia la sala de partos, la residente repasaba el protocolo de neonatología".' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El gerundio nunca puede expresar una acción posterior a la del verbo principal. En la opción a, el traslado ocurrió "tres horas después", por lo que debe redactarse con un verbo conjugado: "...y fue trasladado a terapia intensiva tres horas después". En b, c y d los gerundios denotan simultaneidad o anterioridad inmediata, lo cual es normativamente correcto.',
    distractorExplanations: {
      'opt-b': 'Usa gerundio de simultaneidad (ausculta y escucha al mismo tiempo), que es correcto.',
      'opt-c': 'Usa gerundio modal/instrumental correcto (de qué modo redujo el riesgo).',
      'opt-d': 'Usa gerundio de simultaneidad temporal correcta (mientras caminaba, repasaba).'
    },
    hint: 'La acción del gerundio no puede pasar después en el tiempo que la acción del primer verbo.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 5, p. 99 (Usos incorrectos del gerundio)',
    tags: ['gerundio de posterioridad', 'normativa', 'error frecuente'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-I-02',
    topicId: 'MOD-I',
    learningObjective: 'Reconocer el uso incorrecto del gerundio con valor de adjetivo especificativo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿Por qué la frase "El Ministerio aprobó una resolución prohibiendo la venta libre de antibióticos" es desaconsejada por la normativa gramatical de la cátedra?',
    options: [
      { id: 'opt-a', text: 'Porque los antibióticos deben venderse siempre sin receta.' },
      { id: 'opt-b', text: 'Porque el gerundio ("prohibiendo") está modificando directamente a un sustantivo ("resolución") con función de adjetivo especificativo, lo cual es incorrecto en español; debe decirse: "...una resolución que prohíbe...".' },
      { id: 'opt-c', text: 'Porque la palabra "Ministerio" se escribe obligatoriamente con minúscula.' },
      { id: 'opt-d', text: 'Porque falta una coma entre "resolución" y "prohibiendo".' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Salvo en las excepciones consagradas (*agua hirviendo, clavo ardiendo*), el gerundio en español no puede funcionar como adjetivo que califica a un sustantivo. Debe sustituirse por una cláusula adjetiva con relativo (*que prohíbe*).',
    distractorExplanations: {
      'opt-a': 'La legislación sanitaria exige receta archivada; no es el motivo gramatical.',
      'opt-c': 'Los nombres de organismos del Estado llevan mayúscula institucional inicial.',
      'opt-d': 'Colocar una coma no subsana el problema sintáctico de fondo del gerundio especificativo.'
    },
    hint: 'El gerundio no debe usarse para reemplazar a "que + verbo": no se dice "una caja conteniendo remedios", sino "que contiene remedios".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 5, p. 99; RAE DPD (Gerundio del BOE)',
    tags: ['gerundio especificativo', 'normativa', 'estilo academico'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-I-03',
    topicId: 'MOD-I',
    learningObjective: 'Aplicar las reglas de acentuación gráfica en casos de hiato acentual.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el Anexo 3 del Manual de la UNLaM (p. 95) se enseña el hiato. ¿Por qué palabras como "epidemiología", "país" o "cirugía" llevan tilde obligatoria, aun cuando terminan en vocal o "s"?',
    options: [
      { id: 'opt-a', text: 'Porque son excepciones caprichosas inventadas por los médicos.' },
      { id: 'opt-b', text: 'Porque son palabras extranjeras de origen inglés.' },
      { id: 'opt-c', text: 'Porque presentan hiato por acentuación en la vocal cerrada tónica (i, u) contigua a una vocal abierta (a, e, o), rompiendo el diptongo independientemente de las reglas generales de agudas, graves y esdrújulas.' },
      { id: 'opt-d', text: 'Porque tienen más de tres consonantes seguidas.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El hiato acentual o dierético (vocal cerrada tónica + vocal abierta átona) exige tilde dierética por ley fonética para deshacer el diptongo y marcar que la fuerza de la voz recae en la vocal cerrada (*e-pi-de-mio-lo-gí-a, pa-ís*).',
    distractorExplanations: {
      'opt-a': 'Responde a una regla fonológica estricta de la lengua española, no a un capricho.',
      'opt-b': 'Son vocablos patrimoniales o cultismos de raíz grecolatina perfectamente castellanizados.',
      'opt-d': 'La acentuación depende de la estructura vocálica, no de la cantidad de consonantes.'
    },
    hint: 'Cuando la "i" o la "u" suena más fuerte al lado de la "a", "e", "o", siempre lleva tilde para romper la unión.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 3, p. 95 (El hiato)',
    tags: ['hiato acentual', 'tilde dieretica', 'normativa ortografica'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-I-04',
    topicId: 'MOD-I',
    learningObjective: 'Distinguir la tilde diacrítica en monosílabos según el manual de UNLaM.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el Manual de la UNLaM (p. 95) se explica la tilde diacrítica para diferenciar clases de palabras. ¿En cuál de las siguientes oraciones la tilde diacrítica está correctamente colocada?',
    options: [
      { id: 'opt-a', text: '"Él médico solicitó que le dé una muestra de sangre para él análisis".' },
      { id: 'opt-b', text: '"Dé todos modos, sí el paciente quiere, té puede acompañar".' },
      { id: 'opt-c', text: '"Mí colega no sabe si tú hermano vendrá hoy".' },
      { id: 'opt-d', text: '"El médico solicitó que le dé una muestra de sangre para su análisis, porque él confía en el laboratorio".' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'En la opción b: "El" (artículo, sin tilde), "dé" (verbo dar, con tilde), "él" (pronombre personal, con tilde), "el" (artículo, sin tilde). Todo responde a la norma diacrítica. En la a, "él médico" y "él análisis" llevan tildes erróneas en artículos.',
    distractorExplanations: {
      'opt-a': 'Tilda indebidamente los artículos masculinos "el médico" y "el análisis".',
      'opt-b': '"De" preposición no lleva tilde; "si" condicional no lleva tilde; "te" pronombre no lleva tilde.',
      'opt-c': '"Mi" posesivo no lleva tilde; "tu" posesivo no lleva tilde.'
    },
    hint: '"Él" lleva tilde cuando es la persona (pronombre); sin tilde cuando acompaña al sustantivo (artículo). "Dé" lleva tilde cuando viene del verbo dar.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 3, pp. 95-96 (La tilde diacrítica)',
    tags: ['tilde diacritica', 'monosilabos', 'normativa'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-I-05',
    topicId: 'MOD-I',
    learningObjective: 'Reconocer la tilde diacrítica en interrogativos y exclamativos.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el Manual de UNLaM (p. 96) se detalla la tilde diacrítica en interrogativos indirectos. ¿Cuál de las siguientes oraciones está correctamente escrita?',
    options: [
      { id: 'opt-a', text: '"Los enfermeros no comprenden cómo se produjo el contagio ni cuándo empezó".' },
      { id: 'opt-b', text: '"Los enfermeros no comprenden como se produjo el contagio ni cuando empezó".' },
      { id: 'opt-c', text: '"Los enfermeros no comprenden cómo se produjo el contagio ni cuando empezó".' },
      { id: 'opt-d', text: '"Los enfermeros no comprenden como se produjo el contagio ni cuándo empezó".' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Las palabras *qué, quién, cómo, cuándo, dónde, cuánto* llevan tilde diacrítica cuando introducen oraciones interrogativas o exclamativas directas o indirectas ("no comprenden cómo...", "ni cuándo...").',
    distractorExplanations: {
      'opt-b': 'Omite la tilde en ambos adverbios interrogativos indirectos.',
      'opt-c': 'Omite la tilde en "cuándo".',
      'opt-d': 'Omite la tilde en "cómo".'
    },
    hint: 'Aunque no tengan signos de pregunta al lado, si tienen sentido de pregunta ("no sé cómo", "no sé cuándo"), llevan tilde.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 3, p. 96 (Interrogativos y exclamativos)',
    tags: ['interrogativos indirectos', 'tilde diacritica', 'ortografia'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-I-06',
    topicId: 'MOD-I',
    learningObjective: 'Identificar la regla de concordancia con verbos impersonales.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el Anexo 6 del Manual de UNLaM (p. 100) se repasan las dudas de concordancia. ¿Cuál de las siguientes formas es la única normativamente correcta?',
    options: [
      { id: 'opt-a', text: '"En la guardia hubieron muchos pacientes esperando atención médica".' },
      { id: 'opt-b', text: '"En la guardia hubo muchos pacientes esperando atención médica".' },
      { id: 'opt-c', text: '"Hacen dos años que el hospital inauguró la nueva sala".' },
      { id: 'opt-d', text: '"Habían varias vacunas disponibles en el refrigerador".' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'El verbo "haber" en su uso impersonal que denota existencia carece de sujeto y solo se conjuga en tercera persona del singular ("hubo", "había", "hay"). "Muchos pacientes" es el objeto directo, no el sujeto; por ende, pluralizarlo ("hubieron") es un error gramatical grave.',
    distractorExplanations: {
      'opt-a': '"Hubieron" es incorrecto para el uso impersonal de existencia.',
      'opt-c': 'El verbo "hacer" en sentido temporal también es impersonal: debe decirse "Hace dos años".',
      'opt-d': '"Habían" es incorrecto; debe decirse "Había varias vacunas".'
    },
    hint: 'En sentido de "existir", el verbo haber va SIEMPRE en singular: "hubo", "había", "hay".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 6, p. 100; Resumen P1, p. 10',
    tags: ['concordancia', 'verbos impersonales', 'haber impersonal'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-I-07',
    topicId: 'MOD-I',
    learningObjective: 'Reconocer el uso normativo de la coma de inciso o explicativa.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿En cuál de las siguientes opciones la coma está correctamente empleada para aislar un inciso explicativo según el manual de UNLaM?',
    options: [
      { id: 'opt-a', text: '"El decano de la facultad, firmó las actas de examen".' },
      { id: 'opt-b', text: '"Los médicos atienden, a todos los niños del barrio".' },
      { id: 'opt-c', text: '"La penicilina, descubierta accidentalmente por Alexander Fleming en 1928, revolucionó el tratamiento de las infecciones bacterianas".' },
      { id: 'opt-d', text: '"El paciente ingirió los comprimidos, con un vaso de agua mineral".' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Las comas encierran una aposición o inciso explicativo ("descubierta accidentalmente por Alexander Fleming en 1928") que puede eliminarse sin alterar el sentido básico de la oración principal. Las otras opciones colocan comas indebidas separando sujeto y predicado, o verbo y objeto.',
    distractorExplanations: {
      'opt-a': 'Incurre en la llamada "coma asesina" que separa incorrectamente el sujeto de su verbo.',
      'opt-b': 'Separa indebidamente el verbo ("atienden") de su objeto directo con preposición.',
      'opt-d': 'Separa indebidamente el verbo de su circunstancial de instrumento sin necesidad sintáctica.'
    },
    hint: 'El inciso va entre dos comas y se puede sacar de la oración sin que pierda sentido.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 2, pp. 89-90 (Puntuación: La coma de inciso)',
    tags: ['coma de inciso', 'normativa de puntuacion', 'sintaxis'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-I-08',
    topicId: 'MOD-I',
    learningObjective: 'Identificar la prohibición gramatical de separar sujeto y verbo con coma.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Por qué la oración "Los estudiantes de medicina de la UNLaM, preparan el examen final de Seminario" contiene una incorrección de puntuación según la cátedra?',
    options: [
      { id: 'opt-a', text: 'Porque la sigla UNLaM no puede llevar comas al costado.' },
      { id: 'opt-b', text: 'Porque el verbo "preparan" debe escribirse con mayúscula inicial.' },
      { id: 'opt-c', text: 'Porque falta un signo de exclamación al final.' },
      { id: 'opt-d', text: 'Porque nunca debe colocarse una coma entre el núcleo del sujeto y el núcleo del predicado (verbo principal), salvo que medie un inciso aclaratorio debidamente cerrado entre dos comas.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La separación de sujeto y predicado mediante una coma solitaria es uno de los errores más comunes de puntuación en ingresantes universitarios: rompe la cohesión oracional básica y está taxativamente desaconsejada por la RAE y el manual de UNLaM.',
    distractorExplanations: {
      'opt-a': 'El problema sintáctico no radica en la sigla, sino en la interrupción entre sujeto y verbo.',
      'opt-b': 'El verbo en posición media no lleva mayúscula.',
      'opt-c': 'Es una oración declarativa informativa, no un grito exclamativo.'
    },
    hint: 'Regla de oro: jamás pongas una coma suelta entre el sujeto y su verbo.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 2, p. 89; Resumen P1, p. 6',
    tags: ['coma entre sujeto y verbo', 'error frecuente', 'puntuacion'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-I-09',
    topicId: 'MOD-I',
    learningObjective: 'Reconocer el uso de dos puntos antes de una cita textual o enumeración explicativa.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el Manual de la UNLaM (p. 91) se enseña el uso de los dos puntos. ¿En cuál de las siguientes situaciones es normativamente correcto su empleo?',
    options: [
      { id: 'opt-a', text: 'Después de un verbo introductor antes de abrir una cita textual directa entre comillas (ej. El testigo declaró: "Vi al médico entrar a la sala").' },
      { id: 'opt-b', text: 'Entre el sujeto y el artículo de una oración simple.' },
      { id: 'opt-c', text: 'Al final de cada renglón de la hoja de examen.' },
      { id: 'opt-d', text: 'En lugar del punto final para ahorrar espacio.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Los dos puntos anuncian lo que sigue: se usan antes de una cita textual directa, antes de una enumeración anunciada con anticipación o para introducir una conclusión o causa que explica la proposición anterior.',
    distractorExplanations: {
      'opt-b': 'No se coloca ningún signo de puntuación en esa posición sintáctica.',
      'opt-c': 'Los renglones no se puntúan mecánicamente en los márgenes.',
      'opt-d': 'El texto se cierra siempre con punto final, no con dos puntos.'
    },
    hint: 'Los dos puntos avisan: "atención, ahora viene la cita literal o la lista".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 2, p. 91 (Los dos puntos)',
    tags: ['dos puntos', 'citas textuales', 'normativa'],
    estimatedSeconds: 35
  },
  {
    id: 'Q-MOD-I-10',
    topicId: 'MOD-I',
    learningObjective: 'Identificar el uso correcto de mayúsculas en nombres de asignaturas e instituciones.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Según las reglas de mayúsculas del Manual de la UNLaM (p. 97), ¿cuál de las siguientes opciones respeta la normativa ortográfica?',
    options: [
      { id: 'opt-a', text: '"Mía Cursa seminario De comprensión Y producción En El departamento".' },
      { id: 'opt-b', text: '"Mía cursa Seminario de Comprensión y Producción de Textos en el Departamento de Ciencias de la Salud de la Universidad Nacional de La Matanza".' },
      { id: 'opt-c', text: '"mía cursa seminario en la unlam sin mayúsculas porque es más moderno".' },
      { id: 'opt-d', text: '"MÍA CURSA TODO CON MAYÚSCULAS PORQUE ASÍ NO TIENE QUE PONER TILDES".' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Llevan mayúscula inicial los nombres propios de personas (*Mía*), los nombres formales de asignaturas curriculares (*Seminario de Comprensión y Producción de Textos*) y las entidades institucionales (*Departamento de Ciencias de la Salud, Universidad Nacional de La Matanza*). Además, las mayúsculas conservan siempre su tilde ortográfica.',
    distractorExplanations: {
      'opt-a': 'Aplica mayúsculas aleatorias en preposiciones y verbos, violando la norma ortográfica.',
      'opt-c': 'Omitir mayúsculas en nombres propios e instituciones es una incorrección grave.',
      'opt-d': 'La RAE establece que las mayúsculas deben llevar tilde siempre si les corresponde por regla.'
    },
    hint: 'Los nombres de materias, facultades y universidades van con mayúscula en sus palabras principales.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 4, pp. 97-98 (Uso de las mayúsculas y acentuación de mayúsculas)',
    tags: ['mayusculas', 'instituciones', 'normativa ortografica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-I-11',
    topicId: 'MOD-I',
    learningObjective: 'Reconocer la concordancia de género y número en sujetos compuestos.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé la siguiente oración: "La enfermera y el médico [ingresar] al quirófano a las ocho de la mañana". ¿Cuál es la forma de concordancia verbal correcta según la gramática normativa?',
    options: [
      { id: 'opt-a', text: '"Ingresó", porque concuerda con la enfermera que está primera.' },
      { id: 'opt-b', text: '"Ingresarán", porque la enfermera es mujer.' },
      { id: 'opt-c', text: '"Ingresaron", porque un sujeto compuesto coordinado por la conjunción "y" exige verbo en plural.' },
      { id: 'opt-d', text: '"Ingresaban de a uno solo por separado".' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Dos o más núcleos sustantivos singulares coordinados copulativamente (*la enfermera y el médico*) forman un sujeto compuesto plural que demanda un verbo en tercera persona del plural (*ingresaron*).',
    distractorExplanations: {
      'opt-a': 'La concordancia en singular es un error cuando el sujeto compuesto precede al verbo.',
      'opt-b': 'El género de los interlocutores no modifica el tiempo verbal hacia futuro.',
      'opt-d': 'No es una forma verbal legítima de conjugación de concordancia.'
    },
    hint: 'Sujeto compuesto de dos personas unidas por "y" = verbo en plural.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 6, p. 100 (Concordancia)',
    tags: ['concordancia', 'sujeto compuesto', 'gramatica normativa'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-I-12',
    topicId: 'MOD-I',
    learningObjective: 'Identificar conectores contraargumentativos fuertes frente a débiles.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'En el Anexo 7 de conectores del Manual de UNLaM (p. 101) se clasifican los conectores de contraste. ¿Cuál de los siguientes pares contiene conectores que introducen una contraargumentación excluyente (adversativa correctiva o de reemplazo)?',
    options: [
      { id: 'opt-a', text: '"Además" e "incluso".' },
      { id: 'opt-b', text: '"Porque" y "ya que".' },
      { id: 'opt-c', text: '"En primer término" y "finalmente".' },
      { id: 'opt-d', text: '"Sino" y "sino que" (precedidos de negación: "No fue una infección viral, sino bacteriana").' }
    ],
    correctAnswer: 'opt-d',
    explanation: '"Sino" y "sino que" son conectores adversativos exclusivos o correctivos: exigen una cláusula previa negativa ("No X") e introducen el elemento afirmativo que sustituye o corrige a la primera proposición negada.',
    distractorExplanations: {
      'opt-a': 'Son conectores aditivos de suma o gradación argumentativa.',
      'opt-b': 'Son conectores causales.',
      'opt-c': 'Son conectores de ordenamiento discursivo secuencial.'
    },
    hint: 'Fijate en la estructura: "No es X, SINO Y".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 7, p. 101; Resumen P1, p. 6',
    tags: ['conectores adversativos', 'sino y sino que', 'anexo de conectores'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-I-13',
    topicId: 'MOD-I',
    learningObjective: 'Reconocer el uso de la coma vocativa.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En la frase "Doctora Gómez, necesitamos que evalúe a este paciente de inmediato", ¿qué función cumple la coma tras "Gómez"?',
    options: [
      { id: 'opt-a', text: 'Coma vocativa: aísla la palabra que se utiliza para llamar o apelar directamente al interlocutor.' },
      { id: 'opt-b', text: 'Coma de elipsis de un verbo irregular.' },
      { id: 'opt-c', text: 'Coma decimal que indica una fracción de dinero.' },
      { id: 'opt-d', text: 'Coma hiperbática de cambio de tiempo.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El vocativo (la persona o entidad a la que nos dirigimos explícitamente en el discurso) debe ir obligatoriamente separado por coma del resto de la oración: al principio (*Doctora, venga*), al final (*Venga, doctora*) o entre comas si está al medio (*Por favor, doctora, venga*).',
    distractorExplanations: {
      'opt-b': 'No se elide ningún verbo; el verbo "necesitamos" está expreso.',
      'opt-c': 'No intervienen cantidades matemáticas numéricas.',
      'opt-d': 'No hay alteración del orden sintáctico circunstancial (hipérbaton).'
    },
    hint: 'La coma vocativa siempre acompaña al nombre o título de la persona a la que le estás hablando.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 2, p. 90 (La coma vocativa)',
    tags: ['coma vocativa', 'puntuacion', 'apelacion al interlocutor'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-I-14',
    topicId: 'MOD-I',
    learningObjective: 'Identificar la diferencia ortográfica entre "sino" y "si no".',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: '¿En cuál de las siguientes oraciones se emplea correctamente la locución condicional negativa "si no" (en dos palabras)?',
    options: [
      { id: 'opt-a', text: '"El paciente no tiene tos, si no fiebre alta únicamente".' },
      { id: 'opt-b', text: '"Si no administramos el antibiótico en las próximas horas, la infección podría diseminarse".' },
      { id: 'opt-c', text: '"No fue un accidente, si no un descuido voluntario".' },
      { id: 'opt-d', text: '"No quiero té, si no café con leche".' }
    ],
    correctAnswer: 'opt-b',
    explanation: '"Si no" (separado) introduce una condición negativa (conjunción condicional *si* + adverbio de negación *no*: equivale a *en caso de que no administremos...*). En las opciones a, c y d debe escribirse "sino" (junto), por ser conector adversativo contrapuesto a una negación.',
    distractorExplanations: {
      'opt-a': 'Debe escribirse "sino" junto por ser adversativo correctivo.',
      'opt-c': 'Debe escribirse "sino" junto contrapuesto a "No fue...".',
      'opt-d': 'Debe escribirse "sino" junto contrapuesto a "No quiero...".'
    },
    hint: 'Si podés decir "en caso de que no...", va separado ("si no"). Si equivale a "por el contrario", va junto ("sino").',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 3, p. 96; Anexo 7, p. 101',
    tags: ['sino vs si no', 'ortografia', 'condicional vs adversativo'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-I-15',
    topicId: 'MOD-I',
    learningObjective: 'Reconocer el uso correcto de las normas de citado bibliográfico APA según el Manual UNLaM.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el Anexo 1 del Manual de la UNLaM (pp. 87-88) se enseñan las normas de citado bibliográfico. ¿Cuál de las siguientes referencias bibliográficas de un libro sigue el formato institucional estándar de la cátedra?',
    options: [
      { id: 'opt-a', text: 'Un libro de lectura de Arnoux que compré en una fotocopiadora en 1996.' },
      { id: 'opt-b', text: 'Talleres de lectura (Arnoux Elvira), precio $500, página 1 a 100.' },
      { id: 'opt-c', text: 'ARNOUX, E. (1996). Talleres de lectura y escritura. Buenos Aires, Argentina: UBA.CBC.' },
      { id: 'opt-d', text: '1996 - Arnoux - Talleres - Buenos Aires - UBA.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El formato canónico institucional consigna: APELLIDO, Inicial del nombre. (Año). Título de la obra en cursiva. Ciudad, País: Editorial o institución publicadora.',
    distractorExplanations: {
      'opt-a': 'Es un comentario informal sin estructura de asiento bibliográfico académico.',
      'opt-b': 'No respeta el orden normativo de elementos ni incluye datos de edición formal.',
      'opt-d': 'Presenta una lista desarticulada que vulnera las normas internacionales y de la cátedra.'
    },
    hint: 'Apellido en mayúsculas, año entre paréntesis, título de la obra y lugar con editorial.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 1, p. 87 (Referencias bibliográficas: Libros)',
    tags: ['citas bibliograficas', 'apa', 'anexo 1 manual unlam'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-I-16',
    topicId: 'MOD-I',
    learningObjective: 'Identificar la acentuación de palabras esdrújulas y sobresdrújulas.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: '¿Por qué palabras del ámbito de la salud como "clínico", "diagnóstico", "quirúrgico" y "farmacológico" llevan tilde ortográfica en todos los casos?',
    options: [
      { id: 'opt-a', text: 'Porque terminan en la letra "o".' },
      { id: 'opt-b', text: 'Porque los médicos deciden qué palabras llevan tilde en cada hospital.' },
      { id: 'opt-c', text: 'Porque tienen cuatro sílabas de longitud obligatoria.' },
      { id: 'opt-d', text: 'Porque son palabras esdrújulas (su sílaba tónica es la antepenúltima) y la regla general establece que todas las palabras esdrújulas llevan tilde sin excepción.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La regla general de acentuación gráfica del español establece que todas las palabras esdrújulas (*clí-ni-co, diag-nós-ti-co*) y sobresdrújulas llevan tilde siempre, sin importar la letra final con la que terminen.',
    distractorExplanations: {
      'opt-a': 'Las palabras llanas o graves terminadas en vocal no llevan tilde; las esdrújulas sí.',
      'opt-b': 'Las reglas ortográficas dependen de la Real Academia y la convención panhispánica.',
      'opt-c': 'La cantidad de sílabas no define si es esdrújula; lo define la posición de la sílaba tónica.'
    },
    hint: 'Regla básica: las palabras esdrújulas se acentúan gráficamente SIEMPRE.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 3, p. 94 (Reglas de acentuación gráfica)',
    tags: ['esdrujulas', 'regla general', 'acentuacion'],
    estimatedSeconds: 35
  },
  {
    id: 'Q-MOD-I-17',
    topicId: 'MOD-I',
    learningObjective: 'Reconocer la diferencia entre conectores causales y consecutivos en oraciones complejas.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé los dos enunciados:\n(A) "Se declaró la emergencia sanitaria ya que colapsaron las camas de internación".\n(B) "Colapsaron las camas de internación; de ahí que se declarara la emergencia sanitaria".\n¿Qué relación lógica introducen "ya que" y "de ahí que"?',
    options: [
      { id: 'opt-a', text: '"Ya que" introduce la causa y "de ahí que" introduce la consecuencia.' },
      { id: 'opt-b', text: '"Ya que" introduce la consecuencia y "de ahí que" introduce la causa.' },
      { id: 'opt-c', text: 'Ambos introducen una duda irresoluble.' },
      { id: 'opt-d', text: 'Ambos son conectores temporales de futuro.' }
    ],
    correctAnswer: 'opt-a',
    explanation: '"Ya que" encabeza la proposición causal (el motivo por el cual se declaró la emergencia). "De ahí que" encabeza la proposición consecutiva (el resultado o efecto directo derivado del colapso previo).',
    distractorExplanations: {
      'opt-b': 'Invierte las funciones semánticas de ambos conectores.',
      'opt-c': 'Expresan relaciones causales objetivas con certeza apodíctica, no dudas.',
      'opt-d': 'No son conectores cronológicos temporales.'
    },
    hint: 'Preguntate: ¿cuál explica la razón y cuál explica lo que pasó después como resultado?',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 7, pp. 101-102; Resumen P1, p. 6',
    tags: ['causales y consecutivos', 'de ahi que', 'ya que'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-I-18',
    topicId: 'MOD-I',
    learningObjective: 'Identificar el uso correcto de comillas dobles y comillas simples.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el Manual de la UNLaM (p. 53, 91) se enseña el anidamiento de comillas. Si dentro de una cita textual que ya está encerrada entre comillas dobles el autor citado incluye a su vez una palabra encomillada, ¿qué signo corresponde emplear?',
    options: [
      { id: 'opt-a', text: 'Signos de pesos ($) para llamar la atención del lector.' },
      { id: 'opt-b', text: 'Comillas simples o angulares internas (\'...\') para jerarquizar la cita interna sin confundirla con los límites de la cita principal.' },
      { id: 'opt-c', text: 'Tres puntos suspensivos seguidos de signo de admiración.' },
      { id: 'opt-d', text: 'Borrar la cita interna para no complicarse la vida.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La norma ortográfica de jerarquía de comillas establece que cuando se debe encomillar un término dentro de un texto que ya está entrecomillado, se recurre a comillas simples o de segundo orden (\'...\') para preservar la polifonía sin quebrar la sintaxis.',
    distractorExplanations: {
      'opt-a': 'El signo de pesos representa moneda monetaria, no puntuación discursiva.',
      'opt-c': 'Los puntos suspensivos indican omisión o suspenso, no anidamiento de citas.',
      'opt-d': 'La cita debe reproducirse fidedignamente respetando la voz de la fuente.'
    },
    hint: 'Una comilla adentro de otra comilla se pone simple para que no se choque.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 53; Anexo 2, p. 91',
    tags: ['comillas simples', 'anidamiento de citas', 'normativa tipografica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-I-19',
    topicId: 'MOD-I',
    learningObjective: 'Detectar error en la correlación temporal del discurso indirecto.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'El director dijo el mes pasado: "El nuevo quirófano estará listo mañana". Al trasladar este enunciado a discurso indirecto en un informe escrito hoy, ¿cuál es la correlación temporal y deíctica correcta?',
    options: [
      { id: 'opt-a', text: '"El director dijo el mes pasado que el nuevo quirófano estará listo mañana".' },
      { id: 'opt-b', text: '"El director dijo que el quirófano ya se rompió todo".' },
      { id: 'opt-c', text: '"El director afirmó el mes pasado que el nuevo quirófano estaría listo al día siguiente".' },
      { id: 'opt-d', text: '"El director dijo: que el quirófano mañana".' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Al subordinar un verbo principal en pasado ("afirmó"), el futuro simple del discurso directo ("estará") debe correlacionarse en condicional simple ("estaría"), y el deíctico temporal deíctico "mañana" se desancla transformándose en "al día siguiente".',
    distractorExplanations: {
      'opt-a': 'Conserva erróneamente los deícticos de tiempo presente y futuro del momento original, desfasando el sentido hoy.',
      'opt-b': 'Inventa una situación de rotura que el texto fuente no contenía.',
      'opt-d': 'Genera una frase agramatical e incompleta.'
    },
    hint: 'En pasado, el futuro "estará" pasa a "estaría", y "mañana" pasa a "al día siguiente".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 55; Resumen P1, p. 22',
    tags: ['correlacion verbal', 'discurso indirecto', 'deixis temporal'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-I-20',
    topicId: 'MOD-I',
    learningObjective: 'Reconocer el valor del punto y seguido frente al punto y aparte.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En la organización de un texto académico, ¿cuál es la función distintiva del "punto y aparte"?',
    options: [
      { id: 'opt-a', text: 'Separar enunciados dentro de un mismo párrafo que abordan la misma idea o subtema inmediato.' },
      { id: 'opt-b', text: 'Indicar que el autor se quedó sin tinta en la birome.' },
      { id: 'opt-c', text: 'Reemplazar a todos los signos de interrogación.' },
      { id: 'opt-d', text: 'Cerrar un párrafo para dar paso a un nuevo subtema o a un cambio de enfoque o perspectiva dentro de la coherencia global del texto.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El punto y aparte marca la frontera entre párrafos: delimita el cierre de un bloque temático o subtema y abre el espacio para una nueva etapa en la progresión discursiva. El punto y seguido separa oraciones dentro del mismo párrafo.',
    distractorExplanations: {
      'opt-a': 'Esa es la función del punto y seguido, no del punto y aparte.',
      'opt-b': 'Los signos ortográficos responden a la estructura discursiva, no a fallas de insumos materiales.',
      'opt-c': 'No cumple funciones de modalidad interrogativa.'
    },
    hint: 'El punto y aparte cambia de párrafo porque pasamos a un subtema nuevo.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Anexo 2, p. 89 (El punto y aparte)',
    tags: ['punto y aparte', 'organizacion de parrafos', 'puntuacion'],
    estimatedSeconds: 35
  }
];
