module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  plugins: ["wdio"],
  extends: ["eslint:recommended", "plugin:wdio/recommended", "prettier"],
  env: {
    node: true,
    es6: true,
  },
  globals: {
    browser: true,
    driver: true,
    document: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
