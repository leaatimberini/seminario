import React, { useState } from 'react';
import { 
  Home, 
  Map, 
  HelpCircle, 
  GraduationCap, 
  Layers, 
  BookMarked, 
  StickyNote, 
  Info, 
  Settings,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  completedUnitsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, completedUnitsCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainTabs = [
    { id: 'inicio', label: 'Mi Plan', icon: Home },
    { id: 'ruta', label: 'Ruta de Estudio', icon: Map, badge: `${completedUnitsCount}/9` },
    { id: 'practica', label: 'Banco de Preguntas', icon: HelpCircle, badge: '174' },
    { id: 'simulacros', label: 'Prepararme para Rendir', icon: GraduationCap },
    { id: 'tarjetas', label: 'Tarjetas', icon: Layers },
    { id: 'glosario', label: 'Glosario', icon: BookMarked },
    { id: 'notas', label: 'Notas y Favoritos', icon: StickyNote },
    { id: 'fuentes', label: 'Fuentes y Alcance', icon: Info },
    { id: 'ajustes', label: 'Ajustes', icon: Settings },
  ];

  const mobileBottomTabs = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'ruta', label: 'Ruta', icon: Map },
    { id: 'practica', label: 'Práctica', icon: HelpCircle },
    { id: 'simulacros', label: 'Rendir', icon: GraduationCap },
  ];

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation Bar */}
      <nav 
        aria-label="Navegación principal"
        className="hidden lg:block bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-2 overflow-x-auto no-scrollbar">
            {mainTabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 ${
                    isActive 
                      ? 'bg-unlam-700 text-white shadow-sm shadow-unlam-900/20' 
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-slate-100 text-lg">Menú de Estudio</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-1">
                {mainTabs.map(tab => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleSelectTab(tab.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 ${
                        isActive
                          ? 'bg-unlam-700 text-white'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span>{tab.label}</span>
                      </div>
                      {tab.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 text-center">
              Seminario de Textos — Ingreso UNLaM Medicina
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Tab Bar (Accessible, >=44px touch targets) */}
      <nav 
        aria-label="Navegación móvil inferior"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-200 dark:border-slate-800 pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-5 h-16">
          {mobileBottomTabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSelectTab(tab.id)}
                className={`flex flex-col items-center justify-center min-h-[44px] min-w-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 transition-colors ${
                  isActive ? 'text-unlam-700 dark:text-unlam-400 font-bold' : 'text-slate-500 dark:text-slate-400 font-medium'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : ''}`} />
                <span className="text-[10px] mt-1">{tab.label}</span>
              </button>
            );
          })}
          
          {/* Menu button to open the full drawer */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col items-center justify-center min-h-[44px] min-w-[44px] text-slate-500 dark:text-slate-400 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-unlam-600 transition-colors"
            aria-label="Abrir más opciones"
          >
            <Menu className="w-5 h-5" />
            <span className="text-[10px] mt-1">Más</span>
          </button>
        </div>
      </nav>
    </>
  );
};
