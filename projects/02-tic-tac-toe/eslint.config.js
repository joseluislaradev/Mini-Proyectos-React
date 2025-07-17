import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  js.configs.recommended,
  {
    files: ['**/*.jsx', '**/*.js'],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y
    },
    rules: {
      // Reglas recomendadas para React
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",

    },
    settings: {
      react: {
        version: 'detect',
        pragma: 'React', // opcional, usualmente detecta solo con 'version'
        // Lo importante es esta opción para JSX Transform:
        "jsx-runtime": "automatic"
      }
    }

  }
]
