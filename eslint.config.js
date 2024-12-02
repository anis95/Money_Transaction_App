const { defineConfig } = require("eslint-define-config");
const typescriptParser = require("@typescript-eslint/parser");
const eslintPluginReact = require("eslint-plugin-react");
const eslintPluginTypescript = require("@typescript-eslint/eslint-plugin");
const eslintPluginReactNative = require("eslint-plugin-react-native");

module.exports = defineConfig([
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        es6: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: eslintPluginReact,
      "@typescript-eslint": eslintPluginTypescript,
      "react-native": eslintPluginReactNative,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "no-unused-vars": "off",
      "no-console": "off",
    },
    files: ["**/*.{ts,tsx}"],
  },
]);
