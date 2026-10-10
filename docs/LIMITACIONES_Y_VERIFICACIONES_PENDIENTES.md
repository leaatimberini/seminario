# Limitaciones del Entorno y Verificaciones Pendientes
## Seminario de Comprensión y Producción de Textos — Curso de Ingreso a Medicina (UNLaM)

> **Propósito del documento**: Declarar con total honestidad intelectual, técnica e institucional los límites del alcance documental, las condiciones de acceso a fuentes oficiales y las verificaciones que el estudiante debe realizar personalmente con la cátedra.

---

## 1. Límites Institucionales y Acceso a Fuentes Oficiales

| Fuente / Plataforma | Condición de Acceso | Estatus en el Proyecto | Observaciones y Recomendaciones al Estudiante |
|---|---|---|---|
| **Sitio Web Público UNLaM** (`unlam.edu.ar/curso-de-ingreso/`) | Público sin autenticación | `oficial_vigente` | Confirma las instancias de dictado (regular e intensiva), la entrega del manual impreso en Alumnos y el calendario general. |
| **Plataforma MIeL Ingreso** (`mielingreso.unlam.edu.ar`) | Acceso restringido con DNI y clave de aspirante matriculado | Limitación de acceso legítimo | No se intentó eludir el inicio de sesión. Todo contenido que se encuentre exclusivamente dentro del aula virtual cerrada no pudo ser extraído automáticamente. |
| **Manual de Ingreso 2022 UNLaM** (Servidor MIeL público) | Accesible públicamente vía HTTP | `oficial_historica` | Proporcionó el programa detallado, la secuencia de 12 clases, el modelo formal de examen (texto de Teun van Dijk, 90 minutos) y la bibliografía obligatoria (Bajtín, Arnoux, Benveniste, Halliday, etc.). Sirve como sólido fundamento estructural, pero no debe asumirse como idéntico al examen del ciclo lectivo en curso. |
| **Manual Impreso Vigente de Seminario** | Entregado en mano en la Dirección de Alumnos de UNLaM al concretar la inscripción | Pendiente de cotejo físico por el usuario | Se recomienda al estudiante comparar los títulos de los capítulos de su manual impreso con el mapa curricular de la aplicación. |
| **Resúmenes Aportados por el Usuario** | Archivos PDF locales aportados por el estudiante | `resumen_usuario` | Fueron analizados exhaustivamente. Contienen una valiosa síntesis pedagógica realizada por alumnos de cohortes recientes, pero no poseen carácter de norma institucional y presentaban erratas menores o definiciones abreviadas que fueron cotejadas con la bibliografía de referencia. |

---

## 2. Limitaciones en los Simulacros de Examen

1. **Confidencialidad de Exámenes Oficiales**:
   El propio Manual de la UNLaM advierte de forma explícita:
   > *"Los exámenes corregidos de esta materia son confidenciales y no se venden en ningún lugar. No somos responsables de los materiales que circulan fuera de nuestra universidad (...). Consultá siempre con tus profesoras y profesores."* (Manual UNLaM, p. 34).
   Por lo tanto, los exámenes y simulacros de esta aplicación:
   - **Son simulacros didácticos orientativos originales**, diseñados según la estructura pedagógica de la UNLaM (lectura de artículo académico, análisis de enunciación/marcas/secuencias y producción de Informe de Lectura Descriptivo / respuesta de parcial).
   - **No son copias filtradas ni exámenes oficiales sustraídos**.
   - No garantizan la aprobación ni prometen replicar al 100% las preguntas exactas que el cuerpo docente formulará.

2. **Evaluación de Consignas Escritas de Desarrollo**:
   - En las consignas de redacción (ej. elaboración de un Informe de Lectura Descriptivo o una respuesta de parcial autónoma), la aplicación provee una **rúbrica analítica estructurada** y modelos de respuesta excelente/deficiente para autoevaluación guiada.
   - Si se activa asistencia de evaluación pedagógica, esta se presenta como una **orientación formativa** y en ningún caso como una calificación equivalente al criterio humano del docente a cargo de la comisión.

---

## 3. Limitaciones Técnicas y de Entorno de Pruebas

1. **Pruebas en Hardware Físico Móvil**:
   - Las pruebas automatizadas responsive y de compatibilidad con WebKit/Safari se ejecutan mediante emuladores de viewport y navegadores Chromium/WebKit en entorno Windows.
   - Aunque se implementan rigurosamente las propiedades `safe-area-inset`, `100dvh`, y directrices de accesibilidad móvil (áreas táctiles ≥ 44×44 px), no se certifica la ejecución en hardware físico iPhone/iPad en este entorno de desarrollo local.

2. **Persistencia y Modos de Navegación**:
   - La persistencia utiliza `localStorage` e `IndexedDB` en el navegador del cliente.
   - En ventanas de navegación privada ultrarrestringida, algunos navegadores bloquean la escritura en disco; la aplicación implementa una capa de memoria volátil transparente para no interrumpir el estudio.

---

## 4. Tareas Recomendadas para el Estudiante al Iniciar la Cursada

- [ ] Solicitar en la primera clase presencial o sincrónica el cronograma de comisiones vigente y la edición exacta del manual impreso asignado.
- [ ] Confirmar con el docente si para el ciclo actual se mantiene la estructura de examen de 3 partes (lectura, análisis teórico-práctico y producción de ILD / respuesta autónoma) o si se introdujo alguna variación en la ponderación.
- [ ] Cotejar el anexo de conectores y normas de citado bibliográfico de la cátedra para verificar posibles preferencias normativas particulares de su docente.
