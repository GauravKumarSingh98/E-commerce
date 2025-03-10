import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || {};
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const signup = (name, email, password) => {
    if (users[email]) {
      alert("User already exists! Please login.");
      return false;
    }
    setUsers((prevUsers) => ({ ...prevUsers, [email]: { name, password } }));
    setIsAuthenticated(true);
    return true;
  };

  const login = (email, password) => {
    if (users[email] && users[email].password === password) {
      setIsAuthenticated(true);
      return true;
    } else {
      alert("Invalid credentials!");
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
