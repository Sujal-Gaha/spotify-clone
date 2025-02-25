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
        mainColour: '#1ED760',
        sectionColour: '#191919',
        lessFocusColour: '#B3B3B3',
        buttonColour: '#232323',
        smallerSectionColour: '#242424',
        activeSmallerSectionColour: '#3E3E3E',
        hoverSmallerSectionColour: '#3E3E3E',
        appBlack: '#0F0F0F',
        profileContainerColour: '#509BF5',
        playlistBarColour: '#2A2A2A',
        signInAndLogInTextColour: '#D9DADC',
        premiumBannerColour: '#1D75DE',
      },
    },
  },
  plugins: [],
};
