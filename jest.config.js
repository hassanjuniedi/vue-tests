// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const config = require(`./jest.${process.env.TEST_CLASS}.config`);

module.exports = {
  "moduleFileExtensions": [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  ...config
};
