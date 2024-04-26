import js from '@eslint/js'
import { configs, rules } from 'eslint-plugin-wdio'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: configs.recommended.globals,
    },
    plugins: {
      wdio: { rules },
    },
    rules: {
      'wdio/await-expect': 'error',
      'wdio/no-debug': 'error',
      'wdio/no-pause': 'error',
    },
  },
]
