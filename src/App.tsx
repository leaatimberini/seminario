import React, { useState, useEffect } from 'react';
import { UserState } from './types';
import { loadUserState, saveUserState, DEFAULT_USER_STATE } from './utils/storage';
import { ALL_UNITS, getUnitById } from './data/units';

// Components
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';

// Views
import { HomeView } from './views/HomeView';
import { RoadmapView } from './views/RoadmapView';
import { LessonView } from './views/LessonView';
import { PracticeView } from './views/PracticeView';
import { ExamsView } from './views/ExamsView';
import { FlashcardsView } from './views/FlashcardsView';
import { GlossaryView } from './views/GlossaryView';
import { NotesView } from './views/NotesView';
import { SourcesView } from './views/SourcesView';
import { SettingsView } from './views/SettingsView';

export const App: React.FC = () => {
  const [userState, setUserState] = useState<UserState>(() => loadUserState());
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [activeUnitId, setActiveUnitId] = useState<string | null>(null);

  // Sync state to localStorage whenever it changes
  useEffect(() => {
    saveUserState(userState);
  }, [userState]);

  // Apply dark/light theme to document root
  useEffect(() => {
    if (userState.settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [userState.settings.theme]);

  // Apply font scale and motion preferences
  useEffect(() => {
    const root = document.documentElement;
    if (userState.settings.fontSize === 'large') {
      root.style.fontSize = '18px';
    } else if (userState.settings.fontSize === 'xl') {
      root.style.fontSize = '20px';
    } else {
      root.style.fontSize = '16px';
    }

    if (userState.settings.reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
  }, [userState.settings.fontSize, userState.settings.reduceMotion]);

  // Handlers
  const handleUpdateSettings = (newSettings: Partial<UserState['settings']>) => {
    setUserState(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...newSettings,
      },
    }));
  };

  const handleAnswerSubmit = (questionId: string, answerId: string, isCorrect: boolean) => {
    setUserState(prev => {
      const prevRecord = prev.answers[questionId];
      const attempts = (prevRecord?.attempts || 0) + 1;
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: {
            questionId,
            selectedAnswer: answerId,
            isCorrect,
            timestamp: Date.now(),
            attempts,
          },
        },
      };
    });
  };

  const handleCompleteUnit = (unitId: string) => {
    setUserState(prev => {
      if (prev.completedUnitIds.includes(unitId)) {
        return {
          ...prev,
          completedUnitIds: prev.completedUnitIds.filter(id => id !== unitId),
        };
      }
      return {
        ...prev,
        completedUnitIds: [...prev.completedUnitIds, unitId],
      };
    });
  };

  const handleToggleFavorite = (unitId: string) => {
    setUserState(prev => {
      const isFav = prev.favorites.includes(unitId);
      return {
        ...prev,
        favorites: isFav
          ? prev.favorites.filter(id => id !== unitId)
          : [...prev.favorites, unitId],
      };
    });
  };

  const handleSaveNote = (unitId: string, note: string) => {
    setUserState(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [unitId]: note,
      },
    }));
  };

  const handleSaveExamAttempt = (
    examId: string,
    score: number,
    totalQuestions: number,
    timeSpentSeconds: number,
    answers: Record<string, string>
  ) => {
    const newAttempt = {
      id: `attempt-${Date.now()}`,
      examId,
      timestamp: Date.now(),
      score,
      totalQuestions,
      timeSpentSeconds,
      answers,
    };

    setUserState(prev => ({
      ...prev,
      examAttempts: [newAttempt, ...prev.examAttempts],
    }));
  };

  const handleUpdateFlashcardMastery = (cardId: string, status: 'learned' | 'needs_review') => {
    setUserState(prev => ({
      ...prev,
      flashcardMastery: {
        ...prev.flashcardMastery,
        [cardId]: status,
      },
    }));
  };

  const handleImportState = (newState: UserState) => {
    setUserState(newState);
  };

  const handleResetState = () => {
    setUserState(DEFAULT_USER_STATE);
  };

  const handleOpenUnit = (unitId: string) => {
    setActiveUnitId(unitId);
    setActiveTab('clase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenExam = (examId: string) => {
    setActiveTab('simulacros');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartDiagnostic = () => {
    setActiveTab('simulacros');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active unit for LessonView
  const currentUnit = activeUnitId ? getUnitById(activeUnitId) : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors pb-20 lg:pb-8">
      {/* Top Header */}
      <Header
        userState={userState}
        onUpdateSettings={handleUpdateSettings}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Navigation (Desktop and Mobile bottom bar + drawer) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedUnitsCount={userState.completedUnitIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'inicio' && (
          <HomeView
            userState={userState}
            setActiveTab={setActiveTab}
            onOpenUnit={handleOpenUnit}
            onOpenExam={handleOpenExam}
            onStartDiagnostic={handleStartDiagnostic}
          />
        )}

        {activeTab === 'ruta' && (
          <RoadmapView
            userState={userState}
            onOpenUnit={handleOpenUnit}
          />
        )}

        {activeTab === 'clase' && currentUnit && (
          <LessonView
            unit={currentUnit}
            userState={userState}
            onBack={() => setActiveTab('ruta')}
            onCompleteUnit={handleCompleteUnit}
            onToggleFavorite={handleToggleFavorite}
            onSaveNote={handleSaveNote}
            onAnswerSubmit={handleAnswerSubmit}
          />
        )}

        {activeTab === 'practica' && (
          <PracticeView
            userState={userState}
            onAnswerSubmit={handleAnswerSubmit}
            onNavigateToUnit={handleOpenUnit}
          />
        )}

        {activeTab === 'simulacros' && (
          <ExamsView
            userState={userState}
            onAnswerSubmit={handleAnswerSubmit}
            onSaveExamAttempt={handleSaveExamAttempt}
            onNavigateToUnit={handleOpenUnit}
          />
        )}

        {activeTab === 'tarjetas' && (
          <FlashcardsView
            userState={userState}
            onUpdateFlashcardMastery={handleUpdateFlashcardMastery}
            onNavigateToUnit={handleOpenUnit}
          />
        )}

        {activeTab === 'glosario' && (
          <GlossaryView
            onNavigateToUnit={handleOpenUnit}
          />
        )}

        {activeTab === 'notas' && (
          <NotesView
            userState={userState}
            onSaveNote={handleSaveNote}
            onNavigateToUnit={handleOpenUnit}
          />
        )}

        {activeTab === 'fuentes' && (
          <SourcesView />
        )}

        {activeTab === 'ajustes' && (
          <SettingsView
            userState={userState}
            onUpdateSettings={handleUpdateSettings}
            onImportState={handleImportState}
            onResetState={handleResetState}
          />
        )}
      </main>

      {/* Global Footer */}
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              Seminario de Comprensión y Producción de Textos — Curso de Ingreso a Medicina UNLaM
            </p>
            <p className="mt-1">
              Herramienta didáctica de estudio independiente. Los simulacros y contenidos están basados en modelos públicos históricos y bibliografía canónica de la cátedra.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => { setActiveTab('fuentes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:underline text-indigo-600 dark:text-indigo-400"
            >
              Fuentes y Alcance
            </button>
            <button
              onClick={() => { setActiveTab('ajustes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:underline text-indigo-600 dark:text-indigo-400"
            >
              Configuración
            </button>
            <span className="text-slate-400">Modo Offline Activo • v1.0.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
