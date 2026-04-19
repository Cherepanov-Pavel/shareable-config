import { compatibilityRules } from './compatibility.js';
import { commonRules } from './common.js';
import { extensionsRules } from './extension.js';

export const tsRules = {
  ...compatibilityRules,
  ...extensionsRules,
  ...commonRules,
};
