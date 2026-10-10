import React, { useState, useEffect } from 'react';
import { MOCK_EXAMS, getMockExamById } from '../data/mockExams';
import { ALL_QUESTIONS, getQuestionById } from '../data/questions';
import { DIDACTIC_UNITS } from '../data/units';
import { MockExam, Question, TopicId, UserState } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import {
  FileText,
  Clock,
  Award,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  BookOpen,
  Calendar,
  Layers,
  ChevronRight,
  Sparkles,
  BarChart3,
  PenTool,
  Check,
  HelpCircle,
  Eye,
  ArrowLeft
} from 'lucide-react';

interface ExamsViewProps {
  userState: UserState;
  onAnswerSubmit: (questionId: string, answerId: string, isCorrect: boolean) => void;
  onSaveExamAttempt: (examId: string, score: number, total: number, timeSpentSeconds: number, answers: Record<string, string>) => void;
  onNavigateToUnit?: (unitId: string) => void;
}

type TabMode = 'simulacros' | 'diagnostico' | 'mapa' | 'plan';

export const ExamsView: React.FC<ExamsViewProps> = ({
  userState,
  onAnswerSubmit,
  onSaveExamAttempt,
  onNavigateToUnit,
}) => {
  const [activeTab, setActiveTab] = useState<TabMode>('simulacros');
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);

  // Active Exam Runner State
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(90 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [essayDraft, setEssayDraft] = useState<string>('');
  const [rubricScores, setRubricScores] = useState<Record<number, number>>({});
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [activeExamTab, setActiveExamTab] = useState<'reading' | 'questions' | 'essay'>('reading');

  // Diagnostic Runner State
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState<boolean>(false);
  const [diagnosticIndex, setDiagnosticIndex] = useState<number>(0);
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<string, string>>({});
  const [diagnosticSubmitted, setDiagnosticSubmitted] = useState<boolean>(false);

  // Study Plan State
  const [daysUntilExam, setDaysUntilExam] = useState<number>(30);

  // Curated 10 questions for Diagnostic (1 from each topic A-I + 1 advanced synthesis)
  const diagnosticQuestions = React.useMemo(() => {
    const ids = [
      'Q-MOD-A-01',
      'Q-MOD-B-01',
      'Q-MOD-C-01',
      'Q-MOD-D-01',
      'Q-MOD-E-01',
      'Q-MOD-F-01',
      'Q-MOD-G-01',
      'Q-MOD-H-01',
      'Q-MOD-I-01',
      'Q-MOD-H-02',
    ];
    return ids.map(id => getQuestionById(id)).filter((q): q is Question => Boolean(q));
  }, []);

  const activeExam = selectedExamId ? getMockExamById(selectedExamId) : null;
  const activeExamQuestions = React.useMemo(() => {
    if (!activeExam) return [];
    return activeExam.questionIds.map(id => getQuestionById(id)).filter((q): q is Question => Boolean(q));
  }, [activeExam]);

  // Timer effect for exam runner
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && secondsRemaining > 0 && !examSubmitted) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => Math.max(0, prev - 1));
      }, 1000);
    } else if (secondsRemaining === 0 && timerRunning && !examSubmitted) {
      setTimerRunning(false);
      handleFinishExam();
    }
    return () => clearInterval(interval);
  }, [timerRunning, secondsRemaining, examSubmitted]);

  const handleStartExam = (examId: string) => {
    const exam = getMockExamById(examId);
    if (!exam) return;
    setSelectedExamId(examId);
    setExamAnswers({});
    setSecondsRemaining(exam.durationMinutes * 60);
    setTimerRunning(true);
    setCurrentQuestionIndex(0);
    setEssayDraft('');
    setRubricScores({});
    setShowModelAnswer(false);
    setExamSubmitted(false);
    setActiveExamTab('reading');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectExamAnswer = (questionId: string, answerId: string, isCorrect: boolean) => {
    setExamAnswers(prev => ({ ...prev, [questionId]: answerId }));
    onAnswerSubmit(questionId, answerId, isCorrect);
  };

  const handleFinishExam = () => {
    if (!activeExam) return;
    setTimerRunning(false);
    setExamSubmitted(true);

    // Calculate score
    let correctCount = 0;
    activeExamQuestions.forEach(q => {
      if (examAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const timeSpent = (activeExam.durationMinutes * 60) - secondsRemaining;
    onSaveExamAttempt(activeExam.id, correctCount, activeExamQuestions.length, timeSpent, examAnswers);
  };

  const handleRubricScoreChange = (index: number, score: number) => {
    setRubricScores(prev => ({ ...prev, [index]: score }));
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Diagnostic handler
  const handleStartDiagnostic = () => {
    setIsDiagnosticRunning(true);
    setDiagnosticIndex(0);
    setDiagnosticAnswers({});
    setDiagnosticSubmitted(false);
  };

  const handleDiagnosticAnswer = (questionId: string, answerId: string, isCorrect: boolean) => {
    setDiagnosticAnswers(prev => ({ ...prev, [questionId]: answerId }));
    onAnswerSubmit(questionId, answerId, isCorrect);
  };

  const handleFinishDiagnostic = () => {
    setDiagnosticSubmitted(true);
  };

  // Mastery calculations across 9 topics
  const topicMastery = React.useMemo(() => {
    return DIDACTIC_UNITS.map(unit => {
      const topicQuestions = ALL_QUESTIONS.filter(q => q.topicId === unit.topicId);
      const total = topicQuestions.length;
      let answered = 0;
      let correct = 0;

      topicQuestions.forEach(q => {
        const record = userState.answers[q.id];
        if (record) {
          answered += 1;
          if (record.isCorrect) correct += 1;
        }
      });

      const accuracy = answered > 0 ? (correct / answered) * 100 : 0;
      let status: 'dominado' | 'en_proceso' | 'a_repasar' = 'a_repasar';
      if (answered >= 4 && accuracy >= 80) {
        status = 'dominado';
      } else if (answered > 0) {
        status = 'en_proceso';
      }

      return {
        unit,
        total,
        answered,
        correct,
        accuracy: Math.round(accuracy),
        status,
      };
    });
  }, [userState.answers]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* If an exam is currently being taken */}
      {selectedExamId && activeExam ? (
        <div className="space-y-6">
          {/* Top Banner and Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-20 z-10">
            <button
              onClick={() => {
                if (window.confirm('¿Seguro que deseás salir del simulacro? Podrás retomar en cualquier momento.')) {
                  setSelectedExamId(null);
                  setTimerRunning(false);
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Salir del simulacro
            </button>

            {/* Timer Display */}
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-mono font-bold ${
                secondsRemaining < 600
                  ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 animate-pulse'
                  : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300'
              }`}>
                <Clock className="w-4 h-4" />
                {formatTimer(secondsRemaining)}
              </div>
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {timerRunning ? 'Pausar' : 'Reanudar'}
              </button>
            </div>

            {/* Finish Button */}
            {!examSubmitted ? (
              <button
                onClick={() => {
                  if (window.confirm('¿Deseás entregar y calificar el examen ahora?')) {
                    handleFinishExam();
                  }
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition"
              >
                Entregar y Calificar
              </button>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                Examen Calificado
              </span>
            )}
          </div>

          {/* Exam Header */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
              Simulacro Orientativo de 90 Minutos
            </span>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">
              {activeExam.title}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              {activeExam.subtitle}
            </p>
            <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>
                <strong>Aviso de Cátedra:</strong> {activeExam.sourceDisclaimer}
              </span>
            </div>
          </div>

          {/* Post-submission Score Panel */}
          {examSubmitted && (
            <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-indigo-950/30 dark:to-emerald-950/30 rounded-2xl border border-indigo-200 dark:border-indigo-800 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Resultados del Simulacro
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Puntaje obtenido en los 15 reactivos de opción múltiple
                  </p>
                </div>
              </div>

              {(() => {
                const correctCount = activeExamQuestions.filter(q => examAnswers[q.id] === q.correctAnswer).length;
                const percentage = Math.round((correctCount / activeExamQuestions.length) * 100);
                const grade = Math.round((correctCount / activeExamQuestions.length) * 10);
                const approved = grade >= 7;

                return (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="text-xs font-semibold text-slate-500">Reactivos Aprobados</div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                        {correctCount} / {activeExamQuestions.length}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{percentage}% de aciertos</div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="text-xs font-semibold text-slate-500">Nota Estimada (Base 10)</div>
                      <div className={`text-2xl font-black mt-1 ${approved ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {grade} / 10
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {approved ? 'Promoción / Aprobado (>= 7)' : 'Para repasar (< 7)'}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="text-xs font-semibold text-slate-500">Tiempo Empleado</div>
                      <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-1">
                        {formatTimer((activeExam.durationMinutes * 60) - secondsRemaining)}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">de {activeExam.durationMinutes} minutos</div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Section Selector Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4 text-sm font-semibold">
            <button
              onClick={() => setActiveExamTab('reading')}
              className={`pb-3 border-b-2 flex items-center gap-2 transition ${
                activeExamTab === 'reading'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              1. Texto Fuente para Lectura
            </button>
            <button
              onClick={() => setActiveExamTab('questions')}
              className={`pb-3 border-b-2 flex items-center gap-2 transition ${
                activeExamTab === 'questions'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              2. Consignas Analíticas (15 preguntas)
              <span className="px-2 py-0.5 rounded-full text-xs bg-slate-100 dark:bg-slate-800 font-normal">
                {Object.keys(examAnswers).length}/15
              </span>
            </button>
            {activeExam.writtenExercise && (
              <button
                onClick={() => setActiveExamTab('essay')}
                className={`pb-3 border-b-2 flex items-center gap-2 transition ${
                  activeExamTab === 'essay'
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                <PenTool className="w-4 h-4" />
                3. Producción Escrita (ILD y Rúbrica)
              </button>
            )}
          </div>

          {/* Tab Content: Reading Source Text */}
          {activeExamTab === 'reading' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Lectura Obligatoria del Examen
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {activeExam.sourceText.title}
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 mt-2">
                  <span><strong>Autor:</strong> {activeExam.sourceText.author}</span>
                  <span><strong>Año:</strong> {activeExam.sourceText.year}</span>
                  <span><strong>Referencia bibliográfica:</strong> {activeExam.sourceText.citation}</span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-200 leading-relaxed space-y-4">
                {activeExam.sourceText.paragraphs.map((p, idx) => (
                  <p key={idx} className="relative pl-6">
                    <span className="absolute left-0 top-0 text-xs font-mono font-bold text-slate-400 dark:text-slate-500 select-none">
                      P{idx + 1}
                    </span>
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveExamTab('questions')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition"
                >
                  Pasar a las consignas del examen
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Tab Content: Questions */}
          {activeExamTab === 'questions' && (
            <div className="space-y-6">
              {/* Question Navigation Palette */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap gap-2 items-center justify-between">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  Paleta de preguntas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeExamQuestions.map((q, idx) => {
                    const answered = Boolean(examAnswers[q.id]);
                    const isCorrect = examSubmitted && examAnswers[q.id] === q.correctAnswer;
                    const isIncorrect = examSubmitted && answered && examAnswers[q.id] !== q.correctAnswer;

                    let bg = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                    if (examSubmitted) {
                      if (isCorrect) bg = 'bg-emerald-600 text-white font-bold';
                      else if (isIncorrect) bg = 'bg-rose-600 text-white font-bold';
                      else bg = 'bg-amber-400 text-slate-900 font-bold';
                    } else if (answered) {
                      bg = 'bg-indigo-600 text-white font-bold';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`w-8 h-8 rounded-lg text-xs font-mono flex items-center justify-center transition ${bg} ${
                          currentQuestionIndex === idx ? 'ring-2 ring-indigo-400 ring-offset-2 dark:ring-offset-slate-900' : ''
                        }`}
                        title={`Pregunta ${idx + 1}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Current Question Card */}
              {activeExamQuestions[currentQuestionIndex] && (
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>Pregunta {currentQuestionIndex + 1} de {activeExamQuestions.length}</span>
                    <button
                      onClick={() => setActiveExamTab('reading')}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Releer texto fuente
                    </button>
                  </div>

                  <QuestionCard
                    question={activeExamQuestions[currentQuestionIndex]}
                    selectedAnswer={examAnswers[activeExamQuestions[currentQuestionIndex].id]}
                    onAnswerSubmit={handleSelectExamAnswer}
                    showExplanationImmediately={examSubmitted}
                  />

                  {/* Previous / Next buttons */}
                  <div className="flex justify-between items-center pt-2">
                    <button
                      disabled={currentQuestionIndex === 0}
                      onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold disabled:opacity-40"
                    >
                      Anterior
                    </button>
                    <button
                      disabled={currentQuestionIndex === activeExamQuestions.length - 1}
                      onClick={() => setCurrentQuestionIndex(prev => Math.min(activeExamQuestions.length - 1, prev + 1))}
                      className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold disabled:opacity-40"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab Content: Essay Production and Rubric */}
          {activeExamTab === 'essay' && activeExam.writtenExercise && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-indigo-600 dark:text-indigo-400">
                  Parte B — Producción Textual de Parcial
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Consigna de Escritura Académica
                </h3>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2 bg-indigo-50 dark:bg-indigo-950/40 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900 leading-relaxed">
                  {activeExam.writtenExercise.prompt}
                </p>
                <div className="mt-3 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl">
                  <strong>Pautas de la cátedra:</strong> {activeExam.writtenExercise.guidance}
                </div>
              </div>

              {/* Text editor area */}
              <div>
                <div className="flex justify-between items-center mb-1 text-xs text-slate-500">
                  <label htmlFor="essay-input" className="font-semibold">Tu producción escrita:</label>
                  <span>{essayDraft.trim() ? essayDraft.trim().split(/\s+/).length : 0} palabras | {essayDraft.length} caracteres</span>
                </div>
                <textarea
                  id="essay-input"
                  rows={10}
                  value={essayDraft}
                  onChange={(e) => setEssayDraft(e.target.value)}
                  placeholder="Redactá aquí tu texto con formato de parcial universitario (incorporá la pregunta en la respuesta, organizá en párrafos y utilizá verbos introductores precisos)..."
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm leading-relaxed focus:ring-2 focus:ring-indigo-500 outline-none font-sans"
                />
              </div>

              {/* Self-grading Rubric */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Rúbrica de Autoevaluación Oficial UNLaM
                    </h4>
                    <p className="text-xs text-slate-500">
                      Evaluá tu borrador según los 4 criterios de corrección institucionales.
                    </p>
                  </div>
                  <div className="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    Puntaje Rúbrica: {Object.values(rubricScores).reduce((a, b) => a + b, 0)} / 10 pts
                  </div>
                </div>

                <div className="space-y-3">
                  {activeExam.writtenExercise.rubric.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                      <div className="max-w-xl">
                        <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                          {item.criterion} ({item.weight} pts)
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                          {item.descriptor}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-slate-500">Puntaje asignado:</span>
                        <select
                          value={rubricScores[idx] ?? 0}
                          onChange={(e) => handleRubricScoreChange(idx, Number(e.target.value))}
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold"
                        >
                          <option value={0}>0 pts (No logrado)</option>
                          <option value={Math.round(item.weight * 0.5 * 10) / 10}>{Math.round(item.weight * 0.5 * 10) / 10} pts (Parcial)</option>
                          <option value={item.weight}>{item.weight} pts (Excelente / Logrado)</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Model Answer Accordion */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setShowModelAnswer(!showModelAnswer)}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200 font-bold text-sm transition"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    {showModelAnswer ? 'Ocultar respuesta modelo de cátedra' : 'Ver respuesta modelo de cátedra de referencia'}
                  </span>
                  <span>{showModelAnswer ? '▲' : '▼'}</span>
                </button>

                {showModelAnswer && (
                  <div className="mt-3 p-5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                      Modelo redactado según los estándares de excelencia del Curso de Ingreso:
                    </div>
                    {activeExam.writtenExercise.sampleModelAnswer}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Regular Hub Mode: Tabs for Simulacros, Diagnostico, Mapa, Plan */
        <div className="space-y-8">
          {/* Main Title */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 mb-2">
              <Award className="w-3.5 h-3.5" />
              Módulo Prepararme para rendir
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Entrenamiento de Examen y Diagnóstico
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Herramientas específicas para consolidar tus competencias antes de la instancia presencial: simulacros cronometrados de 90 minutos con textos canónicos (incluyendo el modelo de Teun van Dijk), mapa de dominio por unidad y plan de estudio adaptado a tus tiempos.
            </p>
          </div>

          {/* Subnavigation Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 gap-6 text-sm font-bold">
            <button
              onClick={() => setActiveTab('simulacros')}
              className={`pb-3 border-b-2 flex items-center gap-2 transition ${
                activeTab === 'simulacros'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              Simulacros Oficiales (3)
            </button>
            <button
              onClick={() => setActiveTab('diagnostico')}
              className={`pb-3 border-b-2 flex items-center gap-2 transition ${
                activeTab === 'diagnostico'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Diagnóstico Inicial Rápido
            </button>
            <button
              onClick={() => setActiveTab('mapa')}
              className={`pb-3 border-b-2 flex items-center gap-2 transition ${
                activeTab === 'mapa'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Mapa de Dominio
            </button>
            <button
              onClick={() => setActiveTab('plan')}
              className={`pb-3 border-b-2 flex items-center gap-2 transition ${
                activeTab === 'plan'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Planificador de Estudio
            </button>
          </div>

          {/* TAB 1: SIMULACROS */}
          {activeTab === 'simulacros' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MOCK_EXAMS.map((exam) => {
                  const attempt = userState.examAttempts.find(a => a.examId === exam.id);
                  return (
                    <div
                      key={exam.id}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                          <span className="font-mono font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded">
                            {exam.durationMinutes} min
                          </span>
                          <span>15 consignas + ILD</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                          {exam.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3">
                          {exam.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                        {attempt && (
                          <div className="mb-3 text-xs flex items-center justify-between text-slate-600 dark:text-slate-400">
                            <span>Último intento:</span>
                            <span className="font-bold text-indigo-600 dark:text-indigo-400">
                              {attempt.score} / {attempt.totalQuestions} ({Math.round((attempt.score / attempt.totalQuestions) * 100)}%)
                            </span>
                          </div>
                        )}
                        <button
                          onClick={() => handleStartExam(exam.id)}
                          className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          {attempt ? 'Reintentar simulacro' : 'Iniciar simulacro'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Informative footer */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-3">
                <HelpCircle className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                <div>
                  <strong>¿Cómo está estructurado el examen oficial en la UNLaM?</strong>
                  <p className="mt-1">
                    Históricamente, el examen del Seminario de Comprensión y Producción de Textos consta de un texto fuente complejo (como el artículo de Teun van Dijk) y dos partes complementarias: preguntas de comprensión/enunciación (con foco en marcas lingüísticas, tesis y argumentos) y la redacción de un Informe de Lectura Descriptivo (ILD) u opinión académica fundamentada con rúbrica estricta.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DIAGNOSTICO */}
          {activeTab === 'diagnostico' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-6">
              {!isDiagnosticRunning && !diagnosticSubmitted ? (
                <div className="text-center max-w-xl mx-auto py-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mx-auto text-indigo-600 dark:text-indigo-400">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                    Diagnóstico Inicial sin Calificación Punitiva
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Respondé 10 preguntas equilibradas (una de cada unidad temática) para conocer de forma inmediata tu punto de partida, identificar tus fortalezas y recibir recomendaciones concretas antes de estudiar.
                  </p>
                  <button
                    onClick={handleStartDiagnostic}
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition inline-flex items-center gap-2"
                  >
                    Comenzar diagnóstico (10 min)
                  </button>
                </div>
              ) : isDiagnosticRunning && !diagnosticSubmitted ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-600 dark:text-slate-300">
                      Pregunta de diagnóstico {diagnosticIndex + 1} de {diagnosticQuestions.length}
                    </span>
                    <button
                      onClick={() => setIsDiagnosticRunning(false)}
                      className="text-slate-500 hover:underline"
                    >
                      Cancelar diagnóstico
                    </button>
                  </div>

                  {diagnosticQuestions[diagnosticIndex] && (
                    <QuestionCard
                      question={diagnosticQuestions[diagnosticIndex]}
                      selectedAnswer={diagnosticAnswers[diagnosticQuestions[diagnosticIndex].id]}
                      onAnswerSubmit={handleDiagnosticAnswer}
                    />
                  )}

                  <div className="flex justify-between items-center pt-2">
                    <button
                      disabled={diagnosticIndex === 0}
                      onClick={() => setDiagnosticIndex(prev => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold disabled:opacity-40"
                    >
                      Anterior
                    </button>

                    {diagnosticIndex === diagnosticQuestions.length - 1 ? (
                      <button
                        onClick={handleFinishDiagnostic}
                        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs"
                      >
                        Ver resultados del diagnóstico
                      </button>
                    ) : (
                      <button
                        onClick={() => setDiagnosticIndex(prev => Math.min(diagnosticQuestions.length - 1, prev + 1))}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs"
                      >
                        Siguiente pregunta
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                /* Diagnostic Results */
                <div className="space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="text-xs uppercase font-bold text-indigo-600 dark:text-indigo-400">
                      Evaluación completada
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                      Tu Diagnóstico de Seminario UNLaM
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Análisis por unidad temática y recomendaciones pedagógicas inmediatas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {diagnosticQuestions.map((q) => {
                      const userAns = diagnosticAnswers[q.id];
                      const isCorrect = userAns === q.correctAnswer;
                      const unit = DIDACTIC_UNITS.find(u => u.topicId === q.topicId);

                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border flex items-start gap-3 text-xs ${
                            isCorrect
                              ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
                              : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800'
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                          )}
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white">
                              {unit?.title || q.topicId}
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 mt-1">
                              {isCorrect ? 'Concepto afianzado correctamente.' : 'Se recomienda reforzar este tema antes del parcial.'}
                            </p>
                            {unit && onNavigateToUnit && (
                              <button
                                onClick={() => onNavigateToUnit(unit.id)}
                                className="mt-2 inline-flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                              >
                                Ir a la clase teórica
                                <ChevronRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-center pt-4">
                    <button
                      onClick={handleStartDiagnostic}
                      className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300"
                    >
                      Repetir diagnóstico
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: MAPA DE DOMINIO */}
          {activeTab === 'mapa' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  Matriz de Competencias y Dominio por Unidad
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Estado actualizado según tus respuestas en el banco de reactivos y los simulacros.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {topicMastery.map(({ unit, total, answered, correct, accuracy, status }) => {
                    const badge = {
                      dominado: { text: 'Dominado (>= 80%)', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' },
                      en_proceso: { text: 'En proceso', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' },
                      a_repasar: { text: 'A repasar', color: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' },
                    }[status];

                    return (
                      <div
                        key={unit.id}
                        className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-xs font-bold text-slate-500">
                              {unit.topicId}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.color}`}>
                              {badge.text}
                            </span>
                          </div>
                          <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                            {unit.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                            {unit.subtitle}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs">
                          <div className="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                            <span>Aciertos: {correct}/{answered}</span>
                            <span>{accuracy}%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-indigo-600 h-full rounded-full transition-all"
                              style={{ width: `${accuracy}%` }}
                            />
                          </div>

                          {onNavigateToUnit && (
                            <button
                              onClick={() => onNavigateToUnit(unit.id)}
                              className="mt-3 w-full py-1.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-indigo-600 dark:text-indigo-300 font-bold text-[11px] hover:bg-slate-50 transition"
                            >
                              Estudiar esta unidad
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PLANIFICADOR */}
          {activeTab === 'plan' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-indigo-600 dark:text-indigo-400">
                  Plan de Estudio Personalizado
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  Calculá tu Ritmo de Repaso hasta el Examen
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Ajustá la cantidad de días disponibles para recibir una sugerencia de avance diaria y semanal.
                </p>
              </div>

              {/* Slider for days */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="study-days-range" className="text-sm font-bold text-slate-900 dark:text-white">
                    Días restantes hasta tu examen:
                  </label>
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                    {daysUntilExam} días
                  </span>
                </div>
                <input
                  id="study-days-range"
                  type="range"
                  min={7}
                  max={60}
                  step={1}
                  value={daysUntilExam}
                  onChange={(e) => setDaysUntilExam(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Intensivo (7 días)</span>
                  <span>Estándar (30 días)</span>
                  <span>Tranquilo (60 días)</span>
                </div>
              </div>

              {/* Weekly Schedule Recommendations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-indigo-100 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-950/20">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                    Meta Diaria Sugerida
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {Math.ceil(174 / daysUntilExam)} reactivos / día
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Aproximadamente 15 minutos diarios de resolución activa.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-emerald-100 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                    Avance de Unidades
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {Math.max(1, Math.round(9 / (daysUntilExam / 7)))} unidad(es) / semana
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Completar los 11 momentos pedagógicos y las microhistorias.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-purple-100 dark:border-purple-900 bg-purple-50/50 dark:bg-purple-950/20">
                  <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase">
                    Simulacros Programados
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    1 cada {Math.max(3, Math.round(daysUntilExam / 3))} días
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Realizar bajo condiciones reales de 90 minutos con redacción de ILD.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
