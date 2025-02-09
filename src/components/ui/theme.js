import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react";
import { buttonRecipe } from "@/components/ui/button";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Arial', sans-serif` },
      },
      colors: {
        50: "#dd0808",
        100: "#D3C6F0",
        200: "#B7A2E7",
        300: "#9B7DDE",
        400: "#dd0808",
        500: "#6334CB",
        600: "#4F2AA2",
        700: "#3B1F7A",
        800: "#281551",
        900: "#140111",
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
});
