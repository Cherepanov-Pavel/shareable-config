import baseConfig from './tools/stylelint-config/config.js';

const stylelintConfig = {
  extends: [baseConfig],
  // Можно добавить другие опции stylelint, например:
  // rules: { ... }
};

export function override() {
  // Пример: отключить правило color-no-invalid-hex
  // stylelintConfig.rules = {
  //   ...(stylelintConfig.rules || {}),
  //   'color-no-invalid-hex': null,
  // };

  // Пример: добавить ещё один конфиг
  // stylelintConfig.extends.push('stylelint-config-recommended');
}
override();

export default stylelintConfig;
