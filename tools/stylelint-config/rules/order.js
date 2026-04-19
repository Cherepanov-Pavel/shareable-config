import { propertyGroups } from './property-groups.js';

export default {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        'rules',
        {
          type: 'at-rule',
          name: 'container',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
      ],
      { severity: 'error' },
    ],
    'order/properties-order': [
      propertyGroups.map((group) => {
        return {
          ...group,
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
        };
      }),
      {
        unspecified: 'bottom',
        emptyLineBeforeUnspecified: 'always',
        severity: 'error',
      },
    ],
  },
};
