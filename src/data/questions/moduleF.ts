import { Question } from '../../types';

export const MODULE_F_QUESTIONS: Question[] = [
  {
    id: 'Q-MOD-F-01',
    topicId: 'MOD-F',
    learningObjective: 'Identificar la estrategia discursiva de definición.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En el enunciado: "La inmunidad de rebaño es la protección indirecta contra una enfermedad infecciosa que se logra cuando una proporción suficiente de una población se vuelve inmune", el autor utiliza la estrategia de:',
    options: [
      { id: 'opt-a', text: 'Definición, porque delimita el significado exacto de un concepto técnico estableciendo su género próximo y sus diferencias específicas.' },
      { id: 'opt-b', text: 'Anécdota graciosa personal.' },
      { id: 'opt-c', text: 'Pregunta retórica sin respuesta.' },
      { id: 'opt-d', text: 'Concesión ante una crítica de un rival.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La definición es una estrategia explicativa nuclear que responde a "¿qué es X?": introduce un término y enuncia los rasgos necesarios y suficientes que delimitan su campo semántico.',
    distractorExplanations: {
      'opt-b': 'No hay un relato de vivencia personal humorística.',
      'opt-c': 'No se formula como interrogación; es una aserción declarativa categórica.',
      'opt-d': 'No concede parcialmente la razón a ningún oponente.'
    },
    hint: 'Fijate en la estructura canónica: "[Término] es [significado conceptual]".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 49; Resumen P1, p. 15; Resumen P2, p. 8',
    tags: ['estrategias explicativas', 'definicion', 'precision conceptual'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-F-02',
    topicId: 'MOD-F',
    learningObjective: 'Reconocer la estrategia de reformulación y sus marcadores típicos.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'Leé el fragmento: "El paciente padece disfagia orofaríngea; dicho en otros términos, experimenta una dificultad grave para tragar alimentos sólidos y líquidos". ¿Qué estrategia discursiva se implementa a partir de "dicho en otros términos"?',
    options: [
      { id: 'opt-a', text: 'Desmentida categórica del diagnóstico previo.' },
      { id: 'opt-b', text: 'Reformulación, que reproduce y aclara en un registro más accesible el concepto médico antes enunciado sin alterar su sentido de base.' },
      { id: 'opt-c', text: 'Argumento de sentido común popular.' },
      { id: 'opt-d', text: 'Narración cronológica con nudo y desenlace.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La reformulación (o paráfrasis explicativa) aclara o amplía un enunciado previo hermético o técnico empleando giros equivalentes (*es decir, o sea, dicho de otro modo*) para asegurar la comprensión del destinatario.',
    distractorExplanations: {
      'opt-a': 'No desmiente ni refuta lo dicho; lo reafirma con palabras más sencillas.',
      'opt-c': 'La explicación sigue siendo rigurosa y clínica, no una superstición popular.',
      'opt-d': 'No se relata una sucesión temporal de acciones dramáticas.'
    },
    hint: 'La expresión "dicho en otros términos" es la señal inequívoca de una paráfrasis o reformulación.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 50; Resumen P1, p. 15; Resumen P2, p. 8',
    tags: ['reformulacion', 'parafrasis', 'estrategias explicativas'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-F-03',
    topicId: 'MOD-F',
    learningObjective: 'Distinguir un ejemplo de una definición abstracta.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En un texto sobre afecciones respiratorias crónicas leemos: "Por ejemplo, el asma bronquial y la enfermedad pulmonar obstructiva crónica (EPOC) son dos de los cuadros obstructivos más prevalentes en la consulta ambulatoria". ¿Qué función cumple esta estrategia de ejemplificación?',
    options: [
      { id: 'opt-a', text: 'Demostrar que el autor tiene dudas sobre qué enfermedad está describiendo.' },
      { id: 'opt-b', text: 'Concluir definitivamente el libro de medicina.' },
      { id: 'opt-c', text: 'Presentar casos concretos y particulares que materializan y hacen comprensible una categoría conceptual general previa.' },
      { id: 'opt-d', text: 'Desmentir que los pulmones existan en el cuerpo humano.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El ejemplo o ilustración baja el concepto abstracto a una instancia tangible y reconocible, permitiendo al receptor asociar la teoría general a casos específicos de la realidad.',
    distractorExplanations: {
      'opt-a': 'Dar ejemplos demuestra solvencia pedagógica, no ignorancia o duda.',
      'opt-b': 'Un ejemplo suele ser un recurso intermedio de desarrollo, no el cierre global de una obra.',
      'opt-d': 'Es una opción incoherente y ridícula.'
    },
    hint: 'El conector "por ejemplo" introduce casos concretos de una clase general.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 50; Resumen P1, p. 15',
    tags: ['ejemplificacion', 'casos concretos', 'estrategias explicativas'],
    estimatedSeconds: 35
  },
  {
    id: 'Q-MOD-F-04',
    topicId: 'MOD-F',
    learningObjective: 'Identificar la estrategia de comparación o analogía y sus advertencias.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un divulgador explica: "El sistema inmunitario funciona de modo similar al equipo de seguridad de un aeropuerto: los anticuerpos actúan como escáneres que detectan equipajes sospechosos (los antígenos) para neutralizarlos antes de que causen daño". ¿Qué estrategia discursiva se emplea y qué advertencia metodológica señala la cátedra?',
    options: [
      { id: 'opt-a', text: 'Es una cita textual directa de las actas de la Policía de Seguridad Aeroportuaria.' },
      { id: 'opt-b', text: 'Es una definición botánica exacta de los linfocitos T.' },
      { id: 'opt-c', text: 'Es una falacia que anula toda validez científica del artículo.' },
      { id: 'opt-d', text: 'Es una analogía o comparación pedagógica; es útil para visualizar mecanismos complejos, pero debe recordarse que tiene límites y no reproduce la totalidad de los procesos moleculares reales.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La analogía establece un puente cognitivo entre un dominio desconocido (inmunología) y uno familiar (seguridad aeroportuaria). La cátedra advierte que las analogías son recursos didácticos de apoyo, no identidades ontológicas literales.',
    distractorExplanations: {
      'opt-a': 'No es una cita oficial policial; es una construcción metafórica del divulgador.',
      'opt-b': 'La inmunología humana no es botánica vegetal.',
      'opt-c': 'Las analogías son herramientas retóricas y pedagógicas perfectamente legítimas en la explicación.'
    },
    hint: 'Fijate en la estructura comparativa: "funciona de modo similar a...".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 51; Criterios Pedagógicos UNLaM; Resumen P1, p. 16',
    tags: ['analogia', 'comparacion', 'limites de la metafora'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-F-05',
    topicId: 'MOD-F',
    learningObjective: 'Reconocer la cita o voz de autoridad en la argumentación.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un debate sobre políticas de salud mental, el autor escribe: "Como advirtió el Dr. Ramón Carrillo en su célebre tratado: Frente a las enfermedades que genera la miseria, frente a la angustia de los pueblos, los microbios, como causas de enfermedad, son pobres causas". ¿Qué estrategia argumentativa se implementa?',
    options: [
      { id: 'opt-a', text: 'Cita de autoridad, que convoca las palabras de una figura de máxima legitimidad científica e histórica en la salud pública para respaldar y dar peso probatorio a la postura del emisor.' },
      { id: 'opt-b', text: 'Argumento de sentido común popular sin respaldo.' },
      { id: 'opt-c', text: 'Pregunta retórica encubierta.' },
      { id: 'opt-d', text: 'Desmentida de la existencia de Ramón Carrillo.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El argumento de autoridad (o *argumentum ad verecundiam* legítimo en la retórica) introduce la voz de un experto o referente eminente cuya trayectoria es reconocida por la comunidad, prestando su prestigio para avalar la tesis del autor.',
    distractorExplanations: {
      'opt-b': 'Carrillo fue el primer ministro de salud de la Argentina; su voz no es mero rumor popular.',
      'opt-c': 'La frase es una afirmación apodíctica, no una interrogación retórica.',
      'opt-d': 'La cita reivindica la vigencia del pensamiento de Carrillo, no niega su existencia.'
    },
    hint: 'La apelación a un científico, sanitarista o pensador consagrado es una cita de autoridad.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 52; Resumen P1, p. 17; Resumen P2, p. 8',
    tags: ['cita de autoridad', 'ramon carrillo', 'estrategias argumentativas'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-F-06',
    topicId: 'MOD-F',
    learningObjective: 'Diferenciar un argumento empírico de un argumento de sentido común.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Considerá las dos justificaciones siguientes:\n1. "No hay que bañarse después de comer porque a todos en el barrio nos dijeron siempre que se te corta la digestión".\n2. "Un ensayo clínico aleatorizado con 1.200 sujetos demostró que el ejercicio aeróbico regular reduce la presión arterial sistólica en un promedio de 8,3 mmHg (p < 0.01)".\n¿Cómo clasifica la cátedra a cada una de estas justificaciones?',
    options: [
      { id: 'opt-a', text: 'La 1 es un argumento empírico y la 2 es de sentido común.' },
      { id: 'opt-b', text: 'La 1 es un argumento de sentido común (creencia popular/doxa no contrastada científicamente) y la 2 es un argumento empírico (fundamentado en datos observables, metodología experimental y estadística rigurosa).' },
      { id: 'opt-c', text: 'Ambas son opiniones de igual valor y rigor epistemológico en la medicina universitaria.' },
      { id: 'opt-d', text: 'Ninguna es un argumento; son definiciones de diccionario.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La cátedra de Seminario exige distinguir con claridad los argumentos empíricos (respaldados en evidencia científica verificable y datos medibles) de los argumentos de sentido común (basados en tradiciones compartidas o saberes populares que la ciencia somete a revisión).',
    distractorExplanations: {
      'opt-a': 'Invierte las definiciones de ambos argumentos.',
      'opt-c': 'En el ámbito académico y biomédico, la evidencia empírica contrastada tiene jerarquía epistemológica superior a la doxa popular.',
      'opt-d': 'Ambas proposiciones funcionan como argumentos en sus respectivos ámbitos discursivos.'
    },
    hint: 'Fijate cuál se apoya en un estudio con números y pruebas, y cuál en lo que "se dice en el barrio".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 52-53; Resumen P1, pp. 16-17',
    tags: ['argumento empirico', 'sentido comun', 'evidencia cientifica'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-F-07',
    topicId: 'MOD-F',
    learningObjective: 'Reconocer la estrategia argumentativa de concesión.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En un ensayo sobre tecnología en medicina leemos: "Si bien la inteligencia artificial permite procesar miles de imágenes radiológicas en segundos, esta herramienta jamás podrá reemplazar el juicio clínico empático y la relación humana médico-paciente". ¿Cuál es el movimiento argumentativo de la concesión?',
    options: [
      { id: 'opt-a', text: 'Rendirse completamente ante el adversario y darle toda la razón.' },
      { id: 'opt-b', text: 'Mentir deliberadamente para confundir al lector ingenuo.' },
      { id: 'opt-c', text: 'Reconocer parcialmente un argumento o ventaja de la contraparte para ganar credibilidad, para luego introducir con mayor fuerza la tesis principal que relativiza o supera ese dato.' },
      { id: 'opt-d', text: 'Definir qué significa la palabra "radiología".' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La concesión es una estrategia argumentativa dialéctica de alta eficacia: el emisor acepta un aspecto válido de la postura rival (*la IA es veloz*), pero demuestra que este hecho no invalida su postura de fondo (*el juicio humano sigue siendo insustituible*).',
    distractorExplanations: {
      'opt-a': 'El enunciador no capitula; reafirma su postura principal con más firmeza.',
      'opt-b': 'La concesión se basa precisamente en admitir un hecho verdadero, no una mentira.',
      'opt-d': 'No se brinda una definición léxica de radiología.'
    },
    hint: 'Pensá en la jugada: "Te concedo que esto es verdad, pero aun así mi postura de fondo se sostiene".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 52; Resumen P1, p. 18; Resumen P2, p. 8',
    tags: ['concesion', 'estrategias argumentativas', 'dialéctica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-F-08',
    topicId: 'MOD-F',
    learningObjective: 'Identificar la estrategia de desmentida o refutación.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Leé el siguiente fragmento de una nota de salud pública:\n"No es cierto que las vacunas debiliten el sistema inmunitario infantil, como afirman ciertos grupos desinformados en internet; muy por el contrario, los estudios inmunológicos demuestran que lo entrenan y fortalecen frente a patógenos letales".\n¿Qué estrategia argumentativa se pone en juego?',
    options: [
      { id: 'opt-a', text: 'Pregunta retórica de suspenso dramático.' },
      { id: 'opt-b', text: 'Metáfora literaria del siglo XIX.' },
      { id: 'opt-c', text: 'Anécdota graciosa de la infancia del autor.' },
      { id: 'opt-d', text: 'Desmentida o refutación (desarticulación de un contraargumento u opinión ajena mostrando su falsedad o falta de fundamento).' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'La desmentida (o refutación) consiste en señalar explícitamente una premisa adversa ("No es cierto que...") y confrontarla directamente con la evidencia o el razonamiento que demuestra su invalidez ("muy por el contrario...").',
    distractorExplanations: {
      'opt-a': 'El fragmento es una aserción contundente, no un interrogante sin respuesta.',
      'opt-b': 'Usa lenguaje técnico contemporáneo de inmunología médica, no metáforas poéticas decimonónicas.',
      'opt-c': 'No relata anécdotas autobiográficas infantiles.'
    },
    hint: 'Buscá la estructura clásica de desmentida: "No es verdad que X, sino Y".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 52; Resumen P1, p. 18; Resumen P2, p. 8',
    tags: ['desmentida', 'refutacion', 'contraargumento'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-F-09',
    topicId: 'MOD-F',
    learningObjective: 'Reconocer la función de la pregunta retórica en la argumentación.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En un editorial sobre inequidad hospitalaria, el autor pregunta: "¿Acaso el derecho a la vida debe depender del saldo en la cuenta bancaria de un paciente?". ¿Qué persigue el enunciador con esta pregunta retórica?',
    options: [
      { id: 'opt-a', text: 'Involucrar reflexivamente al receptor orientándolo hacia una respuesta implícita obvia (la respuesta es un rotundo "no"), reforzando la indignación ética y su tesis central.' },
      { id: 'opt-b', text: 'Conocer sinceramente el saldo bancario de cada persona que está leyendo el diario.' },
      { id: 'opt-c', text: 'Demostrar que desconoce las leyes sanitarias del país.' },
      { id: 'opt-d', text: 'Realizar una encuesta matemática para calcular porcentajes.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'La pregunta retórica no busca recabar información fáctica del lector, sino guiar su pensamiento hacia una conclusión evidente que ya está sugerida en la formulación del interrogante, movilizando su convicción.',
    distractorExplanations: {
      'opt-b': 'No es una consulta contable o bancaria literal a los lectores.',
      'opt-c': 'La pregunta es un recurso de apelación moral y discursiva, no signo de ignorancia jurídica.',
      'opt-d': 'No forma parte de un formulario censal estadístico.'
    },
    hint: 'Es una pregunta que no espera que le respondas, porque la respuesta es obvia para todos.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 52; Resumen P1, p. 16',
    tags: ['pregunta retorica', 'apelacion al lector', 'argumentacion'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-F-10',
    topicId: 'MOD-F',
    learningObjective: 'Identificar la estrategia de narración o historia de caso en textos biomédicos.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'El Manual de la UNLaM (p. 50) y el resumen P1 (p. 18) citan el ejemplo de Henry Cavendish descubriendo el hidrógeno o relatos de casos clínicos. Cuando un autor incluye el relato de cómo un médico rural descubrió un brote de triquinosis en un pueblo, ¿qué estrategia discursiva está empleando?',
    options: [
      { id: 'opt-a', text: 'Definición tautológica de la triquinosis.' },
      { id: 'opt-b', text: 'Narración o historia de caso, que utiliza un relato secuencial con personajes y acciones para ilustrar de modo vivencial un proceso epidemiológico complejo.' },
      { id: 'opt-c', text: 'Cálculo algebraico diferencial.' },
      { id: 'opt-d', text: 'Secuencia dialogal pura sin narrador.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La historia de caso (o caso clínico narrado) aporta espesor dramático y realismo a la teoría: muestra cómo se manifiestan los síntomas y el descubrimiento en una situación concreta con personas de carne y hueso.',
    distractorExplanations: {
      'opt-a': 'Una narración de acciones no es una definición circular de diccionario.',
      'opt-c': 'No hay operaciones matemáticas en el relato histórico.',
      'opt-d': 'Hay un narrador que organiza la historia en tercera persona; no es un guión de teatro dialogal puro.'
    },
    hint: 'Contar lo que le pasó al médico rural es relatar una historia real para explicar mejor el tema.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 50; Resumen P1, p. 18',
    tags: ['historia de caso', 'narracion explicativa', 'caso clinico'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-F-11',
    topicId: 'MOD-F',
    learningObjective: 'Reconocer la estructura de la explicación causal (causa-consecuencia).',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'En el enunciado "La obstrucción de la arteria coronaria interrumpe el flujo de oxígeno al miocardio; en consecuencia, se desencadena la necrosis del tejido cardíaco", ¿qué estrategia discursiva se emplea y qué conector la vertebra?',
    options: [
      { id: 'opt-a', text: 'Metáfora astronómica, vertebrada por la palabra "oxígeno".' },
      { id: 'opt-b', text: 'Concesión retórica, vertebrada por el verbo "desencadena".' },
      { id: 'opt-c', text: 'Explicación causal, vertebrada por el conector consecutivo "en consecuencia".' },
      { id: 'opt-d', text: 'Reformulación léxica, vertebrada por el adjetivo "cardíaco".' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La explicación causal vincula el hecho antecedente (la obstrucción arterial) con su efecto fisiopatológico directo (la necrosis), señalando explícitamente el lazo causal mediante la locución "en consecuencia".',
    distractorExplanations: {
      'opt-a': 'Describe fisiología cardiovascular real, no astros o planetas.',
      'opt-b': 'No hay conectores concesivos en la oración analizada.',
      'opt-d': 'No reformula términos en palabras más simples; expone el encadenamiento causa-efecto.'
    },
    hint: 'Buscá la relación entre la causa (obstrucción) y el efecto (necrosis) y el nexo "en consecuencia".',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 50; Resumen P1, p. 19',
    tags: ['explicacion causal', 'causa y consecuencia', 'fisiopatologia'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-F-12',
    topicId: 'MOD-F',
    learningObjective: 'Analizar la falacia de apelación a la autoridad ilegítima.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'Un artículo publicitario afirma: "La famosa actriz de telenovelas Susana Giménez recomienda tomar estas pastillas de colágeno marino para prevenir el Alzheimer". ¿Por qué en un análisis crítico del discurso esto NO constituye un argumento de autoridad válido en medicina?',
    options: [
      { id: 'opt-a', text: 'Porque la actriz vive en otro país durante el verano.' },
      { id: 'opt-b', text: 'Porque el colágeno marino solo se vende en farmacias del conurbano.' },
      { id: 'opt-c', text: 'Porque las novelas de televisión tienen prohibido hablar de enfermedades neurológicas.' },
      { id: 'opt-d', text: 'Porque la actriz es una personalidad pública del espectáculo y carece de competencia técnica, formación biomédica o legitimidad científica reconocida en neurociencias y farmacología clínica.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'En retórica y análisis crítico, la verdadera autoridad emana del reconocimiento experto en la disciplina en cuestión. Citar a una celebridad mediática sobre patologías neurológicas es una falacia de falsa autoridad (*ad verecundiam* espuria).',
    distractorExplanations: {
      'opt-a': 'El lugar de residencia no tiene relación con la pertinencia epistemológica de la autoridad citada.',
      'opt-b': 'El canal comercial de venta no convalida la voz citada.',
      'opt-c': 'No existen prohibiciones jurídicas de esa índole en los guiones audiovisuales.'
    },
    hint: 'Una actriz puede ser famosa, pero no es una científica especialista en el cerebro.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 52; Resumen P1, p. 17',
    tags: ['falacia de autoridad', 'analisis critico', 'argumentacion'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-F-13',
    topicId: 'MOD-F',
    learningObjective: 'Reconocer la estrategia de desmentida con contraejemplo empírico.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Ante la afirmación "Todas las bacterias son perjudiciales y causan enfermedades letales", un biólogo responde: "Esa premisa es insostenible; por ejemplo, la microbiota intestinal humana alberga más de 100 billones de bacterias comensales esenciales para la digestión y la inmunidad". ¿Qué doble estrategia discursiva combina el biólogo?',
    options: [
      { id: 'opt-a', text: 'Desmentida de la generalización errónea, fundamentada inmediatamente mediante un contraejemplo empírico concreto.' },
      { id: 'opt-b', text: 'Poesía lírica y juego de palabras humorístico.' },
      { id: 'opt-c', text: 'Pregunta retórica seguida de una amenaza verbal.' },
      { id: 'opt-d', text: 'Elipsis total del sujeto gramatical.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El enunciador descalifica el postulado dogmático ("esa premisa es insostenible") y lo derriba aportando el contraejemplo científico de la microbiota intestinal (*Escherichia coli, Lactobacillus*), desarticulando el falso universal "todas".',
    distractorExplanations: {
      'opt-b': 'No hay verso lírico ni rima; es un fragmento de argumentación científica.',
      'opt-c': 'No se formulan preguntas ni amenazas en la respuesta citada.',
      'opt-d': 'Los sujetos ("esa premisa", "la microbiota intestinal") están explícitos.'
    },
    hint: 'Primero dice que la idea es falsa y enseguida muestra un caso concreto que demuestra lo contrario.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 50-52; Resumen P1, p. 18',
    tags: ['desmentida', 'contraejemplo', 'refutacion cientifica'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-F-14',
    topicId: 'MOD-F',
    learningObjective: 'Identificar la descripción funcional en textos de divulgación médica.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En un artículo explicativo leemos: "Los riñones son dos órganos con forma de haba ubicados en la región lumbar retroperitoneal. Su función principal consiste en filtrar la sangre, eliminar los desechos metabólicos a través de la orina y regular el equilibrio hidroelectrolítico corporal". ¿Qué estrategia discursiva predomina en el pasaje?',
    options: [
      { id: 'opt-a', text: 'Cita directa entre comillas de un filósofo griego.' },
      { id: 'opt-b', text: 'Descripción anatómica y funcional (caracterización de forma, ubicación y funciones fisiológicas).' },
      { id: 'opt-c', text: 'Concesión ante una objeción de los cardiólogos.' },
      { id: 'opt-d', text: 'Narración de una travesía marítima en barco.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La descripción funcional expone las características constitutivas de un órgano o sistema biológico y detalla el papel que desempeña en el equilibrio fisiológico general.',
    distractorExplanations: {
      'opt-a': 'No hay citas textuales de filósofos de la antigüedad.',
      'opt-c': 'No se presentan discrepancias médicas ni conectores de concesión.',
      'opt-d': 'No hay narraciones de viajes navales.'
    },
    hint: 'Muestra cómo son y para qué sirven los riñones en el cuerpo.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 50; Resumen P1, p. 13',
    tags: ['descripcion funcional', 'anatomia', 'estrategias explicativas'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-F-15',
    topicId: 'MOD-F',
    learningObjective: 'Reconocer el valor de la metáfora como estrategia explicativa.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Cuando un docente de bioquímica explica que "las enzimas actúan como llaves que abren cerraduras específicas en las moléculas sobre las que actúan", utiliza una metáfora con el fin de:',
    options: [
      { id: 'opt-a', text: 'Sugerir a los estudiantes que deben recibirse de cerrajeros en lugar de médicos.' },
      { id: 'opt-b', text: 'Ocultar la verdad científica para que nadie entienda el mecanismo celular.' },
      { id: 'opt-c', text: 'Facilitar la comprensión intuitiva del modelo de especificidad sustrato-enzima mediante una imagen cotidiana accesible.' },
      { id: 'opt-d', text: 'Reemplazar las clases de química por clases de cerrajería hospitalaria.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'La metáfora pedagógica (el modelo "llave-cerradura" de Emil Fischer) traslada un concepto abstracto inobservable a nivel microscópico al plano de una experiencia mecánica familiar, haciendo visible la complementariedad molecular.',
    distractorExplanations: {
      'opt-a': 'Es una interpretación literal disparatada de una metáfora didáctica.',
      'opt-b': 'El objetivo de la metáfora en la explicación es iluminar el saber, no ensombrecerlo.',
      'opt-d': 'La comparación tiene valor instrumental educativo, no vocacional de oficio.'
    },
    hint: 'La cerradura y la llave ayudan a imaginar cómo encajan exactamente dos moléculas.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 51; Resumen P1, p. 19',
    tags: ['metafora pedagogica', 'estrategias explicativas', 'bioquimica'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-F-16',
    topicId: 'MOD-F',
    learningObjective: 'Identificar el enunciado general como punto de partida explicativo.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'El fragmento: "Las enfermedades cardiovasculares representan la principal causa de muerte prematura en el mundo occidental contemporáneo" funciona prototípicamente como:',
    options: [
      { id: 'opt-a', text: 'Un chiste informal para romper el hielo en un almuerzo familiar.' },
      { id: 'opt-b', text: 'Una pregunta de opción múltiple.' },
      { id: 'opt-c', text: 'Una nota al pie que debe leerse solo al final de la carrera.' },
      { id: 'opt-d', text: 'Un enunciado general o punto de partida que sitúa el marco problemático amplio antes de pasar a explicaciones o datos más específicos.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El enunciado general abre el campo discursivo: plantea la magnitud global del fenómeno y provee el marco de referencia en el que se inscribirán los subtemas, las estadísticas y las causas en los párrafos subsiguientes.',
    distractorExplanations: {
      'opt-a': 'Trata un tema epidemiológico grave con registro formal, no humorístico.',
      'opt-b': 'Es una proposición asertiva, no una pregunta evaluativa de examen.',
      'opt-c': 'Constituye la afirmación de apertura de un texto, no una nota accesoria.'
    },
    hint: 'Es la afirmación grande y global desde donde arranca todo el texto.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 49; Resumen P1, p. 15',
    tags: ['enunciado general', 'punto de partida', 'apertura textual'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-F-17',
    topicId: 'MOD-F',
    learningObjective: 'Diferenciar explicación de argumentación según el estatus de la tesis.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: '¿Cuál es la prueba diagnóstica para saber si un texto es dominantemente explicativo o argumentativo?',
    options: [
      { id: 'opt-a', text: 'Si el objeto o saber es presentado como un hecho consolidado, admitido y no controvertido que solo requiere ser aclarado, predomina la explicación; si el punto de partida es una cuestión problemática abierta al debate donde el emisor busca que el receptor adhiera a su postura frente a otras posibles, predomina la argumentación.' },
      { id: 'opt-b', text: 'Si tiene más de cien palabras siempre es argumentativo; si tiene noventa y nueve siempre es explicativo.' },
      { id: 'opt-c', text: 'Los textos explicativos nunca llevan punto final.' },
      { id: 'opt-d', text: 'La explicación la hacen los alumnos y la argumentación la hacen exclusivamente los rectores.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'El estatus del objeto discursivo define la secuencia dominante: la explicación parte de una verdad aceptada que se esclarece cognitivamente (ej. cómo funciona la respiración); la argumentación parte de una discrepancia o toma de posición que se busca legitimar persuasivamente (ej. si el Estado debe financiar tratamientos experimentales).',
    distractorExplanations: {
      'opt-b': 'La extensión en palabras no guarda ninguna relación con la tipología discursiva.',
      'opt-c': 'Todo texto gramatical formal concluye con punto final.',
      'opt-d': 'Cualquier hablante competente produce y procesa secuencias explicativas y argumentativas en diversas esferas sociales.'
    },
    hint: 'Preguntate: ¿el tema está cerrado y solo te lo enseñan, o es un debate donde intentan convencerte de una postura?',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 1, p. 29; Módulo 2, p. 49; Resumen P1, p. 15-16; Resumen P2, p. 7',
    tags: ['explicacion vs argumentacion', 'estatus del objeto', 'debate'],
    estimatedSeconds: 50
  },
  {
    id: 'Q-MOD-F-18',
    topicId: 'MOD-F',
    learningObjective: 'Identificar la falacia de generalización apresurada.',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    prompt: 'Un paciente dice en la guardia: "El antibiótico que me recetaron no sirve para nada porque me tomé una sola pastilla hace media hora y la garganta me sigue doliendo igual". En el marco del razonamiento crítico, ¿qué error argumentativo comete?',
    options: [
      { id: 'opt-a', text: 'Uso impecable del método científico de doble ciego.' },
      { id: 'opt-b', text: 'Generalización apresurada y falso razonamiento causal, al pretender juzgar la eficacia de una terapia farmacológica completa basándose en una sola dosis aislada sin respetar el tiempo farmacocinético de acción.' },
      { id: 'opt-c', text: 'Cita de autoridad de la Administración Nacional de Medicamentos (ANMAT).' },
      { id: 'opt-d', text: 'Elipsis de los pronombres personales de segunda persona.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'La generalización apresurada extrae una conclusión universal ("el antibiótico no sirve para nada") a partir de una muestra insuficiente y apresurada (una sola pastilla y 30 minutos de espera), ignorando la farmacología.',
    distractorExplanations: {
      'opt-a': 'El método de doble ciego exige grupos control y protocolos estadísticos rigurosos, ausentes aquí.',
      'opt-c': 'No se cita a la ANMAT ni a ningún organismo sanitario oficial.',
      'opt-d': 'El problema es epistemológico y argumentativo, no de elipsis pronominal.'
    },
    hint: 'Saca una conclusión drástica sobre todo el medicamento después de esperar apenas media hora.',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 2, p. 52; Criterios Pedagógicos UNLaM',
    tags: ['generalizacion apresurada', 'falacia argumentativa', 'pensamiento critico'],
    estimatedSeconds: 45
  },
  {
    id: 'Q-MOD-F-19',
    topicId: 'MOD-F',
    learningObjective: 'Reconocer el valor probatorio de las estadísticas en el argumento empírico.',
    type: 'multiple_choice',
    difficulty: 'basico',
    prompt: 'En un informe de gestión sanitaria leemos: "Gracias a la ampliación de camas de terapia intensiva neonatal, la mortalidad infantil en el distrito descendió del 11,4 por mil al 8,2 por mil nacidos vivos en el trienio analizado". ¿Por qué este enunciado constituye un argumento empírico de alto impacto?',
    options: [
      { id: 'opt-a', text: 'Porque los números impiden que el lector haga preguntas.' },
      { id: 'opt-b', text: 'Porque las fracciones matemáticas son de lectura obligatoria en los cuentos infantiles.' },
      { id: 'opt-c', text: 'Porque aporta indicadores cuantitativos medibles y contrastables en el tiempo, respaldando la conclusión con datos objetivos de la realidad sanitaria.' },
      { id: 'opt-d', text: 'Porque sustituye las palabras por ecuaciones químicas.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'El argumento empírico cuantitativo utiliza datos estadísticos verificables para demostrar un cambio en la realidad (el descenso de la mortalidad), otorgando solidez probatoria a la evaluación del programa de salud.',
    distractorExplanations: {
      'opt-a': 'Los datos científicos invitan al análisis crítico, no al silencio forzado del lector.',
      'opt-b': 'Las tasas por mil son índices demográficos y sanitarios, no relatos infantiles.',
      'opt-d': 'El texto combina lenguaje verbal con cifras estadísticas, no con fórmulas de química pura.'
    },
    hint: 'Las cifras estadísticas y las tasas sanitarias son la base de la evidencia empírica en salud pública.',
    sourceStatus: 'oficial_historica',
    sourceRef: 'Manual UNLaM Módulo 2, p. 52; Resumen P1, p. 16',
    tags: ['argumento empirico', 'estadistica', 'salud publica'],
    estimatedSeconds: 40
  },
  {
    id: 'Q-MOD-F-20',
    topicId: 'MOD-F',
    learningObjective: 'Integrar la detección de estrategias en un fragmento académico real.',
    type: 'multiple_choice',
    difficulty: 'avanzado',
    prompt: 'Leé el fragmento:\n"La hipertensión arterial esencial es una elevación sostenida de las cifras tensionales por encima de 140/90 mmHg (1). Si bien en sus etapas iniciales no suele generar síntomas perceptibles (2), causa un deterioro progresivo en órganos diana como el riñón y el corazón (3). Es decir, es un asesino silencioso que avanza sin advertencia previa (4)".\n¿Qué estrategias se identifican en los números (1), (2), (3) y (4)?',
    options: [
      { id: 'opt-a', text: '(1) Chiste -> (2) Pregunta retórica -> (3) Conclusión de tesis -> (4) Cita de autoridad.' },
      { id: 'opt-b', text: '(1) Narración de ficción -> (2) Elipsis -> (3) Cacofonía -> (4) Anáfora.' },
      { id: 'opt-c', text: '(1) Desmentida -> (2) Diálogo -> (3) Instrucción técnica -> (4) Paratexto icónico.' },
      { id: 'opt-d', text: '(1) Definición clínica -> (2) Concesión -> (3) Explicación causal de daño -> (4) Reformulación con metáfora explicativa.' }
    ],
    correctAnswer: 'opt-d',
    explanation: 'El pasaje encadena con maestría: (1) definición con parámetros numéricos, (2) concesión encabezada por "Si bien", (3) nexo causal que explica la consecuencia del deterioro sobre los órganos diana, y (4) reformulación ("Es decir") apoyada en la metáfora de "asesino silencioso".',
    distractorExplanations: {
      'opt-a': 'No hay elementos humorísticos ni preguntas retóricas en el texto.',
      'opt-b': 'Describe patología cardiovascular objetiva, no literatura fantástica.',
      'opt-c': 'No hay diálogos alternados ni instrucciones de armado procedimental.'
    },
    hint: 'Mirá el orden: empieza definiendo, sigue con "Si bien...", explica la consecuencia y cierra con "Es decir...".',
    sourceStatus: 'ejemplo_original',
    sourceRef: 'Manual UNLaM Módulo 2, pp. 49-53; Resumen P1, pp. 15-19',
    tags: ['analisis de estrategias', 'integracion', 'estrategias discursivas'],
    estimatedSeconds: 55
  }
];
