/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        tabWidth: 4,
        semi: true,
        parser: "typescript",
      },
    },
    {
      files: [
        "**/*.cjs",
        "**/*.js",
        "**/*.mjs",
        "**/*.yaml",
        "**/*.yml",
        "**/*.json",
      ],
      options: {
        tabWidth: 2,
        useTabs: false,
      },
    },
  ],
};

module.exports = config;
