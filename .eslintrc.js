module.exports = {
    root:true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "curly":1,
        "vars-on-top":1,
        "array-element-newline":1,
        "array-bracket-spacing":1,
        "array-bracket-newline":1,
        "block-spacing":1,
        "brace-style":2,
        "camelcase":1,
        "jsx-quotes":[1, "prefer-single"],
        "prefer-destructuring": 1
    }
};