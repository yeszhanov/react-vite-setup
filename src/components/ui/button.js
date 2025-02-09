import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    color: "red",
    borderColor: "green",
    borderWidth: "6px",
    bg: "blue",
  },
  variants: {
    visual: {
      solid: { bg: "200", color: "blue" },
      outline: { bg: "yellow", borderWidth: "6px", borderColor: "red" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "",
  },
});
