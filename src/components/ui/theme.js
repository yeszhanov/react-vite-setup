import { createSystem, defaultConfig,defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    display: "block",
    bg: "green",
    borderColor: "green"
  },
  variants: {
    visual: {
      solid: { bg: "200", color: "white" },
      outline: {bg: "700", borderWidth: "6px", borderColor: "red" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
})
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
    components: {
      Button: {
        // Базовые стили для всех кнопок
        baseStyle: {
          fontWeight: "bold",
          borderRadius: "md",
        },
        // Определение размеров кнопок
        sizes: {
          md: {
            h: "48px",
            fontSize: "lg",
            px: "32px",
          },
          // Здесь можно добавить другие размеры (sm, lg и т.д.)
        },
        // Варианты оформления кнопок
        variants: {
          solid: {
            bg: "500",         // Используем цвет из токенов (цвет 500)
            color: "500",
            _hover: {
              bg: "600",       // При наведении цвет меняется на 600
            },
          },
          outline: {
            border: "2px solid",
            borderColor: "500", // Рамка с цветом 500
            color: "900",
            _hover: {
              bg: "50",        // При наведении фон становится цветом 50
            },
          },
          // Дополнительные варианты можно добавить здесь
        },
        // Значения по умолчанию для кнопок
        defaultProps: {
          size: "md",
          variant: "solid",
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
});
