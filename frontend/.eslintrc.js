module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb',
      'airbnb/hooks',
      'prettier',
      'prettier/react',
      'plugin:testing-library/react',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
      'react',
      'prettier',
      'react-hooks',
      'testing-library',
    ],
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'no-return-await': 'off',
      'prefer-promise-reject-errors': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/no-unused-prop-types': 'off',
      'import/no-duplicates': 'off',
      'no-unused-expressions': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'react/require-default-props': 'off',
      'no-unused-vars': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.js', '.tsx', '.ts'] },
      ],
      'import/prefer-default-export': 'off',
      'react/state-in-constructor': 'off',
      'no-console': ['warn', { allow: ['tron'] }],
      'no-param-reassign': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'react/button-has-type': 'error',
      'jsx-a11y/label-has-associated-control': 'off',
      'react/prefer-stateless-function': 'error',
      'no-nested-ternary': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'no-lone-blocks': 'off',
      'react/forbid-prop-types': 'off',
      camelcase: 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'no-undef': 'off',
      'react/prop-types': 'off',
    },
  
    settings: {
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  };
  