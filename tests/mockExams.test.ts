import { describe, it, expect } from 'vitest';
import { MOCK_EXAMS, getMockExamById } from '../src/data/mockExams';
import { ALL_QUESTIONS } from '../src/data/questions';

describe('Simulacros de Examen Orientativos (3 exámenes de 90 min)', () => {
  it('debe contener exactamente 3 simulacros completos', () => {
    expect(MOCK_EXAMS.length).toBe(3);
    const ids = MOCK_EXAMS.map(e => e.id);
    expect(ids).toEqual(['exam-01', 'exam-02', 'exam-03']);
  });

  it('cada simulacro debe durar 90 minutos y tener un descargo institucional', () => {
    MOCK_EXAMS.forEach(exam => {
      expect(exam.durationMinutes).toBe(90);
      expect(exam.sourceDisclaimer).toContain('orientativo');
    });
  });

  it('cada simulacro debe contener exactamente 15 reactivos existentes en el banco de preguntas', () => {
    const questionIdSet = new Set(ALL_QUESTIONS.map(q => q.id));

    MOCK_EXAMS.forEach(exam => {
      expect(exam.questionIds.length).toBe(15);
      exam.questionIds.forEach(id => {
        expect(questionIdSet.has(id)).toBe(true);
      });
    });
  });

  it('cada simulacro debe incluir texto fuente completo y consigna de producción escrita con rúbrica', () => {
    MOCK_EXAMS.forEach(exam => {
      expect(exam.sourceText.title).toBeTruthy();
      expect(exam.sourceText.author).toBeTruthy();
      expect(exam.sourceText.paragraphs.length).toBeGreaterThanOrEqual(4);

      expect(exam.writtenExercise).toBeDefined();
      expect(exam.writtenExercise?.prompt).toBeTruthy();
      expect(exam.writtenExercise?.sampleModelAnswer.length).toBeGreaterThan(100);
      expect(exam.writtenExercise?.rubric.length).toBeGreaterThanOrEqual(4);

      const totalWeight = exam.writtenExercise?.rubric.reduce((acc, r) => acc + r.weight, 0);
      expect(totalWeight).toBe(10);
    });
  });
});
