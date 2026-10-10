import React, { useState, useMemo } from 'react';
import { ALL_QUESTIONS } from '../data/questions';
import { DIDACTIC_UNITS } from '../data/units';
import { TopicId, UserState } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import { 
  Filter, 
  Search, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react';

interface PracticeViewProps {
  userState: UserState;
  onAnswerSubmit: (questionId: string, answerId: string, isCorrect: boolean) => void;
  onNavigateToUnit?: (unitId: string) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  userState,
  onAnswerSubmit,
  onNavigateToUnit,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'ALL'>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'basico' | 'intermedio' | 'avanzado'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'unanswered' | 'answered' | 'correct' | 'incorrect'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(15);

  // Overall statistics
  const totalQuestions = ALL_QUESTIONS.length;
  const answeredCount = Object.keys(userState.answers).length;
  const correctCount = Object.values(userState.answers).filter(a => a.isCorrect).length;
  const accuracyRate = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  // Filtered list
  const filteredQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => {
      // Topic filter
      if (selectedTopic !== 'ALL' && q.topicId !== selectedTopic) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) {
        return false;
      }

      // Status filter
      const ans = userState.answers[q.id];
      if (selectedStatus === 'unanswered' && ans) return false;
      if (selectedStatus === 'answered' && !ans) return false;
      if (selectedStatus === 'correct' && (!ans || !ans.isCorrect)) return false;
      if (selectedStatus === 'incorrect' && (!ans || ans.isCorrect)) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchPrompt = q.prompt.toLowerCase().includes(query);
        const matchObjective = q.learningObjective.toLowerCase().includes(query);
        const matchTags = q.tags.some(t => t.toLowerCase().includes(query));
        const matchId = q.id.toLowerCase().includes(query);
        if (!matchPrompt && !matchObjective && !matchTags && !matchId) {
          return false;
        }
      }

      return true;
    });
  }, [selectedTopic, selectedDifficulty, selectedStatus, searchQuery, userState.answers]);

  const displayedQuestions = useMemo(() => {
    return filteredQuestions.slice(0, visibleCount);
  }, [filteredQuestions, visibleCount]);

  const handleResetFilters = () => {
    setSelectedTopic('ALL');
    setSelectedDifficulty('all');
    setSelectedStatus('all');
    setSearchQuery('');
    setVisibleCount(15);
  };

  const topicOptions: { id: TopicId | 'ALL'; label: string; count: number }[] = [
    { id: 'ALL', label: 'Todas las unidades', count: ALL_QUESTIONS.length },
    ...DIDACTIC_UNITS.map(u => ({
      id: u.topicId,
      label: `${u.id.replace('unit-', 'Unidad ')}: ${u.title}`,
      count: ALL_QUESTIONS.filter(q => q.topicId === u.topicId).length
    }))
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Banco de reactivos original
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Práctica y Entrenamiento por Reactivos
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Ejercitá los 174 reactivos originales diseñados específicamente para el Curso de Ingreso a Medicina UNLaM. Cada respuesta incluye retroalimentación razonada y la explicación de por qué cada distractor es incorrecto.
        </p>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Banco</div>
          <div className="mt-1 text-2xl font-black text-slate-900 dark:text-white">{totalQuestions}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Preguntas activas</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Respondidas</div>
          <div className="mt-1 text-2xl font-black text-indigo-600 dark:text-indigo-400">{answeredCount}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{Math.round((answeredCount / totalQuestions) * 100)}% de avance</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Aciertos</div>
          <div className="mt-1 text-2xl font-black text-emerald-600 dark:text-emerald-400">{correctCount}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Primer o segundo intento</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Precisión</div>
          <div className="mt-1 text-2xl font-black text-blue-600 dark:text-blue-400">{accuracyRate}%</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{answeredCount === 0 ? 'Sin registros aún' : 'Tasa de efectividad'}</div>
        </div>
      </div>

      {/* Filter and Search Panel */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por concepto, etiqueta (ej: polifonía, cita, ILD) o texto..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(15);
              }}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Reset button */}
          {(selectedTopic !== 'ALL' || selectedDifficulty !== 'all' || selectedStatus !== 'all' || searchQuery) && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          {/* Unit selector */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Unidad temática
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value as TopicId | 'ALL');
                setVisibleCount(15);
              }}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              {topicOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label} ({opt.count})
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty selector */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Dificultad
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value as any);
                setVisibleCount(15);
              }}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="all">Todas las dificultades</option>
              <option value="basico">Básico (Reconocimiento directo)</option>
              <option value="intermedio">Intermedio (Análisis de fragmento)</option>
              <option value="avanzado">Avanzado (Distinción fina / Justificación)</option>
            </select>
          </div>

          {/* Status selector */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Estado de resolución
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value as any);
                setVisibleCount(15);
              }}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="all">Todas</option>
              <option value="unanswered">Solo sin responder</option>
              <option value="answered">Respondidas</option>
              <option value="correct">Respondidas correctamente</option>
              <option value="incorrect">A repasar (falladas)</option>
            </select>
          </div>
        </div>

        {/* Counter pill */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
          <span>
            Mostrando <strong>{displayedQuestions.length}</strong> de <strong>{filteredQuestions.length}</strong> reactivos filtrados
          </span>
          {selectedTopic !== 'ALL' && onNavigateToUnit && (
            <button
              onClick={() => {
                const unit = DIDACTIC_UNITS.find(u => u.topicId === selectedTopic);
                if (unit) onNavigateToUnit(unit.id);
              }}
              className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Ir a la clase teórica de esta unidad
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Question List */}
      <div className="space-y-6">
        {displayedQuestions.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center">
            <SlidersHorizontal className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              No hay reactivos con los filtros actuales
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1">
              Probá restableciendo los filtros o realizando una búsqueda más amplia.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition"
            >
              Ver todos los reactivos
            </button>
          </div>
        ) : (
          <>
            {displayedQuestions.map((question) => {
              const savedAnswer = userState.answers[question.id]?.selectedAnswer;
              return (
                <QuestionCard
                  key={question.id}
                  question={question}
                  selectedAnswer={savedAnswer}
                  onAnswerSubmit={onAnswerSubmit}
                />
              );
            })}

            {/* Load more button */}
            {displayedQuestions.length < filteredQuestions.length && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 15)}
                  className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold hover:bg-indigo-50 dark:hover:bg-slate-700/50 shadow-sm transition inline-flex items-center gap-2"
                >
                  Cargar más reactivos ({filteredQuestions.length - displayedQuestions.length} restantes)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
