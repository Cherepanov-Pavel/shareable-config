import { ERROR, OFF } from '../severity.js';

export const compatibilityRules = {
  'constructor-super': OFF, // ts(2335) & ts(2377)
  'getter-return': OFF, // ts(2378)
  'no-const-assign': OFF, // ts(2588)
  'no-dupe-args': OFF, // ts(2300)
  'no-dupe-class-members': OFF, // ts(2393) & ts(2300)
  'no-dupe-keys': OFF, // ts(1117)
  'no-func-assign': OFF, // ts(2630)
  'no-import-assign': OFF, // ts(2632) & ts(2540)
  'no-new-symbol': OFF, // ts(7009)
  'no-obj-calls': OFF, // ts(2349)
  'no-redeclare': OFF, // ts(2451)
  'no-setter-return': OFF, // ts(2408)
  'no-this-before-super': OFF, // ts(2376) & ts(17009)
  'no-undef': OFF, // ts(2304) & ts(2552)
  'no-unreachable': OFF, // ts(7027)
  'no-unsafe-negation': OFF, // ts(2365) & ts(2322) & ts(2358)
  'no-var': ERROR, // ts transpiles let/const to var, so no need for vars anymore
  'prefer-const': ERROR, // ts provides better types with const
  'prefer-rest-params': ERROR, // ts provides better types with rest args over arguments
  'prefer-spread': ERROR, // ts transpiles spread to apply, so no need for manual apply
};
