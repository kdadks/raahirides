import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();

  const register = (name, email, password) => {
    // For demo purposes, using localStorage. In production, use Supabase
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === email)) {
      throw new Error("Email already exists");
    }
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
  };

  const login = (email, password) => {
    // For demo purposes, using localStorage. In production, use Supabase
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const userData = { email: user.email, name: user.name };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/members");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  const updateUser = (updatedUserData) => {
    const newUserData = { ...user, ...updatedUserData };
    setUser(newUserData);
    localStorage.setItem("user", JSON.stringify(newUserData));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};