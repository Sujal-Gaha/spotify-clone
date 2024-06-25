import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        mainColour: "#1ED760",
        sectionColour: "#191919",
        lessFocusColour: "#B3B3B3",
        buttonColour: "#232323",
        smallerSectionColour: "#242424",
        activeSmallerSectionColour: "#3E3E3E",
        hoverSmallerSectionColour: "#3E3E3E",
        appBlack: "#0F0F0F",
        profileContainerColour: "#509BF5",
        playlistBarColour: "#2A2A2A",
        signInAndLogInTextColour: "#D9DADC",
        premiumBannerColour: "#1D75DE",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
