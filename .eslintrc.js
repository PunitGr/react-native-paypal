module.exports = {
    extends: [
        'airbnb',
        'plugin:flowtype/recommended'
    ],
    plugins: [
        'flowtype'
    ],
    rules: {
        indent: 0,
        'semi': ['warn', 'always'],
        'comma-dangle': ['warn', 'always-multiline'],
        'no-undefined': ['warn'],
        'eol-last': ['warn', 'always'],
        'jsx-quotes': ['warn', 'prefer-double'],
        'comma-spacing': ['warn', { 'before': false, 'after': true }],
        'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
        'react/require-default-props': ['off'],
        'react/default-props-match-prop-types': ['off'],
        'react/jsx-boolean-value': ['never'],
        'no-unused-expressions': ['error', { 'allowTaggedTemplates': true }],
        'flowtype/semi': ['error', 'always'],
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-filename-extension': 0,
        "react/prop-types": ['off']
    },
    "settings": {
            "import/core-modules": ["src"],
            "import/resolver": {
            "node": {
                "moduleDirectory": ["./", "node_modules"]
            }
        }
    },
    "globals": {
        "Generator": true
    }
};