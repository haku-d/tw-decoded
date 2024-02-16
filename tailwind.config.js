const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        monokai: {
          900: '#272822',
        },
      },
      typography: ({ theme }) => ({
        neutral: {
          css: {
            '--tw-prose-pre-bg': theme('colors.monokai[900]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
