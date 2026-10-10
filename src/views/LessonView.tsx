import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Lightbulb, 
  AlertTriangle, 
  FileText, 
  HelpCircle, 
  Sparkles,
  Info,
  Layers,
  StickyNote
} from 'lucide-react';
import { DidacticUnit, UserState } from '../types';
import { MicroStoryViewer } from '../components/MicroStoryViewer';
import { WorkedExampleViewer } from '../components/WorkedExampleViewer';
import { QuestionCard } from '../components/QuestionCard';
import { getQuestionById } from '../data/questions';

interface LessonViewProps {
  unit: DidacticUnit;
  userState: UserState;
  onBack: () => void;
  onCompleteUnit: (unitId: string) => void;
  onToggleFavorite: (id: string) => void;
  onSaveNote: (id: string, note: string) => void;
  onAnswerSubmit: (questionId: string, answerId: string, isCorrect: boolean) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  unit,
  userState,
  onBack,
  onCompleteUnit,
  onToggleFavorite,
  onSaveNote,
  onAnswerSubmit,
}) => {
  const isCompleted = userState.completedUnitIds.includes(unit.id);
  const isFavorite = userState.favorites.includes(unit.id);
  const initialNote = userState.notes[unit.id] || '';

  const [noteText, setNoteText] = useState<string>(initialNote);
  const [showNoteEditor, setShowNoteEditor] = useState<boolean>(false);
  const [noteSavedFeedback, setNoteSavedFeedback] = useState<boolean>(false);

  const guidedQuestion = getQuestionById(unit.guidedExerciseId);
  const independentQuestion = getQuestionById(unit.independentExerciseId);
  const activeRecallQuestion = getQuestionById(unit.activeRecallExerciseId);

  const handleSaveNote = () => {
    onSaveNote(unit.id, noteText);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Top Bar Navigation & Actions */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 rounded-lg p-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Ruta</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Notes Toggle */}
          <button
            onClick={() => setShowNoteEditor(!showNoteEditor)}
            className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 ${
              noteText ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
            }`}
            title="Mis notas de esta unidad"
            aria-label="Abrir bloc de notas"
          >
            <StickyNote className="w-4 h-4" />
            <span className="hidden sm:inline">Notas</span>
          </button>

          {/* Favorite Toggle */}
          <button
            onClick={() => onToggleFavorite(unit.id)}
            className={`p-2 rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 ${
              isFavorite
                ? 'bg-amber-100 dark:bg-amber-950 border-amber-400 dark:border-amber-700 text-amber-700 dark:text-amber-400'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            title={isFavorite ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
            aria-label={isFavorite ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Note Editor Dropdown */}
      {showNoteEditor && (
        <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-200">
            <span className="flex items-center gap-1.5">
              <StickyNote className="w-4 h-4 text-amber-700" />
              <span>Mi apunte personal para {unit.title}</span>
            </span>
            {noteSavedFeedback && (
              <span className="text-emerald-700 dark:text-emerald-400">¡Guardado con éxito!</span>
            )}
          </div>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Anotá tus dudas, reglas que te cuestan o recordatorios para repasar antes del parcial..."
            rows={3}
            className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSaveNote}
              className="px-4 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shadow-sm transition-colors"
            >
              Guardar Nota
            </button>
          </div>
        </div>
      )}

      {/* Lesson Header */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-mono font-bold px-2 py-0.5 rounded bg-unlam-100 dark:bg-unlam-950 text-unlam-800 dark:text-unlam-300">
            Unidad {unit.order} • {unit.topicId}
          </span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>Tiempo estimado: {unit.estimatedMinutes} minutos</span>
          </span>
          {isCompleted && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Unidad completada</span>
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {unit.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
          {unit.subtitle}
        </p>
      </header>

      {/* Learning Objectives Pills */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Objetivos de aprendizaje de esta unidad:
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
          {unit.learningObjectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* PHASE 1 & 2: Clear Definition & Everyday Explanation */}
      <section className="space-y-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-unlam-700 dark:text-unlam-400">
            <BookOpen className="w-4 h-4" />
            <span>1. Definición Teórica Rigurosa</span>
          </div>
          <p className="text-base sm:text-lg font-serif text-slate-900 dark:text-slate-100 leading-relaxed">
            {unit.clearDefinition}
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            <Sparkles className="w-4 h-4" />
            <span>2. En la Vida Cotidiana: ¿Cómo se ve esto?</span>
          </div>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {unit.everydayExplanation}
          </p>
        </div>
      </section>

      {/* PHASE 3: Pedagogical Analogy with Caveat */}
      <section className="p-6 rounded-3xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
          <Lightbulb className="w-4 h-4" />
          <span>3. Analogía Pedagógica para Recordar</span>
        </div>
        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">
          {unit.analogy.metaphor}
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {unit.analogy.explanation}
        </p>
        <div className="pt-2 text-xs text-amber-900 dark:text-amber-300 font-medium bg-amber-100/60 dark:bg-amber-950/60 p-3 rounded-xl border border-amber-300 dark:border-amber-900/60">
          <span className="font-bold">⚠️ Advertencia sobre los límites de la analogía: </span>
          <span>{unit.analogy.caveat}</span>
        </div>
      </section>

      {/* PHASE 4: Microstory (Mía, Lucas, Valeria) */}
      <section>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          4. Microhistoria de Estudio Situada
        </div>
        <MicroStoryViewer title={unit.microStory.title} vignettes={unit.microStory.vignettes} />
      </section>

      {/* PHASE 5: Worked Examples with Annotations */}
      <section className="space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          5. Ejemplo Resuelto con Marcas Analíticas
        </div>
        {unit.workedExamples.map(ex => (
          <WorkedExampleViewer key={ex.id} example={ex} />
        ))}
      </section>

      {/* PHASE 6: Common Mistakes and How to Spot Them */}
      <section className="space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          6. Errores Frecuentes en el Parcial y Cómo Detectarlos
        </div>
        <div className="grid grid-cols-1 gap-4">
          {unit.commonMistakes.map((m, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-3">
              <div className="flex items-start gap-2 text-rose-900 dark:text-rose-200 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Error común: {m.mistake}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-emerald-800 dark:text-emerald-300">Corrección adecuada: </strong>
                {m.correction}
              </p>
              <div className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-rose-200 dark:border-rose-900/40 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">¿Por qué pasa? </span>
                  <span>{m.whyItHappens}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">¿Cómo detectarlo? </span>
                  <span>{m.howToSpotIt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHASE 7: Guided Practice with Hints */}
      {guidedQuestion && (
        <section className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            7. Práctica Guiada (con Pistas Desplegables)
          </div>
          <QuestionCard
            question={guidedQuestion}
            selectedAnswer={userState.answers[guidedQuestion.id]?.selectedAnswer}
            onAnswerSubmit={onAnswerSubmit}
          />
        </section>
      )}

      {/* PHASE 8: Independent Practice */}
      {independentQuestion && (
        <section className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            8. Práctica Independiente (Comprobá tu Autonomía)
          </div>
          <QuestionCard
            question={independentQuestion}
            selectedAnswer={userState.answers[independentQuestion.id]?.selectedAnswer}
            onAnswerSubmit={onAnswerSubmit}
          />
        </section>
      )}

      {/* PHASE 9: Active Recall Challenge */}
      {activeRecallQuestion && (
        <section className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            9. Recuperación Activa (Active Recall Inmediato)
          </div>
          <QuestionCard
            question={activeRecallQuestion}
            selectedAnswer={userState.answers[activeRecallQuestion.id]?.selectedAnswer}
            onAnswerSubmit={onAnswerSubmit}
          />
        </section>
      )}

      {/* PHASE 10: Pocket Summary (Cheat Sheet) */}
      <section className="p-6 rounded-3xl bg-gradient-to-br from-unlam-50 to-emerald-50 dark:from-slate-900 dark:to-slate-850 border border-unlam-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-unlam-800 dark:text-unlam-300">
          <Sparkles className="w-4 h-4" />
          <span>10. Resumen de Bolsillo (Cheat Sheet de Repaso)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">Concepto central:</span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{unit.pocketSummary.coreConcept}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">Señal de reconocimiento:</span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{unit.pocketSummary.quickRecognitionClue}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="font-bold text-rose-700 dark:text-rose-400 block mb-1">Trampa fatal a evitar:</span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{unit.pocketSummary.fatalTrapToAvoid}</p>
          </div>
        </div>
      </section>

      {/* PHASE 11: Sources & Academic References */}
      <section className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-2">
        <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
          <Info className="w-4 h-4 text-slate-500" />
          <span>11. Fuentes Curriculares y Trazabilidad Bibliográfica:</span>
        </div>
        <ul className="space-y-1 list-disc list-inside">
          {unit.sourceRefs.map((src, i) => (
            <li key={i}>
              <span className="font-medium text-slate-600 dark:text-slate-300">{src.text}</span> — Estatus: <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded text-[11px]">{src.status}</code>
            </li>
          ))}
        </ul>
      </section>

      {/* Finish Lesson CTA */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
        >
          Volver a la ruta
        </button>

        <button
          onClick={() => {
            onCompleteUnit(unit.id);
            onBack();
          }}
          className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all ${
            isCompleted
              ? 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300'
              : 'bg-unlam-700 hover:bg-unlam-800 text-white shadow-unlam-900/20'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{isCompleted ? 'Lección ya dominada (Volver)' : 'Marcar Lección como Completada'}</span>
        </button>
      </div>
    </div>
  );
};
