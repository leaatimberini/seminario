import React, { useState } from 'react';
import { Question } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  HelpCircle, 
  AlertCircle, 
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onAnswerSubmit: (questionId: string, answerId: string, isCorrect: boolean) => void;
  showExplanationImmediately?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer: initialAnswer,
  onAnswerSubmit,
  showExplanationImmediately = false,
}) => {
  const [selected, setSelected] = useState<string | null>(initialAnswer || null);
  const [submitted, setSubmitted] = useState<boolean>(Boolean(initialAnswer) || showExplanationImmediately);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSimpleExplanation, setShowSimpleExplanation] = useState<boolean>(false);

  const handleSelect = (optionId: string) => {
    if (submitted) return;
    setSelected(optionId);
  };

  const handleSubmit = () => {
    if (!selected || submitted) return;
    setSubmitted(true);
    const isCorrect = selected === question.correctAnswer;
    onAnswerSubmit(question.id, selected, isCorrect);
  };

  const isAnswerCorrect = selected === question.correctAnswer;

  const getSourceBadge = (status: Question['sourceStatus']) => {
    switch (status) {
      case 'oficial_vigente':
        return { label: 'Oficial Vigente UNLaM', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' };
      case 'oficial_historica':
        return { label: 'Manual UNLaM Histórico', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' };
      case 'resumen_usuario':
        return { label: 'Resumen de Cátedra Aportado', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' };
      case 'externa_verificada':
        return { label: 'Referencia Lingüística Verificada', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' };
      default:
        return { label: 'Ejemplo Didáctico Original', color: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300' };
    }
  };

  const sourceBadge = getSourceBadge(question.sourceStatus);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 my-4 shadow-sm transition-all">
      {/* Question Header & Meta */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {question.id}
          </span>
          <span className="font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Dificultad: {question.difficulty}
          </span>
        </div>
        <span className={`px-2.5 py-0.5 rounded-full font-bold ${sourceBadge.color}`}>
          {sourceBadge.label}
        </span>
      </div>

      {/* Learning Objective */}
      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">
        Objetivo: {question.learningObjective}
      </p>

      {/* Prompt */}
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-5 leading-relaxed">
        {question.prompt}
      </h3>

      {/* Options List */}
      <div className="space-y-2.5 mb-5" role="radiogroup" aria-label={question.prompt}>
        {question.options.map((option) => {
          const isChosen = selected === option.id;
          const isCorrect = option.id === question.correctAnswer;

          let optionStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750';
          
          if (isChosen && !submitted) {
            optionStyle = 'border-unlam-600 dark:border-unlam-500 bg-unlam-50 dark:bg-unlam-950/60 text-unlam-950 dark:text-unlam-100 ring-2 ring-unlam-600/30';
          }

          if (submitted) {
            if (isCorrect) {
              optionStyle = 'border-emerald-500 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/30';
            } else if (isChosen && !isCorrect) {
              optionStyle = 'border-rose-400 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/50 text-rose-950 dark:text-rose-100 ring-2 ring-rose-500/30';
            } else {
              optionStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-850/40 text-slate-500 dark:text-slate-400 opacity-70';
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={submitted}
              role="radio"
              aria-checked={isChosen}
              className={`w-full text-left p-4 rounded-xl border font-medium text-sm sm:text-base flex items-start gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 ${optionStyle}`}
            >
              <div className="shrink-0 mt-0.5">
                {submitted && isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                ) : submitted && isChosen && !isCorrect ? (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                ) : (
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold ${
                    isChosen 
                      ? 'border-unlam-600 bg-unlam-600 text-white' 
                      : 'border-slate-400 text-slate-500 dark:border-slate-600 dark:text-slate-400'
                  }`}>
                    {option.id.replace('opt-', '').toUpperCase()}
                  </div>
                )}
              </div>
              <span className="leading-snug">{option.text}</span>
            </button>
          );
        })}
      </div>

      {/* Action / Submit Button */}
      {!submitted && (
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          {question.hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded p-1"
            >
              <Lightbulb className="w-4 h-4" />
              <span>{showHint ? 'Ocultar pista' : 'Ver pista pedagógica'}</span>
            </button>
          )}

          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="ml-auto px-5 py-2.5 rounded-xl bg-unlam-700 hover:bg-unlam-800 text-white font-bold text-sm shadow-md shadow-unlam-900/20 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 transition-all"
          >
            Comprobar respuesta
          </button>
        </div>
      )}

      {/* Hint Box */}
      {showHint && !submitted && question.hint && (
        <div className="mt-3 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Pista pedagógica: </span>
            <span>{question.hint}</span>
          </div>
        </div>
      )}

      {/* Post-Submit Pedagogical Feedback Box */}
      {submitted && (
        <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
          {/* Result banner with icon and text (WCAG compliant) */}
          <div className={`p-4 rounded-xl flex items-start gap-3 border ${
            isAnswerCorrect
              ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
              : 'bg-rose-50 dark:bg-rose-950/50 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100'
          }`}>
            {isAnswerCorrect ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            )}
            <div>
              <div className="font-bold text-base mb-1">
                {isAnswerCorrect ? '¡Respuesta correcta!' : 'No es la respuesta correcta'}
              </div>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">Fundamento teórico: </span>
                {question.explanation}
              </p>
            </div>
          </div>

          {/* Distractor Explanations: Why each wrong option fails */}
          {question.distractorExplanations && Object.keys(question.distractorExplanations).length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
              <div className="font-bold text-slate-800 dark:text-slate-200 mb-2.5 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>¿Por qué las otras opciones no corresponden?</span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {Object.entries(question.distractorExplanations).map(([optId, exp]) => (
                  <li key={optId} className="flex items-start gap-2">
                    <span className="font-bold text-slate-700 dark:text-slate-200 uppercase shrink-0">
                      Opción {optId.replace('opt-', '')}:
                    </span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quick Help: Explicámelo más simple */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
            <span className="italic">Fuente: {question.sourceRef}</span>
            <button
              onClick={() => setShowSimpleExplanation(!showSimpleExplanation)}
              className="text-unlam-700 dark:text-unlam-400 font-bold hover:underline focus:outline-none"
            >
              {showSimpleExplanation ? 'Ocultar síntesis' : '💡 Explicámelo más simple'}
            </button>
          </div>

          {showSimpleExplanation && (
            <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200">
              <span className="font-bold">En pocas palabras: </span>
              <span>
                {question.explanation.split('.')[0]}. Recordá siempre guiarte por la definición teórica de la cátedra y no por intuiciones cotidianas aisladas.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
