import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeSelection from "../components/ThemeSelection";

const ThemeSelectionPage: React.FC = () => {
  const navigate = useNavigate();

  const themes = ["Tema Tropical", "Tema Clássico", "Tema Infantil", "Tema Moderno"];

  const handleThemeSelect = (theme: string) => {
    console.log(`Tema selecionado: ${theme}`); // Opcional: salvar no contexto global ou estado
    navigate("/home"); // Redireciona para a página de orçamento
  };

  return <ThemeSelection themes={themes} onThemeSelect={handleThemeSelect} />;
};

export default ThemeSelectionPage;