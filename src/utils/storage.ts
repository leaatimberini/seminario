import { UserState } from '../types';

const STORAGE_KEY = 'seminario_unlam_user_state_v1';

export const DEFAULT_USER_STATE: UserState = {
  version: 1,
  completedUnitIds: [],
  answers: {},
  examAttempts: [],
  notes: {},
  favorites: [],
  flashcardMastery: {},
  settings: {
    fontSize: 'normal',
    theme: 'light',
    reduceMotion: false,
    studySessionMinutes: 15,
  },
};

let inMemoryFallback: UserState | null = null;

export function loadUserState(): UserState {
  if (typeof window === 'undefined') return DEFAULT_USER_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_USER_STATE;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && parsed.version === 1) {
      return {
        ...DEFAULT_USER_STATE,
        ...parsed,
        settings: {
          ...DEFAULT_USER_STATE.settings,
          ...(parsed.settings || {}),
        },
      };
    }
    return DEFAULT_USER_STATE;
  } catch (err) {
    console.warn('No se pudo acceder a localStorage; usando memoria volátil.', err);
    return inMemoryFallback || DEFAULT_USER_STATE;
  }
}

export function saveUserState(state: UserState): boolean {
  if (typeof window === 'undefined') return false;
  inMemoryFallback = state;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (err) {
    console.warn('Fallo al persistir en localStorage:', err);
    return false;
  }
}

export function exportUserStateJson(state: UserState): string {
  return JSON.stringify(state, null, 2);
}

export function importUserStateJson(jsonString: string): { success: boolean; state?: UserState; error?: string } {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') {
      return { success: false, error: 'El archivo no contiene un objeto JSON válido.' };
    }
    if (parsed.version !== 1) {
      return { success: false, error: `Versión de esquema no compatible: ${parsed.version}. Se esperaba versión 1.` };
    }
    if (!Array.isArray(parsed.completedUnitIds)) {
      return { success: false, error: 'Estructura inválida: completedUnitIds debe ser una lista.' };
    }
    if (typeof parsed.answers !== 'object' || parsed.answers === null) {
      return { success: false, error: 'Estructura inválida: answers debe ser un registro.' };
    }

    const cleanState: UserState = {
      version: 1,
      completedUnitIds: parsed.completedUnitIds,
      answers: parsed.answers || {},
      examAttempts: Array.isArray(parsed.examAttempts) ? parsed.examAttempts : [],
      notes: typeof parsed.notes === 'object' && parsed.notes !== null ? parsed.notes : {},
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      flashcardMastery: typeof parsed.flashcardMastery === 'object' && parsed.flashcardMastery !== null ? parsed.flashcardMastery : {},
      settings: {
        fontSize: parsed.settings?.fontSize || 'normal',
        theme: parsed.settings?.theme === 'dark' ? 'dark' : 'light',
        reduceMotion: Boolean(parsed.settings?.reduceMotion),
        studySessionMinutes: Number(parsed.settings?.studySessionMinutes) || 15,
      },
    };

    saveUserState(cleanState);
    return { success: true, state: cleanState };
  } catch (err) {
    return { success: false, error: 'Error al interpretar el archivo JSON. Verificá que no esté dañado.' };
  }
}
