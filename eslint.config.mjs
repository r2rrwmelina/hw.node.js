import {defineConfig} from "eslint/config";
import prettierConfig from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",
      "getter-return": "error",
      "no-var": "warn",
      "no-shadow": "error",
      "prefer-spread": "warn",
      "prefer-rest-params": "warn",
    },
  },
  prettierConfig,
]);
