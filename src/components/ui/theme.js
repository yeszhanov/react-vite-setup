import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    colors: {
      primary: { value: "#ff0000" },
      secondary: { value: "#ff0000" },
    },
    fonts: {
      body: { value: "system-ui, sans-serif" },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "bold",
        backgroundColor:'#ff0000',
        color:'red'
      },
    },
  },
})

export const system = createSystem(defaultBaseConfig, customConfig)