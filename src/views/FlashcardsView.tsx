import React, { useState, useMemo } from 'react';
import { DIDACTIC_UNITS } from '../data/units';
import { Flashcard, TopicId, UserState } from '../types';
import {
  Layers,
  RotateCw,
  CheckCircle2,
  AlertCircle,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  Filter,
  Check,
  RotateCcw
} from 'lucide-react';

interface FlashcardsViewProps {
  userState: UserState;
  onUpdateFlashcardMastery: (cardId: string, status: 'learned' | 'needs_review') => void;
  onNavigateToUnit?: (unitId: string) => void;
}

interface CardWithUnit extends Flashcard {
  unitId: string;
  unitTitle: string;
  topicId: TopicId;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  userState,
  onUpdateFlashcardMastery,
  onNavigateToUnit,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'ALL'>('ALL');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'needs_review' | 'learned' | 'unlearned'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Collect all flashcards from units with metadata
  const allCards: CardWithUnit[] = useMemo(() => {
    return DIDACTIC_UNITS.flatMap(unit =>
      unit.flashcards.map(fc => ({
        ...fc,
        unitId: unit.id,
        unitTitle: unit.title,
        topicId: unit.topicId,
      }))
    );
  }, []);

  // Filtered card list
  const filteredCards = useMemo(() => {
    return allCards.filter(card => {
      if (selectedTopic !== 'ALL' && card.topicId !== selectedTopic) {
        return false;
      }
      const mastery = userState.flashcardMastery[card.id];
      if (selectedFilter === 'needs_review' && mastery !== 'needs_review') return false;
      if (selectedFilter === 'learned' && mastery !== 'learned') return false;
      if (selectedFilter === 'unlearned' && mastery !== undefined) return false;
      return true;
    });
  }, [allCards, selectedTopic, selectedFilter, userState.flashcardMastery]);

  // Current active card
  const currentCard = filteredCards[currentIndex] || null;

  // Mastery stats
  const totalCardsCount = allCards.length;
  const learnedCount = Object.values(userState.flashcardMastery).filter(v => v === 'learned').length;
  const needsReviewCount = Object.values(userState.flashcardMastery).filter(v => v === 'needs_review').length;

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleShuffle = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleMarkMastery = (status: 'learned' | 'needs_review') => {
    if (!currentCard) return;
    onUpdateFlashcardMastery(currentCard.id, status);
    // Automatically advance to next card
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 mb-2">
          <Layers className="w-3.5 h-3.5" />
          Repaso espaciado y active recall
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tarjetas de Memoria Activa (Flashcards)
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
          Entrená los conceptos teóricos clave, trampas habituales y pistas de reconocimiento de cada unidad mediante evocación activa.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-xs font-bold uppercase text-slate-500">Mazo Total</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{totalCardsCount}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">tarjetas creadas</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400">Aprendidas</div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">{learnedCount}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">dominadas</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-xs font-bold uppercase text-rose-600 dark:text-rose-400">A Repasar</div>
          <div className="text-2xl font-black text-rose-600 dark:text-rose-400 mt-1">{needsReviewCount}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">pendientes</div>
        </div>
      </div>

      {/* Filter controls */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap gap-3 items-center justify-between text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="topic-filter-select" className="font-semibold text-slate-700 dark:text-slate-300">Unidad:</label>
          <select
            id="topic-filter-select"
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value as any);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-medium"
          >
            <option value="ALL">Todas las unidades ({allCards.length})</option>
            {DIDACTIC_UNITS.map(u => (
              <option key={u.topicId} value={u.topicId}>
                {u.id.replace('unit-', 'Unidad ')}: {u.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="mastery-filter-select" className="font-semibold text-slate-700 dark:text-slate-300">Estado:</label>
          <select
            id="mastery-filter-select"
            value={selectedFilter}
            onChange={(e) => {
              setSelectedFilter(e.target.value as any);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-medium"
          >
            <option value="all">Todas las tarjetas</option>
            <option value="unlearned">Sin calificar</option>
            <option value="needs_review">Solo "Necesito repasarlo"</option>
            <option value="learned">Solo "Aprendidas"</option>
          </select>
        </div>
      </div>

      {/* Interactive Card Presentation */}
      {currentCard ? (
        <div className="space-y-6">
          {/* Progress and Unit Tag */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-mono font-bold">
              Tarjeta {currentIndex + 1} de {filteredCards.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                {currentCard.unitTitle}
              </span>
              {currentCard.unitId && onNavigateToUnit && (
                <button
                  onClick={() => onNavigateToUnit(currentCard.unitId)}
                  className="hover:underline text-slate-400 hover:text-slate-600"
                  title="Ir a la clase"
                >
                  <BookOpen className="w-3.5 h-3.5 inline" />
                </button>
              )}
            </div>
          </div>

          {/* Flashcard container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsFlipped(!isFlipped);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Dar vuelta la tarjeta de memoria"
            className="relative min-h-[300px] md:min-h-[340px] bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900 rounded-3xl p-8 flex flex-col justify-between shadow-md cursor-pointer hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
          >
            {/* Top card bar */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                {currentCard.category}
              </span>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <RotateCw className="w-3.5 h-3.5" />
                <span>{isFlipped ? 'Dorso (Respuesta)' : 'Frente (Pregunta / Concepto)'}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="my-auto py-6 text-center">
              {!isFlipped ? (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    ¿Qué sabés sobre esto?
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-snug">
                    {currentCard.front}
                  </h3>
                  <p className="text-xs text-slate-400 pt-2">
                    Hacé clic o presioná la barra espaciadora para dar vuelta la tarjeta
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <span className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                    Definición Canónica y Clave de Reconocimiento
                  </span>
                  <p className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed max-w-2xl mx-auto">
                    {currentCard.back}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Card Footer */}
            <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 font-mono">ID: {currentCard.id}</span>
              {userState.flashcardMastery[currentCard.id] && (
                <span className={`font-bold px-2 py-0.5 rounded-full ${
                  userState.flashcardMastery[currentCard.id] === 'learned'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                }`}>
                  {userState.flashcardMastery[currentCard.id] === 'learned' ? '✓ Aprendida' : '! Para repasar'}
                </span>
              )}
            </div>
          </div>

          {/* Action buttons (Learned / Needs Review) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2">
              <button
                disabled={currentIndex === 0}
                onClick={handlePrev}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-40 hover:bg-slate-50 transition"
                title="Tarjeta anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                disabled={currentIndex === filteredCards.length - 1}
                onClick={handleNext}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-40 hover:bg-slate-50 transition"
                title="Tarjeta siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleMarkMastery('needs_review')}
                className="px-5 py-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 font-bold text-xs hover:bg-rose-100 transition inline-flex items-center gap-1.5"
              >
                <AlertCircle className="w-4 h-4" />
                Necesito repasarlo
              </button>

              <button
                onClick={() => handleMarkMastery('learned')}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition inline-flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                Lo recuerdo bien
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
          <Layers className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            No hay tarjetas en esta categoría
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Probá seleccionando "Todas las unidades" o limpiando el filtro de estado.
          </p>
          <button
            onClick={() => {
              setSelectedTopic('ALL');
              setSelectedFilter('all');
            }}
            className="mt-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
          >
            Ver todo el mazo
          </button>
        </div>
      )}
    </div>
  );
};
