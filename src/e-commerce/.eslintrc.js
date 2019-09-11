module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    "sourceType": "module",
    'ecmaVersion': 2018,
  },
  'plugins': [
    'react',
    "prefer-arrow"
  ],
  'rules': {
    "no-unused-vars": "off",
    "max-len" : "off",
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "arrow-body-style": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": false
      }
    ]
  },
};
