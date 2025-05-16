import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThemeSelectionPage from "./pages/ThemeSelectionPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redireciona a rota inicial para ThemeSelectionPage */}
        <Route path="/" element={<Navigate to="/theme-selection" replace />} />

        {/* Rota para ThemeSelectionPage */}
        <Route path="/theme-selection" element={<ThemeSelectionPage />} />

        {/* Rota para HomePage */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;