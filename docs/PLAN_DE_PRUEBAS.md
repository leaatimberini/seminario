# Plan Integral de Pruebas y Aseguramiento de Calidad (QA)
## Seminario de Comprensión y Producción de Textos — Curso de Ingreso a Medicina (UNLaM)

> **Propósito del documento**: Definir la estrategia, matriz de pruebas, criterios de aceptación, herramientas automatizadas y procedimientos de verificación para certificar la estabilidad, accesibilidad y rigor educativo de la aplicación.

---

## 1. Niveles de Prueba y Alcance

```
                     ┌─────────────────────────────┐
                     │     Pruebas E2E (Playwright)│  Flujo completo de estudio,
                     │  Desktop, Tablet, Mobile    │  simulacros y persistencia
                     ├─────────────────────────────┤
                     │    Integración / Componentes│  Lecciones, formularios,
                     │       (Vitest + RTL)        │  tarjetas, modales, teclado
                     ├─────────────────────────────┤
                     │ Pruebas Unitarias y Schema  │  Banco de preguntas (150+),
                     │       (Vitest / Node)       │  cálculo de notas, storage
                     └─────────────────────────────┘
```

---

## 2. Pruebas Unitarias del Banco de Preguntas (Validación Automatizada)

Cada una de las preguntas del banco (mínimo 150 items) debe pasar sin excepción una batería de pruebas automatizadas:

| Identificador | Prueba | Criterio de Aceptación |
|---|---|---|
| `TEST-BANK-01` | **Unicidad de IDs** | Todos los IDs son únicos, siguen el formato `Q-[MOD]-[NUM]` y no presentan colisiones. |
| `TEST-BANK-02` | **Integridad de Clave** | Toda pregunta tiene un campo `correctAnswer` definido que coincide exactamente con uno de los IDs de las opciones. |
| `TEST-BANK-03` | **Calidad de Opciones** | En preguntas de opción múltiple, exactamente 4 opciones no vacías, sin texto duplicado. |
| `TEST-BANK-04` | **Explicación Pedagógica de la Correcta** | El campo `explanation` contiene fundamentación teórica de al menos 40 caracteres con referencia al concepto evaluado. |
| `TEST-BANK-05` | **Explicación de Distractores** | En preguntas de opción múltiple, el objeto `distractorExplanations` contiene la justificación específica de error para cada una de las 3 opciones incorrectas. |
| `TEST-BANK-06` | **Mapeo Curricular y Fuentes** | Todo `topicId` refiere a un módulo válido (`MOD-A` a `MOD-I`). El campo `sourceStatus` contiene uno de los estatus aprobados (`oficial_vigente`, `resumen_usuario`, `oficial_historica`, `externa_verificada`, `ejemplo_original`). |
| `TEST-BANK-07` | **Equilibrio de Posiciones** | La distribución estadística de la opción correcta en las posiciones A, B, C, D oscila entre el 15% y el 35% para evitar sesgos de respuesta sistemáticos. |
| `TEST-BANK-08` | **Ausencia de Duplicados Semánticos** | Ninguna consigna tiene más del 85% de similitud léxica con otra sin aportar una variante conceptual o contextual genuina. |

---

## 3. Pruebas Unitarias de Lógica y Persistencia

| Identificador | Módulo | Caso de Prueba | Comportamiento Esperado |
|---|---|---|---|
| `TEST-LOGIC-01` | Motor de Simulacro | Cálculo de puntaje y ponderación | Nota ponderada sobre 10 puntos (escala UNLaM), desglosando porcentaje de aciertos por módulo. |
| `TEST-LOGIC-02` | Motor de Repaso | Algoritmo de repetición espaciada | Las preguntas marcadas como "necesito repasar" incrementan su prioridad en sesiones de práctica personalizada. |
| `TEST-STORAGE-01`| Persistencia Local | Guardado y recuperación en Storage | Guarda progreso, notas, respuestas de simulacros y favoritos; los recupera de forma idéntica tras reinicio de sesión. |
| `TEST-STORAGE-02`| Resiliencia ante fallos | Fallback cuando el storage está restringido | Si IndexedDB/localStorage arroja error (ej. navegación privada estricta), la app continúa en memoria con aviso amigable y sin crashear. |
| `TEST-IMPORT-01` | Exportación e Importación | Validación de esquema JSON | Permite descargar respaldo `.json`. Al importar, valida la versión del esquema; si el archivo está corrupto o alterado, rechaza con mensaje de error sin destruir el estado actual. |

---

## 4. Pruebas de Interfaz, Accesibilidad y Ergonomía (WCAG 2.2 AA)

| Identificador | Criterio WCAG | Procedimiento de Verificación |
|---|---|---|
| `TEST-A11Y-01` | Contraste (1.4.3 / 1.4.6) | Ratio mínimo de 4.5:1 para texto normal y 3:1 para controles UI y texto grande, verificado tanto en modo claro como en modo oscuro. |
| `TEST-A11Y-02` | Navegación por Teclado (2.1.1) | Toda la aplicación es operable íntegramente con `Tab`, `Shift+Tab`, `Enter`, `Espacio` y flechas direccionales. Indicador de foco visible (`outline` accesible). |
| `TEST-A11Y-03` | No Dependencia del Color (1.4.1) | Aciertos y desaciertos se señalan con íconos vectoriales inequívocos (✓ / ✗), texto explicativo y estilos distintivos, nunca únicamente con verde/rojo. |
| `TEST-A11Y-04` | Alternativas Textuales (1.1.1) | Todas las viñetas narrativas, esquemas y tablas tienen `alt` detallado o transcripción accesible equivalente. |
| `TEST-A11Y-05` | Lectores de Pantalla (4.1.2) | Formularios con labels explícitos, modales con `aria-modal="true"` y trampeo de foco, mensajes de feedback con `aria-live="polite"`. |
| `TEST-A11Y-06` | Movimiento Reducido (2.3.3) | Respeto automático de `prefers-reduced-motion: reduce` desactivando transiciones o haciéndolas instantáneas. |

---

## 5. Matriz de Pruebas Responsive y Mobile-First

| Dispositivo / Perfil | Resolución | Aspectos Críticos a Certificar |
|---|---|---|
| **Móvil Ultra Pequeño** | 320 × 568 px (iPhone SE gen 1) | Sin desborde horizontal (overflow-x), botones principales mínimo 44×44 px, tarjetas legibles. |
| **Móvil Estándar** | 375 × 667 px / 390 × 844 px | Compatibilidad con notch y safe-area (`env(safe-area-inset-top)` / `bottom`), visibilidad del teclado virtual sin tapar inputs. |
| **Tablet Vertical / Horizontal** | 768 × 1024 px / 1024 × 768 px | Grillas adaptables de 1 a 2 columnas, barra de navegación optimizada, modales centrados. |
| **Desktop / Laptop** | 1280 × 800 px / 1440 × 900 px | Aprovechamiento armónico del espacio en blanco, ancho máximo de lectura descansada (65-75 caracteres por línea). |
| **iOS Safari / WebKit** | Simulación WebKit | Altura de viewport dinámica (`100dvh` con fallback a `100vh`), sin rebotes elásticos indeseados en modales. |

---

## 6. Pruebas End-to-End (E2E) Automatizadas

Se definen 5 flujos esenciales de extremo a extremo:

1. **Flujo E2E 1 - Ruta de Aprendizaje**: Navegar a Unidad MOD-C (Coherencia y Cohesión), recorrer la historieta, estudiar el ejemplo resuelto, responder la práctica guiada con pista y la práctica independiente, verificar que la lección se marque completada.
2. **Flujo E2E 2 - Banco de Práctica**: Filtrar preguntas por tema y dificultad, contestar una pregunta incorrectamente, inspeccionar el feedback pedagógico de cada distractor, solicitar "explicámelo más simple", contestar la pregunta de recuperación activa.
3. **Flujo E2E 3 - Prepararme para Rendir / Simulacro**: Iniciar un simulacro orientativo de 15 preguntas con temporizador opcional, responder el conjunto, finalizar el examen, visualizar el informe de resultados por módulo, revisar las correcciones consigna por consigna.
4. **Flujo E2E 4 - Persistencia y Recarga**: Contestar actividades, guardar una nota personal en el glosario, recargar la página en el navegador (`F5`), comprobar que el progreso, notas y estadísticas persisten intactos.
5. **Flujo E2E 5 - Exportación / Importación**: Exportar progreso a JSON, reiniciar datos desde la pantalla de Ajustes, importar el archivo JSON y corroborar la restauración exacta de los datos.
