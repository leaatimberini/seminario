import React, { useState, useMemo } from 'react';
import { GLOSSARY_TERMS } from '../data/glossary';
import { DIDACTIC_UNITS } from '../data/units';
import { TopicId } from '../types';
import { 
  BookMarked, 
  Search, 
  Tag, 
  ExternalLink, 
  RotateCcw,
  Sparkles,
  BookOpen,
  ChevronRight
} from 'lucide-react';

interface GlossaryViewProps {
  onNavigateToUnit?: (unitId: string) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  onNavigateToUnit,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'ALL'>('ALL');
  const [selectedLetter, setSelectedLetter] = useState<string | 'ALL'>('ALL');

  // Available initial letters
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    GLOSSARY_TERMS.forEach(t => {
      letters.add(t.term[0].toUpperCase());
    });
    return Array.from(letters).sort();
  }, []);

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter(t => {
      if (selectedTopic !== 'ALL' && t.topicId !== selectedTopic) {
        return false;
      }
      if (selectedLetter !== 'ALL' && t.term[0].toUpperCase() !== selectedLetter) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTerm = t.term.toLowerCase().includes(query);
        const matchDef = t.definition.toLowerCase().includes(query);
        const matchEx = t.example.toLowerCase().includes(query);
        const matchRelated = t.relatedTerms.some(r => r.toLowerCase().includes(query));
        if (!matchTerm && !matchDef && !matchEx && !matchRelated) {
          return false;
        }
      }
      return true;
    });
  }, [selectedTopic, selectedLetter, searchQuery]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 mb-2">
          <BookMarked className="w-3.5 h-3.5" />
          Vocabulario canónico de la materia
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Glosario Terminológico de Seminario
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Definiciones operativas rigurosas basadas en el Manual de Comprensión y Producción de Textos UNLaM y bibliografía canónica (Bajtín, Arnoux, Kerbrat-Orecchioni, van Dijk, Halliday), con ejemplos contextualizados en ciencias médicas.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar término (ej: polifonía, subjetivema, cohesión, ILD)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {(searchQuery || selectedTopic !== 'ALL' || selectedLetter !== 'ALL') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTopic('ALL');
                setSelectedLetter('ALL');
              }}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Limpiar
            </button>
          )}
        </div>

        {/* Letter alphabet chips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="font-semibold text-slate-500 mr-1">Letra:</span>
          <button
            onClick={() => setSelectedLetter('ALL')}
            className={`px-2 py-1 rounded-lg font-mono font-bold transition ${
              selectedLetter === 'ALL'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            Todas
          </button>
          {availableLetters.map(letter => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 rounded-lg font-mono font-bold flex items-center justify-center transition ${
                selectedLetter === letter
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Unit Selector */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="font-semibold text-slate-500">Filtrar por unidad:</span>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value as any)}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="ALL">Todas las unidades ({GLOSSARY_TERMS.length} términos)</option>
            {DIDACTIC_UNITS.map(u => (
              <option key={u.topicId} value={u.topicId}>
                {u.id.replace('unit-', 'Unidad ')}: {u.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="space-y-4">
        <div className="text-xs font-semibold text-slate-500">
          Mostrando {filteredTerms.length} términos definidos
        </div>

        {filteredTerms.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500">No se encontraron términos que coincidan con la búsqueda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTerms.map((t) => {
              const unit = DIDACTIC_UNITS.find(u => u.topicId === t.topicId);
              return (
                <div
                  key={t.term}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-800 transition"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">
                        {t.term}
                      </h3>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        {t.topicId}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {t.definition}
                    </p>

                    <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs">
                      <span className="font-bold text-slate-600 dark:text-slate-400 block mb-0.5">
                        Ejemplo aplicado a salud / medicina:
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 italic">
                        {t.example}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                    {/* Related terms */}
                    {t.relatedTerms.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-[11px] text-slate-400">Relacionados:</span>
                        {t.relatedTerms.map(rt => (
                          <button
                            key={rt}
                            onClick={() => setSearchQuery(rt)}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition"
                          >
                            {rt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Source and link */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span title={t.source} className="line-clamp-1">
                        Fuente: {t.source}
                      </span>
                      {unit && onNavigateToUnit && (
                        <button
                          onClick={() => onNavigateToUnit(unit.id)}
                          className="shrink-0 inline-flex items-center gap-0.5 text-indigo-600 dark:text-indigo-400 font-bold hover:underline ml-2"
                        >
                          Ir a {unit.id.replace('unit-', 'U-')}
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
