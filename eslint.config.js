import { defineConfig } from "eslint-define-config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },


  js.configs.recommended,


  ...tseslint.configs.recommended,


  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs["flat/recommended"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },

  {
    rules: {
      "no-console": "warn",
    },
  },
];