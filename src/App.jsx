import React, { useContext, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { SettingsContext } from "./context/SettingsContext";
import { UserContext } from "./context/UserContext";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Play from "./pages/Play";
import Settings from "./pages/Settings";
import PrivateRouter from "./routers/PrivateRouter";
import PublicRouter from "./routers/PublicRouter";

const App = () => {
  const { setCurrentUser } = useContext(UserContext);
  const { settings, setSettings } = useContext(SettingsContext);

  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    const settingsStored = localStorage.getItem("settings");

    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }

    if (settingsStored) {
      setSettings(JSON.parse(settingsStored));
    }
  }, [setCurrentUser, setSettings]);

  return (
    <HashRouter>
      <Routes>
        <Route element={<PublicRouter />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<PrivateRouter />}>
          <Route index element={<Menu />} />
          <Route path="categories" element={<Categories />} />
          <Route path="settings" element={<Settings />} />
          <Route path="play" element={<Play />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
