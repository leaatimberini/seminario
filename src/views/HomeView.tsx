import React from 'react';
import { 
  GraduationCap, 
  Map, 
  HelpCircle, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { UserState } from '../types';
import { ALL_UNITS } from '../data/units';
import { ALL_QUESTIONS } from '../data/questions';

interface HomeViewProps {
  userState: UserState;
  setActiveTab: (tab: string) => void;
  onOpenUnit: (unitId: string) => void;
  onOpenExam: (examId: string) => void;
  onStartDiagnostic: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  userState,
  setActiveTab,
  onOpenUnit,
  onOpenExam,
  onStartDiagnostic,
}) => {
  const completedCount = userState.completedUnitIds.length;
  const progressPercent = Math.round((completedCount / ALL_UNITS.length) * 100);
  
  const totalAnswered = Object.keys(userState.answers).length;
  const correctCount = Object.values(userState.answers).filter(a => a.isCorrect).length;
  const accuracyPercent = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Next recommended unit to study
  const nextUnit = ALL_UNITS.find(u => !userState.completedUnitIds.includes(u.id)) || ALL_UNITS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome & Exam Prep Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-unlam-900 via-unlam-800 to-emerald-900 text-white p-6 sm:p-8 md:p-10 shadow-xl shadow-unlam-950/20">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold text-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Curso de Ingreso a Medicina — UNLaM</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Seminario de Comprensión y Producción de Textos
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
            Prepará la materia con rigor conceptual, casos reales y didácticos de salud, microhistorias situadas y simulacros orientativos basados en el modelo oficial histórico de la cátedra.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onOpenUnit(nextUnit.id)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-unlam-900 font-extrabold text-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md transition-all"
            >
              <span>{completedCount === 0 ? 'Comenzar Unidad 1' : `Continuar: ${nextUnit.title}`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onStartDiagnostic}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600/60 hover:bg-emerald-600 text-white font-bold text-sm border border-emerald-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all"
            >
              <Award className="w-4 h-4" />
              <span>Diagnóstico Inicial (10 preguntas)</span>
            </button>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Stats & Progress Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-unlam-100 dark:bg-unlam-950 flex items-center justify-center text-unlam-700 dark:text-unlam-400 font-bold shrink-0">
            <Map className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              {completedCount} / {ALL_UNITS.length}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Unidades Dominadas ({progressPercent}%)
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              {totalAnswered} / {ALL_QUESTIONS.length}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Preguntas Respondidas
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-700 dark:text-amber-400 font-bold shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              {accuracyPercent}%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Precisión en Actividades
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-700 dark:text-purple-400 font-bold shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              {userState.examAttempts.length}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Simulacros Rendidos
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Recommended Action & Key Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Next Unit Card (Col span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-unlam-700 dark:text-unlam-400">
                Siguiente Paso en tu Ruta
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{nextUnit.estimatedMinutes} min</span>
              </span>
            </div>

            <div className="py-4">
              <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                Unidad {nextUnit.order} • {nextUnit.topicId}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                {nextUnit.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                {nextUnit.subtitle}
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-slate-100">Idea central: </span>
                <span>{nextUnit.pocketSummary.coreConcept}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => onOpenUnit(nextUnit.id)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-unlam-700 hover:bg-unlam-800 text-white font-bold text-sm shadow-md shadow-unlam-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Estudiar esta lección</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setActiveTab('ruta')}
              className="text-left p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-unlam-500 transition-all shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                <Map className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                Ruta Curricular (9 Unidades)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                De lectura de paratextos a redacción de examen e informe descriptivo.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('simulacros')}
              className="text-left p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-unlam-500 transition-all shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                Simulacros de Examen (90 min)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Modelos completos orientativos con textos originales y rúbrica analítica.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('practica')}
              className="text-left p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-unlam-500 transition-all shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                Banco de 174 Preguntas
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Práctica libre con justificación de cada distractor y pistas graduales.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('tarjetas')}
              className="text-left p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-unlam-500 transition-all shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                Tarjetas de Repaso Rápido
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Active recall y repetición espaciada para conceptos clave de cátedra.
              </p>
            </button>
          </div>
        </div>

        {/* Sidebar: Study Guidelines & Institutional Clarity */}
        <div className="space-y-6">
          {/* Institutional Integrity Box */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 text-xs text-slate-600 dark:text-slate-400 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Transparencia Curricular</span>
            </div>
            <p className="leading-relaxed">
              Esta aplicación está orientada a <strong className="text-slate-800 dark:text-slate-200">Seminario de comprensión y producción de textos</strong>. Los ejemplos de salud facilitan la lectura académica sin sustituir Biociencias ni Educación Médica.
            </p>
            <p className="leading-relaxed">
              Los simulacros son orientativos y basados en el programa oficial histórico de la UNLaM. Los exámenes vigentes son confidenciales de la cátedra.
            </p>
            <button
              onClick={() => setActiveTab('fuentes')}
              className="text-unlam-700 dark:text-unlam-400 font-bold hover:underline inline-block pt-1"
            >
              Consultar mapa de fuentes completo →
            </button>
          </div>

          {/* Characters Study Club Box */}
          <div className="bg-gradient-to-br from-unlam-50 to-emerald-50 dark:from-slate-900 dark:to-slate-850 rounded-3xl border border-unlam-200 dark:border-slate-800 p-6 space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              Tu Grupo de Estudio en UNLaM
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Acompañá a <strong className="text-slate-800 dark:text-slate-200">Mía</strong> (ingresante metódica a Medicina), a <strong className="text-slate-800 dark:text-slate-200">Lucas</strong> (compañero entusiasta pero distraído con los conectores) y a la <strong className="text-slate-800 dark:text-slate-200">Prof. Valeria</strong> en las microhistorias de cada lección.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
