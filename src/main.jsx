import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import ProviderApp from "./app/ProviderApp.jsx";
import '../src/core/utility/Bilingual/I18n.jsx';
// import './i18n';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderApp>
      <App />
    </ProviderApp>
  </StrictMode>
);