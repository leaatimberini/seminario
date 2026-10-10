import { describe, it, expect } from 'vitest';
import { ALL_QUESTIONS } from '../src/data/questions';
import { TopicId } from '../src/types';

describe('Banco de Reactivos de Seminario UNLaM (174 reactivos)', () => {
  it('debe tener al menos 150 preguntas revisadas (total real: 174)', () => {
    expect(ALL_QUESTIONS.length).toBeGreaterThanOrEqual(150);
    expect(ALL_QUESTIONS.length).toBe(174);
  });

  it('todos los IDs de preguntas deben ser únicos y coincidir con el formato Q-MOD-[A-I]-[0-9]{2}', () => {
    const idSet = new Set<string>();
    const idRegex = /^Q-MOD-[A-I]-\d{2}$/;

    ALL_QUESTIONS.forEach((q) => {
      expect(q.id).toMatch(idRegex);
      expect(idSet.has(q.id)).toBe(false);
      idSet.add(q.id);
    });
  });

  it('cada módulo (MOD-A a MOD-I) debe tener al menos 15 preguntas originales', () => {
    const topics: TopicId[] = [
      'MOD-A', 'MOD-B', 'MOD-C', 'MOD-D', 'MOD-E', 
      'MOD-F', 'MOD-G', 'MOD-H', 'MOD-I'
    ];

    topics.forEach((t) => {
      const topicQuestions = ALL_QUESTIONS.filter(q => q.topicId === t);
      expect(topicQuestions.length).toBeGreaterThanOrEqual(15);
    });
  });

  it('cada pregunta debe tener opciones válidas y la respuesta correcta debe existir entre las opciones', () => {
    ALL_QUESTIONS.forEach((q) => {
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const optionIds = q.options.map(o => o.id);
      expect(optionIds).toContain(q.correctAnswer);
    });
  });

  it('cada distractor debe tener una justificación razonada explícita en distractorExplanations', () => {
    ALL_QUESTIONS.forEach((q) => {
      expect(q.distractorExplanations).toBeDefined();
      const distractors = q.options.filter(o => o.id !== q.correctAnswer);
      
      distractors.forEach((dist) => {
        const explanation = q.distractorExplanations?.[dist.id];
        expect(explanation).toBeDefined();
        expect(explanation?.trim().length).toBeGreaterThan(15);
      });
    });
  });

  it('cada pregunta debe contar con un objetivo de aprendizaje y una explicación general sólida', () => {
    ALL_QUESTIONS.forEach((q) => {
      expect(q.learningObjective.trim().length).toBeGreaterThan(10);
      expect(q.explanation.trim().length).toBeGreaterThan(20);
      expect(q.tags.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('la distribución de la posición de la respuesta correcta debe ser variada y no monótona', () => {
    const positionCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
    
    ALL_QUESTIONS.forEach((q) => {
      const idx = q.options.findIndex(o => o.id === q.correctAnswer);
      if (idx in positionCounts) {
        positionCounts[idx] += 1;
      }
    });

    // Verify that the answer is evenly distributed across all 4 option slots
    expect(positionCounts[0]).toBeGreaterThanOrEqual(35);
    expect(positionCounts[1]).toBeGreaterThanOrEqual(35);
    expect(positionCounts[2]).toBeGreaterThanOrEqual(35);
    expect(positionCounts[3]).toBeGreaterThanOrEqual(35);
  });
});
