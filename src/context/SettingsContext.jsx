import { useState, createContext } from "react";

export const SettingsContext = createContext({
  settings: {},
  setSettings: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    limit: 5,
    difficulty: "easy",
  });
  const value = { settings, setSettings };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
