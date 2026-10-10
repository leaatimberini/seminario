import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { UserState } from '../types';
import { ALL_UNITS } from '../data/units';

interface RoadmapViewProps {
  userState: UserState;
  onOpenUnit: (unitId: string) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ userState, onOpenUnit }) => {
  const completedIds = userState.completedUnitIds;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-unlam-700 dark:text-unlam-400 mb-1">
          <Layers className="w-4 h-4" />
          <span>Malla Curricular Progresiva</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Ruta de Aprendizaje: Las 9 Unidades de Seminario
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
          Recorrido pedagógico ordenado por prerrequisitos cognitivos: desde las técnicas preliminares de lectura analítica hasta la redacción del examen y del Informe de Lectura Descriptivo.
        </p>
      </div>

      {/* Units Timeline / Grid */}
      <div className="space-y-4">
        {ALL_UNITS.map((unit, index) => {
          const isCompleted = completedIds.includes(unit.id);
          const isNext = !isCompleted && (index === 0 || completedIds.includes(ALL_UNITS[index - 1].id));

          return (
            <div
              key={unit.id}
              className={`p-6 rounded-3xl border transition-all ${
                isCompleted
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/80 shadow-sm'
                  : isNext
                  ? 'bg-white dark:bg-slate-900 border-unlam-500 shadow-md ring-2 ring-unlam-500/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-90 shadow-sm'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 max-w-3xl">
                  {/* Top metadata badges */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Unidad {unit.order} • {unit.topicId}
                    </span>

                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{unit.estimatedMinutes} minutos</span>
                    </span>

                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Completada</span>
                      </span>
                    ) : isNext ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-unlam-100 dark:bg-unlam-950 text-unlam-800 dark:text-unlam-300 font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Recomendada para hoy</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">
                        Pendiente
                      </span>
                    )}
                  </div>

                  {/* Title and subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                    {unit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {unit.subtitle}
                  </p>

                  {/* Pocket summary pill */}
                  <div className="pt-1 text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 shrink-0">Núcleo:</span>
                    <span>{unit.pocketSummary.coreConcept}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="shrink-0 pt-2 md:pt-0">
                  <button
                    onClick={() => onOpenUnit(unit.id)}
                    className={`w-full md:w-auto px-5 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 transition-all ${
                      isCompleted
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                        : isNext
                        ? 'bg-unlam-700 text-white hover:bg-unlam-800 shadow-md shadow-unlam-900/20'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{isCompleted ? 'Repasar lección' : 'Comenzar lección'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
