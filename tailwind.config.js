const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,mdx}'
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
      backgroundColor: ({ theme }) => ({
        primary: theme('colors.blue[500]'),
      }),
      textColor: ({ theme }) => ({
        primary: theme('colors.blue[500]'),
      }),
      typography: ({ theme }) => ({
        neutral: {
          css: {
            '--tw-prose-pre-bg': theme('colors.monokai[900]'),
          },
        },
      }),
      boxShadow: ({ theme }) => ({
        'btn-primary': `${theme(
          'colors.blue[600]/20'
        )} 0px 1px 1px 0px inset, ${theme(
          'colors.blue[600]/20'
        )} 0px 2px 0px 0px`,
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
