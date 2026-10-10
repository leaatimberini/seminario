import React, { useState } from 'react';
import { Vignette } from '../types';
import { ChevronLeft, ChevronRight, User, BookOpen } from 'lucide-react';

interface MicroStoryViewerProps {
  title: string;
  vignettes: Vignette[];
}

export const MicroStoryViewer: React.FC<MicroStoryViewerProps> = ({ title, vignettes }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const current = vignettes[currentIdx];

  const handleNext = () => {
    if (currentIdx < vignettes.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 my-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-unlam-700 dark:text-unlam-400 font-bold text-sm">
          <BookOpen className="w-4 h-4" />
          <span>Microhistoria Situada: {title}</span>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
          Viñeta {currentIdx + 1} de {vignettes.length}
        </span>
      </div>

      {/* Main Vignette Content */}
      <div className="py-5">
        {/* Speaker Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-unlam-100 dark:bg-unlam-950 text-unlam-800 dark:text-unlam-300 text-xs font-bold mb-3">
          <User className="w-3.5 h-3.5" />
          <span>{current.speaker}</span>
        </div>

        {/* Dialogue Balloon */}
        <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm text-slate-800 dark:text-slate-100 font-medium text-base sm:text-lg leading-relaxed">
          <p className="italic font-serif">"{current.dialogue}"</p>
        </div>

        {/* Scene Context / Visual Description */}
        <div className="mt-4 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
          <span className="font-semibold text-slate-700 dark:text-slate-300 shrink-0">Escena:</span>
          <p>{current.sceneDescription}</p>
        </div>

        {/* Accessible Alternative Text */}
        <p className="sr-only">
          Descripción accesible de la viñeta {current.index}: {current.altText}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        {/* Dots indicator */}
        <div className="flex gap-1.5" aria-hidden="true">
          {vignettes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIdx ? 'w-5 bg-unlam-700 dark:bg-unlam-500' : 'bg-slate-300 dark:bg-slate-700'
              }`}
              aria-label={`Ir a la viñeta ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIdx === vignettes.length - 1}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 transition-colors"
        >
          <span>Siguiente</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
