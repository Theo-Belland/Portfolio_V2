import React from "react";
import { Navigate } from "react-router-dom";
import { useApp } from "../Context/AppContext";

export default function ProtectedRoute({ children }) {
  const { user } = useApp();
  // Ici, on simule une protection : si user.loggedIn est true, accès autorisé
  if (!user || !user.loggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
