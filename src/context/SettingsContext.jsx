import { useState } from "react";
import { createContext } from "react";

export const SettingsContext = createContext({
  settings: {},
  setSettings: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const value = { settings, setSettings };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
