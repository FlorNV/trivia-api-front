import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QuestionsProvider } from "./context/QuestionsContext";
import { SettingsProvider } from "./context/SettingsContext";
import { UserProvider } from "./context/UserContext";
import "./sass/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <SettingsProvider>
        <QuestionsProvider>
          <App />
        </QuestionsProvider>
      </SettingsProvider>
    </UserProvider>
  </React.StrictMode>
);
