import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  GraduationCap, 
  Layers, 
  Bookmark, 
  Settings, 
  Info,
  Sun,
  Moon,
  Type
} from 'lucide-react';
import { UserState } from '../types';

interface HeaderProps {
  userState: UserState;
  onUpdateSettings: (newSettings: Partial<UserState['settings']>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  userState,
  onUpdateSettings,
  activeTab,
  setActiveTab,
}) => {
  const { theme, fontSize } = userState.settings;

  const cycleFontSize = () => {
    const nextSize = fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'xl' : 'normal';
    onUpdateSettings({ fontSize: nextSize });
  };

  const toggleTheme = () => {
    onUpdateSettings({ theme: theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button 
          onClick={() => setActiveTab('inicio')}
          className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 rounded-lg p-1"
          aria-label="Ir al inicio de Seminario UNLaM"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-unlam-700 to-unlam-900 flex items-center justify-center text-white font-bold shadow-md shadow-unlam-900/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 dark:text-slate-100 tracking-tight text-lg">
                Seminario UNLaM
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                Medicina
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
              Comprensión y Producción de Textos
            </p>
          </div>
        </button>

        {/* Global Controls & Status */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Quick study session pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Sesión: {userState.settings.studySessionMinutes} min</span>
          </div>

          {/* Font Size Toggle */}
          <button
            onClick={cycleFontSize}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 transition-colors"
            title={`Tamaño de texto: ${fontSize}. Clic para cambiar`}
            aria-label={`Cambiar tamaño de texto. Actual: ${fontSize}`}
          >
            <div className="flex items-center gap-0.5">
              <Type className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">{fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A++'}</span>
            </div>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 transition-colors"
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
        </div>
      </div>
    </header>
  );
};
