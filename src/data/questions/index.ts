import { Question, TopicId } from '../../types';
import { MODULE_A_QUESTIONS } from './moduleA';
import { MODULE_B_QUESTIONS } from './moduleB';
import { MODULE_C_QUESTIONS } from './moduleC';
import { MODULE_D_QUESTIONS } from './moduleD';
import { MODULE_E_QUESTIONS } from './moduleE';
import { MODULE_F_QUESTIONS } from './moduleF';
import { MODULE_G_QUESTIONS } from './moduleG';
import { MODULE_H_QUESTIONS } from './moduleH';
import { MODULE_I_QUESTIONS } from './moduleI';

export const ALL_QUESTIONS: Question[] = [
  ...MODULE_A_QUESTIONS,
  ...MODULE_B_QUESTIONS,
  ...MODULE_C_QUESTIONS,
  ...MODULE_D_QUESTIONS,
  ...MODULE_E_QUESTIONS,
  ...MODULE_F_QUESTIONS,
  ...MODULE_G_QUESTIONS,
  ...MODULE_H_QUESTIONS,
  ...MODULE_I_QUESTIONS,
];

export const QUESTIONS_BY_ID: Record<string, Question> = ALL_QUESTIONS.reduce((acc, q) => {
  acc[q.id] = q;
  return acc;
}, {} as Record<string, Question>);

export const QUESTIONS_BY_TOPIC: Record<TopicId, Question[]> = {
  'MOD-A': MODULE_A_QUESTIONS,
  'MOD-B': MODULE_B_QUESTIONS,
  'MOD-C': MODULE_C_QUESTIONS,
  'MOD-D': MODULE_D_QUESTIONS,
  'MOD-E': MODULE_E_QUESTIONS,
  'MOD-F': MODULE_F_QUESTIONS,
  'MOD-G': MODULE_G_QUESTIONS,
  'MOD-H': MODULE_H_QUESTIONS,
  'MOD-I': MODULE_I_QUESTIONS,
};

export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS_BY_ID[id];
}

export function getQuestionsByTopic(topicId: TopicId): Question[] {
  return QUESTIONS_BY_TOPIC[topicId] || [];
}
