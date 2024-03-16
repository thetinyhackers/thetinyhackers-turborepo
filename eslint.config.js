const antfu = require('@antfu/eslint-config').default
const perfectionist = require('eslint-plugin-perfectionist')
const sortDestructureKeys = require('eslint-plugin-sort-destructure-keys')

module.exports = antfu(
  {
    ignores: [
      '*.md',
      '**/build',
      '**/dbschema',
      '**/dist',
      '**/dumps/*.json',
      '**/.nuxt',
      '**/.turbo',
      'node_modules',
    ],
  },
  {
    languageOptions: {
      globals: {
        $FPROM: true,
        $crisp: true,
        $nuxt: true,
        chrome: true,
        gapi: true,
        hj: true,
      },
    },
    plugins: {
      perfectionist,
      'sort-destructure-keys': sortDestructureKeys,
    },
    rules: {
      'import/no-mutable-exports': 'off',
      'import/no-unresolved': 'off',
      'import/order': ['error', { alphabetize: { caseInsensitive: true, order: 'asc' }, groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'] }],
      'no-console': 'off',
      'no-control-regex': 'off',
      'no-labels': 'off',
      'no-restricted-globals': 'off', // Fix
      'no-restricted-syntax': 'off',
      'no-throw-literal': 'off', // Fix
      'no-unmodified-loop-condition': 'off', // Fix
      'no-use-before-define': 'off',
      'node/prefer-global/buffer': ['error', 'always'],
      'node/prefer-global/process': ['error', 'always'],
      'padding-line-between-statements': ['error', { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] }, { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] }, { blankLine: 'always', next: 'return', prev: '*' }],
      'perfectionist/sort-array-includes': ['error', { type: 'natural' }],
      'perfectionist/sort-classes': ['error', { groups: ['index-signature', 'static-property', 'private-property', 'property', 'constructor', 'static-method', 'private-method', 'method'], type: 'natural' }],
      'perfectionist/sort-enums': ['error', { type: 'natural' }],
      'perfectionist/sort-exports': ['error', { type: 'natural' }],
      'perfectionist/sort-interfaces': ['error', { type: 'natural' }],
      'perfectionist/sort-maps': ['error', { type: 'natural' }],
      'perfectionist/sort-named-exports': ['error', { type: 'natural' }],
      'perfectionist/sort-object-types': ['error', { type: 'natural' }],
      'perfectionist/sort-union-types': ['error', { type: 'natural' }],
      'prefer-regex-literals': 'off',
      'sort-destructure-keys/sort-destructure-keys': 2,
      'sort-keys': ['error', 'asc', { allowLineSeparatedGroups: true, natural: true }],
      'ts/ban-ts-comment': 'off',
      'ts/ban-ts-ignore': 'off',
      'ts/ban-types': 'off',
      'ts/explicit-member-accessibility': 'off',
      'ts/no-invalid-this': 'off',
      'ts/no-require-imports': 'off',
      'ts/no-shadow': 'off',
      'ts/no-use-before-define': 'off',
      'ts/no-var-requires': 'off',
      'unicorn/filename-case': 'off',
      'vue/attributes-order': ['error', { alphabetical: true, order: ['DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', ['UNIQUE', 'SLOT'], 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT'] }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
      'vue/max-attributes-per-line': ['error', { multiline: { max: 1 }, singleline: { max: 1 } }],
      'vue/padding-line-between-tags': ['error', [{ blankLine: 'always', next: '*', prev: '*' }]],
    },
  },
)
