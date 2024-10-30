import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import axios from "axios";
import "./App.css";
import { GetUserURL } from "./api/apiRoutes";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const router = useRoutes(routes);

  const login = (token, user) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(user);
    localStorage.setItem("user", JSON.stringify({ token }));
    console.log("login function is here",user)
  };

  const logout = () => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  };
  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    if (localStorageUser) {
      axios
        .get(
          GetUserURL,

          {
            headers: {
              Authorization: `Bearer ${localStorageUser.token}`,
            },
          }
        )
        .then((res) => {
          setIsLoggedIn(true);
          setUserInfos(res.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}
