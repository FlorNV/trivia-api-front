import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRouter from "./routers/PrivateRouter";
import PublicRouter from "./routers/PublicRouter";

const App = () => {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, [setCurrentUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<PrivateRouter />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
