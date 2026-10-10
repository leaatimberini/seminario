import React, { useState } from 'react';
import { DIDACTIC_UNITS } from '../data/units';
import { UserState } from '../types';
import { 
  FileText, 
  BookOpen, 
  Download, 
  Trash2, 
  Star, 
  ChevronRight, 
  Sparkles,
  Save
} from 'lucide-react';

interface NotesViewProps {
  userState: UserState;
  onSaveNote: (unitId: string, noteText: string) => void;
  onNavigateToUnit?: (unitId: string) => void;
}

export const NotesView: React.FC<NotesViewProps> = ({
  userState,
  onSaveNote,
  onNavigateToUnit,
}) => {
  const [editingUnitId, setEditingUnitId] = useState<string | null>(null);
  const [editNoteText, setEditNoteText] = useState<string>('');

  const unitsWithNotes = DIDACTIC_UNITS.filter(u => userState.notes[u.id]?.trim());
  const favoriteUnits = DIDACTIC_UNITS.filter(u => userState.favorites.includes(u.id));

  const handleStartEdit = (unitId: string) => {
    setEditingUnitId(unitId);
    setEditNoteText(userState.notes[unitId] || '');
  };

  const handleSaveEdit = (unitId: string) => {
    onSaveNote(unitId, editNoteText);
    setEditingUnitId(null);
  };

  const handleExportAllNotes = () => {
    let output = '# Mis Apuntes de Estudio — Seminario de Comprensión y Producción de Textos UNLaM\n\n';
    output += `Exportado el: ${new Date().toLocaleDateString('es-AR')}\n\n`;

    DIDACTIC_UNITS.forEach(u => {
      const note = userState.notes[u.id];
      if (note?.trim()) {
        output += `## ${u.id.replace('unit-', 'Unidad ')}: ${u.title}\n`;
        output += `${note.trim()}\n\n---\n\n`;
      }
    });

    const blob = new Blob([output], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Apuntes_Seminario_UNLaM_${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 mb-2">
            <FileText className="w-3.5 h-3.5" />
            Cuaderno personal de estudio
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mis Apuntes y Favoritos
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Consolidá tus anotaciones personales tomadas en cada clase y revisá rápidamente las unidades que marcaste como prioritarias.
          </p>
        </div>

        {unitsWithNotes.length > 0 && (
          <button
            onClick={handleExportAllNotes}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition shrink-0"
          >
            <Download className="w-4 h-4" />
            Descargar todos mis apuntes (.md)
          </button>
        )}
      </div>

      {/* Bookmarked units banner */}
      {favoriteUnits.length > 0 && (
        <div className="bg-amber-50/60 dark:bg-amber-950/30 p-5 rounded-2xl border border-amber-200 dark:border-amber-900 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 text-sm font-bold">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Unidades marcadas como prioritarias ({favoriteUnits.length})</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {favoriteUnits.map(u => (
              <button
                key={u.id}
                onClick={() => onNavigateToUnit && onNavigateToUnit(u.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-amber-400 transition"
              >
                <span>{u.title}</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Notes list */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>Anotaciones por unidad</span>
          <span className="text-xs font-mono font-semibold text-slate-500">
            ({unitsWithNotes.length} de {DIDACTIC_UNITS.length} unidades con notas)
          </span>
        </h2>

        {unitsWithNotes.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
            <FileText className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              Todavía no escribiste notas personales
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Al estudiar cada clase en el "Plan de Unidades", podés redactar tus propios resúmenes, dudas o mnemotecnias en el bloque final de apuntes.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {unitsWithNotes.map((u) => {
              const isEditing = editingUnitId === u.id;
              const noteContent = userState.notes[u.id] || '';

              return (
                <div
                  key={u.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {u.topicId}
                      </span>
                      {onNavigateToUnit && (
                        <button
                          onClick={() => onNavigateToUnit(u.id)}
                          className="inline-flex items-center gap-1 text-slate-500 hover:text-indigo-600 font-semibold"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Ir a la clase
                        </button>
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base mt-2">
                      {u.title}
                    </h3>
                  </div>

                  {isEditing ? (
                    <div className="space-y-3">
                      <textarea
                        rows={6}
                        value={editNoteText}
                        onChange={(e) => setEditNoteText(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs font-mono outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingUnitId(null)}
                          className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => handleSaveEdit(u.id)}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs inline-flex items-center gap-1"
                        >
                          <Save className="w-3 h-3" />
                          Guardar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {noteContent}
                    </div>
                  )}

                  {!isEditing && (
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => handleStartEdit(u.id)}
                        className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Editar nota
                      </button>
                      <button
                        onClick={() => onSaveNote(u.id, '')}
                        className="text-slate-400 hover:text-rose-600 transition"
                        title="Borrar nota"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
