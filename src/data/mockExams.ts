import { MockExam } from '../types';

export const MOCK_EXAMS: MockExam[] = [
  {
    id: 'exam-01',
    title: 'Simulacro N° 1 — Discurso, Medios y Discriminación',
    subtitle: 'Modelo de examen orientativo basado en la referencia institucional histórica de la UNLaM',
    description: 'Estructura canónica de evaluación de Seminario (90 minutos): lectura profunda del texto fuente de Teun van Dijk, resolución de consignas analíticas de comprensión y marcas enunciativas, y rúbrica para producción de Informe de Lectura Descriptivo (ILD).',
    sourceDisclaimer: 'Simulacro didáctico orientativo basado en el modelo institucional histórico publicado en el Manual del Curso de Ingreso UNLaM (pp. 37-38). Se recomienda al estudiante confirmar con su docente de comisión el formato y ponderación exactos del ciclo lectivo vigente.',
    durationMinutes: 90,
    sourceText: {
      title: 'Discurso y Racismo',
      author: 'Teun van Dijk',
      year: '2001',
      citation: 'van Dijk, T. (2001). Discurso y Racismo, en Persona y Sociedad, Universidad Alberto Hurtado, ILADES.',
      paragraphs: [
        'Para la mayoría de la gente, la noción de racismo no se asocia inicialmente a la de discurso. Asociaciones más obvias serían discriminación, prejuicio, esclavitud o apartheid, entre muchos otros conceptos relacionados con la dominación étnica o "racial". Ahora bien, aunque el discurso puede parecer sólo "palabras", el texto y la charla juegan un papel vital en la reproducción del racismo contemporáneo.',
        'Esto es especialmente verdad para las formas más perjudiciales de racismo contemporáneo, a saber, las de las élites. Las élites políticas, burocráticas, corporativas, mediáticas y educativas controlan las dimensiones y decisiones más cruciales de la vida cotidiana de las minorías y los inmigrantes: entrada, residencia, trabajo, vivienda, educación, bienestar y salud. Realizan este control en gran parte hablando o escribiendo, por ejemplo, en reuniones de gabinete, discusiones parlamentarias, entrevistas de trabajo, noticiarios, libros de texto o artículos científicos.',
        'Es decir, al igual que es cierto para otras prácticas sociales dirigidas contra minorías, el discurso puede ser en primera instancia una forma de discriminación verbal. El discurso de la élite puede constituir así una forma importante de racismo de la élite. De la misma manera, la (re)producción de los prejuicios étnicos que fundamentan dichas prácticas ocurre en gran parte a través del texto y de la comunicación.',
        'Los discursos tienen variadas estructuras, las cuales se pueden analizar en distintos niveles. Las formas directas están vinculadas con las representaciones que la élite reproduce en forma explícita, señalando rasgos que la vuelven superior. Las formas indirectas tienen que ver con lo no dicho: se dan, por ejemplo, en los medios de comunicación al seleccionar y tratar temas que interesan a la élite y descartar como poco importantes los reclamos de los grupos minoritarios.',
        'Las conversaciones cotidianas son el lugar natural del racismo popular diario. Gran parte de ellas se inspira en los medios. Los hablantes refieren rutinariamente a la televisión o al periódico como su fuente (y autoridad) sobre las minorías. En un estudio holandés, por ejemplo, encontramos que, de 1.500 títulos de noticias relacionados con temas étnicos, ninguno era positivo cuando implicaba a minorías como agentes activos responsables, mientras que esto era completamente normal cuando uno de "Nosotros" era el agente en un título.',
        'En suma, especialmente en las sociedades de la información contemporáneas, el discurso se aloja en el corazón del racismo. Con esto hemos planteado que el racismo es aprendido y no natural o innato.'
      ]
    },
    questionIds: [
      'Q-MOD-A-01',
      'Q-MOD-B-01',
      'Q-MOD-B-06',
      'Q-MOD-C-01',
      'Q-MOD-C-04',
      'Q-MOD-D-01',
      'Q-MOD-E-01',
      'Q-MOD-E-05',
      'Q-MOD-F-05',
      'Q-MOD-F-07',
      'Q-MOD-G-05',
      'Q-MOD-G-08',
      'Q-MOD-H-02',
      'Q-MOD-I-01',
      'Q-MOD-I-04'
    ],
    writtenExercise: {
      prompt: 'Escribir un Informe de Lectura Descriptivo (ILD) del texto "Discurso y Racismo" de Teun van Dijk (extensión aproximada: 15 a 20 líneas). Recordá que el ILD es un género expositivo-descriptivo objetivo: no debe incluir juicios de valor personales, sino reconstruir la tesis, el tema y las partes del texto fuente empleando verbos introductores precisos.',
      guidance: 'Estructurá tu informe en tres momentos: 1) Presentación (datos del autor, año, género del texto fuente y tema central), 2) Cuerpo descriptivo (cómo avanza la argumentación de van Dijk: el rol de las élites, las formas directas/indirectas y la evidencia empírica del estudio de prensa con verbos como "plantea", "fundamenta", "ejemplifica"), y 3) Cierre (conclusión central del autor: el racismo como práctica discursiva aprendida).',
      sampleModelAnswer: 'El presente Informe de Lectura Descriptivo aborda el artículo académico "Discurso y Racismo" (2001), del lingüista neerlandés Teun van Dijk. El autor tiene como propósito central demostrar que el discurso no es mero intercambio verbal pasivo, sino un dispositivo decisivo en la reproducción del racismo contemporáneo.\n\nEn el desarrollo de su análisis, van Dijk focaliza la responsabilidad en las élites políticas, corporativas y mediáticas, argumentando que estos sectores controlan los resortes fundamentales de la vida social e institucional de las minorías (salud, trabajo, educación). Asimismo, el investigador distingue dos mecanismos discursivos de dominación: las formas directas (manifestaciones verbales explícitas de superioridad) y las formas indirectas (invisibilización y omisión de los reclamos minoritarios en las noticias). Para respaldar empíricamente su tesis, el autor aporta un estudio sobre 1.500 titulares periodísticos, evidenciando una representación sistemáticamente negativa o pasiva de las minorías.\n\nEn conclusión, van Dijk postula que el racismo en las sociedades contemporáneas constituye una práctica sociocultural aprendida a través del discurso y no un fenómeno biológico innato, destacando el papel central de la comunicación en la perpetuación de las desigualdades.',
      rubric: [
        { criterion: 'Pertinencia al género ILD y Objetividad', weight: 3, descriptor: 'Describe fidedignamente el texto fuente sin emitir opiniones personales, calificativos afectivos ni valoraciones subjetivas del alumno.' },
        { criterion: 'Fidelidad conceptual y cobertura del texto fuente', weight: 3, descriptor: 'Identifica la tesis central (racismo reproducido por el discurso), el rol de las élites y el estudio empírico de titulares sin atribuciones erróneas.' },
        { criterion: 'Uso de verbos introductores y organización en párrafos', weight: 2, descriptor: 'Emplea verbos de reporte precisos (plantea, sostiene, distingue, evidencia, postula) articulando introducción, cuerpo y conclusión.' },
        { criterion: 'Cohesión, coherencia y normativa formal', weight: 2, descriptor: 'Demuestra uso correcto de conectores lógicos, signos de puntuación, acentuación gráfica y ausencia de vicios de gerundio o concordancia.' }
      ]
    }
  },
  {
    id: 'exam-02',
    title: 'Simulacro N° 2 — Salud Pública y Vacunación Comunitaria',
    subtitle: 'Simulacro orientativo con texto original aplicado al debate sociosanitario',
    description: 'Evaluación integral basada en el formato de la UNLaM: lectura de un artículo de divulgación y opinión sanitaria sobre vacunación, análisis de estrategias de concesión, causalidad y polifonía, y producción de respuesta de parcial autónoma.',
    sourceDisclaimer: 'Simulacro didáctico orientativo con texto original creado para ejercitar el análisis textual en el ámbito de las ciencias de la salud, siguiendo con exactitud los criterios teóricos y evaluativos del Manual UNLaM.',
    durationMinutes: 90,
    sourceText: {
      title: 'La vacunación comunitaria: un pacto ético frente al individualismo',
      author: 'Dra. Elena Santillán',
      year: '2024',
      citation: 'Santillán, E. (2024). La vacunación comunitaria: un pacto ético frente al individualismo. Cuadernos de Salud Colectiva, UNLaM.',
      paragraphs: [
        'En los últimos años, el debate en torno a la obligatoriedad de las vacunas ha resurgido con fuerza en la esfera pública. Si bien ciertos sectores minoritarios apelan a la libertad individual como un derecho absoluto que los eximiría de inocularse, esta postura desconoce la naturaleza profundamente social del fenómeno epidemiológico.',
        'La inmunidad colectiva o efecto rebaño no es una abstracción teórica; es una barrera biológica tangible que protege a los recién nacidos, a los pacientes oncológicos inmunosuprimidos y a los ancianos que no pueden recibir ciertas dosis por prescripción médica. Cuando una persona decide no vacunarse, su decisión no queda confinada a su propio cuerpo: incrementa el reservorio viral y vulnera la seguridad sanitaria del prójimo.',
        'Las estadísticas del Ministerio de Salud demuestran que la introducción de la vacuna contra el neumococo redujo las internaciones por neumonía bacteriana infantil en un 52% en la última década. Este dato empírico desmiente rotundamente los mitos pseudocientíficos que circulan en foros digitales, donde se afirma irresponsablemente que las vacunas son inoculaciones nocivas.',
        'Por lo tanto, la salud pública no puede ser concebida como la simple sumatoria de caprichos individuales. Vacunarse es un acto de solidaridad ciudadana y una responsabilidad comunitaria indelegable que el Estado debe garantizar y custodiar activamente.'
      ]
    },
    questionIds: [
      'Q-MOD-A-02',
      'Q-MOD-A-06',
      'Q-MOD-B-02',
      'Q-MOD-C-02',
      'Q-MOD-C-05',
      'Q-MOD-D-02',
      'Q-MOD-D-03',
      'Q-MOD-E-02',
      'Q-MOD-E-07',
      'Q-MOD-F-01',
      'Q-MOD-F-06',
      'Q-MOD-F-08',
      'Q-MOD-G-03',
      'Q-MOD-H-03',
      'Q-MOD-I-06'
    ],
    writtenExercise: {
      prompt: 'Responda a la siguiente consigna atendiendo a las normas de construcción de respuestas de parcial autónomas: ¿Qué estrategias argumentativas despliega la Dra. Elena Santillán en el texto para defender la obligatoriedad de la vacunación? Fundamente su respuesta con al menos dos citas o evidencias del texto fuente (extensión aprox. 12 a 15 líneas).',
      guidance: 'Recordá incorporar la pregunta en el inicio (autonomía semántica), identificar explícitamente las estrategias (concesión en el párrafo 1, argumento empírico estadístico en el párrafo 3, desmentida de mitos) y cerrar con una conclusión integradora.',
      sampleModelAnswer: 'En el artículo "La vacunación comunitaria: un pacto ético frente al individualismo", la autora Dra. Elena Santillán despliega diversas estrategias argumentativas orientadas a persuadir al lector sobre el carácter ético y social de la inmunización obligatoria.\n\nEn primer término, la enunciadora recurre a una concesión dialéctica al admitir que "ciertos sectores minoritarios apelan a la libertad individual", para inmediatamente después superar esa objeción demostrando que dicha postura colisiona contra el principio de salud colectiva. En segundo término, la autora introduce un sólido argumento empírico de base estadística al señalar que la vacuna antineumocócica "redujo las internaciones por neumonía bacteriana infantil en un 52% en la última década". Asimismo, utiliza este dato cuantitativo para articular una desmentida categórica frente a los mitos antivacunas difundidos en internet.\n\nEn conclusión, la combinación de concesión, evidencia empírica contrastada y desmentida le permite a Santillán fundamentar sólidamente su tesis de que la vacunación trasciende la elección privada y constituye un deber cívico irrenunciable.',
      rubric: [
        { criterion: 'Autonomía semántica del inicio', weight: 2.5, descriptor: 'Incorpora el título del texto, la autora y los términos de la consigna sin comenzar abruptamente con pronombres o nexos causales vacíos.' },
        { criterion: 'Identificación y fundamentación de estrategias', weight: 3.5, descriptor: 'Nombra con precisión teórica al menos dos estrategias (concesión, argumento empírico, desmentida) y las respalda con citas textuales fieles.' },
        { criterion: 'Organización textual y vocabulario disciplinar', weight: 2, descriptor: 'Presenta progresión estructurada (introducción, desarrollo analítico, conclusión) con léxico formal de la cátedra.' },
        { criterion: 'Normativa de puntuación y acentuación', weight: 2, descriptor: 'Correcto uso de comillas para citas literales, comas de inciso y estricta concordancia gramatical.' }
      ]
    }
  },
  {
    id: 'exam-03',
    title: 'Simulacro N° 3 — Comunicación Médica, Infodemia y Pseudociencias',
    subtitle: 'Simulacro orientativo integral con texto original de debate biomédico contemporáneo',
    description: 'Evaluación exhaustiva de 90 minutos con foco en análisis crítico del discurso, marcas de subjetividad frente a objetividad, detección de polifonía y elaboración de una opinión académica fundada.',
    sourceDisclaimer: 'Simulacro didáctico orientativo con texto original formulado para evaluar competencias avanzadas de comprensión crítica y producción textual universitaria según los criterios de UNLaM.',
    durationMinutes: 90,
    sourceText: {
      title: 'La infodemia en salud: el peligro de las falsas promesas terapéuticas',
      author: 'Dr. Martín Cárdenas',
      year: '2024',
      citation: 'Cárdenas, M. (2024). La infodemia en salud: el peligro de las falsas promesas terapéuticas. Revista Universitaria de Bioética y Epistemología, UNLaM.',
      paragraphs: [
        'Durante las crisis sanitarias, la proliferación descontrolada de información engañosa —fenómeno denominado "infodemia" por los organismos internacionales— representa un riesgo para la vida tan letal como el propio agente patógeno.',
        'Determinados promotores de "terapias alternativas milagrosas" sostienen en plataformas digitales que el consumo de dióxido de cloro previene y cura enfermedades víricas graves. Sin embargo, la Administración Nacional de Medicamentos, Alimentos y Tecnología Médica (ANMAT) advirtió categóricamente que dicho químico no cuenta con autorización científica y que su ingesta provoca cuadros severos de insuficiencia respiratoria y daño renal agudo.',
        'La medicina basada en la evidencia no es un capricho corporativo; es la única garantía metodológica de que un fármaco ha demostrado eficacia y seguridad mediante ensayos clínicos controlados. Cuando se vulnera este estándar de rigor en nombre de la inmediatez o el lucro, la salud comunitaria sufre un daño irreparable.',
        'En suma, resulta imperioso fortalecer la alfabetización científica ciudadana y exigir responsabilidad ética a los comunicadores. Ante la desinformación en salud, el silencio de los profesionales no es neutralidad: es complicidad.'
      ]
    },
    questionIds: [
      'Q-MOD-A-05',
      'Q-MOD-A-12',
      'Q-MOD-B-03',
      'Q-MOD-C-08',
      'Q-MOD-C-10',
      'Q-MOD-D-05',
      'Q-MOD-E-03',
      'Q-MOD-E-16',
      'Q-MOD-F-04',
      'Q-MOD-F-12',
      'Q-MOD-G-04',
      'Q-MOD-G-07',
      'Q-MOD-G-12',
      'Q-MOD-H-20',
      'Q-MOD-I-02'
    ],
    writtenExercise: {
      prompt: 'De acuerdo con su análisis del texto del Dr. Martín Cárdenas y los conocimientos de la materia, redacte una opinión fundada sobre el papel que deben asumir los futuros profesionales de la salud frente a la infodemia y la difusión de pseudociencias en redes sociales (extensión aprox. 15 líneas).',
      guidance: 'Recordá enunciar claramente tu tesis personal en el inicio, fundamentarla con dos argumentos sólidos basados en la responsabilidad ética y la evidencia científica, utilizar conectores lógicos variados y concluir con un remate formal que construya un sólido ethos académico.',
      sampleModelAnswer: 'Frente al avance de la infodemia y la proliferación de tratamientos pseudocientíficos en el entorno digital, considero que los futuros profesionales de la salud tienen el deber ético y social de asumir un rol activo como comunicadores confiables y defensores de la medicina basada en la evidencia.\n\nEn primer lugar, la desinformación sanitaria no constituye una mera divergencia de opiniones inofensiva, sino una amenaza concreta para la vida comunitaria: como advierte el Dr. Cárdenas, el consumo de sustancias no avaladas (como el dióxido de cloro) genera daños orgánicos irreversibles e induce al abandono de tratamientos oncológicos o infecciosos válidos. En segundo lugar, los médicos y trabajadores de la salud no pueden recluirse exclusivamente en los consultorios físicos mientras las redes sociales moldean los hábitos de la población: es indispensable ocupar el espacio público digital con divulgación rigurosa, empática y en lenguaje claro que democratice el saber científico.\n\nEn conclusión, coincido plenamente con la advertencia del autor: frente a las falacias que ponen en riesgo la salud pública, la indiferencia profesional equivale a complicidad, siendo la alfabetización científica ciudadana una herramienta de cuidado tan urgente como la prescripción farmacológica.',
      rubric: [
        { criterion: 'Tesis clara y Toma de postura personal', weight: 2.5, descriptor: 'Enuncia con nitidez su punto de vista desde el inicio en consonancia con la consigna de opinión fundada.' },
        { criterion: 'Calidad y solidez de los argumentos', weight: 3.5, descriptor: 'Desarrolla argumentos sustantivos fundamentados en el texto fuente, la ética médica y la salud colectiva.' },
        { criterion: 'Ethos académico y Registro formal', weight: 2, descriptor: 'Construye una imagen discursiva seria, reflexiva y fundamentada, sin giros coloquiales ni exabruptos afectivos.' },
        { criterion: 'Conectores, Cohesión y Normativa', weight: 2, descriptor: 'Uso pertinente de conectores de orden, causa y conclusión, con adecuada puntuación y acentuación gráfica.' }
      ]
    }
  }
];

export function getMockExamById(id: string): MockExam | undefined {
  return MOCK_EXAMS.find(e => e.id === id);
}
