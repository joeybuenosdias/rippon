module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    plugins: [
        "@typescript-eslint",
        "react-hooks"
    ],
    // https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser/64488474#64488474
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [
                "plugin:react/recommended",
                // https://typescript-eslint.io/rules/
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "prettier",
            ],
            rules: {
                "@typescript-eslint/comma-dangle": ["error"],
                "@typescript-eslint/explicit-function-return-type": ["error"]
            }
        }
    ],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off"
    },
    settings: {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    ignorePatterns: [".eslintrc.js"]
}