# MEGAPROMPT PARA ANTIGRAVITY
## Web didáctica para preparar Seminario del Curso de Ingreso a Medicina — UNLaM

Actuá como un equipo senior integrado por: arquitecto/a de software, desarrollador/a frontend, especialista en UX/UI mobile-first, profesional de accesibilidad digital, diseñador/a instruccional, docente de lectura y escritura académica, especialista en evaluación educativa y QA engineer. Tu misión no es presentar una propuesta ni un prototipo vacío: **tenés que construir, probar y dejar funcionando una aplicación web educativa real**, completa y mantenible, orientada a estudiar y rendir la materia **Seminario de comprensión y producción de textos** del Curso de Ingreso a Medicina de la Universidad Nacional de La Matanza (UNLaM).

## 1. Objetivo principal y límites

El objetivo es ayudar a que una persona comprenda los conceptos, aprenda a reconocerlos en textos, practique cómo responder consignas académicas y llegue al examen con más preparación y confianza.

La app debe cubrir **Seminario de comprensión y producción de textos**, no confundirlo con Biociencias, Filosofía ni Educación Médica. Usá ejemplos relacionados con salud, hospitales, investigación, campañas sanitarias y vida universitaria para hacer comprensibles los conceptos de lectura y escritura; no conviertas esos ejemplos en un curso de medicina ni agregues contenidos clínicos como si fueran parte del programa de Seminario.

No prometas aprobar, no afirmes que una práctica reproduce exactamente el examen vigente sin comprobarlo y no presentes preguntas inventadas como preguntas oficiales de la UNLaM. La meta es maximizar la preparación con contenido fiable, práctica abundante y devolución pedagógica.

## 2. Antes de programar: inspección, fuentes y verificación

1. Inspeccioná el repositorio y el entorno actuales antes de modificar archivos. Conservá las convenciones, dependencias y componentes útiles que ya existan. Si no hay proyecto, creá uno estable, tipado, accesible y fácil de mantener.
2. Leé completos los dos PDF entregados por el usuario, incluidos diagramas, cuadros, ejemplos y notas:
   - `[studocu.com] - Resumen del Seminario 20240823 - Coherencia y Cohesión Textual.pdf`
   - `Resumen seminario .pdf`
3. Tomalos como **resúmenes de estudio aportados por el usuario**, no como el programa oficial vigente. Pueden ser incompletos, contener erratas o usar definiciones resumidas. No los corrijas silenciosamente ni los conviertas en autoridad institucional.
4. Buscá y consultá primero las fuentes oficiales vigentes de UNLaM: la página del Curso de Ingreso, el material de Seminario dentro de MIeL Ingreso y el manual de la instancia/año correspondiente, si está públicamente disponible o es accesible legítimamente. Punto de partida:
   - https://www.unlam.edu.ar/curso-de-ingreso/
   - https://ingresantes.unlam.edu.ar/
   - https://mielingreso.unlam.edu.ar/
   - Referencia institucional histórica de un manual que incluye Seminario: https://mielingreso.unlam.edu.ar/data4/data/ingreso/contenido/INGRESO_2021004/Manual-Curso-de-Ingreso-2022---Economicas.pdf
5. El manual de 2022 está asociado a otra edición/recorrido de ingreso. Puede servir como referencia histórica sobre contenidos y formatos didácticos de Seminario, **pero no lo declares vigente ni asumas que el examen actual es idéntico**. Confirmá siempre que puedas con material más reciente.
6. Si una fuente está detrás de un inicio de sesión que no tenés autorizado, no intentes evadirlo. Registrá el bloqueo como limitación, usá solo las fuentes accesibles y construí una experiencia honesta.
7. Crea `docs/MAPA_DE_CONTENIDOS_Y_FUENTES.md` con: concepto, módulo/unidad, definición pedagógica, fuente exacta, página/sección, año, estatus de la fuente (`oficial_vigente`, `resumen_usuario`, `oficial_historica`, `externa_verificada`, `ejemplo_original`) y observaciones sobre discrepancias.
8. Ante contradicciones entre materiales, no inventes una conciliación. Priorizá el programa/manual oficial vigente; señalá la diferencia internamente en el mapa de fuentes y, si afecta al estudiante, incluí una nota discreta explicando que debe confirmarlo con la cátedra.
9. Para contenidos enriquecidos con búsquedas externas, utilizá instituciones, universidades, publicaciones científicas y fuentes públicas reconocidas. Guardá URL, autor/institución, fecha y fecha de consulta. Separá hechos documentados de ejemplos inventados.
10. No reproduzcas manuales completos, libros, resúmenes comerciales ni exámenes confidenciales. Generá textos y preguntas originales. Podés usar citas breves necesarias para analizar un fragmento, atribuirlas y enlazar la fuente; no montes un repositorio de material protegido sin autorización.

## 3. Alcance temático inicial a contrastar con el programa vigente

Usá los siguientes núcleos que aparecen en los PDF del usuario como mapa inicial de cobertura. Ajustá el mapa con el manual oficial vigente y añadí o quitá temas solo con fundamento documental. Cada núcleo aprobado debe convertirse en una unidad estudiable, un mapa visual, ejemplos resueltos y ejercicios.

### A. Proceso de lectura
- Lectura de paratextos y contextualización previa.
- Formulación de hipótesis antes de leer y verificación durante/después de la lectura.
- Lectura global.
- Lectura analítica por párrafos, subrayado y notas marginales.
- Lectura crítica y recuperación de información explícita e implícita.
- Poslectura: resumen, cuadro, esquema, cuestionario y reconstrucción del contenido.

### B. Texto, contexto y paratexto
- Texto como unidad semántico-discursiva de extensión variable.
- Contexto de situación: emisor, receptor, mensaje/tema, espacio, tiempo y relación entre interlocutores.
- Paratextos verbales y no verbales: título, subtítulo, autoría, fuente, fecha, notas, glosario, bibliografía, ilustraciones, infografías y gráficos.
- Cómo el paratexto orienta la lectura y habilita hipótesis que luego pueden confirmarse o refutarse.

### C. Coherencia y cohesión
- Coherencia global y local; tema central y subtemas.
- Cohesión entre palabras, oraciones y párrafos.
- Referencia: pronombres personales, demostrativos y posesivos, y resolución del referente.
- Elipsis.
- Conectores y relaciones de adición, contraste, causa-consecuencia, tiempo, comparación, énfasis, orden, condición, reformulación y cierre, según el material verificado.
- Reiteración léxica: repetición, sinonimia y palabra general.
- Campo semántico y colocación léxica.
- Signos de puntuación como apoyo de la organización y el sentido, si forman parte del programa vigente.

### D. Texto, enunciado, discurso y adecuación
- Diferencia entre texto, enunciado y discurso en el enfoque usado por la cátedra.
- Adecuación a tema, canal, propósito, destinatario y relación entre interlocutores.
- Registro formal/informal; objetivo/subjetivo; masivo/especializado, cuando corresponda al material oficial.
- Corrección gramatical, léxica, ortográfica, fonética, sociocultural y estilística.
- Conciencia retórica, ethos y ethos académico.
- Comunidad discursiva, comunidad académica y comunidad científica.

### E. Géneros discursivos y secuencias textuales
- Géneros académicos y no académicos.
- Rasgos externos e internos de los géneros.
- Secuencias descriptiva, narrativa, explicativa, argumentativa, dialogal e instruccional.
- Secuencia dominante/englobante y secuencias secundarias dentro de un mismo texto.
- Diferencia entre género (por ejemplo, artículo, informe, folleto, noticia) y secuencia textual (por ejemplo, explicar o argumentar).
- Estructuras generales de explicación y argumentación, sin reducir todos los textos reales a una plantilla rígida.

### F. Estrategias explicativas y argumentativas
- Enunciado general.
- Definición.
- Reformulación.
- Ejemplo e ilustración.
- Descripción.
- Comparación y analogía.
- Narración, historia, caso o anécdota.
- Cita y voz de autoridad.
- Metáfora.
- Explicación causal causa-consecuencia.
- Argumentos empíricos, de autoridad y de sentido común, con atención a sus diferencias y límites.
- Concesión y desmentida/refutación, según nomenclatura del material oficial.
- Identificación de tesis/hipótesis, punto de partida, argumentos y cierre.

### G. Enunciación y polifonía
- Enunciados marcados y no marcados.
- Deícticos personales, temporales y espaciales.
- Subjetivemas y modalizadores.
- Efectos de objetividad, despersonalización y nominalización.
- Polifonía enunciativa.
- Discurso directo e indirecto, verbos de decir y comillas.
- Diferencia entre la voz del autor y las voces citadas; evitar atribuciones erróneas.

### H. Escritura y géneros académicos producidos por estudiantes
- Planificación, puesta en texto/redacción y revisión.
- Coherencia, cohesión, adecuación, registro y revisión de puntuación/ortografía.
- Apunte: registro selectivo y organizado de información.
- Resumen: seleccionar, omitir, generalizar e integrar; no confundirlo con copiar, subrayar o acortar mecánicamente.
- Respuesta de parcial: responder exactamente a la consigna, reutilizar de manera pertinente sus términos y organizar introducción/desarrollo/cierre cuando corresponda.
- Operaciones discursivas: definir, ejemplificar, justificar, reformular, caracterizar, comparar, clasificar y enumerar.
- Informe de lectura descriptivo u otros géneros de escritura que efectivamente incluya el programa vigente.

Este mapa es una base de trabajo, no una declaración de que todos los puntos aparecen con el mismo nombre o peso en el programa vigente. La cobertura final debe quedar respaldada por las fuentes.

## 4. Diseño didáctico: explicar hasta que se entienda

La app no debe limitarse a mostrar definiciones. Para cada concepto, implementá una secuencia didáctica consistente:

1. **Explicación en lenguaje claro:** una definición breve, precisa y fiel a la fuente.
2. **Explicación cotidiana:** cómo reconocerlo en una situación familiar.
3. **Analogía o metáfora pedagógica:** útil para recordar, con un aviso si la analogía deja de funcionar en algún punto.
4. **Microhistoria/historieta:** entre 3 y 8 viñetas, con personajes recurrentes, diálogo natural y una situación concreta. La historia debe enseñar el concepto y no ser decoración.
5. **Ejemplo resuelto:** texto corto con marcas visuales que señalen qué observar y por qué.
6. **Contraejemplo o error habitual:** mostrar una confusión frecuente y explicar cómo detectarla.
7. **Práctica guiada:** primera actividad con pistas graduales.
8. **Práctica independiente:** sin pistas iniciales.
9. **Recuperación activa:** una pregunta breve que obligue a recordar sin mirar la explicación.
10. **Resumen de bolsillo:** idea central, señales de reconocimiento y confusión más común.
11. **Fuentes:** enlace o referencia breve para ver de dónde surge la definición.

Creá una identidad narrativa coherente. Por ejemplo, una ingresante llamada Mía, compañeros, una tutora de lectura académica y un pequeño grupo de estudio. Usalos de forma consistente, sin infantilizar al estudiante. Las historietas deben ser legibles también sin imágenes: cada viñeta tendrá texto alternativo o una transcripción equivalente. No uses imágenes solo decorativas que distraigan ni dependas del color para comunicar significado.

## 5. Casos aplicados a salud, sin confundir la materia

Utilizá variedad de contextos, en particular:
- Un folleto universitario de prevención.
- Una noticia sobre salud pública.
- Un texto divulgativo sobre investigación.
- Un fragmento de informe institucional.
- Una entrevista breve a un profesional de salud.
- Un texto de opinión sobre acceso al sistema de salud.
- Una consigna académica sobre comunicación, lectura crítica o divulgación.

Para cada caso, enseñar a analizar el texto como texto: género, propósito, destinatario, secuencia dominante, paratextos, hipótesis, coherencia, cohesión, conectores, enunciación, voces referidas, estrategias explicativas/argumentativas y operación discursiva solicitada.

Diferenciá de manera visible:
- **Caso real documentado:** enlazá la fuente y no exageres su alcance.
- **Caso didáctico ficticio:** etiquetalo como ficticio o simulado.
- **Texto original de práctica:** aclarar que fue creado para la aplicación.

No llames “caso real” a una historia generada. Evitá datos personales, detalles clínicos innecesarios y consejos médicos. Cuando una actividad use una noticia o investigación real, el objetivo principal debe seguir siendo la comprensión textual y las fuentes deben ser verificables.

## 6. Actividades, juegos y banco de preguntas

Implementá un banco amplio, variado y reutilizable; no generes preguntas casi idénticas para inflar el número. Para la primera versión funcional, apuntá a **al menos 150 preguntas originales y revisadas**, con una ruta de expansión clara. Asegurá cobertura equilibrada de los módulos confirmados; ningún módulo debe quedar sostenido por solo una o dos preguntas.

Tipos de actividad requeridos:
- Opción múltiple con cuatro alternativas y una respuesta correcta, salvo que la consigna indique explícitamente selección múltiple.
- Verdadero/falso con justificación.
- Relacionar concepto y ejemplo.
- Clasificar frases, conectores, secuencias y estrategias discursivas.
- Ordenar los pasos de un proceso de lectura o escritura.
- Completar conectores o referencias en un texto.
- Identificar a qué elemento remite un pronombre.
- Detectar incoherencias y problemas de cohesión.
- Separar tema, subtema, tesis, argumento y conclusión.
- Distinguir género discursivo de secuencia textual.
- Reconocer marcas de enunciación y voces referidas.
- Elegir el mejor resumen entre varias opciones y justificar por qué.
- Responder consignas de parcial con campos de escritura y rúbrica.
- Flashcards con modo “lo recuerdo / necesito repasarlo”.
- Desafío de 5 preguntas, sesión de práctica corta y repaso de errores.
- Simulacros integrales construidos con textos originales.

### Reglas obligatorias para cada pregunta

Cada elemento del banco debe guardar:
- `id` único y estable.
- `topicId` y objetivo de aprendizaje.
- Tipo, consigna y dificultad.
- Opciones y clave de respuestas verificable.
- Explicación de por qué la correcta es correcta.
- Explicación breve de por qué cada distractor no corresponde.
- Referencia de fuente o marca `ejemplo_original`.
- Tiempo estimado y tags para búsqueda/filtrado.
- Versión del contenido, para detectar cambios.

No muestres la respuesta correcta antes de que el estudiante responda, excepto en modo estudio explícito. Después de contestar, da devolución inmediata, específica y respetuosa. No uses feedback vacío del tipo “incorrecto” sin explicar la causa. Si el estudiante falla, ofrecé una pista o un ejemplo más sencillo y luego otra pregunta del mismo objetivo con redacción distinta.

### Control de calidad de preguntas

- Cada pregunta debe tener una sola respuesta claramente defendible si es de opción única.
- Las alternativas deben ser plausibles pero no ambiguas; evitá pistas gramaticales, longitudes que revelen la respuesta, dobles negaciones innecesarias y “todas/ninguna” salvo que sean pedagógicamente útiles.
- Verificá automáticamente que el ID sea único, que exista la respuesta correcta, que las referencias apunten a módulos válidos y que no haya opciones vacías.
- Revisá equilibrio de la posición de respuestas correctas.
- Detectá duplicados literales y semánticos obvios.
- Agregá pruebas automatizadas para evaluar la consistencia del banco.
- Cuando una interpretación dependa de una definición específica de la cátedra, enlazá la fuente correspondiente. No penalices como incorrecta una variante igualmente aceptable si la fuente no la descarta.

## 7. Simulacros de examen y preparación final

Creá un módulo independiente **“Prepararme para rendir”** con:
- Diagnóstico inicial no punitivo.
- Mapa de temas dominados, en proceso y a repasar.
- Plan de estudio configurable según los días disponibles.
- Práctica cronometrada opcional y práctica sin reloj.
- Simulacros por tema y simulacros integrales.
- Pantalla de revisión final, con errores agrupados por concepto.
- Informe posterior: puntuación, tipos de error, minutos usados, fortalezas, recomendaciones y enlaces a lecciones pertinentes.
- Modo examen sin mostrar pistas ni respuestas hasta finalizar.
- Revisión pedagógica al finalizar, con explicación de cada consigna.
- Posibilidad de volver a intentar con preguntas diferentes.

**No fijes la duración, cantidad de preguntas, ponderación, estructura ni criterio de aprobación como si fueran oficiales sin confirmación de la fuente vigente.** Si el único modelo verificable es histórico, mostrale al estudiante el rótulo “simulacro orientativo basado en una referencia institucional histórica; confirmar formato vigente con la cátedra”. Permití configurar duración y número de consignas. Las preguntas y los textos del simulacro deben ser originales salvo fragmentos breves debidamente atribuidos.

Para ejercicios de escritura, incluí una rúbrica de práctica que evalúe pertinencia respecto de la consigna, fidelidad al texto fuente, organización, coherencia, cohesión, uso de evidencias y corrección formal. Si usás evaluación asistida por IA, presentala como orientación y no como nota oficial; no afirmes que una corrección automática predice exactamente la calificación docente.

## 8. Estudio sin cansancio ni sobrecarga

La experiencia debe resultar clara, ágil y estimulante, sin convertir el estudio en una sucesión interminable de pantallas.

- Diseñá lecciones de 5 a 8 minutos, con opción de profundizar.
- Mostrá una tarea principal por pantalla y una jerarquía visual clara.
- Dividí las explicaciones largas en pasos, sin esconder definiciones importantes detrás de demasiados clics.
- Alterná lectura, ejemplos, actividades y recuperación activa.
- Ofrecé sesiones de 5, 10, 15 y 25 minutos.
- Guardá progreso y permití pausar/continuar.
- Incorporá repetición espaciada y repaso adaptativo, explicado de forma transparente.
- Recomendá una pausa cuando corresponda, sin bloquear al usuario ni culpabilizarlo.
- No uses rachas coercitivas, alarmas, penalizaciones por no entrar, contadores agresivos ni animaciones interminables.
- Permití marcar una unidad como favorita, guardar dudas y añadir notas personales.
- Ofrecé “Explicámelo más fácil”, “Dame otro ejemplo”, “Mostrame la diferencia” y “Probame sin pistas”.
- Incorporá búsqueda de conceptos, glosario y acceso rápido al repaso de errores.
- Recordá el progreso localmente sin exigir crear una cuenta.

## 9. Adaptación real a móvil, iOS Safari, tablets y PC

La interfaz debe ser **mobile-first**, no una web de escritorio comprimida. Debe funcionar desde 320 px de ancho hasta pantallas grandes y adaptarse a orientación vertical/horizontal.

Requisitos:
- Diseño responsive real; probá anchos de 320, 360, 375, 390, 414, 768, 1024, 1280 y 1440 px, como mínimo.
- Compatibilidad comprobada en navegadores Chromium y Firefox, y en WebKit como aproximación automatizada a Safari; aclarar si no fue posible probar en un dispositivo iOS físico.
- En iOS Safari, cuidar `safe-area-inset-*`, barras del navegador, `100dvh` con fallback razonable, desplazamiento, campos de formulario, teclado virtual, selección de texto, reproducción de audio si existe y persistencia.
- No depender de hover para revelar funciones.
- Áreas táctiles de aproximadamente 44 × 44 px o mayores para controles principales.
- Nada de desplazamiento horizontal accidental, texto cortado, botones fuera de pantalla o modales imposibles de cerrar desde móvil.
- Formularios y respuestas deben seguir siendo utilizables con el teclado virtual abierto.
- Guardado automático no destructivo; informar cuándo se guarda y cómo recuperar el estado.
- PWA instalable cuando sea técnicamente viable, con manifest correcto e iconos, y modo offline para las unidades y preguntas esenciales ya almacenadas.
- Estados claros para conexión lenta, modo offline, error de carga y falta de contenido.
- Respetar `prefers-reduced-motion`; animaciones breves y prescindibles.
- No descargar vídeos pesados o librerías enormes en la primera pantalla.
- Optimizar imágenes, fuentes, JavaScript y navegación para conexiones móviles.

## 10. Accesibilidad y claridad visual

Apuntá a WCAG 2.2 AA:
- Contraste suficiente en texto, controles y estados.
- Navegación completa con teclado y foco visible.
- Estructura semántica, títulos jerárquicos, labels, mensajes de error asociados y nombres accesibles para botones.
- Soporte razonable para lectores de pantalla.
- No expresar correcto/incorrecto solo mediante color; sumar icono y texto.
- Alternativas textuales para historietas, ilustraciones y diagramas.
- Tamaño de texto legible, interlineado adecuado y diseño que tolere zoom.
- No usar texto justificado en bloques largos.
- Evitar destellos, paralaje, sonidos automáticos y animaciones no solicitadas.
- Permitir contestar actividades interactivas mediante controles accesibles; todo arrastrar-y-soltar debe tener alternativa con botones o selección.
- Incluir un modo lectura sin distracciones y una opción de tamaño de texto cuando sea razonable.

## 11. Identidad visual y tono

Diseñá una identidad profesional, moderna, universitaria y acogedora, inspirada en una herramienta de estudio de alta calidad, no en un panel administrativo ni en una app infantil. Usá espacio en blanco, tipografía legible, tarjetas moderadas, ilustración editorial y un sistema de color sobrio con acentos. No satures la interfaz con gradientes, cajas, emojis o efectos decorativos.

El lenguaje de interfaz será español argentino natural, claro y respetuoso. Conservá con precisión la terminología de la cátedra cuando haya una fuente verificable y explicá los términos técnicos con lenguaje accesible. No uses jerga innecesaria. La interfaz debe incluir textos reales y estados completos; no dejes placeholders, enlaces muertos, botones sin acción ni pantallas vacías.

## 12. Arquitectura de la aplicación

Como mínimo, implementá estas secciones:

1. **Inicio / Mi plan:** saludo neutro, progreso, sesión recomendada, continuidad y acceso al diagnóstico.
2. **Ruta de aprendizaje:** unidades ordenadas por prerequisitos y mapa general.
3. **Lecciones:** teoría, historieta, ejemplo resuelto, errores frecuentes y actividades.
4. **Práctica:** banco filtrable por tema, dificultad, tipo de actividad y estado de dominio.
5. **Historietas y casos:** contenido narrativo original y aplicación al contexto universitario/sanitario.
6. **Glosario:** definiciones buscables y relaciones entre conceptos.
7. **Tarjetas de memoria:** repaso espaciado y estado de recuerdo.
8. **Simulacros:** configuración, examen, resultado y revisión.
9. **Mi progreso:** evolución por tema, errores frecuentes y plan sugerido.
10. **Notas y favoritos:** persistentes y editables.
11. **Fuentes y alcance:** diferencia entre material oficial, resúmenes aportados, referencias históricas y contenido original.
12. **Ajustes:** tamaño de letra, movimiento reducido, modo oscuro si se implementa con buen contraste, borrado/exportación de datos y modo offline.

El flujo principal debe funcionar sin registro obligatorio. Si elegís usar backend, explicá qué datos guarda, asegurá consentimiento y privacidad, y no solicites datos sensibles. Si el almacenamiento es local, implementá exportación/importación para que el estudiante pueda respaldar o migrar su progreso.

## 13. Persistencia, privacidad y fiabilidad

- No recolectes DNI, información clínica, dirección, datos bancarios ni otros datos sensibles.
- Persistí progreso, respuestas, notas y preferencias mediante IndexedDB o almacenamiento local apropiado, con versiones de esquema y migraciones seguras.
- La app debe seguir funcionando si el almacenamiento falla: mostrar aviso y permitir seguir usando las lecciones sin progreso persistente.
- Evitá perder respuestas al refrescar, navegar atrás o cerrar un modal por error.
- Implementá exportación/importación de progreso en JSON con validación de esquema y mensajes de error entendibles.
- Si hay llamadas externas, manejá errores, timeout y estado de carga. El núcleo de estudio no puede depender de un servicio de terceros para renderizar el contenido básico.
- No incluyas claves secretas en el frontend ni uses analítica invasiva.

## 14. Arquitectura de contenido y mantenimiento

Separá el contenido educativo de los componentes visuales. Usá datos estructurados tipados —por ejemplo JSON/TS— y un validador del esquema. Cada lección y cada pregunta deben referir a objetivos y fuentes.

Una unidad puede tener campos del tipo: `id`, `title`, `module`, `learningObjectives`, `prerequisites`, `estimatedMinutes`, `sourceRefs`, `explanation`, `analogy`, `story`, `workedExamples`, `commonMistakes`, `activities`, `summary`, `reviewQuestions`.

Incluí:
- `docs/MAPA_DE_CONTENIDOS_Y_FUENTES.md`
- `docs/CRITERIOS_PEDAGOGICOS.md`
- `docs/PLAN_DE_PRUEBAS.md`
- `docs/LIMITACIONES_Y_VERIFICACIONES_PENDIENTES.md`
- `README.md` con instalación, ejecución, pruebas, construcción y mantenimiento.
- Fuente de contenidos claramente separada del renderizado.
- Identificadores estables y validación automática de enlaces, referencias e integridad del banco.

## 15. Plan de implementación obligatorio

Trabajá por etapas y ejecutá cada una antes de darla por finalizada:

**Etapa 1 — Auditoría y mapa de fuentes.** Inspeccioná archivos, leé los dos PDF, investigá el material oficial accesible, creá el mapa de contenidos y documentá discrepancias.

**Etapa 2 — Contrato funcional.** Definí navegación, rutas, modelo de contenidos, persistencia, estados de carga/error/offline, diseño responsive y criterios de accesibilidad. No te detengas en un documento: implementá el producto.

**Etapa 3 — Diseño y estructura real.** Construí las pantallas esenciales con contenido funcional. Establecé componentes reusables y sistema visual.

**Etapa 4 — Núcleo didáctico.** Implementá unidades, historietas originales, ejemplos resueltos, glosario, banco de preguntas y devolución explicada. Priorizá precisión y cobertura antes de efectos visuales.

**Etapa 5 — Seguimiento y simulacros.** Implementá guardado, repaso de errores, progresión por objetivos, exportación/importación y simulacros configurables.

**Etapa 6 — Responsive, PWA y accesibilidad.** Ajustá específicamente móvil e iOS Safari/WebKit; no te limites a que la pantalla “se achique”.

**Etapa 7 — QA exhaustivo.** Ejecutá las pruebas automáticas y manuales que permite el entorno, corregí fallos y repetí las pruebas luego de cada arreglo relevante.

**Etapa 8 — Entrega.** Dejá la aplicación ejecutable y documentada, con el reporte de pruebas, cobertura de contenido, fuentes, límites conocidos y tareas pendientes reales.

No pares tras generar archivos base, una landing page o una maqueta. Construí el flujo completo de estudio y verificá que se pueda terminar una lección, contestar, recibir devolución, persistir progreso y completar un simulacro.

## 16. Pruebas y criterios de aceptación

La entrega solo se considera lista si se verifican estos criterios:

### Funcionalidad
- La app inicia sin errores y las rutas principales funcionan.
- Se pueden abrir las unidades, completar una lección, realizar actividades y visualizar devoluciones correctas.
- El banco permite filtrar y no muestra preguntas sin opciones o sin claves válidas.
- El progreso persiste al recargar y navegar; exportación/importación se valida y funciona.
- Los simulacros comienzan, guardan respuestas, finalizan, calculan resultados y explican cada respuesta.
- El glosario, búsqueda, favoritos y notas funcionan si aparecen en la interfaz.
- Cada botón/CTA tiene una acción real y estados de éxito/error.

### Contenido y pedagogía
- El mapa de contenidos registra cobertura de cada tema confirmado.
- Cada unidad contiene una definición, al menos un ejemplo resuelto, un error frecuente y práctica.
- Cada pregunta tiene clave comprobada, retroalimentación específica y fuente/estado de origen.
- Los casos ficticios se identifican como tales; los reales tienen fuente verificable.
- No hay afirmaciones de que la aplicación garantice aprobar ni de que el simulacro sea oficial sin respaldo.
- Los contenidos de Medicina no desplazan el foco de Seminario.

### Visual y compatibilidad
- No hay scroll horizontal accidental en tamaños indicados.
- Los controles son utilizables con dedo y teclado.
- No hay contenido oculto por el teclado virtual, notch, barra inferior ni viewport de Safari.
- Texto, contrastes y foco resultan legibles.
- Estados vacíos, offline y de error están diseñados.

### Ingeniería y seguridad
- Ejecutá tests, lint, typecheck y build en caso de estar configurados.
- Añadí pruebas unitarias para utilidades de puntuación, persistencia y validación del banco.
- Ejecutá E2E para al menos: completar una lección, responder una pregunta, recargar y verificar progreso; terminar un simulacro; cambiar ajustes.
- Probá Chromium y WebKit mediante Playwright u otra herramienta disponible. No describas emulación como una prueba en hardware físico.
- Verificá accesibilidad automatizada cuando sea posible y complementala con navegación por teclado.
- Revisá consola, errores de red, enlaces externos, dependencias vulnerables conocidas si hay herramienta disponible y tiempos de carga razonables.
- Si alguna prueba no puede ejecutarse, indicá cuál y por qué; nunca informes PASS si no se ejecutó.

## 17. Qué entregar al finalizar

Dejá en el repositorio:
1. La web funcional y el código fuente completo.
2. Un `README.md` con instrucciones precisas para instalar, ejecutar, probar y compilar.
3. Los documentos de mapa curricular, fuentes, estrategia pedagógica, pruebas y limitaciones.
4. Un banco de al menos 150 preguntas originales revisadas, o un informe explícito y honesto si una limitación concreta del entorno impide alcanzar el volumen; no rellenes con duplicados.
5. Un conjunto de lecciones con contenido sustantivo, ejemplos y microhistorias, no lorem ipsum.
6. Al menos tres simulacros orientativos con textos originales y formatos variados; su etiqueta debe reflejar el grado real de verificación del examen vigente.
7. Un reporte final de QA con comandos ejecutados, resultados reales, navegadores y tamaños probados, fallos corregidos y límites pendientes.
8. Una lista breve de decisiones técnicas importantes y cualquier requisito que dependa de acceso a MIeL o confirmación de la cátedra.

## 18. Forma de trabajar y reglas finales

- Elegí soluciones simples, sólidas y mantenibles antes que complejidad innecesaria.
- No rompas funcionalidades existentes para imponer una arquitectura preferida.
- No escondas errores: reproducilos, corregilos y volvé a probar.
- No sustituyas texto didáctico por tarjetas vacías, botones decorativos ni contenido placeholder.
- No cargues material indiscriminadamente para aparentar abundancia: cada actividad debe enseñar algo distinto.
- No uses frases como “100 % libre de errores” o “aprobación garantizada”. La calidad se demuestra con pruebas, trazabilidad y límites declarados.
- Cuando haya decisiones inciertas, elegí la opción segura y documentá el supuesto; no detengas la implementación por detalles no esenciales.
- Mantené el foco en la persona que estudia: que entienda, practique, identifique errores y pueda retomar sin frustración.

**Comenzá ahora por inspeccionar el proyecto y los archivos aportados, verificar las fuentes institucionales disponibles y crear el mapa de contenidos. Después implementá la aplicación completa, ejecutá las pruebas y corregí los problemas detectados antes de entregar.**
