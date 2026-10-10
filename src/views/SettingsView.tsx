import React, { useRef, useState } from 'react';
import { UserState } from '../types';
import { exportUserStateJson, importUserStateJson, DEFAULT_USER_STATE } from '../utils/storage';
import { 
  Settings, 
  Moon, 
  Sun, 
  Type, 
  Download, 
  Upload, 
  RotateCcw, 
  ShieldCheck, 
  Check, 
  AlertTriangle,
  Clock,
  Sparkles
} from 'lucide-react';

interface SettingsViewProps {
  userState: UserState;
  onUpdateSettings: (settings: Partial<UserState['settings']>) => void;
  onImportState: (newState: UserState) => void;
  onResetState: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  userState,
  onUpdateSettings,
  onImportState,
  onResetState,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleExportJson = () => {
    const jsonStr = exportUserStateJson(userState);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Seminario_UNLaM_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importUserStateJson(content);
      if (res.success && res.state) {
        onImportState(res.state);
        setImportStatus({ success: true, message: '¡Copia de seguridad restaurada con éxito!' });
      } else {
        setImportStatus({ success: false, message: res.error || 'Archivo inválido.' });
      }
    };
    reader.readAsText(file);
    // Reset input
    e.target.value = '';
  };

  const handleResetConfirm = () => {
    if (window.confirm('¿Estás seguro de que deseás reiniciar todo tu progreso? Se borrarán tus respuestas, notas y simulacros guardados.')) {
      onResetState();
      alert('Se han restablecido todos los datos locales.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 mb-2">
          <Settings className="w-3.5 h-3.5" />
          Preferencias del sistema
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Configuración y Accesibilidad
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
          Personalizá el tamaño de letra, el contraste de color, la reducción de movimiento y gestioná tus copias de respaldo locales.
        </p>
      </div>

      {/* Accessibility & Visual Settings */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Type className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          Accesibilidad y Visualización (WCAG 2.2 AA)
        </h2>

        {/* Font size */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">Tamaño de tipografía</div>
            <p className="text-xs text-slate-500">Escala de texto para facilitar la lectura prolongada</p>
          </div>
          <div className="flex items-center gap-2">
            {(['normal', 'large', 'xl'] as const).map((size) => (
              <button
                key={size}
                onClick={() => onUpdateSettings({ fontSize: size })}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
                  userState.settings.fontSize === size
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {size === 'normal' ? 'Estándar (100%)' : size === 'large' ? 'Grande (115%)' : 'Muy Grande (130%)'}
              </button>
            ))}
          </div>
        </div>

        {/* Theme mode */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">Tema de contraste</div>
            <p className="text-xs text-slate-500">Modo claro para entornos iluminados o modo oscuro para descanso visual</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateSettings({ theme: 'light' })}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition border ${
                userState.settings.theme === 'light'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              Claro
            </button>
            <button
              onClick={() => onUpdateSettings({ theme: 'dark' })}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition border ${
                userState.settings.theme === 'dark'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              Oscuro
            </button>
          </div>
        </div>

        {/* Reduced motion */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">Reducción de movimiento</div>
            <p className="text-xs text-slate-500">Desactiva transiciones y animaciones para evitar fatiga visual o mareos</p>
          </div>
          <button
            onClick={() => onUpdateSettings({ reduceMotion: !userState.settings.reduceMotion })}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
              userState.settings.reduceMotion
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            {userState.settings.reduceMotion ? 'Activado (Sin animaciones)' : 'Desactivado (Estándar)'}
          </button>
        </div>

        {/* Study session duration */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">Duración de sesión de estudio</div>
            <p className="text-xs text-slate-500">Meta recomendada para el temporizador de la cabecera</p>
          </div>
          <div className="flex items-center gap-2">
            {[15, 25, 45, 60].map((mins) => (
              <button
                key={mins}
                onClick={() => onUpdateSettings({ studySessionMinutes: mins })}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                  userState.settings.studySessionMinutes === mins
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {mins} min
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Data Storage & Backup Management */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Persistencia Local y Respaldo de Datos
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Esta aplicación opera 100% offline y almacena tu progreso exclusivamente en la memoria local de tu dispositivo (localStorage). Ningún dato personal es transmitido a servidores externos ni requiere credenciales de acceso.
          </p>
        </div>

        {/* Status alert */}
        {importStatus && (
          <div className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
            importStatus.success
              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
              : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
          }`}>
            {importStatus.success ? <Check className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
            <span>{importStatus.message}</span>
          </div>
        )}

        {/* Buttons for Export / Import */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={handleExportJson}
            className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 text-left transition space-y-2 group"
          >
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              <Download className="w-4 h-4" />
              Exportar Copia de Seguridad
            </div>
            <p className="text-xs text-slate-500">
              Descargá un archivo .json con todas tus respuestas, notas personales y notas de simulacros para resguardar tu avance.
            </p>
          </button>

          <div>
            <input
              type="file"
              ref={fileInputRef}
              accept=".json"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 text-left transition space-y-2 group"
            >
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                <Upload className="w-4 h-4" />
                Restaurar desde Archivo JSON
              </div>
              <p className="text-xs text-slate-500">
                Cargá un archivo de respaldo previo para continuar tu preparación en otro dispositivo o navegador.
              </p>
            </button>
          </div>
        </div>

        {/* Reset All */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-rose-600 dark:text-rose-400">Zona de reinicio</div>
            <p className="text-[11px] text-slate-400">Borra todo el progreso acumulado y vuelve a los valores iniciales</p>
          </div>
          <button
            onClick={handleResetConfirm}
            className="px-4 py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 font-bold text-xs transition inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar progreso
          </button>
        </div>
      </div>
    </div>
  );
};
