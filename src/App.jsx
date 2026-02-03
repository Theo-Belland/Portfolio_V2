import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MaintenancePage from "./pages/MaintenancePage";
import DashboardAdmin from "./pages/Admin";
import Navbar from "./Components/Navbar";
import "./App.scss";



export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un loader pendant 1.5s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <AppProvider>
      <Router>
        <Navbar />
        <div className="with-navbar">
          <Routes>
          {/* Pages publiques */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/maintenance" element={<MaintenancePage />} />

          {/* Page admin protégée (fictive) */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <DashboardAdmin />
            </ProtectedRoute>
          } />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}
