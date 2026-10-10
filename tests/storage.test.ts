import { describe, it, expect } from 'vitest';
import { 
  DEFAULT_USER_STATE, 
  exportUserStateJson, 
  importUserStateJson 
} from '../src/utils/storage';
import { UserState } from '../src/types';

describe('Persistencia y Validación de Esquema (storage.ts)', () => {
  it('debe exportar un objeto JSON válido con la estructura de UserState', () => {
    const testState: UserState = {
      ...DEFAULT_USER_STATE,
      completedUnitIds: ['unit-A', 'unit-B'],
      answers: {
        'Q-MOD-A-01': {
          questionId: 'Q-MOD-A-01',
          selectedAnswer: 'opt-c',
          isCorrect: true,
          timestamp: 1710000000,
          attempts: 1,
        },
      },
    };

    const exported = exportUserStateJson(testState);
    expect(typeof exported).toBe('string');
    const parsed = JSON.parse(exported);
    expect(parsed.version).toBe(1);
    expect(parsed.completedUnitIds).toEqual(['unit-A', 'unit-B']);
    expect(parsed.answers['Q-MOD-A-01'].isCorrect).toBe(true);
  });

  it('debe importar y sanitizar un JSON de respaldo válido', () => {
    const validJson = JSON.stringify({
      version: 1,
      completedUnitIds: ['unit-A'],
      answers: {},
      examAttempts: [],
      notes: { 'unit-A': 'Anotación de prueba' },
      favorites: ['unit-A'],
      flashcardMastery: { 'fc-a-01': 'learned' },
      settings: {
        fontSize: 'large',
        theme: 'dark',
        reduceMotion: true,
        studySessionMinutes: 25,
      },
    });

    const result = importUserStateJson(validJson);
    expect(result.success).toBe(true);
    expect(result.state).toBeDefined();
    expect(result.state?.completedUnitIds).toEqual(['unit-A']);
    expect(result.state?.notes['unit-A']).toBe('Anotación de prueba');
    expect(result.state?.settings.theme).toBe('dark');
  });

  it('debe rechazar JSONs inválidos, corruptos o con versiones incompatibles', () => {
    // Malformed JSON string
    const malformed = '{"version": 1, unclosed';
    const res1 = importUserStateJson(malformed);
    expect(res1.success).toBe(false);

    // Incompatible schema version
    const wrongVersion = JSON.stringify({ version: 99, completedUnitIds: [] });
    const res2 = importUserStateJson(wrongVersion);
    expect(res2.success).toBe(false);
    expect(res2.error).toContain('Versión de esquema no compatible');

    // Invalid non-array completedUnitIds
    const badStructure = JSON.stringify({ version: 1, completedUnitIds: 'invalid', answers: {} });
    const res3 = importUserStateJson(badStructure);
    expect(res3.success).toBe(false);
  });
});
