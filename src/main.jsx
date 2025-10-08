import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import LingoContextProvider from "./context/LingoContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LingoContextProvider>
      <App />
    </LingoContextProvider>
  </BrowserRouter>
);
