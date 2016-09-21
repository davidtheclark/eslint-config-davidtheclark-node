module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node": true,
    "es6": true
  },
  "plugins": [
    "node"
  ],
  "rules": {
    "arrow-parens": ["error", "always"],
    "no-var": "error",
    "prefer-const": "error",
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "computed-property-spacing": ["error", "never"],
    "curly": ["error", "multi-line"],
    "eol-last": "error",
    "eqeqeq": ["error", "smart"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-confusing-arrow": ["error", {"allowParens": false}],
    "no-extend-native": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-spaced-func": "error",
    "no-trailing-spaces": "error",
    "no-unused-vars": "error",
    "no-use-before-define": ["error", "nofunc"],
    "object-curly-spacing": ["error", "always"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "single", "avoid-escape"],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never"}],
    "space-infix-ops": "error",
    "spaced-comment": ["error", "always"],
    "keyword-spacing": ["error", { before: true, after: true }],
    "strict": "error",

    "node/no-unsupported-features": ["error", {"version": 4}],
    "node/no-missing-require": "error"
  }
}
