import { DidacticUnit, TopicId } from '../../types';
import { UNIT_A } from './unitA';
import { UNIT_B } from './unitB';
import { UNIT_C } from './unitC';
import { UNIT_D } from './unitD';
import { UNIT_E } from './unitE';
import { UNIT_F } from './unitF';
import { UNIT_G } from './unitG';
import { UNIT_H } from './unitH';
import { UNIT_I } from './unitI';

export const ALL_UNITS: DidacticUnit[] = [
  UNIT_A,
  UNIT_B,
  UNIT_C,
  UNIT_D,
  UNIT_E,
  UNIT_F,
  UNIT_G,
  UNIT_H,
  UNIT_I,
];

export const DIDACTIC_UNITS: DidacticUnit[] = ALL_UNITS;

export const UNITS_BY_ID: Record<string, DidacticUnit> = ALL_UNITS.reduce((acc, unit) => {
  acc[unit.id] = unit;
  return acc;
}, {} as Record<string, DidacticUnit>);

export const UNITS_BY_TOPIC: Record<TopicId, DidacticUnit> = ALL_UNITS.reduce((acc, unit) => {
  acc[unit.topicId] = unit;
  return acc;
}, {} as Record<TopicId, DidacticUnit>);

export function getUnitById(id: string): DidacticUnit | undefined {
  return UNITS_BY_ID[id];
}

export function getUnitByTopic(topicId: TopicId): DidacticUnit | undefined {
  return UNITS_BY_TOPIC[topicId];
}
