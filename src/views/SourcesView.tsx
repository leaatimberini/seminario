import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  AlertTriangle, 
  BookOpen, 
  CheckCircle2, 
  FileCheck,
  Scale,
  Sparkles
} from 'lucide-react';
import { SourceStatus } from '../types';

export const SourcesView: React.FC = () => {
  const sourceCategories: {
    status: SourceStatus;
    title: string;
    description: string;
    badgeClass: string;
    items: string[];
  }[] = [
    {
      status: 'oficial_vigente',
      title: '1. Oficial Vigente UNLaM',
      description: 'Documentación normativa y reglamentaria provista directamente por la Universidad Nacional de La Matanza para el ciclo lectivo.',
      badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
      items: [
        'Programa oficial de la asignatura Seminario de Comprensión y Producción de Textos.',
        'Fechas de examen y cronograma administrativo publicado en el portal oficial UNLaM y plataforma MIeL.',
        'Pautas formales de presentación y régimen de asistencia institucional.'
      ]
    },
    {
      status: 'oficial_historica',
      title: '2. Oficial Histórica UNLaM',
      description: 'Materiales bibliográficos editados por la institución en ediciones impresas precedentes.',
      badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
      items: [
        'Manual del Curso de Ingreso UNLaM (Edición 2022, pp. 11 a 113), Módulos 1, 2, 3 y Anexo Normativo.',
        'Modelo de evaluación parcial institucional publicado en pp. 37-38 del Manual (texto de Teun van Dijk, preguntas de enunciación y consigna de ILD).'
      ]
    },
    {
      status: 'resumen_usuario',
      title: '3. Resúmenes de Cátedra Aportados',
      description: 'Apuntes de clase, síntesis de cursada y esquemas elaborados por estudiantes que cursaron la materia.',
      badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
      items: [
        'Resumen seminario .pdf (9 unidades temáticas desglosadas con definiciones y preguntas guía).',
        '[studocu.com] - Resumen del Seminario 20240823 151944 0000.pdf (síntesis de géneros, polifonía y conectores).'
      ]
    },
    {
      status: 'externa_verificada',
      title: '4. Bibliografía Lingüística Verificada',
      description: 'Tratados y artículos canónicos citados en el programa de la cátedra que sustentan la teoría lingüística.',
      badgeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
      items: [
        'Mijaíl Bajtín (1982) — El problema de los géneros discursivos.',
        'Émile Benveniste (1971) — El aparato formal de la enunciación.',
        'Catherine Kerbrat-Orecchioni (1986) — La enunciación: de la subjetividad en el lenguaje.',
        'Elvira Narvaja de Arnoux et al. (2002) — La lectura y la escritura en la universidad.',
        'Teun van Dijk (2001) — Discurso y racismo.',
        'M.A.K. Halliday & R. Hasan (1976) — Cohesion in English / Gregorio de Mac (1992).',
        'Real Academia Española (RAE / ASALE 2010) — Ortografía de la lengua española (norma del gerundio y acentuación).'
      ]
    },
    {
      status: 'ejemplo_original',
      title: '5. Casos Didácticos Originales Aplicados a Salud',
      description: 'Textos, viñetas de microhistorias, reactivos y fragmentos creados específicamente para este sistema por el equipo docente.',
      badgeClass: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300',
      items: [
        'Banco de 174 preguntas con retroalimentación razonada y explicación de distractores.',
        'Fragmentos de divulgación sanitaria simulados (vacunación, infodemia, dengue, adherencia terapéutica).',
        'Diálogos situados entre Mía, Lucas y la Prof. Valeria para ilustrar dudas frecuentes.'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          Transparencia académica y trazabilidad
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Fuentes, Trazabilidad y Límites Institucionales
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
          Para garantizar la máxima confiabilidad en tu preparación, cada concepto, reactivo y ejemplo de este sistema está clasificado según su origen institucional y rigurosamente referenciado.
        </p>
      </div>

      {/* Mandatory Institutional Disclaimers */}
      <div className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-800 rounded-3xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
          <h2 className="text-lg font-bold text-amber-950 dark:text-amber-200">
            Avisos Importantes para el Aspirante al Curso de Ingreso UNLaM
          </h2>
        </div>

        <ul className="space-y-2.5 text-xs md:text-sm text-amber-900 dark:text-amber-300 leading-relaxed list-disc list-inside">
          <li>
            <strong>Independencia formativa:</strong> Esta plataforma es una herramienta complementaria de estudio independiente y autogestionado. No depende administrativamente de la UNLaM ni sustituye la asistencia a clases presenciales o virtuales obligatorias.
          </li>
          <li>
            <strong>Exámenes orientativos:</strong> Los simulacros presentados están construidos a partir de los modelos didácticos públicos e históricos del Manual oficial (ej. texto de Teun van Dijk, pp. 37-38). No constituyen ni reproducen evaluaciones confidenciales o vigentes de la cátedra.
          </li>
          <li>
            <strong>Sin garantía de ingreso:</strong> El uso de esta aplicación fortalece tus competencias lectocomprensivas y de redacción académica, pero no garantiza la aprobación del Curso de Ingreso ni la obtención de una vacante en la carrera de Medicina.
          </li>
          <li>
            <strong>Foco disciplinar exclusivo:</strong> La materia evalúa exclusivamente competencias lingüísticas y discursivas (Seminario de Comprensión y Producción de Textos). Los ejemplos biomédicos son puramente pedagógicos y no evalúan contenidos clínicos o médicos.
          </li>
        </ul>
      </div>

      {/* 5 Source Categories */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          Clasificación y Trazabilidad de Contenidos
        </h2>

        <div className="space-y-4">
          {sourceCategories.map((cat) => (
            <div
              key={cat.status}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h3>
                <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full ${cat.badgeClass}`}>
                  {cat.status}
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                {cat.description}
              </p>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist for Student */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-4 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          Checklist de Verificación Personal para el Estudiante
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          Recomendaciones que debés cumplir directamente en los canales formales de la universidad:
        </p>

        <div className="space-y-3 pt-2 text-xs text-slate-700 dark:text-slate-300">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center shrink-0">1</span>
            <div>
              <strong>Revisar periódicamente la plataforma MIeL:</strong> Descargá el cronograma oficial de tu comisión, los avisos de tu docente a cargo y las fechas de entrega de trabajos prácticos obligatorios.
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center shrink-0">2</span>
            <div>
              <strong>Consultar pautas específicas de formato:</strong> Preguntá a tu docente si para el Informe de Lectura Descriptivo (ILD) exige sangría de primera línea, normas APA para las citas o una extensión máxima fija en renglones.
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center shrink-0">3</span>
            <div>
              <strong>Confirmar el aula y horario del examen presencial:</strong> Acudí con DNI original y lapicera azul o negra indeleble.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
