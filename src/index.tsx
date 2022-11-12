import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ThemeProvider } from "theme-ui";
import App from "./App";
import theme from "./theme";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
