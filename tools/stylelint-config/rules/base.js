export default {
  rules: {
    'color-hex-alpha': 'never',
    'color-hex-length': 'long',
    'color-named': 'never',
    'declaration-no-important': true,
    'declaration-property-value-no-unknown': null,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': ['numeric', {
      ignore: ['relative'],
    }],
    'max-nesting-depth': [7, {
      ignore: [
        'blockless-at-rules',
        'pseudo-classes',
      ],
    }],
    'media-feature-name-value-no-unknown': true,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'selector-max-compound-selectors': 99,
    'selector-max-id': 0,
    'selector-max-universal': 2,
  },
};
