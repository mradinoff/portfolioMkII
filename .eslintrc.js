module.exports = {
    "parserOptions": {
    	"parser": "babel-eslint",
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "globals": {
        "require": false,
        "Vue": false,
        "axios": "writable",
        "module": "writable",
        "_": "writable",
    },
    "rules": {
        "no-unused-vars": "error",
        "linebreak-style": "off",
        "no-console": "off",
        "no-restricted-syntax": [2, "WithStatement"],
        "multiline-ternary": "off",
        "indent": ["error", "tab"],
        "quotes": ["error", "single"],
        "camelcase": "off",
        "no-useless-escape": "off",
        "semi": ["error", "always"],
    }
}