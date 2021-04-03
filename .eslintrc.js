module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        // 'eslint:recommended',
        // 'plugin:react/recommended',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        'import',
    ],
    'rules': {
        'semi': ['off'],
        'quotes': ['error', 'single'],
        'no-dupe-keys': 'error',
        'no-duplicate-imports': ['error', { 'includeExports': true }],
        // 'import/default': 2,
        // 'import/export': 2,
    }
};
