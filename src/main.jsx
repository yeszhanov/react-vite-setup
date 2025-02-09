import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.jsx";
import { ChakraProviders } from "@/components/ui/provider";
import { Provider } from "react-redux";
import { store } from "@/store/store";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProviders>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProviders>
  </StrictMode>
);
