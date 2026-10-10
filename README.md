# Plataforma Didáctica: Seminario de Comprensión y Producción de Textos
### Curso de Ingreso a Medicina — Universidad Nacional de La Matanza (UNLaM)

[![Build & Typecheck](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-3.0-729B1B.svg)](https://vitest.dev/)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-success.svg)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## 1. Visión y Propósito del Proyecto

Esta aplicación web interactiva, moderna y accesible ha sido desarrollada específicamente para acompañar el estudio de **Seminario de Comprensión y Producción de Textos** para aspirantes a la carrera de **Medicina** en la **Universidad Nacional de La Matanza (UNLaM)**.

El objetivo central es transformar los contenidos teóricos del Manual institucional oficial y la bibliografía lingüística canónica en una experiencia pedagógica estructurada, activa y transparente.

### Principios Fundacionales:
1. **Foco Disciplinar Estricto:** La materia evalúa competencias de lectura analítica y escritura académica universitaria. Los contextos médicos y sociosanitarios (prevención comunitaria, infodemia, dengue, bioética) funcionan como **ejemplos y casos situados**, sin transformarse en contenidos clínicos evaluables.
2. **Transparencia Institucional y Trazabilidad:** Todo contenido posee un estado de fuente explícito (`oficial_vigente`, `oficial_historica`, `resumen_usuario`, `externa_verificada`, `ejemplo_original`) para que el estudiante siempre distinga entre pautas normativas de cátedra y adaptaciones didácticas.
3. **Sin Falsas Promesas:** No garantiza el ingreso directo a la carrera ni reproduce exámenes confidenciales vigentes. Las evaluaciones orientativas se basan en los modelos públicos históricos de la universidad.
4. **Privacidad y Funcionamiento Offline:** No requiere inicio de sesión ni conexión a servidores externos. Funciona 100% en el navegador con almacenamiento local (`localStorage`) y soporte para exportación/importación de copias de seguridad en formato JSON.

---

## 2. Arquitectura de Contenidos

El currículum se organiza en **9 Unidades Didácticas (Unidades A a I)** alineadas con los 3 módulos del Manual UNLaM (Edición 2022, pp. 11–113) y los resúmenes de cursada:

| Unidad | Título | Foco Temático Principal | Reactivos Vinculados |
| :--- | :--- | :--- | :---: |
| **Unidad A** | El Proceso de Lectura en la Universidad | Lectura de paratextos, global, analítica, hipótesis de lectura y poslectura | 18 |
| **Unidad B** | Texto, Contexto y Paratexto | Coherencia, cohesión, adecuación y clasificación paratextual | 18 |
| **Unidad C** | Mecanismos de Cohesión Textual | Referencia anafórica/catafórica, elipsis, sustitución léxica y conectores | 20 |
| **Unidad D** | El Aparato Formal de la Enunciación | Benveniste, enunciador, enunciatario, deixis y marcas de subjetividad | 18 |
| **Unidad E** | Géneros Discursivos y Secuencias Textuales | Bajtín (primarios/secundarios, esfera social) y secuencias (Adam) | 20 |
| **Unidad F** | Estrategias Explicativas y Argumentativas | Definición, reformulación, analogía, concesión y citas de autoridad | 20 |
| **Unidad G** | Enunciación Avanzada y Polifonía | Subjetivemas, modalidad, polifonía (Ducrot), discurso directo e indirecto | 20 |
| **Unidad H** | Géneros Académicos y el Examen Parcial | El Informe de Lectura Descriptivo (ILD) y respuestas de parcial autónomas | 20 |
| **Unidad I** | Normativa Universitaria y Conectores | Conectores lógicos, signos de puntuación, gerundio y acentuación diacrítica | 20 |

---

## 3. Secuencia Instruccional de los 11 Momentos

Cada una de las 9 unidades didácticas ejecuta de manera sistemática una secuencia cognitiva de 11 pasos:

1. **Definición Clara:** Formulación canónica y rigurosa basada en el Manual UNLaM y teóricos centrales.
2. **Explicación Cotidiana:** Desglose en lenguaje accesible sin perder precisión técnica.
3. **Analogía con Límites Explícitos:** Metáfora ilustrativa acompañada de su salvedad conceptual.
4. **Microhistoria Situada:** Viñetas dialogadas entre personajes arquetípicos:
   - **Mía:** Estudiante aplicada con vocación médica que busca rigor terminológico.
   - **Lucas:** Compañero práctico que suele cometer los errores típicos de transferencia secundaria.
   - **Prof. Valeria:** Docente rigurosa, clara y pedagógica que orienta hacia los criterios de cátedra.
5. **Ejemplo Resuelto con Desglose Visual:** Texto auténtico o simulado analizado paso a paso con anotaciones interactivas e inferencias justificadas.
6. **Errores Frecuentes y Cómo Detectarlos:** Cuadro comparativo entre la trampa habitual, la corrección y la pista de reconocimiento en el parcial.
7. **Práctica Guiada:** Reactivo resuelto paso a paso con pistas cognitivas.
8. **Práctica Independiente:** Ejercicio de aplicación para resolver de forma autónoma.
9. **Active Recall Inmediato:** Pregunta de evocación activa sin opciones previas.
10. **Resumen de Bolsillo:** Ficha de síntesis con concepto central, pista de reconocimiento rápida y trampa fatal a evitar.
11. **Fuentes y Trazabilidad:** Citas bibliográficas exactas con páginas del Manual y estado de fuente.

---

## 4. Banco de 174 Preguntas Originales

- **Total de reactivos:** 174 preguntas originales revisadas (superando ampliamente el requerimiento de 150).
- **Estructura de cada reactivo:**
  - Identificador único canónico (`Q-MOD-[A-I]-[0-9]{2}`).
  - Objetivo de aprendizaje explícito.
  - Opciones de respuesta equilibradas en su distribución de posiciones.
  - Retroalimentación formativa de la opción correcta.
  - **Explicación razonada de cada distractor:** No se limita a marcar el error; explica por qué es inválido desde la teoría lingüística.
  - Pista opcional desplegable y botón de reformulación simplificada (*"Explicámelo más simple"*).

---

## 5. Módulo Standalone: "Prepararme para Rendir"

El módulo `/simulacros` proporciona un ecosistema de entrenamiento para el examen presencial:

### A. Tres Simulacros de Examen Orientativos (90 minutos)
- **Simulacro N° 1:** Basado en el modelo histórico oficial de la UNLaM (Manual 2022, pp. 37-38), con lectura de *Discurso y Racismo* de **Teun van Dijk**, 15 consignas de enunciación y consigna de redacción de **Informe de Lectura Descriptivo (ILD)**.
- **Simulacro N° 2:** Texto didáctico original de salud pública (*La vacunación comunitaria: un pacto ético frente al individualismo*, Dra. Elena Santillán) con 15 consignas analíticas y redacción de **respuesta de parcial con autonomía semántica**.
- **Simulacro N° 3:** Texto de debate biomédico contemporáneo (*La infodemia en salud: el peligro de las falsas promesas terapéuticas*, Dr. Martín Cárdenas) con 15 consignas y redacción de **opinión fundada académica**.

### B. Herramientas del Entorno de Examen
- **Lector de texto fuente:** Párrafos numerados (P1, P2...) para referencia precisa.
- **Temporizador cronometrado:** 90 minutos con control de pausa/reanudación y alerta visual a los 10 minutos.
- **Área de producción escrita:** Editor de texto con conteo de palabras y caracteres.
- **Rúbrica oficial interactiva (Base 10 puntos):** Desglose en 4 criterios de corrección institucionales:
  1. *Género discursivo y Objetividad* (3 pts).
  2. *Reconstrucción de Hipótesis y Argumentos* (3 pts).
  3. *Verbos de reporte y Progresión temática* (2 pts).
  4. *Cohesión, Conectores y Normativa formal* (2 pts).
- **Respuesta modelo de cátedra:** Texto ejemplar redactado para contrastar y autoevaluar la producción propia.
- **Reporte de resultados:** Calificación estimada, diagnóstico por tema y enlaces directos a las unidades que requieren repaso.

### C. Diagnóstico Inicial Rápido
10 preguntas equilibradas (una por unidad temática) sin puntaje punitivo que genera un balance de fortalezas y debilidades.

### D. Mapa de Dominio por Competencias
Matriz visual clasificada en:
- **Dominado:** $\ge 80\%$ de aciertos con al menos 4 reactivos resueltos.
- **En proceso:** Entre $40\%$ y $79\%$ de aciertos.
- **A repasar:** Menos del $40\%$ o unidades no iniciadas.

### E. Planificador de Estudio Personalizado
Calculadora interactiva de días restantes hasta la fecha de examen que sugiere ritmo diario de reactivos y cronograma semanal de clases y simulacros.

---

## 6. Funcionalidades Complementarias

- **Mazo de Tarjetas de Memoria Activa (Flashcards):** Más de 30 tarjetas con animación de giro, atajos de teclado y clasificación espaciada (*"Lo recuerdo bien"* / *"Necesito repasarlo"*).
- **Glosario Terminológico:** Más de 30 conceptos definidos con ejemplos médicos y referencias bibliográficas, con buscador en tiempo real y filtro alfabético.
- **Cuaderno Personal de Apuntes:** Editor de notas por unidad, lista de temas favoritos y exportación a archivo Markdown (`.md`).
- **Transparencia y Límites Institucionales:** Explicación detallada de la taxonomía de 5 fuentes, avisos legales y checklist para el estudiante ante la plataforma MIeL.
- **Ajustes y Accesibilidad:** Selector de tamaño tipográfico (100%, 115%, 130%), alternancia de modo oscuro/claro, reducción de movimiento (prefers-reduced-motion) y respaldo/restauración de datos JSON.

---

## 7. Accesibilidad y Diseño Móvil (WCAG 2.2 AA)

- **Target táctil:** Todos los botones, tarjetas interactivas y selectores cumplen con dimensiones mínimas de $44 \times 44\text{ px}$.
- **Contraste de color:** Ratios de contraste superiores a $4.5:1$ en texto normal y $3:1$ en componentes gráficos y títulos.
- **Navegación por teclado:** Anillos de foco visibles (`focus-visible:ring-2 focus-visible:ring-indigo-500`) en todos los elementos interactivos.
- **Safe-Area Insets:** Soporte para dispositivos móviles con notch o barras de navegación inferiores (`env(safe-area-inset-bottom)`).
- **Diseño Responsivo:** Barra de navegación adaptable: pestañas superiores en escritorio, barra fija inferior y menú desplegable accesible en pantallas móviles.

---

## 8. Pila Tecnológica

- **Frontend Core:** React 18.3 + TypeScript 5.7 (estricto, sin `any` implícitos).
- **Bundler y Servidor:** Vite 6.1 (con división optimizada de chunks: vendor, lucide, app).
- **Estilos:** Tailwind CSS 3.4 con tipografía inter y paleta institucional UNLaM.
- **Iconografía:** Lucide React (vectorial accesible).
- **Test Runner:** Vitest 3.0 con soporte nativo para TypeScript y ESM.

---

## 9. Comandos de Instalación y Ejecución

```bash
# 1. Clonar el repositorio y acceder a la carpeta
cd c:\martu

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo local
npm run dev
# Abrir en el navegador: http://localhost:3000

# 4. Ejecutar verificación estricta de tipos de TypeScript
npm run typecheck

# 5. Ejecutar la suite completa de pruebas unitarias automatizadas
npm run test

# 6. Compilar paquete de producción
npm run build
```

---

## 10. Matriz de Pruebas Automatizadas (Vitest)

La aplicación cuenta con una suite integral de 16 pruebas automatizadas:

| Archivo de Prueba | Cobertura | Resultado |
| :--- | :--- | :---: |
| `tests/questionBank.test.ts` | 174 preguntas únicas, formato de ID, $\ge 15$ por unidad, distractor explanations completas, objetivos de aprendizaje y distribución de opciones equilibrada ($\ge 35$ por posición). | **✓ PASS** |
| `tests/units.test.ts` | Existencia de las 9 unidades (`unit-a` a `unit-i`), ejecución completa de los 11 momentos pedagógicos (definición, viñetas, errores, flashcards, ejercicios vinculados). | **✓ PASS** |
| `tests/mockExams.test.ts` | 3 simulacros orientativos de 90 minutos, 15 reactivos existentes en el banco, textos fuente completos y rúbricas ponderadas exactamente en 10 puntos. | **✓ PASS** |
| `tests/storage.test.ts` | Serialización de estado a JSON, importación con validación de esquema versión 1 y rechazo de JSON corrupto o inválido. | **✓ PASS** |

---

## 11. Documentación Técnica del Proyecto

En el directorio [`docs/`](./docs/) se encuentran los documentos técnicos complementarios:
- [`docs/MAPA_DE_CONTENIDOS_Y_FUENTES.md`](./docs/MAPA_DE_CONTENIDOS_Y_FUENTES.md): Matriz de trazabilidad y cotejo bibliográfico entre el Manual UNLaM, apuntes de cursada y tratados lingüísticos.
- [`docs/CRITERIOS_PEDAGOGICOS.md`](./docs/CRITERIOS_PEDAGOGICOS.md): Fundamentación de la secuencia de 11 fases, diseño de personajes y rúbricas analíticas.
- [`docs/PLAN_DE_PRUEBAS.md`](./docs/PLAN_DE_PRUEBAS.md): Protocolos de control de calidad funcional, accesibilidad y pruebas de regresión.
- [`docs/LIMITACIONES_Y_VERIFICACIONES_PENDIENTES.md`](./docs/LIMITACIONES_Y_VERIFICACIONES_PENDIENTES.md): Alcance, restricciones institucionales y lista de tareas para el alumno.
