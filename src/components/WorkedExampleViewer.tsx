import React, { useState } from 'react';
import { WorkedExample } from '../types';
import { Search, Info, CheckCircle2 } from 'lucide-react';

interface WorkedExampleViewerProps {
  example: WorkedExample;
}

export const WorkedExampleViewer: React.FC<WorkedExampleViewerProps> = ({ example }) => {
  const [selectedAnnotationIndex, setSelectedAnnotationIndex] = useState<number | null>(0);

  const getBadgeLabel = (type: WorkedExample['contextType']) => {
    switch (type) {
      case 'caso_real_documentado':
        return { text: 'Caso Real Documentado', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800' };
      case 'caso_didactico_simulado':
        return { text: 'Caso Didáctico Simulado', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
      case 'texto_original_practica':
        return { text: 'Texto Original de Práctica', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200 dark:border-purple-800' };
    }
  };

  const badge = getBadgeLabel(example.contextType);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 my-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border mb-1.5 ${badge.color}`}>
            {badge.text}
          </span>
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base md:text-lg">
            {example.title}
          </h4>
        </div>
        {example.sourceNote && (
          <span className="text-xs text-slate-500 dark:text-slate-400 italic">
            {example.sourceNote}
          </span>
        )}
      </div>

      {/* Text Box with Highlighted Elements */}
      <div className="my-5 p-4 md:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
        {example.text}
      </div>

      {/* Interactive Annotations Breakdown */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <Search className="w-3.5 h-3.5" />
          <span>Marcas pedagógicas observadas (hacé clic para ver el análisis):</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {example.annotations.map((ann, idx) => {
            const isSelected = selectedAnnotationIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedAnnotationIndex(idx)}
                className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 ${
                  isSelected
                    ? 'bg-unlam-50 dark:bg-unlam-950/60 border-unlam-600 dark:border-unlam-500 text-unlam-900 dark:text-unlam-200 shadow-sm'
                    : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <div className="font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                  {ann.term}
                </div>
                <p className="line-clamp-2 text-slate-600 dark:text-slate-400 text-xs">
                  {ann.explanation}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Annotation Detail Box */}
        {selectedAnnotationIndex !== null && (
          <div className="p-4 rounded-xl bg-unlam-100/70 dark:bg-unlam-950/40 border border-unlam-300 dark:border-unlam-800 text-sm text-unlam-900 dark:text-unlam-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-unlam-700 dark:text-unlam-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-1">
                {example.annotations[selectedAnnotationIndex].term}:
              </span>
              <p className="leading-relaxed">
                {example.annotations[selectedAnnotationIndex].explanation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Didactic Takeaway */}
      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-900 dark:text-slate-100">Conclusión del análisis pedagógico: </span>
          <span>{example.analysisTakeaway}</span>
        </div>
      </div>
    </div>
  );
};
