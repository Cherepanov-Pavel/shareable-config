export default {
  rules: {
    /* $-variables */
    'scss/dollar-variable-empty-line-before': ['never', { ignore: 'after-dollar-variable' }],
    // https://gitlab.kadnk.ru/frontend/configs/-/issues/1
    'scss/load-partial-extension': 'always',
  },
};
