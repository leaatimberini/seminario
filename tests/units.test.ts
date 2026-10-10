import { describe, it, expect } from 'vitest';
import { ALL_UNITS } from '../src/data/units';
import { ALL_QUESTIONS } from '../src/data/questions';

describe('Unidades Didácticas (A a I) — Cumplimiento de los 11 Momentos Pedagógicos', () => {
  it('debe contener exactamente las 9 unidades canónicas (unit-A a unit-I)', () => {
    expect(ALL_UNITS.length).toBe(9);
    const expectedIds = [
      'unit-a', 'unit-b', 'unit-c', 'unit-d', 'unit-e', 
      'unit-f', 'unit-g', 'unit-h', 'unit-i'
    ];
    expect(ALL_UNITS.map(u => u.id)).toEqual(expectedIds);
  });

  it('cada unidad debe implementar la secuencia pedagógica completa sin campos vacíos', () => {
    const questionIds = new Set(ALL_QUESTIONS.map(q => q.id));

    ALL_UNITS.forEach((unit) => {
      // 1. Definición clara
      expect(unit.clearDefinition.trim().length).toBeGreaterThan(30);

      // 2. Explicación cotidiana
      expect(unit.everydayExplanation.trim().length).toBeGreaterThan(30);

      // 3. Analogía con límites/salvedad
      expect(unit.analogy.metaphor.trim().length).toBeGreaterThan(10);
      expect(unit.analogy.explanation.trim().length).toBeGreaterThan(20);
      expect(unit.analogy.caveat.trim().length).toBeGreaterThan(15);

      // 4. Microhistoria situada
      expect(unit.microStory.vignettes.length).toBeGreaterThanOrEqual(3);
      unit.microStory.vignettes.forEach(v => {
        expect(v.speaker).toBeTruthy();
        expect(v.dialogue.length).toBeGreaterThan(10);
        expect(v.altText.length).toBeGreaterThan(10);
      });

      // 5. Ejemplos resueltos con desglose y takeaway
      expect(unit.workedExamples.length).toBeGreaterThanOrEqual(1);
      unit.workedExamples.forEach(ex => {
        expect(ex.title.length).toBeGreaterThan(5);
        expect(ex.text.length).toBeGreaterThan(30);
        expect(ex.annotations.length).toBeGreaterThanOrEqual(1);
        expect(ex.analysisTakeaway.length).toBeGreaterThan(15);
      });

      // 6. Errores frecuentes
      expect(unit.commonMistakes.length).toBeGreaterThanOrEqual(2);
      unit.commonMistakes.forEach(m => {
        expect(m.mistake.length).toBeGreaterThan(5);
        expect(m.correction.length).toBeGreaterThan(10);
        expect(m.whyItHappens.length).toBeGreaterThan(10);
      });

      // 7. Resumen de bolsillo
      expect(unit.pocketSummary.coreConcept.length).toBeGreaterThan(15);
      expect(unit.pocketSummary.quickRecognitionClue.length).toBeGreaterThan(15);
      expect(unit.pocketSummary.fatalTrapToAvoid.length).toBeGreaterThan(15);

      // 8. Flashcards activas
      expect(unit.flashcards.length).toBeGreaterThanOrEqual(3);
      unit.flashcards.forEach(fc => {
        expect(fc.front.length).toBeGreaterThan(5);
        expect(fc.back.length).toBeGreaterThan(15);
      });

      // 9, 10, 11. Ejercicios guiados, independientes y active recall vinculados a reactivos válidos
      expect(questionIds.has(unit.guidedExerciseId)).toBe(true);
      expect(questionIds.has(unit.independentExerciseId)).toBe(true);
      expect(questionIds.has(unit.activeRecallExerciseId)).toBe(true);
    });
  });
});
