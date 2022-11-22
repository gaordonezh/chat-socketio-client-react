import ReactDOM from "react-dom/client";
import WebSocketProvider from "./context/WebSocketContext";
import GlobalStyles from "./theme/GlobalStyles";
import ThemeConfig from "./theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeConfig>
    <GlobalStyles />
    <WebSocketProvider>
      <App />
    </WebSocketProvider>
  </ThemeConfig>
);
