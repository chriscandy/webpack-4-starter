module.exports = {
    "extends": [
        "standard",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 120,
            }
        ],
    },
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": ["prettier"]
};