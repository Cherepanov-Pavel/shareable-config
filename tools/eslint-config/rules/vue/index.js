import { baseRules } from './base.js';
import { extensionRules } from './extension.js';
import { possibleProblemRules } from './possibleProblems.js';
import { suggestionRules } from './suggestions.js';
import { formattingRules } from './formatting.js';

export const vueRules = {
  ...baseRules,
  ...extensionRules,
  ...possibleProblemRules,
  ...suggestionRules,
  ...formattingRules,
};
