import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginReact.configs.flat.recommended, // Рекомендации для React
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Применяем правила к этим файлам
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные браузера (window, document и т.д.)
      },
      ecmaVersion: 2022, // Версия ECMAScript
      sourceType: "module", // Используем модули (import/export)
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
      prettier: pluginPrettier,
    },
    rules: {
      // Правила ESLint
      "react/react-in-jsx-scope": "off", // Отключаем обязательный импорт React в JSX
      "react/prop-types": "off", // Отключаем проверку prop-types
      "prettier/prettier": "error", // Включаем Prettier как правило ESLint

      // React Hooks
      "react-hooks/rules-of-hooks": "error", // Проверяем правила использования хуков
      "react-hooks/exhaustive-deps": "warn", // Проверяем зависимости хуков

      // Доступность
      "jsx-a11y/alt-text": "warn", // Проверяем наличие alt у изображений
      "jsx-a11y/anchor-is-valid": "warn", // Проверяем валидность ссылок
    },
    settings: {
      react: {
        version: "detect", // Автоматически определяем версию React
        // runtime: "automatic",
      },
    },
  },
];
